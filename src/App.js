import React from "react";
import VideoGameList from "./components/VideoGameList";
import CreateVideoGame from "./components/CreateVideoGame";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";

// firebase config file
const firebaseConfig = {
  apiKey: "AIzaSyD-OA1ofzF94o_sSfnUD5FNORp-8DfQoPk",
  authDomain: "video-game-list-ed18e.firebaseapp.com",
  projectId: "video-game-list-ed18e",
  storageBucket: "video-game-list-ed18e.appspot.com",
  messagingSenderId: "900232880973",
  appId: "1:900232880973:web:8cbcab288577538f7ccd04",
};
// Initialize Firebase Instance
const app = initializeApp(firebaseConfig);
// Connect to the database portion of the firebase instance
const db = getFirestore(app);
export default class App extends React.Component {
  state = {
    videoGameList: [],
  };

  componentDidMount() {
    this.readVideoGames();
  }

  readVideoGames = async () => {
    // Connecting to the video games collection and retrieving the docs
    const videoGamesCol = collection(db, "videogames");
    console.log("collection", videoGamesCol);
    const videoGamesSnapshot = await getDocs(videoGamesCol);
    console.log("snapshot", videoGamesSnapshot);
    // videoGameList array
    const videoGameList = [];
    // Looping through the `videoGameSnapshot`,
    // and pushing a new object made up of an `id` and `title`.
    videoGamesSnapshot.forEach((doc) => {
      // console.log(doc.data());
      const eachVideoGame = {
        id: doc.id,
        title: doc.data().title,
        hero: doc.data().hero,
      };
      videoGameList.push(eachVideoGame);
    });
    // Seting `videoGameList` to `videoGameList` in state.
    this.setState({
      videoGameList: videoGameList,
    });
  };

  createVideoGame = async (newVideoGame, newGameHero) => {
    console.log("newVideoGame", newVideoGame);
    // Connecting to the videogames collection
    const videoGamesCol = collection(db, "videogames");

    await addDoc(videoGamesCol, {
      title: newVideoGame,
      hero: newGameHero,
    });
    // Calling `readVideoGames` to repopulate the app/state.
    this.readVideoGames();
  };

  render() {
    return (
      <div className="container">
        <h1 className="bg-light m-3 p-3">Video Games</h1>
        <div className="row justify-content-center">
          <div className="col-12">
            {/* CreateVideoGame component */}
            <CreateVideoGame createVideoGame={this.createVideoGame} />
          </div>
          <div className="col-12">
            {/* VideoGameList component */}

            <VideoGameList videoGameList={this.state.videoGameList} />
          </div>
        </div>
      </div>
    );
  }
}
