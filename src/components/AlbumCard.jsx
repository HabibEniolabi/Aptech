import React from "react";

const AlbumCard = ({ image, alt, description, title, links }) => {
  return (
    <div className="flex max-w-full flex-col items-center gap-[50px] text-center md:gap-[70px] lg:flex-row lg:text-left">
      <img
        src={image}
        alt={alt}
        className="w-full max-w-[300px] object-cover md:max-w-[450px]"
      />

      <div className="flex flex-1 flex-col gap-5">
        <div className="flex flex-col gap-[10px] text-[#f1ebdf]">
          <h2 className="font-['Courier_New'] text-[1.4rem] md:text-[1.8rem]">
            {description}
          </h2>

          <h1 className="font-lorimer-stencil text-[2.2rem] font-black leading-tight tracking-[-1px] md:text-[3.5rem]">
            {title}
          </h1>
        </div>

        <div className="mt-[10px] flex flex-wrap justify-center gap-3 lg:justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap border-[3px] border-[#f1ebdf] bg-transparent px-[25px] py-3 text-center text-[18px] font-bold uppercase text-[#f1ebdf] transition duration-300 hover:bg-[#f1ebdf] hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;