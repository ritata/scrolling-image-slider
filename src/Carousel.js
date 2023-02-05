import React, { useRef } from "react";
import "./Carousel.css";

const Carousel = ({ sliders }) => {
  const scrollRef = useRef(null);
  // 定義 item 與間隔寬度
  const gridItemWidth = 280;
  const itemSpacing = 20;

  const move = (vector) => () => {
    // const gridItemWidth = 280 / scrollRef.current.offsetWidth;
    // const itemSpacing = 20 / scrollRef.current.offsetWidth;
    // 算出目前可視寬度可容納幾個 item, 來決定每次移動要看到幾個 item, 這邊預設為要看到完整 item 才算因此取無條件捨去
    const step = Math.trunc(scrollRef.current.offsetWidth / gridItemWidth);
    console.log("step: ", step);
    // const scrollOffset =
    //   scrollRef.current.offsetWidth * gridItemWidth * step +
    //   scrollRef.current.offsetWidth * itemSpacing * step;
    // 算出每按一次要移動的寬度, 即為 item 個數 + 間隔個數
    const scrollOffset = gridItemWidth * step + itemSpacing * step;
    console.log("scrollOffset: ", scrollOffset);
    console.log(
      "scrollRef.current.offsetWidth: ",
      scrollRef.current.offsetWidth
    );
    scrollRef.current.scrollTo({
      behavior: "smooth",
      top: 0,
      left: scrollRef.current.scrollLeft + vector * scrollOffset
    });
  };

  return (
    <div className="sliderContainer">
      <div className="slideButton leftButton" onClick={move(-1)}>
        {"<"}
      </div>
      <div className="sliderContent" ref={scrollRef}>
        {sliders.map((item) => (
          <div className="slider" key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className="slideButton rightButton" onClick={move(1)}>
        {">"}
      </div>
    </div>
  );
};

export default Carousel;
