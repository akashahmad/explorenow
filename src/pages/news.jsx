import React from 'react'
import Layout from '../components/layout'
import Ads2 from '../components/ads2'
import NewsLetter from '../components/newsLetter'
import Blogs from '../components/blogs/blogs'
import {H} from '@atoms'
const News = () => {
    return (
        <>
        <Layout>
          <div className="container mx-auto py-5">
          <H HeadingMainBlue>News</H>
            <div className="flex">
              <Blogs />
              <div className="w-2/12">
                <Ads2 />
                <NewsLetter />
              </div>
            </div>
          </div>
        </Layout>
      </>
    )
}

export default News
