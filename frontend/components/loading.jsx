import React from 'react';
import { connect } from 'react-redux';

class Loading extends React.Component {
  render() {
    const lines = ["Wobbling to 299%", "HARMONY REQUIRES MORE MINERALS", "Untap, Upkeep, Draw",
      "Traveling to Hanamura", "TIME'S UP - LET'S DO THIS!", "This loading is a line", 
      "They see me loading, They waiting", "Start your engines", "Skipping cutscenes", 
      "Shuffling the deck", "Reviving dead memes", "Returning the slab", 
      "Recombobulating Discombobulators", "now with scratch and sniff", 
      "Now with 100% more Screenshare!", "Dropping in Pochinki", 
      "Looking for the power button", "Look behind you", "Locating Wumpus",
      "Loading your digital hug", "Loading Simulation", "Jumping to hyperspace", 
      "Is this thing on?", "Initiating launch sequence", "Initializing socialization",
      "If you are reading this, you can read", "I swear it's around here somewhere...",
      "i need healing", "how do i turn this thing on", "Loading machine broke", 
      "Get ready for a surprise!", "Finishing this senta...", "Dusting the cobwebs",
      "Do you even notice these?", "Opening the loading bay doors", "Harmony is my city", 
      "Disconnecting from Reality", "Charging spirit bomb", "Charging Limit Break",
      "Calibrating flux capacitors", "Buckle up!", "Assembling Voltron",
      "Are we there yet?", "A brawl is surely brewing!", "LOADING 001: ARP 303 Saw",
      "*Elevator Music Plays*", "Researching cheat codes", "Wizard needs food badly",
      "Decrypting Engrams", "And now for something completely different", 
      "Stopping to smell the flowers", "Achieving Nirvana", "Managing Inventory"];
   
    if (this.props.loading) {
      return (
        <div className="loader">
          <video className="loading-video" autoPlay loop muted>
            <source src={window.loadingVideo} type="video/webm" />
          </video>
          <p className="loading-line">
            {lines[Math.floor(Math.random() * lines.length)]}
          </p>
          <p className="loading-progress">CONNECTING...</p>
        </div>
      )
    } else {
      return null;
    }
  }
}

const mstp = state => ({
  loading: state.ui.loading,
});

export default connect(mstp)(Loading);