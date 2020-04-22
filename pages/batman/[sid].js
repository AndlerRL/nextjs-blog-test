import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import fetch from 'isomorphic-unfetch'

const paragraph = {
  lineHeight: 1.5
}

const PostPage = ({ show }) => {
  const router = useRouter()

  return (
    <Layout title={show.name}>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        {
          show.image && (
            <figure style={{ height: 600, width: 600}}>
              <img src={show.image.original} style={{ width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%' }} />
            </figure>
          )
        }
        <div style={{ width: '50%'}}>
          <h1>{show.name}{` `}{`(${show.status})`}</h1>
          <p style={paragraph}>
            {show.summary.replace(/<[/]?[pb]>/g, '')}
          </p>
          <h5 onClick={() => router.back()} style={{ cursor: 'pointer' }}>
            Back to Batman Doc
          </h5>
        </div>
      </div>
    </Layout>
  )
}

PostPage.getInitialProps = async context => {
  const { sid } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${sid}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default PostPage