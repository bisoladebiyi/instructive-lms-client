import type { IInput } from "../../interfaces/Input.interface";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditor from "react-froala-wysiwyg";

const Wysiwyg = ({ id, className, name, label }: IInput) => {
  const config = {
    id: id,
    name: name,
    editorClass: "mt-1",
    height: "300px",
  };

  return (
    <div className={`${className}`}>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <FroalaEditor config={config} tag="textarea" />
    </div>
  );
};

export default Wysiwyg;
