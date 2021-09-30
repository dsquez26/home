import "./HomePage.css";
import onlineDr from "../../images/onlineDr.jpg";
import CardHolder1 from "../../Components/CardHolder1/CardHolder1";


const HomePage = () => {
  return (
    <>
      <div
        className="background-wrapper-home"
        style={{ backgroundImage: `url(${onlineDr})` }}
      >
      </div>
      <CardHolder1 />
      <CardHolder1 />
          </>
  );
};

export default HomePage;
