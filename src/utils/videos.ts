export type VideoProps = {
  id: number;
  title: string;
  srcVideo: string;
};

export const videos: VideoProps[] = [
  {
    id: 1,
    title: "PAINEL HYDRA",
    srcVideo: "/videos/HYDRA-SITE.mp4",
  },
  {
    id: 2,
    title: "PAINEL BUSCA DADOS",
    srcVideo: "/videos/BUSCA_DADOS.mp4",
  },
  {
    id: 3,
    title: "PAINEL CYBER BUSCAS",
    srcVideo: "/videos/CYBER-SITE.mp4",
  },
  {
    id: 4,
    title: "PAINEL KING BUSCAS",
    srcVideo: "/videos/KING-SITE.mp4",
  },
  {
    id: 5,
    title: "PAINEL CH BUSCA",
    srcVideo: "/videos/CH_BUSCA-SITE.mp4",
  },
  {
    id: 6,
    title: "PAINEL DATAPRO",
    srcVideo: "/videos/DATAPRO_SITE.mp4",
  },
];
