"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface SliderProps {
  containerStyles: string;
  btnStyles: string;
}

const SliderBtns: React.FC<SliderProps> = ({ containerStyles, btnStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default SliderBtns;
