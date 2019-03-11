interface OS {
  architecture: string;
  family: string;
  toString(): string;
  version: string;
}

interface Platform {
  description: string;
  layout: string;
  manufacturer: string;
  name: string;
  os: OS;
  parse(): Platform;
  prerelease: string;
  product: string;
  toString(): string;
  ua: string;
  version: string;
}

export interface NuxtUserAgent {
  platform: Platform;
  is: {
    readonly chrome: boolean;
    readonly firefox: boolean;
    readonly safari: boolean;
    readonly android: boolean;
    readonly ios: boolean;
    readonly macos: boolean;
    readonly windows: boolean;
  };
}

declare module 'vue/types/vue' {
  export interface Vue {
    $ua: NuxtUserAgent;
  }
}
