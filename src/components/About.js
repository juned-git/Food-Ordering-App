import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About this page.</h1>
      <p>finding the path</p>
      <Outlet/>
    </div>
  );
};
export default About;
