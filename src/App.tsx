import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import "./style.css";

const App = ({ placeholder }: { placeholder?: string }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(initialContent);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Escribe aquí...",
    }),
    [placeholder]
  );

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "contenido.html";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
        onChange={() => {}}
        className="jodit-editor"
      />
      <div>
        <h2>Código HTML generado:</h2>
        <pre>{content}</pre>
        <button onClick={handleDownload}>Descargar HTML</button>
      </div>
    </div>
  );
};

const initialContent = "";

export default App;
