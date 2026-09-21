export function unsplash(id: string, width: number, height?: number) {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    q: "75",
    w: String(width),
  });
  if (height) params.set("h", String(height));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}
