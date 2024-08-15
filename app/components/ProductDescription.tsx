import { JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function ProductDescription({ setJson, json }: {setJson: any, json: JSONContent | null}) {
  const editor = useEditor({
    editable: false,
    extensions: [StarterKit],
    content: json ?? json,
    editorProps: {
      attributes: {
        class: 'focus:outline-none min-h-[150px] prose prose-sm sm:prose-base'
      },
    },
    onUpdate: ({ editor }) => {
      setJson(editor.getJSON());
    },
  })
}