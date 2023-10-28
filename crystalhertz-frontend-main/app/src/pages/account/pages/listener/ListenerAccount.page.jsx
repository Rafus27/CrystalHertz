// lib
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import { Navbar } from "../../../../components/bar/Navbar.component";
import { LeftBar } from "../../../../components/bar/components/Leftbar.component";
// store
import { selectAppState } from "../../../../store/slices/app.slice";
// styles
import { ListenerAccount, ListenerAccountProfile, ListenerDisplay, ListenerDescription, ListenerTracks, } from "../styles/userAccount.style";
/**
 * User account sub-page
 * @returns {JSX.Element} as page-component
 */
export const ListenerAccountPage = () => {
    const { leftBar } = useSelector(selectAppState);
    const token = localStorage.getItem("token");
    const [isListener] = useState(false);
    if (!token) {
        return <Navigate to="/auth" replace={false}/>;
    }
    const _resData = [
        {
            img: "https://via.placeholder.com/150/f66b97",
            album: "Название альбома",
            trackName: "Название трека1",
        },
        {
            img: "https://via.placeholder.com/150/f66b97",
            album: "Название альбома",
            trackName: "Название трека",
        },
        {
            img: "https://via.placeholder.com/150/f66b97",
            album: "Название альбома",
            trackName: "Название трека",
        },
        {
            img: "https://via.placeholder.com/150/f66b97",
            album: "Название альбома",
            trackName: "Название трека",
        },
        {
            img: "https://via.placeholder.com/150/f66b97",
            album: "Название альбома",
            trackName: "Название трека",
        },
        {
            img: "https://via.placeholder.com/150/f66b97",
            album: "Название альбома",
            trackName: "Название трека",
        },
        {
            img: "https://via.placeholder.com/150/f66b97",
            album: "Название альбома",
            trackName: "Название трека",
        },
        {
            img: "https://via.placeholder.com/150/f66b97",
            album: "Название альбома",
            trackName: "Название трека",
        },
        {
            img: "https://via.placeholder.com/150/f66b97",
            album: "Название альбома",
            trackName: "Название трека",
        },
    ];
    return (<ListenerAccount.Frame>
      <Navbar />
      <LeftBar />
      <ListenerAccount.Container isOpen={leftBar.isOpen}>
        <ListenerAccountProfile.Container>
          <ListenerAccountProfile.ProfileImage src="https://via.placeholder.com/150/f66b97" alt="test_img"/>

          <ListenerDisplay.Container>
            <ListenerDisplay.DisplayValue>
              {"142"} слушателя
            </ListenerDisplay.DisplayValue>
            <ListenerDisplay.DisplayValue>
              {"3"} подписки
            </ListenerDisplay.DisplayValue>
            {isListener === true && (<ListenerDisplay.DisplayButton>
                {"Вокалист"}
              </ListenerDisplay.DisplayButton>)}
            <ListenerDisplay.DisplayButton>
              {"Подписаться"}
            </ListenerDisplay.DisplayButton>
          </ListenerDisplay.Container>

          <ListenerDescription.Container>
            <ListenerDescription.Title isOpen={leftBar.isOpen}>
              {"Fred Nilson"}
            </ListenerDescription.Title>

            <ListenerDescription.Role>{"Слушатель"}</ListenerDescription.Role>

            <ListenerDescription.TextArea>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              vitae accusamus in facere hic nesciunt impedit dolore! Minus
              ullam, veritatis rem saepe doloribus soluta neque ut similique
              quo, a perferendis?
            </ListenerDescription.TextArea>

            <ListenerDescription.StatusSubscribe>
              {"Статус подписки"}
            </ListenerDescription.StatusSubscribe>
          </ListenerDescription.Container>
        </ListenerAccountProfile.Container>

        <ListenerTracks.Frame>
          <ListenerTracks.Title>Мои прослушивания</ListenerTracks.Title>

          <ListenerTracks.Container>
            {_resData.map((el, index) => (<ListenerTracks.Item key={index}>
                <ListenerTracks.Img src={el.img}/>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <ListenerTracks.Album>{el.album}</ListenerTracks.Album>
                  <ListenerTracks.Name>{el.trackName}</ListenerTracks.Name>
                </div>
              </ListenerTracks.Item>))}
          </ListenerTracks.Container>
        </ListenerTracks.Frame>
      </ListenerAccount.Container>
    </ListenerAccount.Frame>);
};
