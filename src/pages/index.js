import * as React from 'react'

// custom typefaces
import 'typeface-crushed'

import Layout from '../components/layout'
import Body from '../components/body'
import Footer from '../components/footer'
import Seo from '../components/seo'
import '../assets/css/index.css'

const IndexPage = () => (
  <Layout>
    <Seo />
    <Body />
    <Footer />
  </Layout>
)

export default IndexPage
