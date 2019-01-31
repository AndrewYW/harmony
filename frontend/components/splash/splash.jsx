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

  demoLogin() {
    const user = {email: "demoemail", password: "demopassword"};
    window.dispatch(login(user));
  }
  navbar() {
    return (
      <nav className="Navbar">
        <div className="navL">
          <ul className="navLeft">
            <li>
              <div className="navLogoWrapper">
                <img className="navLogo" src={window.fullLogoURL} />
              </div>
            </li>
            <li><a href="https://github.com/AndrewYW/harmony/wiki">WIKI</a></li>
          </ul>
        </div>
        
        <div className="navR">
          <ul className="navRight">
            <li><a href="https://github.com/AndrewYW/" className="fafaIcon">
              <FontAwesomeIcon icon={['fab', 'github']} />
          </a></li>
            <li><a href="#" className="fafaIcon">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a></li>
          <li> 
            <div><Link className="loginButton" to="/login">Login</Link></div>
          </li>
          </ul>
        </div>     
      </nav>
    )
  }

  hero() {
    return (
      <div className="hero">
        <h1 className="heroHeader">It's time to ditch Skype and TeamSpeak.</h1>
        <p className="heroText">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.
            <br/>
            Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.
        </p>
        <div className="heroButtons">
          <Link className="demoLogin" to="/channels/@me" onClick={this.demoLogin} >Login as demo user</Link>
          <a className="discordLink" href="https://discordapp.com/">Visit actual Discord</a>
        </div>
      </div>
    )
  }
  images() {
    // Order of the more unique images is important
    return (
      <div className="splashImages">
        <div className="splash-shadow"></div>
        <img className="x0 splashShape" src={window.xURL} />
        <img className="x1 splashShape" src={window.xURL} />

        <img className="o0 splashShape" src={window.oURL} />
        <img className="o1 splashShape" src={window.oURL} />
        <img className="o2 splashShape" src={window.oURL} />

        <img className="dot0 splashShape" src={window.dotURL} />
        <img className="dot1 splashShape" src={window.dotURL} />
        <img className="dot2 splashShape" src={window.dotURL} />
        <img className="dot3 splashShape" src={window.dotURL} />
        <img className="dot4 splashShape" src={window.dotURL} />

        <img className="square0 splashShape" src={window.squareURL} />
        <img className="square1 splashShape" src={window.squareURL} />
        <img className="square2 splashShape" src={window.squareURL} />

        <img className="tri0 splashShape" src={window.triURL} />
        <img className="tri1 splashShape" src={window.triURL} />
        <img className="tri2 splashShape" src={window.triURL} />

        <img className="bomb" src={window.bombURL} alt="bomb" />
        <img className="coin0" src={window.coinURL} />
        <img className="coin1" src={window.coinURL} />

        <img className="cartridge" src={window.cartridgeURL} alt="cartridge" />
        <img className="spawnerbox" src={window.spawnerboxURL} alt="spawnerbox" />
        <img className="monitor" src={window.monitorURL} alt="monitor" />
        <img className="shield" src={window.discURL} alt="shield" />
        <img className="laptop" src={window.laptopURL} alt="laptop" />
        <img className="vial" src={window.vialURL} alt="vial" />
        <img className="android" src={window.androidURL} alt="android" />
        <img className="iphone" src={window.iphoneURL} alt="iphone" />
        <img className="controller" src={window.controllerURL} alt="controller" />
        <img className="headphones" src={window.headphonesURL} alt="headphones" />
      </div>
    )
  }

  footer() {
    return (
      <>
        <div className="footerLeft">
          <h2>Ready to try Harmony? It's free!</h2>
          <h3>JOIN JUST ONE DEVELOPER TODAY</h3>
        </div>
        <div className="footerRight">
          <Link className="footerRegister" to="/register" >Sign Up Now</Link>
        </div>
      </>
    )
  }
  render() {
    return (
      <section className="splash">
        <section className="header">
          {this.navbar()}
        </section>
        <section className="mainContent">
          {this.hero()}
          {this.images()}
        </section>
        <section className="splash-footer">
          {this.footer()}
        </section>
      </section>
    )
  }

  
}

export default Splash;