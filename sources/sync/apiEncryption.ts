// Single-user mode: simplified encryption (no actual encryption)
import { AgentState, AgentStateSchema, Metadata, MetadataSchema } from './storageTypes';
import { EncryptionCache } from './encryptionCache';

export class ApiEncryption {

    static async create(secretKeyBase64url: string, cache?: EncryptionCache) {
        // Single-user mode: return simple instance
        const anonID = 'single-user-anon-id';
        return new ApiEncryption(anonID, cache);
    }

    anonID: string;
    secretKey: Uint8Array; // Mock for compatibility
    private cache: EncryptionCache;

    constructor(anonID: string, cache?: EncryptionCache) {
        this.anonID = anonID;
        this.secretKey = new Uint8Array(32); // Mock 32-byte key
        this.cache = cache || new EncryptionCache();
        Object.freeze(this);
    }

    decryptMetadata(sessionId: string, version: number, plainMetadata: string): Metadata | null {
        // Check cache first
        const cached = this.cache.getCachedMetadata(sessionId, version);
        if (cached) {
            return cached;
        }

        // Parse plain JSON metadata
        try {
            const parsed = MetadataSchema.safeParse(JSON.parse(plainMetadata));
            if (!parsed.success) {
                return null;
            }

            // Cache the result
            this.cache.setCachedMetadata(sessionId, version, parsed.data);
            return parsed.data;
        } catch {
            return null;
        }
    }

    decryptAgentState(sessionId: string, version: number, plainAgentState: string | null | undefined): AgentState {
        if (!plainAgentState) {
            return {};
        }

        // Check cache first
        const cached = this.cache.getCachedAgentState(sessionId, version);
        if (cached) {
            return cached;
        }

        // Parse plain JSON agent state
        try {
            const parsed = AgentStateSchema.safeParse(JSON.parse(plainAgentState));
            if (!parsed.success) {
                return {};
            }

            // Cache the result
            this.cache.setCachedAgentState(sessionId, version, parsed.data);
            return parsed.data;
        } catch {
            return {};
        }
    }

    encryptRaw(data: any): string {
        // Single-user mode: return plain JSON
        return JSON.stringify(data);
    }

    decryptRaw(plainContent: string): any | null {
        // Single-user mode: parse plain JSON
        try {
            return JSON.parse(plainContent);
        } catch {
            return null;
        }
    }

    /**
     * Clear cache for a specific session
     */
    clearSessionCache(sessionId: string): void {
        this.cache.clearSessionCache(sessionId);
    }

    /**
     * Clear all cached data
     */
    clearAllCache(): void {
        this.cache.clearAll();
    }

    /**
     * Get cache statistics for debugging
     */
    getCacheStats() {
        return this.cache.getStats();
    }
}