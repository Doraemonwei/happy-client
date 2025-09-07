// Web-only replacements for removed mobile-specific hooks

export const useCheckScannerPermissions = () => {
    return () => Promise.resolve({ hasPermission: true });
};

interface MultiClickOptions {
    requiredClicks?: number;
    resetTimeout?: number;
}

export const useMultiClick = (callback: () => void, options: MultiClickOptions = {}) => {
    const { requiredClicks = 5, resetTimeout = 1000 } = options;
    let clicks = 0;
    let timer: NodeJS.Timeout;
    
    return () => {
        clicks++;
        clearTimeout(timer);
        
        if (clicks >= requiredClicks) {
            clicks = 0;
            callback();
        } else {
            timer = setTimeout(() => {
                clicks = 0;
            }, resetTimeout);
        }
    };
};

export const useUpdates = () => {
    return {
        updateAvailable: false,
        reloadApp: () => window.location.reload(),
    };
};

export const requestReview = () => {
    // No-op for web
    console.log('Review request not available on web');
};