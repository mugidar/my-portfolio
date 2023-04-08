import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from "styled-components";
function App() {
  const Container = styled.div`
    height: 100vh;
    background-color: white;
    background: linear-gradient(45deg, #6500bdce, #000000bd);
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    background-repeat: no-repeat;
    background-size: cover;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
