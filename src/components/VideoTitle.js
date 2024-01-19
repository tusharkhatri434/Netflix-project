import { useDispatch, useSelector } from "react-redux";
import {toogleTrailerMute} from "../utils/muteSlice";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";


const VideoTitle = ({ title, overview }) => {

  const muteTrailerValue = useSelector((store) => store.mute); 

  const dispatch = useDispatch();
  function toogle (){
    dispatch(toogleTrailerMute());
  }

  return (
    <div className="w-full aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl max-w-lg font-bold">{title}</h1>
      <p className="py-6 text-sm text-slate-200 w-2/4">{overview}</p>
      <div className="flex justify-between">
        <div>
          <button className=" bg-white text-black p-2 px-12 text-xl  rounded-lg hover:bg-opacity-80">
            ▶️ Play
          </button>
          <button className="mx-2 bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
        <div>
          {muteTrailerValue ? (
            <GoUnmute
              className="border-2 rounded-full p-1"
              color="white"
              size={40}
              onClick={toogle}
            />
          ) : (
            <IoVolumeMuteOutline
              className="border-2 rounded-full p-1"
              color="white"
              size={40}
              onClick={toogle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
