import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { VideoProps } from "src/utils/videos";

type VideoComponentProps = {
  key: number;
  video: VideoProps;
};

function Video({ video }: VideoComponentProps) {
  const messageEncoded = encodeURI(
    `Olá CASSASIX, Estou interessado no ${video.title}`
  );
  //https://api.whatsapp.com/send?phone=14703333458&text=sua%20mensagem

  return (
    <div className="video">
      <h2>{video.title}</h2>
      <video width="100%" height="200" title={video.title} controls>
        <source src={video.srcVideo} type="video/mp4"></source>
      </video>
      <Link
        href={`https://api.whatsapp.com/send?phone=14703333458&text=${messageEncoded}`}
      >
        <a target="_blank">
          <button className="button-whatsapp rounded-sm">
            <BsWhatsapp size={24} />
            <span>ENTRAR EM CONTATO</span>
          </button>
        </a>
      </Link>
    </div>
  );
}

export default Video;
