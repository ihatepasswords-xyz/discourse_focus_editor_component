import { apiInitializer } from "discourse/lib/api";
import putCursorAtEnd from "discourse/lib/put-cursor-at-end";

export default apiInitializer("1.8.0", (api) => {
  api.onAppEvent("composer:open", ({ model }) => {
    if (model.title !== "") {
      scheduleOnce("afterRender", () => {
        putCursorAtEnd(document.querySelector("textarea.d-editor-input"));
      });
    }
  });
});
