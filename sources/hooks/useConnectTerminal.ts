import * as React from 'react';
import { Modal } from '@/modal';

// Simplified hook for single-user mode - terminal connection not needed
interface UseConnectTerminalOptions {
    onSuccess?: () => void;
    onError?: (error: any) => void;
}

export function useConnectTerminal(options?: UseConnectTerminalOptions) {
    const [isLoading, setIsLoading] = React.useState(false);

    const processAuthUrl = React.useCallback(async (url: string) => {
        // In single-user mode, no terminal connection is needed
        console.log('Terminal connection not needed in single-user mode');
        Modal.alert('Info', 'Terminal connection is not required in single-user mode', [{ text: 'OK' }]);
        return false;
    }, []);

    const connectTerminal = React.useCallback(async () => {
        // In single-user mode, no terminal connection is needed
        console.log('Terminal connection not needed in single-user mode');
        Modal.alert('Info', 'Terminal connection is not required in single-user mode', [{ text: 'OK' }]);
    }, []);

    const connectWithUrl = React.useCallback(async (url: string) => {
        return await processAuthUrl(url);
    }, [processAuthUrl]);

    return {
        connectTerminal,
        connectWithUrl,
        isLoading: false, // Always false in single-user mode
        processAuthUrl
    };
}
