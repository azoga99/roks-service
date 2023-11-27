import { NavLink } from "react-router-dom";
import ImageProfile from './../../img/profile/photo_profile.png';
import './CardProfile.css';

function CardsProfile() {
    return (
        <NavLink to="/filterBuild" className="linkCard">
            <div className="main-card-item">
                <img className="main-card-item-img" src={ImageProfile} alt="picture" />
                <h4 className="main-card-item-h4">Киселев Лев Георгиевич</h4>
                <p className="main-card-item-text">Закреплено: 20 зданий</p>
            </div>
        </NavLink>
    )
}

export default CardsProfile;