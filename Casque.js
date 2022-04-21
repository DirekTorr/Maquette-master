import React from 'react';
import {
  asset,
  View,
  Animated,
  AnimatedImage,
} from 'react-vr';

import { Easing } from 'react-native';

export default class Casque extends React.Component {
    static defaultProps = {
        op: 1, // opacity of hero picture
        width: 1, // width of hero picture
        height: 1, // height of hero picture
        rotateY: 0, // position
        src: null, // file name

      };

  constructor(props) {
    super();
    this.state = {
      fadeAnim: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
        duration: 3000,
        delay:3000,
      }
    )
    .start();
  }


  render() {
    return (
        <Animated.Image
        style={{
          position:'absolute',
          layoutOrigin: [0.5, 0.5, 0],
          width: this.props.width,
          height: this.props.height,
          transform: [
            {rotateY: this.props.rotateY},
            {translateZ: -2},
            {translateX: 0.5}
          ],
          opacity: this.state.fadeAnim,
        }}
        source={ asset(this.props.src) }
      />
    );
  }
}