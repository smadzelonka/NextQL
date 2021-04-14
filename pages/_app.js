import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import { Container } from "react-bootstrap";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/shared/Hero";
import Footer from "@/components/shared/Footer";

function MyApp({ Component, pageProps }) {
  const isHompager = () => Component.name === "Home";
  return (
    <div className="portfolio-app">
      <Navbar />
      {isHompager() && <Hero />}
      <Container>
        <Component {...pageProps} />
      </Container>
      {isHompager() && <Footer />}
    </div>
  );
}

export default MyApp;
