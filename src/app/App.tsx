import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { useLoadSequence } from '../components/hooks/load_sequence/hook';
import { useWindowSize } from '../components/hooks/window_size/hook';
import { useInnerPosition } from '../components/hooks/inner_position/hook';

import NavBar from '../components/estructure/nav_bar/component';
import Footer from '../components/estructure/footer/index';
import LoadingPage from '../components/estructure/loading_page/element';
import Body from '../components/estructure/body/index';

import './App.css';

function App() {
  const [isFetch, setIsFetch] = useState(false), [sequenceAnimation, setSequenceAnimation] = useState([]),
        [animationFinished, setAnimationFinished] = useState(false);

  const { innerPosition } = useInnerPosition();
  const { windowSize } = useWindowSize();

  const fetchingSequenceArray = useLoadSequence(0, setSequenceAnimation, 96, setIsFetch);

  return (
    <AnimatePresence>
      {!isFetch ? (
        <motion.div className="loader-container" key='loader'><LoadingPage animationFinished={animationFinished} setAnimationFinished={setAnimationFinished} /></motion.div>
      ) : 
      !animationFinished ? <></> : (
        <div className="App">
          <p className="text-black text-center font-bold">{windowSize.width}x{windowSize.height}</p>
          <NavBar />
          <Body innerPosition={innerPosition} sequenceAnimation={sequenceAnimation} />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
