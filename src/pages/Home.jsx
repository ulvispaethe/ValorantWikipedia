import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center py-12">
        <div className="w-[55%] flex flex-col items-center gap-5">
      <h1 className="text-5xl font-extrabold">Valorant</h1>
      <div className="flex flex-col gap-5 text-2xl font-bold">
        <p>
        Valorant is a free-to-play first-person shooter game developed by Riot
        Games and released in 2020. The game features a character-based
        structure where players control agents with different abilities.
        Valorant is a team-based game that combines strategy, shooting skills,
        and ability usage.
        </p>
        <p>
        The game is played on a variety of different maps and
        consists of round-based matches between two teams. Players aim to defeat
        the opposing team by using the unique abilities of the agents. Valorant
        stands out with its competitive gameplay style and character-based
        features.
        </p>
        <p>
        Furthermore, the game undergoes continuous updates introducing
        new agents, maps, and gameplay changes. Valorant has become popular in
        the esports scene, catering to a wide player base through organized
        tournaments and professional leagues.
        </p>
      </div>
        </div>
    </div>
  );
};

export default Home;
