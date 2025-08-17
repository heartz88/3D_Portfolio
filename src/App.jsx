import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// Keep critical above-the-fold components as regular imports
import { Hero, Navbar } from "./components";

// Lazy load heavy/below-the-fold components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Tech />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Works />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Feedbacks />
        </Suspense>
        
        <div className="relative z-0">
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;