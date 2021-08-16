import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import slide1 from '../assets/images/slide-01.jpg';
import slide2 from '../assets/images/slide-02.jpg';
import slide3 from '../assets/images/slide-03.jpg';
import './Home.css';

const items = [
  {
    src: slide1,
    altText: 'Slide 1',
    header: 'Step 1. Take the CO2 avatar test',
    caption: 'It is easy and free!'
  },
  {
    src: slide2,
    altText: 'Slide 2',
    header: 'Step 2. Spread the word!',
    caption: 'Share this with your friends to save the planet right now.'
  },
  {
    src: slide3,
    altText: 'Slide 3',
    header: 'Step 3. Reduce your carbon emissions with simple tips',
    caption: 'What about walking instead of driving today?'
  }
];

const Home = () => {
  return (
    <UncontrolledCarousel items={items} />
  );
}

export default Home;
