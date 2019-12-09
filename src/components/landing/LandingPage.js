import React from "react";
import { Link } from "react-router-dom";
import LandingPageNav from "./LandingPageNav";

const LandingPage = () => (
    <div>
        <LandingPageNav />
        <header id="showcase">
            <h1>Welcome To Hotel Phoenix</h1>
            <p>Where hospitality is Redefined</p>
                <Link to="/register" className="button">
                    <h5>Join Now</h5>
                </Link>
        </header>  
    </div>
)

export default LandingPage;
