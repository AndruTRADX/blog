"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { Button } from "./ui/button";

const Tiptap = () => {
  const [tipTapContent, setTipTapContent] = useState<any>();

  const handleEditor = () => {
    const content = editor?.getJSON();
    setTipTapContent(content);
    console.log(tipTapContent);
  };

  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: "<p>Start writing your post</p>",
  });

  return (
    <div>
      <EditorContent editor={editor} className="input-register-form" />
      <Button onClick={handleEditor}>Print content</Button>
    </div>
  );
};

export default Tiptap;
