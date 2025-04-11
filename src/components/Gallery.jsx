import React, { useState } from "react";
import { X } from "lucide-react";

import gallery1 from "../../public/images/Gallary/1.jpeg";
import gallery2 from "../../public/images/Gallary/2.jpeg";
import gallery3 from "../../public/images/Gallary/3.jpeg";
import gallery4 from "../../public/images/Gallary/4.jpeg";
import gallery5 from "../../public/images/Gallary/5.jpeg";
import gallery6 from "../../public/images/Gallary/6.jpeg";
import gallery7 from "../../public/images/Gallary/7.jpeg";
import gallery8 from "../../public/images/Gallary/8.jpeg";
import gallery9 from "../../public/images/Gallary/9.jpeg";
import gallery10 from "../../public/images/Gallary/10.jpeg";
import gallery11 from "../../public/images/Gallary/11.jpeg";
import gallery12 from "../../public/images/Gallary/12.jpeg";
import gallery13 from "../../public/images/Gallary/13.jpeg";
import gallery14 from "../../public/images/Gallary/14.jpeg";
import gallery15 from "../../public/images/Gallary/15.jpeg";
import gallery16 from "../../public/images/Gallary/16.jpeg";
import gallery17 from "../../public/images/Gallary/17.jpeg";

const Gallery = () => {
  const photos = [
    { id: 1, src: gallery1 },
    { id: 2, src: gallery2 },
    { id: 3, src: gallery3 },
    { id: 4, src: gallery4 },
    { id: 5, src: gallery5 },
    { id: 6, src: gallery6 },
    { id: 7, src: gallery7 },
    { id: 8, src: gallery8 },
    { id: 9, src: gallery9 },
    { id: 10, src: gallery10 },
    { id: 11, src: gallery11 },
    { id: 12, src: gallery12 },
    { id: 13, src: gallery13 },
    { id: 14, src: gallery14 },
    { id: 15, src: gallery15 },
    { id: 16, src: gallery16 },
    { id: 17, src: gallery17 },
  ];

  const [selectPhoto, setSelectPhoto] = useState(null);

  return (
    <>
      <div className="xl:container xl:mx-auto px-3 pt-28 py-10">
        <h2 className="text-center text-3xl md:text-4xl text-headingColor font-bold">
          Our Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-6">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt="photo"
              onClick={() => setSelectPhoto(photo.id)}
              className="h-72 w-72 object-cover rounded-md hover:scale-105 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* show full screen images  */}

      {/* Fullscreen Image Viewer */}
     {selectPhoto && (
         <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
         {/* close button  */}
 
         <div>
           <img
             src={photos.find((photo) => photo.id === selectPhoto).src}
             alt="Full Screen"
             className=" w-96 h-full object-cover rounded-lg shadow-lg"
           />
           <span onClick={() => setSelectPhoto(null)} className="absolute right-5 top-5 bg-white rounded-md cursor-pointer">
             <X />
           </span>
         </div>
       </div>
     )}
    </>
  );
};

export default Gallery;
