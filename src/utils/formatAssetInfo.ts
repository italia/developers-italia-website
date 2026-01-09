export function formatAssetInfo(bytes: number, format: string): string {
  if (!bytes || !format) return "";

  let size: string;
  const extension = format.toUpperCase();

  if (bytes < 1024 * 1024) {
    size = `${(bytes / 1024).toFixed(0)} KB`;
  } else {
    size = `${(bytes / (1024 * 1024)).toFixed(0)} MB`;
  }

  return `(${extension}, ${size})`;
}
