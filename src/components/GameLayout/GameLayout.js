import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Logo from 'components/Logo/Logo';
import NetworkStatus from 'components/NetworkStatus/NetworkStatus';
import Score from 'components/Score/Score';
import React from 'react';
import { User } from 'react-feather';

import styles from './GameLayout.module.scss';

function GameLayout(props) {
  return (
    <div className={styles.question}>
      <Header>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.title}>
          <h1>NightClazz GraphQL</h1>
          <p>12 joueurs connectés</p>
        </div>
        <NetworkStatus online={true} />
      </Header>
      <div className={styles.main}>
        <div className="u-wrapper">{props.children}</div>
      </div>
      <Footer>
        <p className={styles.player}>
          <User />
          Papa roach
        </p>
        <Score />
      </Footer>
    </div>
  );
}

export default GameLayout;
