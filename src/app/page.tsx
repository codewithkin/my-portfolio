import Header from "@/components/home/Header";
import Mission from "@/components/home/Mission";
import MyProcess from "@/components/home/MyProcess";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";

function Home() {
  return (
    <>
      <Header />
      <Mission />
      <Services />
      <Testimonials />
      <Projects />
      <MyProcess />
    </>
  );
}

export default Home;
