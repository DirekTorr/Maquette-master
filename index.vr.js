import React from 'react';
import { AppRegistry } from 'react-vr';
import { LiveTour } from 'live-tour-lab';
import Casque from './Casque';
import Jukebox from './Jukebox';
import PlayFiction from './PlayFiction';


export default class Maquette6Avril extends React.Component {
  render() {
    return (
      <LiveTour tourURI='hello-world.json'>
        <Casque entries="casque"/>
        <Jukebox entries="jukebox"/>
        <PlayFiction entries="fiction"/>
        </LiveTour>
    );
  }
};

AppRegistry.registerComponent('Maquette6Avril', () => Maquette6Avril);