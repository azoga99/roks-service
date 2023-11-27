import { NavLink } from "react-router-dom";
import ImageBuild from './../../img/build/photo_build.png';
import './CardBuild.css';

function CardsBuild() {
    return (
        <NavLink to="/monitoring" className="linkCardBuild">
            <div class="main-card-item">
                <img class="main-card-item-img" src={ImageBuild} alt="picture" />
                <h4 class="main-card-item-h4">Киселев Лев Георгиевич</h4>
                <p class="main-card-item-text">Закреплено: 20 зданий</p>
            </div>
        </NavLink>
    )
}

export default CardsBuild;