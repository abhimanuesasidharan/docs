import React from "react";
import { FaFileSignature } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Cards = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className="relative w-60 h-72 rounded-[2rem] bg-zinc-700 text-white p-5 overflow-hidden">
      <FaFileSignature />
      <p className="text-sm mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-3 py-3 px-6">
          <h5>{data.filesize}</h5>
          {data.close ? <IoCloseSharp /> : <IoMdDownload />}
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 flex ${data.tag.tagColor=== "blue" ? "bg-blue-600" : "bg-green-600"} items-center justify-center`}>
            <h3 className="text-md">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
