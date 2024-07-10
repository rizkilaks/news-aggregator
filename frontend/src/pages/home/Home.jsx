import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import NewsSources from "../../components/newsSources/NewsSources";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <NewsSources />
      <Footer />
    </div>
  );
};

export default Home;
