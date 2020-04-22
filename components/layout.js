import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  animation: border 0.75s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
  animation-delay: 100ms;
  border: 10px solid #434343;
  border-left-width: 50vw;
  border-right-width: 50vw;
  min-height: 100vh;
  width: 100%;
  padding: 3rem 1rem 6rem;
  margin: 0 auto;

  > div,
  > header,
  > main {
    margin: 0 auto;
    padding: 32px;
    width: 91.666%;
    max-width: 1200;
    opacity: 0;
    animation: opacity 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
    animation-delay: 500ms;
  }

  a {
    line-height: 1.5;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .headerImage {
    width: 6rem;
    height: 6rem;
  }

  .headerHomeImage {
    width: 8rem;
    height: 8rem;
  }

  .backToHome {
    margin: 3rem 0 0;
  }
`

const name = 'Roberto Lucas'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home, title }) {
  return (
    <LayoutContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{`${title} | Next.js Sample Website`}</title>
      </Head>
      <header className="header">
        {home ? (
          <>
            <img
              src="/images/profile.jpeg"
              className={`headerHomeImage ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpeg"
                  className={`headerImage ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="headingLg">
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="backToHome">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </LayoutContainer>
  )
}
