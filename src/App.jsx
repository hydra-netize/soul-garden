import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SceneOne from './components/SceneOne';
import SceneTwo from './components/SceneTwo';
import SceneThree from './components/SceneThree';
import SceneFour from './components/SceneFour';
import SceneFive from './components/SceneFive';
import SceneSix from './components/SceneSix';
import SceneEight from './components/SceneEight';

// Explicit, ordered list of scene keys. Using an ordered array (instead of a
// bare numeric switch) makes advancing robust and removes off-by-one / missing
// case bugs. Note: Scene 6 embeds Scene 7 (the modal) itself and, once the modal
// is closed, advances the flow. That advance is intentionally treated as landing
// on the final closing scene (Scene 8) rather than rendering a standalone Scene 7.
const SCENES = [
  { key: 'one', Component: SceneOne, propName: 'onComplete' },
  { key: 'two', Component: SceneTwo, propName: 'onComplete' },
  { key: 'three', Component: SceneThree, propName: 'onComplete' },
  { key: 'four', Component: SceneFour, propName: 'onComplete' },
  { key: 'five', Component: SceneFive, propName: 'onComplete' },
  { key: 'six', Component: SceneSix, propName: 'onAdvance' },
  // Scene 6's modal-close transition (previously the missing "case 7") lands here.
  { key: 'eight', Component: SceneEight, propName: null },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(prev => Math.min(prev + 1, SCENES.length - 1));
  };

  const { key, Component, propName } = SCENES[index];
  const props = propName ? { [propName]: handleNext } : {};

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <Component key={key} {...props} />
      </AnimatePresence>
    </div>
  );
}
