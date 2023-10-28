// lib
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// images & sounds
import background from "assets/video/videoplayback.mp4";
import sound from "assets/sound/rahmaninov.mp3";
import sound2 from "assets/sound/rahmaninov2.mp3";
// styles
import { Music, MusicContainerCenter, MusicContainerLeft, MusicContainerRight, MusicContainerSecond, } from "./styles/music.style";
// hooks
import { selectAppState } from "store/slices/app.slice";
// deep-components
import { AddMusicComponent } from "./components/add/AddMusic.component";
import { SelectMusicComponent } from "./components/select/SelectMusic.component";
import { InfoMusicComponent } from "./components/info/InfoMusic.component";
// components
import { Navbar } from "components/bar/Navbar.component";
import { LeftBar } from "components/bar/components/Leftbar.component";
export const MusicComponent = () => {
    const { leftBar } = useSelector(selectAppState);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (!token) {
            navigate("/auth");
        }
    }, [navigate, token]);
    const testProps = [
        {
            id: "_id:1",
            soundSrc: sound,
            artistName: "S. Rahmaninov",
            title: "Serenade",
            albumName: "Fantasy plays",
            description: "Lorem ipsum dolor sit amet consecteturnostrum impedit iste commodi fugit quae quas facilis ipsa doloremque!",
            dateRelease: "xx.xx.1892",
        },
        {
            id: "_id:2",
            soundSrc: sound2,
            artistName: "S. Rahmaninov",
            title: "Polka",
            albumName: "Fantasy plays",
            description: "Lorem ipsum dolor sit amet consecteturnostrum impedit iste commodi fugit quae quas facilis ipsa doloremque!",
            dateRelease: "xx.xx.1906",
        },
    ];
    return (<Music>
            <Navbar />
            <LeftBar />
            <video autoPlay muted loop style={{ pointerEvents: "none", zIndex: -1, position: "absolute" }}>
                <source style={{ pointerEvents: "none" }} src={background} type="video/mp4"/>
            </video>
            {token && (<MusicContainerSecond leftBarisOpen={leftBar.isOpen}>
                    <MusicContainerLeft>
                        <AddMusicComponent />
                    </MusicContainerLeft>

                    <MusicContainerCenter>
                        {testProps.map((item) => (<SelectMusicComponent key={item.id} {...item}/>))}
                    </MusicContainerCenter>

                    <MusicContainerRight>
                        <InfoMusicComponent />
                    </MusicContainerRight>
                </MusicContainerSecond>)}
        </Music>);
};
