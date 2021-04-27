import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styles from './Navbar.module.scss'
import Container from '../Container'

const activeLinkStyle = { color: '#ff4040' }
const navbarLinks = ['home', 'resume', 'projects', 'contact']
const socialLinks = [
  {
    url: 'https://www.linkedin.com/in/cindy-kim-924b48132/',
    icon: faLinkedinIn,
  },
  {
    url: 'https://twitter.com/kimsycindy',
    icon: faTwitter,
  },
]

const Navbar = () => (
  <nav className={styles.NavbarContainer}>
    <Container className={styles.Navbar}>
      <div>
        {navbarLinks.map(link => {
          if (link === 'home') {
            return (
              <Link
                className={styles.Link}
                activeStyle={activeLinkStyle}
                to="/"
                key="home"
              >
                {link}
              </Link>
            )
          }

          return (
            <Link
              className={styles.Link}
              activeStyle={activeLinkStyle}
              to={`/${link}`}
              partiallyActive={link === 'projects'}
              key={link}
            >
              {link}
            </Link>
          )
        })}
      </div>

      <div className={styles.NavbarRight}>
        {socialLinks.map(link => (
          <a
            className={styles.Link}
            href={link.url}
            key={link.url}
            style={{
              width: 14,
            }}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </Container>
  </nav>
)

export default Navbar
