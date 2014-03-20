(ns lt.plugins.jsbeautifier
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

(defn current-buffer-content []
  (let [cm (editor/->cm-ed (pool/last-active))]
    (.getRange cm #js {:line 0 :ch 0} #js {:line (.lineCount (editor/->cm-ed (pool/last-active))) :ch 0})))

(defn replace-buffer [string]
  (when-let [ed (pool/last-active)]
    (.replaceRange (editor/->cm-ed ed)
                   string
                   #js {:line 0 :ch 0}
                   #js {:line (.lineCount (editor/->cm-ed (pool/last-active))) :ch 0})))

(defn beautify-string [string]
     (js/js_beautify string))

(defn beautify-editor []
  (let [cm (editor/->cm-ed (pool/last-active))
        cursor (.getCursor cm)
        from #js {:line (.-line cursor) :ch 0}
        dirty (current-buffer-content)
        beautiful (beautify-string dirty)]
    (when (not= dirty beautiful)
      (replace-buffer beautiful))))

(cmd/command {:command :jsbeautify-editor
              :desc "JS-Beautifier: Beautify javascript"
              :exec beautify-editor})

