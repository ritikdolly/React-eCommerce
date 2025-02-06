/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import AliceCarousel from "react-alice-carousel";
import { HomeSectionCard } from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "@mui/material/Button";
import { useState } from "react";

export const HomeSectionCaruosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    // console.log(e.target);    
    return setActiveIndex(activeIndex - 1);
  };
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((curItems) => <HomeSectionCard currData={curItems} />);

  return (
    <div className=" border">
      <h2 className="text-3xl font-extrabold text-gray-800 py-1 p-2">
        {sectionName}
      </h2>
      <div className="relative p-5 ">
        <AliceCarousel
        key={activeIndex}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {/* right button */}
        {activeIndex !== items.length - 5 && (
          <Button
          variant="contained"
          onClick={slideNext}
            className="z-50 bg-white text-black"
            sx={{
              position: "absolute",
              top: "13rem",
              right: "0rem",
              transform: "translateX(50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )}
        {/* left button */}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white text-black"
            sx={{
              position: "absolute",
              top: "13rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        )}
      </div>
    </div>
  );
};
