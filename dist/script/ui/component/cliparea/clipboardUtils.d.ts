/**
 *
 * Legacy browser API doesn't support async operations, so it is not possible
 * to call indigo, when copy/cut/paste
 */
export function isClipboardAPIAvailable(): boolean;
export function notifyCopyCut(): void;
