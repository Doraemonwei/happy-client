// Single-user mode: simplified server configuration

const DEFAULT_SERVER_URL = process.env.EXPO_PUBLIC_HAPPY_SERVER_URL || 'https://192.168.31.116:3005';

export function getServerUrl(): string {
    // If explicitly set via environment variable, use that
    if (process.env.EXPO_PUBLIC_HAPPY_SERVER_URL) {
        return process.env.EXPO_PUBLIC_HAPPY_SERVER_URL;
    }
    
    // In web environment, use current origin + /server for reverse proxy
    if (typeof window !== 'undefined') {
        console.log("server url: window.location.origin + '/server'");
        return window.location.origin + '/server';
    }
    
    // Fallback for non-web environments
    return DEFAULT_SERVER_URL;
}

export function setServerUrl(url: string | null): void {
    // Single-user mode: no-op, server URL is fixed
}

export function isUsingCustomServer(): boolean {
    // Single-user mode: always false since server URL is fixed
    return false;
}

export function getServerInfo(): { hostname: string; port?: number; isCustom: boolean } {
    const url = getServerUrl();
    
    try {
        const parsed = new URL(url);
        const port = parsed.port ? parseInt(parsed.port) : undefined;
        return {
            hostname: parsed.hostname,
            port,
            isCustom: false
        };
    } catch {
        // Fallback if URL parsing fails
        return {
            hostname: 'localhost',
            port: 8082,
            isCustom: false
        };
    }
}

export function validateServerUrl(url: string): { valid: boolean; error?: string } {
    // Single-user mode: always valid since server URL is fixed
    return { valid: true };
}