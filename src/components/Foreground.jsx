import React, { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
  const ref = useRef(null)
  const data = [
    {
      desc: "This is a note",
      filesize: "0.7mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is a note",
      filesize: "0.7mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "This is a note",
      filesize: "0.7mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed w-full h-full top-0 left-0 z-[3] gap-5 flex flex-wrap p-5">
      {data.map((item, index) => (
        <Cards data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
