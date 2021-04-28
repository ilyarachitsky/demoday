import React, { Component } from 'react';
import {Howl, Howler} from "howler";
import audio from "../../Media/audio.mp3"

const audioClips = [
    {sound: audio, label: 'audio'}
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
                <button>
                    {this.PlayButton()}  
                </button>
            </div>
        )
    }
}
