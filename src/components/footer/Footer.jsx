import './Footer.css'
import ClockIcon from './../../img/icons/clock.svg'
import EmailIcon from './../../img/icons/email.svg'
import GeoIcon from './../../img/icons/geo.svg'
import PhoneIcon from './../../img/icons/phone.svg'
import LogoFooter from './../../img/logo/logo_footer.svg'

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-content-first">
                    <div class="footer-content-first-logoOffer">
                        <img class="footer-content-first-logoOffer-img" src={LogoFooter} alt="" />
                            <p class="footer-content-first-logoOffer-text">Услуги энергоменеджмента для организаций<br />и жителей Пермского края</p>
                    </div>
                    <div class="footer-content-firts-navigation">
                        <p class="footer-content-firts-navigation-text">Навигация</p>
                        <nav class="footer-content-firts-navigation-nav">
                            <li class="footer-content-firts-navigation-nav-li">Компания</li>
                            <li class="footer-content-firts-navigation-nav-li">Реквизиты компании</li>
                            <li class="footer-content-firts-navigation-nav-li">Новости</li>
                            <li class="footer-content-firts-navigation-nav-li">Партнёрам</li>
                            <li class="footer-content-firts-navigation-nav-li">Контакты</li>
                        </nav>
                    </div>
                    <div class="footer-content-first-contact">
                        <h4 class="footer-content-first-contact-headline">Контакты</h4>
                        <div class="footer-content-first-contact-list">
                            <div class="footer-content-first-contact-list-item">
                                <img class="footer-content-first-contact-list-item-img" src={PhoneIcon} alt="phone" />
                                    <div class="footer-content-first-contact-list-item-paragraph">
                                        <h4 class="footer-content-first-contact-list-item-paragraph-headline">Телефон:</h4>
                                        <p class="footer-content-first-contact-list-item-paragraph-text">+7 912 866-01-66</p>
                                    </div>
                            </div>
                            <div class="footer-content-first-contact-list-item">
                                <img class="footer-content-first-contact-list-item-img" src={EmailIcon} alt="email" />
                                    <div class="footer-content-first-contact-list-item-paragraph">
                                        <h4 class="footer-content-first-contact-list-item-paragraph-headline">Email:</h4>
                                        <p class="footer-content-first-contact-list-item-paragraph-text">info@roksperm.ru</p>
                                    </div>
                            </div>
                            <div class="footer-content-first-contact-list-item">
                                <img class="footer-content-first-contact-list-item-img" src={GeoIcon} alt="geo" />
                                    <div class="footer-content-first-contact-list-item-paragraph">
                                        <h4 class="footer-content-first-contact-list-item-paragraph-headline">Адрес:</h4>
                                        <p class="footer-content-first-contact-list-item-paragraph-text">г. Пермь, ул. Советская, 51А/2, офис 207</p>
                                    </div>
                            </div>
                            <div class="footer-content-first-contact-list-item">
                                <img class="footer-content-first-contact-list-item-img" src={ClockIcon} alt="clock" />
                                    <div class="footer-content-first-contact-list-item-paragraph">
                                        <h4 class="footer-content-first-contact-list-item-paragraph-headline">Часы работы:</h4>
                                        <p class="footer-content-first-contact-list-item-paragraph-text">с 9:00 до 18:00</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-content-second">
                    <div class="footer-content-second-content">
                        <p class="footer-content-second-content-text">Все права защищены © 2022—2023 ООО «РОКС»</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;