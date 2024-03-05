import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const App = ({ placeholder }: { placeholder?: string }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(initialContent);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={() => {}}
    />
  );
};

const initialContent = "";

export default App;