import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SceneOne from './components/SceneOne';
import SceneTwo from './components/SceneTwo';
import SceneThree from './components/SceneThree';
import SceneFour from './components/SceneFour';
import SceneFive from './components/SceneFive';
import SceneSix from './components/SceneSix';
import SceneSeven from './components/SceneSeven';
import SceneEight from './components/SceneEight';

export default function App() {
  const [scene, setScene] = useState(1);

  const handleNext = () => {
    setScene(prev => prev + 1);
  };

  // Determine which component and which props to pass based on scene
  let Component;
  let props = {};

  switch (scene) {
    case 1:
      Component = SceneOne;
      props = { onComplete: handleNext };
      break;
    case 2:
      Component = SceneTwo;
      props = { onComplete: handleNext };
      break;
    case 3:
      Component = SceneThree;
      props = { onComplete: handleNext };
      break;
    case 4:
      Component = SceneFour;
      props = { onComplete: handleNext };
      break;
    case 5:
      Component = SceneFive;
      props = { onComplete: handleNext };
      break;
    case 6:
      Component = SceneSix;
      props = { onAdvance: handleNext };
      break;
    case 8:
      Component = SceneEight;
      props = {};
      break;
    default:
      Component = SceneOne;
      props = { onComplete: handleNext };
  }

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <Component key={scene} {...props} />
      </AnimatePresence>
    </div>
  );
}
