import React from 'react'
import Header from '../coman_componats/Header';
import Leandding from '../home_componats/Leandding';
import Achivement from '../home_componats/Achivement';
import Our_ai_tool from '../home_componats/Our_ai_tool';
import Priceing from '../home_componats/Priceing';
import Questions from '../home_componats/Questions';
import Banner from '../home_componats/Banner';

const Home = () => (
  <>
    <Header />
    <Leandding />
    <Achivement />
    {/* <Our_ai_tool/> */}
    <Priceing />
    <Questions />
    <Banner/>
  </>
)

export default Home;