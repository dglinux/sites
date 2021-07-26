import marked from "marked";
export const defaultRenderer = new marked.Renderer();

// Make table horizontally scrollable
export function table(header, body) {
  return (
    '<div class="table-container">' +
    defaultRenderer.table(header, body) +
    "</div>"
  );
}
