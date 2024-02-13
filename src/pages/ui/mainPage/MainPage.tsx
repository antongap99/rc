import React from 'react';
import { Link } from "react-router-dom";
const MainPage = () => {
    return (
        <div>
            MainPage
            <Link to={'/about'}>О компании</Link>
        </div>
    );
};

export default MainPage;