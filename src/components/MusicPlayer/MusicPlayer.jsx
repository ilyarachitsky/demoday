import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import audio from "../../Media/audio1.mp3";
import "./style.css";

const audioClips = [
    {sound: audio, label: "Play with sound"}
]

export default class MusicPlayer extends Component {
    Soundplay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }

    PlayButton = () => {
        return audioClips.map((soundObj, index) => {
            return(
            <button key={index} onClick={() => this.Soundplay(soundObj.sound)}>
                {soundObj.label}
            </button>)
        })
    }

    render() {
        Howler.volume(1.0)
        return (
            <div>
                <button className="button-1">
                    {this.PlayButton()}  
                </button>
            </div>
        )
    }
}
