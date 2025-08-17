import { lazy } from 'react';

// Keep critical above-the-fold components as regular imports
import Hero from './Hero';
import Navbar from './Navbar';

// Lazy load heavy components that are below the fold
const About = lazy(() => import('./About'));
const Tech = lazy(() => import('./Tech'));
const Experience = lazy(() => import('./Experience'));
const Works = lazy(() => import('./Works'));
const Feedbacks = lazy(() => import('./Feedbacks'));
const Contact = lazy(() => import('./Contact'));

// Lazy load all canvas components (these are the heaviest)
const EarthCanvas = lazy(() => import('./canvas/Earth'));
const BallCanvas = lazy(() => import('./canvas/Ball'));
const ComputersCanvas = lazy(() => import('./canvas/Computers'));
const StarsCanvas = lazy(() => import('./canvas/Stars'));

export {
  About, BallCanvas,
  ComputersCanvas, Contact,
  EarthCanvas, Experience, Feedbacks, Hero,
  Navbar, StarsCanvas, Tech, Works
};
