import { useEffect, useRef } from "react";
import Hls from "hls.js";

/**
 * Attaches an HLS stream to a <video> element.
 * Uses hls.js where supported, falls back to native HLS (Safari).
 */
export function useHlsVideo(src: string) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    const play = () => video.play().catch(() => undefined);
    video.addEventListener("canplay", play);

    return () => {
      video.removeEventListener("canplay", play);
      hls?.destroy();
    };
  }, [src]);

  return videoRef;
}
