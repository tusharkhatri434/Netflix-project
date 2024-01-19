import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath){
    return;
  }
  return (
    <div className="w-44 box-border mr-4 overflow-hidden cursor-pointer">
      <img
        alt="Movie Card"
        className="rounded-xl w-full h-60  object-cover"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};
export default MovieCard;
