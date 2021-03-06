import React from "react";
import { Component } from "react";
import Key from "../components/Key";
import playNote from "../functions/playNote";

export default class keyNote extends Component {

  constructor() {
    super()
    this.state = {
      displayValue: "",
      keyPressed: "",
      keyList: ["D", "R", "F", "T", "G", "H", "U", "J", "IC", "K", "O", "L"],
    }
    this.handleKey = this.handleKey.bind(this)
  }

  componentDidMount() {
    const setKey = (event) => { this.setState({ keyPressed: event.key.toUpperCase() }) }
    document.addEventListener('keydown', setKey)
  }

  componentDidUpdate() {
    if (this.state.keyList.includes(this.state.keyPressed)) {
      this.handleKey(this.state.keyPressed, Event)
    }
  }

  handleKey(key, e) {
    playNote(key);
  }

  render() {
    return (
      <div>
        <ul>
          <Key
            note={"C4"}
            noteClass={"key"}
            noteName={"D"}
            noteFunc={(e) => playNote("d", e)}
            hyperNote={"C#4"}
            hyperNoteClass={"black-key"}
            hyperNoteName={"R"}
            hyperNoteFunc={(e) => playNote("r", e)}
          />

          <Key
            note={"D4"}
            noteClass={"key"}
            noteName={"F"}
            noteFunc={(e) => playNote("f", e)}
            hyperNote={"D#4"}
            hyperNoteClass={"black-key"}
            hyperNoteName={"T"}
            hyperNoteFunc={(e) => playNote("t", e)}
          />

          <Key
            note={"E4"}
            noteClass={"key"}
            noteName={"G"}
            noteFunc={(e) => playNote("g", e)}
          />

          <Key
            note={"F4"}
            noteClass={"key"}
            noteName={"H"}
            noteFunc={(e) => playNote("h", e)}
            hyperNote={"F#4"}
            hyperNoteClass={"black-key"}
            hyperNoteName={"U"}
            hyperNoteFunc={(e) => playNote("u", e)}
          />

          <Key
            note={"G4"}
            noteClass={"key"}
            noteName={"J"}
            noteFunc={(e) => playNote("j", e)}
            hyperNote={"G#4"}
            hyperNoteClass={"black-key"}
            hyperNoteName={"I"}
            hyperNoteFunc={(e) => playNote("i", e)}
          />

          <Key
            note={"A4"}
            noteClass={"key"}
            noteName={"K"}
            noteFunc={(e) => playNote("k", e)}
            hyperNote={"A#4"}
            hyperNoteClass={"black-key"}
            hyperNoteName={"O"}
            hyperNoteFunc={(e) => playNote("o", e)}
          />

          <Key
            note={"B4"}
            noteClass={"key"}
            noteName={"L"}
            noteFunc={(e) => playNote("l", e)}
          />
        </ul>
      </div>
    );
  }
}
