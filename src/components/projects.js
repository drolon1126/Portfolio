import React from 'react';
import atrack from '../images/animeTracker.jpg';
import bbreak from '../images/brickBreak.jpg';

const Projects = props => {
  return (
    <div id="projects">
    <h3 class="title">Projects</h3>
    <p>Here you will find various projects I've worked on.</p>
    <hr/>
    <ul class="grid">
      
        <li class="small" >
          <a class="pLink" href="https://dreamy-shannon-dc3435.netlify.com/">
            <h4 className='pTittle'>Brick Breaker</h4>
            <p>A simple Brick Breaker game built using Javascript</p>
            <img src={bbreak} />
            <a href='https://github.com/drolon1126/brickBreak'>Github</a>
          </a>
        </li>
        <li class="small" >
          <a class="pLink" href="https://anime-repo-h5zq95ubi.now.sh/">
            <h4 className='pTittle'>Anime Tracker</h4>
            <p>A website built using React.js to access the AniList API to track and display anime</p>
            <img src={atrack} />
            <a href='https://github.com/drolon1126/anime-repo'>Github</a>
          </a>
        </li>
      
    </ul>
    <hr/>
  </div>
  );
}

export default Projects;
