import { 
  Hero, About, NavBar, 
  Services, Contact, Event, 
  Footer 
} from "../components";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Event />
      <Footer />
    </>
  );
}
