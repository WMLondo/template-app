"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slideshow.css";

type Props = {
  images: string[];
  title: string;
  className?: string;
};

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100vw",
          height: "500px",
        }}
        pagination
        autoplay={{ delay: 2500 }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={600}
              height={600}
              src={`/products/${image}`}
              alt={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
