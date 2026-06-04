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
