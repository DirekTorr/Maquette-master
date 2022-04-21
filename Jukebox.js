import React from "react";
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  Animated,
} from "react-vr";

import { Easing } from "react-native";

export default class Jukebox extends React.Component {

    constructor() {
        super();
        this.state = { spin: new Animated.Value(0) };
      }
      //
      //
      componentDidMount() {
        this.spinAnimation();
      }
      //
      //
      spinAnimation() {
        // Will make the Animated.Value of spin be reset at the start of the animation, check line 19
        this.state.spin.setValue(0);
        //
        Animated.timing(this.state.spin, {
          toValue: 360,
          duration: 5000,
          easing: Easing.linear,
        }).start(() => this.spinAnimation());
      }
      //
      render() {

    
        //
        const AnimatedModel = Animated.createAnimatedComponent(Model);
        //return




    return (
         <AnimatedModel
           source={{
             obj: asset("Hub/Jukebox.obj"),
           }}
           style={{
            transform: [{ translate: [-300, -90, -100] },
              {rotateY:this.state.spin},],
            // transform: [{ translate: [0, 0, -4] }, { rotate: spin }],
          }}
          wireframe={true} 
        />
    );
  }
}