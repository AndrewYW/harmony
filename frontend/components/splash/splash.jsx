import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

class Splash extends React.Component {

  componentDidMount() {

  }

  navbar() {
    return (
      <nav className="Navbar">
        <section className="navLeft">
          <div className="navLogo">
            <img src="/assets/full_logo_white.svg" />
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
        <a className="demoLogin" href="#">Login as Demo User</a>
        <a className="discordLink" href="https://discordapp.com/">Visit actual Discord</a>
      </section>
    )
  }
  images() {
    return (
      <section className="splashImages">
        <ul>
          <img className="x0" src="/assets/splash/x.svg" />
          <img className="x1" src="/assets/splash/x.svg" />
          <img className="x2" src="/assets/splash/x.svg" />

          <img className="o0" src="/assets/splash/o.svg" />
          <img className="o1" src="/assets/splash/o.svg" />
          <img className="o2" src="/assets/splash/o.svg" />

          <img className="dot0" src="/assets/splash/dot.svg" />
          <img className="dot1" src="/assets/splash/dot.svg" />
          <img className="dot2" src="/assets/splash/dot.svg" />
          <img className="dot3" src="/assets/splash/dot.svg" />
          <img className="dot4" src="/assets/splash/dot.svg" />

          <img className="square0" src="/assets/splash/square.svg" />
          <img className="square1" src="/assets/splash/square.svg" />
          <img className="square2" src="/assets/splash/square.svg" />

          <img className="tri0" src="/assets/splash/tri.svg" />
          <img className="tri1" src="/assets/splash/tri.svg" />
          <img className="tri2" src="/assets/splash/tri.svg" />

          <img className="coin0" src="/assets/splash/coin.svg" />
          <img className="coin1" src="/assets/splash/coin.svg" />
          <img className="coin1" src="/assets/splash/coin.svg" />

          <img className="android" src="/assets/splash/android.svg" alt="android" />
          <img className="iphone" src="/assets/splash/iphone.svg" alt="iphone" />
          <img className="controller" src="/assets/splash/controller.svg" alt="controller" />
          <img className="shield" src="/assets/splash/disc.svg" alt="shield" />
          <img className="cartridge" src="/assets/splash/gba_cartridge.svg" alt="cartridge" />
          <img className="headphones" src="/assets/splash/headphones.svg" alt="headphones" />
          <img className="laptop" src="/assets/splash/laptop.svg" alt="laptop" />
          <img className="monitor" src="/assets/splash/monitor.svg" alt="monitor" />
          <img className="spawnerbox" src="/assets/splash/spawnerbox.svg" alt="spawnerbox" />
          <img className="vial" src="/assets/splash/vial.svg" alt="vial" />
          <img className="bomb" src="/assets/splash/bomb.svg" alt="bomb" />
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