import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";


const Wrapper = styled.div`
  width: 675px;
  overflow: hidden;
  box-shadow: 2px 4px 20px rgba(0,0,0,0.2);
`

const Carousel = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  height: 450px;


  img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: scale(1.1) translateY(10px);

    &.active {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
  }
`
const CaroControls = styled.div`
  display: flex;
  color: white;

  button {
    cursor: pointer;
    border: 0;
    outline: none;
    color: #0222ff;
    background: white;
    font-size: 24px;
    padding: 0.5em;
    flex-grow: 1;
    transition: all 0.2s ease-in;

    &:hover {
      background: rgba(2, 34, 255, 0.2);
    }
  }
`;


class ImageCarousel extends React.Component {
  constructor(){
    super();
    this.state = {
      currentImage: 0,
      isTransitioning: false,
      toLeft: false
    };
  }

  // Lifecycles
  componentDidMount() {
    window.addEventListener("pushkey", this.onKeyPush);
  }

  componentWillUnmount() {
    window.removeEventListener("pushkey", this.onKeyPush);
  }

  // Method
  onKeyPush = event => {
    if (event.keyCode) {
      if(event.keyCode === 39) {
        this.showNext();
      } else if (event.keyCode === 37) {
        this.showPrev();
      }
    }
  };

  

  render() {
    const {images} = this.props;
    const { 
      currentImage,
      isTransitioning,
      goLeft
    } = this.state;

    return (
      <Wrapper>
        <Carousel>
          {images.map((image, index) => (
            <img
              key={index}
              className={currentImage === index ? "active" : ""}
              src={image}
              alt={""}
            />
          ))}
        </Carousel>
        <CaroControls>
          <button>
            <FontAwesome name="angle-left" onClick={this.showPrev} />
          </button>
          <button>
            <FontAwesome name="angle-right" onClick={this.showNext} />
          </button>
        </CaroControls>
      </Wrapper>
    );

  }
}

export default ImageCarousel;