import { auth } from './firebase';
import { trackError } from './analytics';

export interface FirestoreErrorInfo {
  error: string;
  operationType: 'create' | 'update' | 'delete' | 'list' | 'get' | 'write';
  path: string | null;
  authInfo: {
    userId: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerInfo: { providerId: string; displayName: string; email: string; }[];
  }
}

export function handleFirestoreError(error: any, operation: FirestoreErrorInfo['operationType'], path: string | null = null) {
  const isPermissionDenied = error.message?.includes('insufficient permissions') || error.code === 'permission-denied';
  
  if (isPermissionDenied) {
    const user = auth.currentUser;
    const info: FirestoreErrorInfo = {
      error: error.message,
      operationType: operation,
      path: path,
      authInfo: {
        userId: user?.uid || 'anonymous',
        email: user?.email || 'none',
        emailVerified: user?.emailVerified || false,
        isAnonymous: user?.isAnonymous || true,
        providerInfo: user?.providerData.map(p => ({
          providerId: p.providerId,
          displayName: p.displayName || '',
          email: p.email || '',
        })) || [],
      }
    };
    
    console.error("Firestore Permission Denied:", info);
    
    // Log to Google Analytics 4
    try {
      trackError('Firestore Permission Denied', `${operation} failed on path: ${path || 'unknown'}. Message: ${error.message}`, true, error.stack);
    } catch (e) {
      console.warn('Analytics trackError failed:', e);
    }

    throw new Error(JSON.stringify(info));
  }
  
  // Log other general Firestore failures to Google Analytics 4
  try {
    trackError('Firestore Error', `${operation} failed on path: ${path || 'unknown'}. Message: ${error.message || String(error)}`, false, error.stack);
  } catch (e) {
    console.warn('Analytics trackError failed:', e);
  }
  
  throw error;
}
