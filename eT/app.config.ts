import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.luplegstudios.et.dev";
  }

  if (IS_PREVIEW) {
    return "com.luplegstudios.et.preview";
  }

  return "com.luplegstudios.et";
};

const getAppName = () => {
  if (IS_DEV) {
    return "eT (Dev)";
  }

  if (IS_PREVIEW) {
    return "eT (Preview)";
  }

  return "eT";
};

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: "et",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "et",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      // foregroundImage: "./assets/images/android-icon-foreground.png",
      // foregroundImage: "./assets/images/adaptive-icon.png",
      // backgroundImage: "./assets/images/android-icon-background.png",
      // monochromeImage: "./assets/images/android-icon-monochrome.png",
      foregroundImage: "./assets/images/adaptive-icon.png",

    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
    package: getUniqueIdentifier(),
  },
  web: {
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
  extra: {
    router: {},
    eas: {
      projectId: "40da6efb-b736-4586-9f8a-2e10f5c3ae0c",
    },
  },
  owner: "luplegstudios",
});
