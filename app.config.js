const variant = process.env.APP_ENV || 'development';
const name = {
    development: "Happy (dev)",
    preview: "Happy (preview)",
    production: "Happy"
}[variant];

export default {
    expo: {
        name,
        slug: "happy",
        version: "1.4.1",
        platforms: ["web"],
        orientation: "default",
        scheme: "happy",
        userInterfaceStyle: "automatic",
        web: {
            bundler: "metro",
            output: "single",
            favicon: "./sources/assets/images/favicon.png"
        },
        plugins: [
            [
                "expo-router",
                {
                    root: "./sources/app"
                }
            ],
            "expo-web-browser"
        ],
        experiments: {
            typedRoutes: true
        },
        extra: {
            router: {
                root: "./sources/app"
            }
        },
        owner: "bulkacorp"
    }
};