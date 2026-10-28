import type { CapacitorConfig } from '@capacitor/cli';

// Folia iOS 容器配置
// 基于官方示范仓库 chthollyphile/folia-sonnet 的 Android 配置，
// 补充 iOS 部分。

const config: CapacitorConfig = {
  appId: 'top.izuna.foliamajor',
  appName: 'Folia',
  webDir: 'dist',
  loggingBehavior: 'debug',
  backgroundColor: '#09090b',
  server: {
    iosScheme: 'https',
    androidScheme: 'https',
    hostname: 'localhost',
    cleartext: false,
  },
  ios: {
    contentInset: 'always',
    limitsNavigationsToAppBoundDomains: true,
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 900,
      backgroundColor: '#09090b',
      showSpinner: false,
    },
    StatusBar: {
      overlaysWebView: true,
      style: 'LIGHT',
      backgroundColor: '#09090b',
    },
  },
};

export default config;
