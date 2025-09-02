// Single-user mode: simplified token storage

export interface AuthCredentials {
    token: string;
    secret: string;
}

export class TokenStorage {
    static async getCredentials(): Promise<AuthCredentials | null> {
        // Single-user mode: always return fixed credentials
        return {
            token: 'single-user-mode',
            secret: 'single-user-mode'
        };
    }

    static async setCredentials(credentials: AuthCredentials): Promise<boolean> {
        // Single-user mode: always successful
        console.log('Single-user mode: credentials set (no-op)');
        return true;
    }

    static async clearCredentials(): Promise<void> {
        // Single-user mode: no-op
        console.log('Single-user mode: credentials cleared (no-op)');
    }
}