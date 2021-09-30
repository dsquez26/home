import Application from "../../Components/Application/Application";
import "./CareersPage.css";
import runningSteps from "../../images/runningSteps.jpg";

const CareersPage = () => {
  return (
    <>
      <div
        className='background-wrapper-careers'
        style={{ backgroundImage: `url(${runningSteps})` }}
      ></div>
      <Application />
    </>
  );
};

export default CareersPage;
