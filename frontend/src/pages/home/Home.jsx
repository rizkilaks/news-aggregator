import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import NewsSources from "../../components/newsSources/NewsSources";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <NewsSources />
    </div>
  );
};

export default Home;
