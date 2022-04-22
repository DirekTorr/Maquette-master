import React from 'react';
import {
  VrButton,
  Animated,
  Image,
  View,
  asset,
  Text,
  VrSoundEffects,
  Video,
  VideoControl,
  MediaPlayerState,
} from 'react-vr';

import { Easing } from 'react-native';

import { FadeInView } from 'live-tour-lab';



export default class DisparitionGuitare extends React.Component {
  static defaultProps = {
    src: null, // Video source
    rotateY: 0, // Position of icon [degrees around Y axis]

    cmWidth: 0.2, // Sets the actual size, in cubemap widths. Hence 1 is 1 cubemap width. 0.5 is half a cubemap width.
    imgWidth: 404, // Set to the image size in pixels, only used for width/height ratio calculation
    imgHeight: 346, // Set to the image size in pixels, only used for width/height ratio calculation

    pretransform: [], // Advanced positioning

    rotateX: 0, // Position of icon, default 0 horizontal [degrees around X axis]
    nextRotateY: null, // Rotation after entering next scene [degrees around Y axis]

    // Icon style

    icon:'icons/red-cross.png', // Icon file
    iconWidth: 0.4, // Width of icon [VR units, not pixels]
    iconHeight: 0.4, // Height of icon [VR units, not pixels]
    iconTranslateZ: -10, // Z distance of icon [VR units]
    iconDuration: 1300, // Time of fading in the navigation icon [ms]

    // Gazing style
    cmWidthPhoto:0.19,
    imgWidthPhoto: 366, // Set to the image size in pixels, only used for width/height ratio calculation
    imgHeightPhoto: 424, // Set to the image size in pixels, only used for width/height ratio calculation

    sound: null,
    iconOpacity:1,
    onNavClick: null, // Function callback, don't set in json

  };

  constructor(props) {
    super(props);
    this.state = {
      disparition: 0,
      apparition: 1,
      guitare:0,
      playerState: new MediaPlayerState({autoPlay: false, muted: true}),
      
    };
  }

  componentDidMount() {
  }


  render() {
    
    const base = 600;
    const cmWidth = this.props.cmWidth;
    const width = base * cmWidth;
    const height = this.props.imgHeight / this.props.imgWidth * width;
    const tray = height / 2;
    const traz = -base / 2;

    const cmWidthPhoto = this.props.cmWidthPhoto;
    const widthPhoto = base * cmWidthPhoto;
    const heightPhoto = this.props.imgHeightPhoto / this.props.imgWidthPhoto * widthPhoto;
    const trayPhoto = heightPhoto / 2;
    const trazPhoto = -base / 2;


    return (
      <View
        duration={this.props.iconDuration}
        style={{
          position:'absolute',
        }}>
            <View
        style={{
          alignItems: 'center',
          layoutOrigin: [0, 0, 0],
          opacity: this.state.apparition,
          transform: [
            {rotateY: -50.7},
            {rotateX: -1.3},
            {translate: [0, trayPhoto, trazPhoto]},
          ],
          position:'absolute',
        }}>
        <Image
          style={{
            layoutOrigin: [0, 0, 0],
            width: widthPhoto,
            height: heightPhoto,
            position:'absolute',
          }}
          source={asset('porteFermee.jpg') }
        />
      </View>

   <View
        style={{
          alignItems: 'center',
          layoutOrigin: [0, 0, 0],
          opacity:this.state.disparition,
               transform: [
                {rotateY: 34},
                {rotateX: -29.5},
                {translate: [0, tray, traz]},
            ...this.props.pretransform
          ],
          position:'absolute',
        }}>
            <Video
          style={{
            layoutOrigin: [0, 0, 0],
            width: width,
            height: height,
            position:'absolute',
            opacity:1,
          }}
          source={ asset('GUITARE_DISPARITION.mp4') }
          playerState={this.state.playerState}
        /></View>
   
        <VrButton
          onClick={() => {this.setState({apparition: 0, disparition:1, guitare:1,});
                          this.state.playerState.play();}}
          ignoreLongClick={true}
          onEnterSound={{wav: asset('guitare.wav'),}}
          style={{
            position:'absolute',
            flexDirection: 'column',
            flex: 1,
            alignItems: 'center',
            layoutOrigin: [0, 0, 0],            
            transform: [
              {rotateY: 38},
              {rotateX: -20},
              {translateZ: -4},
            ],
          }}>
            <Image style={{width:0.8, height:1.2,
                opacity:0,
               transform: [
                {rotateY:0},
                {rotateX: 0},
                {translateZ: 0},
              ],}}
     source={asset('icons/red-cross.png')}
 ></Image>
        </VrButton>
      </View>
    );
  }
}