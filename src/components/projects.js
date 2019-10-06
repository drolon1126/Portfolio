import React from 'react';
import Microlink from '@microlink/react'

const Projects = props => {
  return (
    <div id="projects">
    <h3 class="title">Projects</h3>
    <p>Here you will find various projects I've worked on.</p>
    <hr/>
    <ul class="grid">
      <li class="small">
        <h4 className='pTittle'>Animu Tracker</h4>
        <Microlink url='https://anime-repo-h5zq95ubi.now.sh/' media='screenshot' size='normal' lazy  />
      </li>
    </ul>
    <hr/>
  </div>
  );
}

export default Projects;
