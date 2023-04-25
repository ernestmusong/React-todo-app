import { Link, Outlet } from 'react-router-dom';

const About = () => (
  <>
    <h1>About page.</h1>
    <div className="about">
      <ul className="about_list">
        <li>
          <Link to="about-app">About app</Link>
        </li>
        <li>
          <Link to="about-developer">About developer</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  </>
);
export default About;
