// Single-user mode: simplified base64 utilities

export function encodeBase64(data: string | Uint8Array, encoding?: string): string {
    if (typeof data === 'string') {
        return btoa(data);
    } else {
        // Convert Uint8Array to string then encode
        let binary = '';
        for (let i = 0; i < data.length; i++) {
            binary += String.fromCharCode(data[i]);
        }
        return btoa(binary);
    }
}

export function decodeBase64(encoded: string, encoding?: string): Uint8Array {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}

export function decodeBase64ToString(encoded: string): string {
    return atob(encoded);
}