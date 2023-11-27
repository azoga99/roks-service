import './Header.css';
import ProfileIcon from './../../img/icons/profile.svg';
import LogoImage from './../../img/logo/logo_header.svg';

function Header () {
    return (
        <header className="header">
        <div className="header-menu">
            <img className="header-menu-logo" src={LogoImage} alt="logo"></img>
            <nav className="header-menu-pages">
                <a className="header-menu-pages-li">Компания</a>
                <a className="header-menu-pages-li">Новости</a>
                <a className="header-menu-pages-li">Партнерам</a>
                <a className="header-menu-pages-li">Контакты</a>
                <a className="header-menu-pages-li">Мониторинг</a>
            </nav>
            <div className="header-menu-account">
                <img className="header-menu-account-icon" src={ProfileIcon} alt="icon"></img>
                <p className="header-menu-account-text">Ростелеком</p>
                <button className="header-menu-account-bttn">Вход</button>
            </div>
        </div>
    </header>
    )
}

export default Header;