export function removeTags(string) {
  return string.replace(/<[^ ][^>]*>/g, "").replace(/<\/[^>]*>/g, "");
}

export function isLinkRelative(link) {
  return !link.startsWith("/") && !link.includes("://");
}

export function isLinkRelativeMarkdown(link) {
  return link.endsWith(".md") && isLinkRelative(link);
}
