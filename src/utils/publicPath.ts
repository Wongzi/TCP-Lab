export function publicPath(path: string, parentLevels = 0) {
  const normalizedPath = path.replace(/^\/+/, "");
  return `${"../".repeat(parentLevels)}${normalizedPath}`;
}
