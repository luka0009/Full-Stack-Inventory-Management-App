import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import img from '../../assets/inv-img.png';

export default function Home() {
  return (
    <div className="home">
      <nav className="container --flex-between">
        <div className="logo">
          {" "}
          <RiProductHuntLine size={55} />{" "}
        </div>
      
      <ul className="home-links">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <button className="--btn --btn-primary">
            <Link to="/login">Login</Link>
          </button>
        </li>
        <li>
          <button className="--btn --btn-primary">
            <Link to="/dashboard">Dashboard</Link>
          </button>
        </li>
      </ul>
      </nav>
      <section className="container hero">
        <div className="hero-text">
            <h2>Inventory & Stock Management</h2>
            <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
          <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>
        <div className="hero-image">
            <img src={img} alt="Inventory" />
        </div>
      </section>
    </div>
  );
}

function NumberText({num, text}) {
    return (
        <div className="--mr">
            <h3 className="--color-white">{num}</h3>
            <p className="--color-white">{text}</p>
        </div>
    )
}