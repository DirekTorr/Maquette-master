import React from 'react';
import { AppRegistry } from 'react-vr';
import { LiveTour } from 'live-tour-lab';
import Casque from './Casque';
import Jukebox from './Jukebox';
import DisparitionGuitare from './DisparitionGuitare';


export default class Maquette6Avril extends React.Component {
  render() {
    return (
      <LiveTour tourURI='hello-world.json'>
        <Casque entries="casque"/>
        <Jukebox entries="jukebox"/>
        <DisparitionGuitare entries="disparitionGuitare"/>
        </LiveTour>
    );
  }
};

AppRegistry.registerComponent('Maquette6Avril', () => Maquette6Avril);