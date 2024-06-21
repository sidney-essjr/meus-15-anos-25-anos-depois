import getMosaicImage from "@/actions/get-corousel-image";
import getMusic from "@/actions/get-music";
import { ErrorBoundary } from "react-error-boundary";
import Mosaic from "./components/home/home-carousel/carousel";
import Display from "./components/home/home-display/display";
import MusicPlayer from "./components/music-player/music-player";
import Error from "./error";
import MapLocation from "./components/location/map-location";

export default async function Home() {
  const music = await getMusic();
  const image = await getMosaicImage();

  return (
    <main>
      <ErrorBoundary FallbackComponent={Error}>
        <MusicPlayer data={music} />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Error}>
        <Mosaic data={image} />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Error}>
        <Display />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={Error}>
        <MapLocation />
      </ErrorBoundary>
    </main>
  );
}
