import React from 'react';
import type { NextPage } from 'next';

import { MainGrid } from '../imports/components/page-grid';
import Head from 'next/head';


const Home: NextPage = () => {
  return <>
    <Head>
      <title>Магазин WineStyle: купить вино и алкоголь. Интернет-сайт</title>
    </Head>
    <MainGrid />
  </>;
}

export default Home
