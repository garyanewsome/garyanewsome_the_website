import React from 'react'

import * as styles from './body.module.css'

const Body = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.headline}>
          <h1>Gary A. Newsome</h1>
          <h2>Developer, Musician</h2>
          <h3>Creative type being...</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.contentBlock}>
            <div>Developer at</div>
            <a
              href="https://www.robotsandpencils.com/"
              className={[styles.rnpLink, styles.link].join(' ')}
              rel="noopener noreferrer"
              target="_blank"
            >
              Robots & Pencils
            </a>
          </div>
          <div className={styles.contentBlock}>
            <div>Music at</div>
            <a
              href="https://open.spotify.com/artist/5tWnRXHI8g2I0adOEzNh7X"
              className={[styles.spotifyLink, styles.link].join(' ')}
              rel="noopener noreferrer"
              target="_blank"
            >
              Spotify
            </a>
            <div>and</div>
            <a
              href="https://soundcloud.com/garyanewsome"
              className={[styles.soundCloudLink, styles.link].join(' ')}
              rel="noopener noreferrer"
              target="_blank"
            >
              SoundCloud
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
