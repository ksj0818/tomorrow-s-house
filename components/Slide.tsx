import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, Grid } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Slide({ children }: { children: React.ReactNode }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      slidesPerView={1}
    >
      {children}
    </Swiper>
  );
}

export function GridSlide({ children }: { children: React.ReactNode }) {
  const [viewSize, setViewSize] = useState(0);

  useEffect(() => {
    setViewSize(window.innerWidth);
    console.log(viewSize);
  }, [viewSize]);
  return (
    <Swiper
      slidesPerView={3}
      grid={{
        rows: 1,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      navigation={true}
      modules={[Grid, Navigation, Autoplay]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}
