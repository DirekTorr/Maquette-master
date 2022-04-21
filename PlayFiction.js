import React from 'react';
import {
  asset,
  Sound,
} from 'react-vr';


// Format: { src: 'sparrow3.mp3', volume: 0.9, rotateY: 60 },

export default class PlayFiction extends React.Component {
  static defaultProps = {
    src: null, // Sound file source
    volume: 1, // Volume where 0 is silent, 1 is 100%, 2 is 200% of original etc.
    rotateY: 0, // Position of sound [degrees around Y axis]
    rotateX: 0, // Position of sound, default 0 horizontal [degrees around X axis]
  };

  constructor(props) {
    super();
    this.state = {
    };
  }


  

  render() {
    
    return (
      
        <Sound
          autoplay={true}
          loop={true}
          volume={this.props.volume}
          source={asset(this.props.src)}
          is3d={false}
          /* playerState={this.state.playerState} */
        />
    );
  }
}

