export function removeTags(string) {
  return string.replace(/<[^ ][^>]*>/g, "").replace(/<\/[^>]*>/g, "");
}

export function isLinkRelativeMarkdown(link) {
  return link.endsWith(".md") && !link.startsWith("/") && !link.includes("://");
}
