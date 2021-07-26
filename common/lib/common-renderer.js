import marked from "marked";

export default class CommonRenderer extends marked.Renderer {
  // Make table horizontally scrollable
  table(header, body) {
    return (
      '<div class="table-container">' + super.table(header, body) + "</div>"
    );
  }
}
