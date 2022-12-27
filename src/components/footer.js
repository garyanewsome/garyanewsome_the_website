import React from 'react'

import { LinkedIn } from './social/LinkedIn'
import { GitHub } from './social/GitHub'
import { Twitter } from './social/Twitter'
import { Spotify } from './social/Spotify'
import { SoundCloud } from './social/SoundCloud'

import * as styles from './footer.module.css'

const size = 40

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://www.linkedin.com/in/garyanewsome" rel="noopener noreferrer" target="_blank">
        <LinkedIn size={size} />
      </a>
      <a href="https://www.github.com/garyanewsome" rel="noopener noreferrer" target="_blank">
        <GitHub size={size} />
      </a>
      <a href="https://twitter.com/garyanewsome" rel="noopener noreferrer" target="_blank">
        <Twitter size={size} />
      </a>
      <a href="https://open.spotify.com/artist/5tWnRXHI8g2I0adOEzNh7X" rel="noopener noreferrer" target="_blank">
        <Spotify size={size} />
      </a>
      <a href="https://soundcloud.com/garyanewsome" rel="noopener noreferrer" target="_blank">
        <SoundCloud size={size} />
      </a>
    </div>
  )
}

export default Footer
