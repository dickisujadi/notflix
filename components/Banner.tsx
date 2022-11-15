import Image from "next/image";
import { Movie } from "../typings";
import { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";

interface Props {
  netflixOriginals: Movie[]
}

function Banner({netflixOriginals} : Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * netflixOriginals.length);
    const randomMovie = netflixOriginals[randomIndex];
    const randomImage = `${baseUrl}${randomMovie?.backdrop_path}`;
    setMovie(randomMovie);
    setImageUrl(randomImage);
    console.log('trace', randomImage);

  }, []);


  return (
    <div className="flex flex-col py-16 px-4 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-50">
        <Image
          src={imageUrl}
          alt={'banner'}
          layout="fill"
          objectFit={"cover"}
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">{movie?.title}</h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>
    </div>
  )
}

export default Banner