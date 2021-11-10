import React from "react";
// creating videoGameList component that takes in props
const videoGameList = (props) => {
  // Looping over the videogame list from props
  const allVideoGames = props.videoGameList.map((videoGame) => {
    return (
      <li key={videoGame.id} className="list-group-item">
        {videoGame.title} {videoGame.hero}
      </li>
    );
  });
  return (
    // Rendering mapped videogame list
    <div>
      <ul className="list-group">{allVideoGames}</ul>
    </div>
  );
};

export default videoGameList;
