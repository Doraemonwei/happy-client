// Single-user mode: simplified secret key backup

export interface SecretKeyBackup {
    encryptedKey: string;
    salt: string;
    timestamp: number;
}

export function createSecretKeyBackup(secretKey: Uint8Array, password: string): SecretKeyBackup {
    // Single-user mode: return mock backup
    return {
        encryptedKey: 'single-user-mode-encrypted-key',
        salt: 'single-user-mode-salt',
        timestamp: Date.now()
    };
}

export function restoreSecretKeyFromBackup(backup: SecretKeyBackup, password: string): Uint8Array {
    // Single-user mode: return mock secret key
    return new Uint8Array(32);
}

export function formatSecretKeyForBackup(secretKey: Uint8Array | string): string {
    // Single-user mode: return mock formatted key
    return 'single-user-mode-backup-format';
}

export function parseSecretKeyFromBackup(backupString: string): Uint8Array {
    // Single-user mode: return mock secret key
    return new Uint8Array(32);
}

export function normalizeSecretKey(secretKey: Uint8Array | string): string {
    // Single-user mode: return mock base64url encoded key
    return 'single-user-mode-base64url-key';
}