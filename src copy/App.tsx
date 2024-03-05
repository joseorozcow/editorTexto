import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "./App.css";

const App = ({ placeholder }: { placeholder?: string }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(initialContent);

  // Configuración para establecer el color del texto por defecto a negro
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
      buttons:
        "bold,italic,underline,|,font,fontsize,color,|,ul,ol,|,align,|,undo,redo,|,source",
      colorList: [
        "#000000",
        "#333333",
        "#666666",
        "#999999",
        "#cccccc",
        "#ffffff",
      ],
    }),
    [placeholder]
  );

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => setContent(newContent)}
      onChange={() => {}}
      className="jodit-editor"
    />
  );
};

const initialContent = "";

export default App;
