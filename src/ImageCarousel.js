import React from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";


const Wrapper = styled.div`
  width: 300px;
  overflow: hidden;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 760px) {
    width: 675px;
  }
`;

const Carousel = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  height: 200px;

  @media screen and (min-width: 760px) {
    height: 450px;
  }

  .image {
    position: absolute;
    bottom: 0;
    left: 0;
    height: auto;
    width: 100%;
    object-fit: cover;
    opacity: 0;
    transform: scale(1.1) translateY(10px);
    transition: all 0.3s ease-out;

    &.active {
      overflow: hidden;
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
  }
`;
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
      currentIndex: 0,
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

  showNext = () => {
    const currentIndex = (this.state.currentIndex + 1) % this.props.images.length;
    this.setState({ currentIndex });
  };

  showPrev = () => {
    const currentIndex = (this.state.currentIndex - 1 + this.props.images.length) % this.props.images.length;
    this.setState({ currentIndex });
  }

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <Wrapper>
        <Carousel>
          {images.map((image, index) => {
            let className = "image";
            if (index === currentIndex) className += " active";
            return (
              <img
                src={image}
                className={className}
                key={`img-${index}`}
                alt={""}
              />
            );  
          })}
        </Carousel>
        <CaroControls>
          <button onClick={this.showPrev}>
            <FontAwesome name="angle-left" />
          </button>
          <button onClick={this.showNext}>
            <FontAwesome name="angle-right" />
          </button>
        </CaroControls>
      </Wrapper>
    );

  }
}

export default ImageCarousel;