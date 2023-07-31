import React, { useState } from "react";
import image1 from "../assets/images/image-product-1.jpg"
import image2 from "../assets/images/image-product-2.jpg"
import image3 from "../assets/images/image-product-3.jpg"
import image4 from "../assets/images/image-product-4.jpg"
import ImageSlide from "./ImageSlide";
import ArrowComponent from "./ArrowComponent";
import ImageThumbnail from "./ImageThumbnail";
const imageUrls = [
  image1,
  image2,
  image3,
  image4
]

export default function ImageCarousalComponent({showArrow}) {
    const [imageList, setImageList] = useState(imageUrls);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [currentThumbnail, setCurrentThumbnail] = useState(0);

    const selectThumbnail = (index) => {
      setCurrentIndex(index);
    }

    const leftArrowClickHandler = () => {
      setCurrentIndex((preIndex) => {
        return preIndex === 0 ?  imageList.length-1 : preIndex-1;
      });
    }

    const rightArrowClickHandler = () => {
      setCurrentIndex((preIndex) => {
        return preIndex === imageList.length-1 ?  0 : preIndex+1;
      });
    }
    
    return(
      <>
        <div className='imageCarousal relative  sm:flex sm:flex-col sm:gap-y-8 w-full sm:hover:cursor-pointer'> 
          {showArrow && <ArrowComponent direction="left" clickFunction={leftArrowClickHandler} />}
          <div className="h-96 w-full sm:rounded-xl sm:overflow-hidden">
            <ImageSlide img={imageList[currentIndex]} clickeble={true}></ImageSlide>
          </div>
          {showArrow && <ArrowComponent direction="right" clickFunction={rightArrowClickHandler} />}
          <div className="hidden sm:block">
            <ImageThumbnail images={imageUrls} selectThumbnail={selectThumbnail} currentThumbnail={currentIndex}></ImageThumbnail>
          </div>
        </div>
      </>
    );
}