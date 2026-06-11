declare namespace App {
  interface Locals {
    recordId: string;
    lang: SiteLocale;
  }
}

// Plugin BI senza tipi: registra il tech YouTube sull'istanza video.js globale.
declare module "bootstrap-italia/dist/plugins/util/youtube-video" {
  export function initYoutubePlugin(videojs: unknown): void;
}

// Util BI senza tipi: scelte di consenso ai cookie di terze parti salvate
// dall'accept-overlay in localStorage ("bs-ck3").
declare module "bootstrap-italia/dist/plugins/util/cookies" {
  export const cookies: {
    rememberChoice(service: string, remember: boolean): void;
    isChoiceRemembered(service: string): boolean;
    clearAllRememberedChoices(): void;
  };
}
