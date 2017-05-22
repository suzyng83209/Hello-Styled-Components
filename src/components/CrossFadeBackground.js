import React from "react";

const setOpacityZero = e => e.style.opacity = 0;
const setOpacityOne = e => e.style.opacity = 1;

class Component extends React.PureComponent {
  componentDidMount = () => {
    const { delay = 6400 } = this.props;
    this.intervalId = setInterval(this.a);
  };

  componentWillUnmount = () => clearInterval(this.intervalId);

  handleTransition = () => {
    const { transition } = this.props;
    const bgs = Array.from(this.bgs.children);
    const visibleImages = bgs.filter(bg => bg.style.opacity !== "0");

    if (visibleImages.length === 1) {
      const currentImage = bgs.slice(-1)[0];
      setOpacityZero(currentImage);
      setTimeout(() => bgs.forEach(setOpacityOne), transition);
    } else {
      const currentImage = visibleImages.slice(-1)[0];
      setOpacityZero(currentImage);
    }
  };

  render = () => {
    const { basePath, images, transition, style, className } = this.props;
    return (
      <div ref={ref => this.bgs = ref}>
        {images.map(image => (
          <div
            key={image}
            style={{
              transition: `${transition}ms`,
              background: `url(${basePath + image}) no-repeat center center`,
              backgroundSize: `cover`
            }}
          />
        ))}
      </div>
    );
  };
}
