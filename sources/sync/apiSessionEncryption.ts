import { RawRecord } from './typesRaw';
import { ApiMessage } from './apiTypes';
import { DecryptedMessage } from './storageTypes';

export class SessionEncryption {
    private sessionId: string;

    constructor(sessionId: string) {
        this.sessionId = sessionId;
        // No encryption setup needed in single-user mode
    }

    decryptMessage(encryptedMessage: ApiMessage | null | undefined): DecryptedMessage | null {
        if (!encryptedMessage) {
            return null;
        }

        // Create the processed message (no caching needed in single-user mode)
        let decryptedMessage: DecryptedMessage;
        
        if (encryptedMessage.content.t === 'encrypted') {
            // In single-user mode, treat "encrypted" messages as plain JSON
            try {
                const parsed = JSON.parse(encryptedMessage.content.c);
                decryptedMessage = {
                    id: encryptedMessage.id,
                    seq: encryptedMessage.seq,
                    localId: encryptedMessage.localId ?? null,
                    content: parsed,
                    createdAt: encryptedMessage.createdAt,
                }
            } catch (error) {
                console.error(`Failed to parse encrypted message as JSON:`, error);
                decryptedMessage = {
                    id: encryptedMessage.id,
                    seq: encryptedMessage.seq,
                    localId: encryptedMessage.localId ?? null,
                    content: null,
                    createdAt: encryptedMessage.createdAt,
                }
            }
        } else if (encryptedMessage.content.t === 'plain') {
            // Handle plain text messages
            try {
                let contentString = encryptedMessage.content.c;
                
                // Check if it looks like base64 and try to decode it first
                if (contentString && /^[A-Za-z0-9+/=]+$/.test(contentString) && contentString.length % 4 === 0) {
                    try {
                        // Try to decode as base64
                        const decoded = atob(contentString);
                        // If successful, use decoded string for JSON parsing
                        contentString = decoded;
                    } catch (decodeError) {
                        // If base64 decode fails, use original string
                        console.log('Base64 decode failed, using original string');
                    }
                }
                
                const parsed = JSON.parse(contentString);
                decryptedMessage = {
                    id: encryptedMessage.id,
                    seq: encryptedMessage.seq,
                    localId: encryptedMessage.localId ?? null,
                    content: parsed,
                    createdAt: encryptedMessage.createdAt,
                }
            } catch (error) {
                console.error(`Failed to parse plain message content:`, error);
                decryptedMessage = {
                    id: encryptedMessage.id,
                    seq: encryptedMessage.seq,
                    localId: encryptedMessage.localId ?? null,
                    content: null,
                    createdAt: encryptedMessage.createdAt,
                }
            }
        } else {
            decryptedMessage = {
                id: encryptedMessage.id,
                seq: encryptedMessage.seq,
                localId: encryptedMessage.localId ?? null,
                content: null,
                createdAt: encryptedMessage.createdAt,
            }
        }

        return decryptedMessage;
    }

    encryptRawRecord(data: RawRecord): string {
        // In single-user mode, just return JSON string (no encryption)
        return JSON.stringify(data);
    }
}