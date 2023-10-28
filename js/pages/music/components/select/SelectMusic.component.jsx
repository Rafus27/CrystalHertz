// lib
import { useReducer, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// style
import { SelectMusic } from "./style/selectMusic.style";
// tools
import { getDuration, getNumberFromDuration, timeUpdate } from "../../tools";
// store
import { selectMusicState, setSelectedTrack } from "store/slices/music.store";
// components
import { ShowTimeSelectMusic } from "./components/Time.component";
import { ButtonSelectMusic } from "./components/Button.component";
/**
 * Select music sub-component in page/music
 * @returns {JSX.Element} as sub-page-component
 */
export const SelectMusicComponent = (props) => {
    const { id, isSelected } = useSelector(selectMusicState);
    const audioElement = useRef(null);
    const dispatch = useDispatch();
    const [play, setPlay] = useReducer((v) => !v, false);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [updatedCurrentTime, setUpdatedCurrentTime] = useState(0);
    const [duration, setDuration] = useState("00:00");
    useEffect(() => {
        if (play === true)
            setDuration(getDuration(audioElement.current?.duration));
    }, [play]);
    const handlePlay = () => {
        if (play === false) {
            audioElement.current?.play();
            setPlay();
        }
        else {
            audioElement.current?.pause();
            setPlay();
        }
    };
    const handleClick = () => {
        dispatch(setSelectedTrack({ ...props, isSelected: isSelected }));
    };
    return (<SelectMusic.Container onClick={handleClick} isSelected={props.id === id ? true : false}>
      <audio ref={audioElement} src={props.soundSrc} onTimeUpdate={(e) => setCurrentTime(timeUpdate(e))} onLoadedMetadata={(e) => {
            e.currentTarget.currentTime = updatedCurrentTime;
        }}/>

      <SelectMusic.InfoContainer>
        <SelectMusic.Title>{props?.title || "null"}</SelectMusic.Title>-
        <SelectMusic.AlbumName>
          {props?.albumName || "null"}
        </SelectMusic.AlbumName>
      </SelectMusic.InfoContainer>

      <SelectMusic.Progress.Container>
        <ShowTimeSelectMusic value={currentTime}/>
        <SelectMusic.Progress.AudioInput type="range" defaultValue={0} maxLength={audioElement.current?.duration} value={audioElement.current?.currentTime} disabled onChange={(e) => setUpdatedCurrentTime(getNumberFromDuration(e.target.value))}/>
        <ShowTimeSelectMusic value={duration}/>
      </SelectMusic.Progress.Container>

      <ButtonSelectMusic state={play} callback={handlePlay}/>
    </SelectMusic.Container>);
};
