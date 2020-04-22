import React from 'react'
import Layout from '../../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

const postLink = {
  margin: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '3px 3px 15px 3px #2221',
  width: '91.666%',
  maxWidth: 400
}

const linkImg = {
  width: 200,
  height: 200,
  margin: '0 auto 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#757575'
}

const Styles = () => (
  <style jsx>{`
    a {
      color: lightblue;
    }
  `}
  </style>
)

const Text = styled.p`
  color: red;
`

const PostLink = ({ show }) => (
  <li style={postLink}>
    {
     /**
     Dynamic Routes with queries
     <Link href={`/post?title=${title}`}> // Title is a prop
        { title }
      </Link>
     **/
    }
    <figure style={linkImg}>
      <img src={show.image.medium} style={{ width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%' }} />
    </figure>
    <div style={{ width: '100%', maxWidth: 200, padding: '8px 32px'}}>
      <Link href={`/batman/[sid]`} as={`/batman/${show.id}`}>
        <a>
          { show.name }
        </a>
      </Link>
    </div>
  </li>
)

const IndexPage = ({ shows }) => {
  
  return (
    <Layout title="Batman Doc">
      <h1>Batman Series Documentation</h1>
      <ul style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}}>
        {
          shows.map(s => (
            <PostLink show={s} key={s.id} />
          ))
        }
      </ul>
    </Layout>
  )
}

IndexPage.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default IndexPage;
