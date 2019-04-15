import React from 'react';
import styled from 'styled-components';
import ImageCarousel from './ImageCarousel';


import image1 from './images/image1.jpg';
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];


  return (
    <Container>
      <h1 className="app__name"> React Image Carousel</h1>
      <ImageCarousel
        images={images}
      />
    </Container>
  );

}

export default App;
