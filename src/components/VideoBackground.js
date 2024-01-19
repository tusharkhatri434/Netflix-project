import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
   const trailerKey = trailerVideo?.key;
   const isMuted = useSelector((store)=>store.mute)
  useMovieTrailer(movieId);
  
  return (
    <div className="w-full">
      <iframe className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${isMuted ? 0 : 1}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
    </div>
  );
};
export default VideoBackground;
