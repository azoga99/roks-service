import { NavLink } from "react-router-dom";
import ImageProfile from './../../img/profile/photo_profile.png';
import './CardProfile.css';

function CardsProfile() {
    return (
        <NavLink>
            <div onclick="location.href='Build.html';" class="main-card-item">
                <img class="main-card-item-img" src={ImageProfile} alt="picture" />
                <h4 class="main-card-item-h4">Киселев Лев Георгиевич</h4>
                <p class="main-card-item-text">Закреплено: 20 зданий</p>
            </div>
        </NavLink>
    )
}

export default CardsProfile;