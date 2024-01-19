import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 box-border mr-4 overflow-hidden cursor-pointer">
      <img
        alt="Movie Card"
        className="rounded-xl  object-contain "
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};
export default MovieCard;
