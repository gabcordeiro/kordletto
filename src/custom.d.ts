// src/custom.d.ts
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "*.ttf";

// Declaração global para o Spotify Web Playback SDK
interface Window {
  Spotify: any;
}
