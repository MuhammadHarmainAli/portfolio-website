import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation"
import { Project } from "./components/Project";
import { ScrollToTop } from "./components/ScrollToTop";
import { Skill } from "./components/Skill";
import { useInterSectionObserver } from "./hooks/useInterSectionObserver"
import { useScrollToTop } from "./hooks/useScrollToTop"


const App = () => {
  const hasAnimated = useInterSectionObserver();
  const showScrollTop = useScrollToTop();

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation/>
      <Hero hasAnimated={hasAnimated}/>
      <About hasAnimated={hasAnimated}/>
      <Project hasAnimated={hasAnimated}/>
      <Skill hasAnimated={hasAnimated}/>
      <Contact hasAnimated={hasAnimated}/>
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop}/>
    </div>
  )
}

export default App