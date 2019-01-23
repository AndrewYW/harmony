import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { login } from '../../actions/session_actions';
library.add(fab);

class Splash extends React.Component {

  componentDidMount() {

  }

  // demoLogin() {
  //   const user = {email: "demoemail", password: "demopassword"};
  //   window.dispatch(login(user));
  // }
  navbar() {
    return (
      <nav className="Navbar">
        <section className="navLeft">
          <div>
            <img className="navLogo" src={window.fullLogoURL} />
          </div>
          <ul className="navLeft">

          </ul>
        </section>
        
        <section className="navRight">
          <ul>
            <li><a href="https://github.com/AndrewYW/harmony/" className="fafaIcon">
              <FontAwesomeIcon icon={['fab', 'github']} />
              Github
          </a></li>
            <li><a href="#" className="fafaIcon">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
              LinkedIn
          </a></li>
          </ul>
        </section>     
      </nav>
    )
  }

  hero() {
    return (
      <section className="hero">
        <h2>It's time to ditch Skype and TeamSpeak.</h2>
        <p>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.
            Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.
        </p>
        <Link className="demoLogin" to="/channels/@me" >Login as demo user</Link>
        <a className="discordLink" href="https://discordapp.com/">Visit actual Discord</a>
      </section>
    )
  }
  images() {
    return (
      <section className="splashImages">
        <ul>
          <img className="x0" src={window.xURL} />
          <img className="x1" src={window.xURL} />
          <img className="x2" src={window.xURL} />

          <img className="o0" src={window.oURL} />
          <img className="o1" src={window.oURL} />
          <img className="o2" src={window.oURL} />

          <img className="dot0" src={window.dotURL} />
          <img className="dot1" src={window.dotURL} />
          <img className="dot2" src={window.dotURL} />
          <img className="dot3" src={window.dotURL} />
          <img className="dot4" src={window.dotURL} />

          <img className="square0" src={window.squareURL} />
          <img className="square1" src={window.squareURL} />
          <img className="square2" src={window.squareURL} />

          <img className="tri0" src={window.triURL} />
          <img className="tri1" src={window.triURL} />
          <img className="tri2" src={window.triURL} />

          <img className="coin0" src={window.coinURL} />
          <img className="coin1" src={window.coinURL} />
          <img className="coin1" src={window.coinURL} />

          <img className="android" src={window.androidURL} alt="android" />
          <img className="iphone" src={window.iphoneURL} alt="iphone" />
          <img className="controller" src={window.controllerURL} alt="controller" />
          <img className="shield" src={window.discURL} alt="shield" />
          <img className="cartridge" src={window.cartridgeURL} alt="cartridge" />
          <img className="headphones" src={window.headphonesURL} alt="headphones" />
          <img className="laptop" src={window.laptopURL} alt="laptop" />
          <img className="monitor" src={window.monitorURL} alt="monitor" />
          <img className="spawnerbox" src={window.spawnerboxURL} alt="spawnerbox" />
          <img className="vial" src={window.vialURL} alt="vial" />
          <img className="bomb" src={window.bombURL} alt="bomb" />
        </ul>
      </section>
    )
  }

  footer() {
    return (
      <>
        <section className="footerLeft">
          <h3>Ready to try Harmony? It's free!</h3>
          <h4>JOIN OVER 150 MILLION PLAYERS TODAY</h4>
        </section>
        <section className="footerRight">
          <Link className="footerRegister" to="/register" >Sign Up Now</Link>
        </section>
      </>
    )
  }
  render() {
    return (
      <section className="splash">
        {this.navbar()}
        {this.hero()}
        {this.images()}
        {this.footer()}
      </section>
    )
  }

  
}

export default Splash;