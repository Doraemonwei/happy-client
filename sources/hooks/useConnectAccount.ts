import * as React from 'react';
import { Modal } from '@/modal';

// Simplified hook for single-user mode - account linking not needed
interface UseConnectAccountOptions {
    onSuccess?: () => void;
    onError?: (error: any) => void;
}

export function useConnectAccount(options?: UseConnectAccountOptions) {
    const [isLoading, setIsLoading] = React.useState(false);

    const processAuthUrl = React.useCallback(async (url: string) => {
        // In single-user mode, no account linking is needed
        console.log('Account linking not needed in single-user mode');
        Modal.alert('Info', 'Account linking is not required in single-user mode', [{ text: 'OK' }]);
        return false;
    }, []);

    const connectAccount = React.useCallback(async () => {
        // In single-user mode, no account linking is needed
        console.log('Account linking not needed in single-user mode');
        Modal.alert('Info', 'Account linking is not required in single-user mode', [{ text: 'OK' }]);
    }, []);

    const connectWithUrl = React.useCallback(async (url: string) => {
        return await processAuthUrl(url);
    }, [processAuthUrl]);

    return {
        connectAccount,
        connectWithUrl,
        isLoading: false, // Always false in single-user mode
        processAuthUrl
    };
}
