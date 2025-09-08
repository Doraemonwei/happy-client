// Simplified parseToken for single-user mode
export function parseToken(token: string): string {
    // In single-user mode, tokens are simpler or we can just return a fixed identifier
    if (token === 'single-user-mode') {
        return 'single-user';
    }
    
    // For backward compatibility, attempt simple parsing
    try {
        if (token.includes('.')) {
            // If it looks like a JWT, try to parse it (simplified)
            const [header, payload, signature] = token.split('.');
            if (payload) {
                // Try to decode the payload as base64
                try {
                    const decoded = atob(payload);
                    const parsed = JSON.parse(decoded);
                    if (parsed.sub && typeof parsed.sub === 'string') {
                        return parsed.sub;
                    }
                } catch (decodeError) {
                    console.log('Failed to parse token payload, using fallback');
                }
            }
        }
        
        // Fallback: return the token itself or a default
        return token || 'single-user';
    } catch (error) {
        console.error('Error parsing token:', error);
        return 'single-user';
    }
}