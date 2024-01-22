import Title from "../components/Title";
import "../App.css";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="home-bg">
      <Title
        titleStyle="one"
        title="HI, I'M A FREELANCER"/>
        <Title titleStyle="two" title="Design & Developer" />
      <Title titleStyle="three" title="based in Los Angeles, USA." />

      <Button btnStyle="btnOne"  btnTitle="View My Works"/>
    </div>
  );
};

export default Home;
