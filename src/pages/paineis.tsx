import Header from "@components/Header";
import Video from "@components/Video";
import React, { useEffect, useState } from "react";
import { VideoProps, videos } from "src/utils/videos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Paineis() {
  const [widthScreen, setWidthScreen] = useState(0);

  useEffect(() => {
    if (process.browser) {
      setWidthScreen(window.innerWidth);
    }
  }, []);

  return (
    <>
      <Header />
      <main
        className={`container-video ${
          widthScreen < 768 && "place-content-center"
        }`}
      >
        {widthScreen > 768 ? (
          videos.map((video: VideoProps) => (
            <Video key={video.id} video={video} />
          ))
        ) : (
          <Swiper id="my-swiper" className="mySwiper">
            {videos.map((video: VideoProps) => (
              <SwiperSlide key={video.id} className="w-full">
                <Video key={video.id} video={video} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </main>
      <div className="w-full h-0 md:h-16"></div>
    </>
  );
}

export default Paineis;
