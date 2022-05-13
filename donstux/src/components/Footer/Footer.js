import React from 'react';
import style from './Footer.module.css';
import { Button } from '../Button';
import { FooterAbout } from '../FooterAbout/FooterAbout';
import location_icon from '../../assets/location_icon.svg';
import phone_icon from '../../assets/phone_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import facebook_icon from '../../assets/facebook_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import whatsapp_icon from '../../assets/whatsapp_icon.png';
import { btnStateStorage } from '../../storage/PageState';
import { useNavigate } from 'react-router-dom';


export const Footer = () => {

    const changeNavStyle = (btnType) => {
        btnStateStorage.dispatch({type:btnType})
    }

    const navigate=useNavigate()

    return (
        <footer className={style.footer}>
            <div className={style.about}>
                <FooterAbout textTitle='Адрес:' text='г. Город, ул. Улица 11' image={location_icon}/>
                <FooterAbout textTitle='Тел:' text='+7 (111) 111 11 11' image={phone_icon}/>
                <FooterAbout textTitle='E-Mail:' text='pompom@pom.com' image={mail_icon}/>
            </div>
            <div className={style.socialNetwork}>
                <img src={facebook_icon} alt='facebook'/>
                <img src={whatsapp_icon} alt='whatsapp'/>
                <img src={twitter_icon} alt='twitter'/>
                <img src={instagram_icon} alt='instagram'/>
            </div>
            <Button text='Выбрать питомца' fontSize={20} onClick={()=>{changeNavStyle("ALLPETS_PAGE"); navigate("/all")}}/>
        </footer>
    )
}