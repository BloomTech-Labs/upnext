import React from 'react';
import styled from 'styled-components';


const SideBar = () => {
  return (
    <Wrapper>
      <h3> <AnchorTag href='#'>This is a sidebar </AnchorTag></h3>
      <h3> <AnchorTag href='#'>this is another item </AnchorTag></h3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: left;
  margin:auto;
  border: 3px solid black;
  border-radius: 2%;
  display:inline-flex;
  flex-direction: column;
  width: 250px;
  height: 800px;
  padding-left: 10px;
`
const AnchorTag = styled.a`
  color: black;
  text-decoration: none;
`

export default SideBar;