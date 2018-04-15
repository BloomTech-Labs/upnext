import React from 'react';
import styled from 'styled-components';


import Events from './eventUtils/Events';
import SideBar from './SideBar';
import homeImage from './resources/images/crowd.jpg';


const Home = () => {
  return (
    <div>
      <PrettyContainer>

        <PrettyHeader> UpNext </PrettyHeader>

        <PrettyImage>
          <img src={homeImage} alt="by Yolanda Sun on Unsplash" />
        </PrettyImage>

      </PrettyContainer>
      
    </div>
  );
}

const PrettyContainer = styled.div`
  position: relative;
  justify-content: center;
  margin: 60px;
`

const PrettyHeader = styled.h1`
  text-align: center;
  font-size: 40px;
  /* margin-top: 60px; */
  /* max-height: 100%;
  max-width: 100%; */
`
const PrettyImage = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: auto;


`



export default Home;