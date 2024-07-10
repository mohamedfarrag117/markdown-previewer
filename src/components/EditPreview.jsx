import React from "react";

const EditPreview = ({ typing, setTyping }) => {
  const handleTyping = (e) => {
    setTyping(e.target.value);
    console.log(handleTyping);
  };
  return (
    <div className="editor-container pr-56 md:w-1/2 items-center ml-3  ">
      <textarea
        className=" md:w-full md:h-64 w-64 h-36  bg-editorPreviewColor  shadow-black  focus:outline-none  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  "
        id="editor"
        onChange={handleTyping}
        value={typing}
      ></textarea>
    </div>
  );
};

export default EditPreview;
