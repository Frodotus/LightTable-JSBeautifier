if(!lt.util.load.provided_QMARK_('lt.plugins.jsbeautifier')) {
goog.provide('lt.plugins.jsbeautifier');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
lt.plugins.jsbeautifier.current_buffer_content = (function current_buffer_content(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));return cm.getRange({"ch": 0, "line": 0},{"ch": 0, "line": lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).lineCount()});
});
lt.plugins.jsbeautifier.replace_buffer = (function replace_buffer(string){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.objs.editor.__GT_cm_ed.call(null,ed).replaceRange(string,{"ch": 0, "line": 0},{"ch": 0, "line": lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).lineCount()});
} else
{return null;
}
});
lt.plugins.jsbeautifier.beautify_string = (function beautify_string(string){return js_beautify(string);
});
lt.plugins.jsbeautifier.beautify_editor = (function beautify_editor(){var cm = lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null));var cursor = cm.getCursor();var from = {"ch": 0, "line": cursor.line};var dirty = lt.plugins.jsbeautifier.current_buffer_content.call(null);var beautiful = lt.plugins.jsbeautifier.beautify_string.call(null,dirty);if(cljs.core.not_EQ_.call(null,dirty,beautiful))
{return lt.plugins.jsbeautifier.replace_buffer.call(null,beautiful);
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jsbeautify-editor","jsbeautify-editor",848834500),new cljs.core.Keyword(null,"desc","desc",1016984067),"JS-Beautifier: Beautify javascript",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.jsbeautifier.beautify_editor], null));
}

//# sourceMappingURL=js-beautifier_compiled.js.map