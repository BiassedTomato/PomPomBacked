import React from 'react';
import style from './DogInfoPage.module.css';
import returnBackIcon from '../../assets/arrow_back.svg';
import dogProfilePic from '../../assets/dogProfilePic.png';
import { Button, DogInfoBox } from '../../components'; //
import { useState, useEffect } from 'react';
import { getImage } from '../../API/dogapi';
import { PageBase } from '../PageBase';
import PetCard from '../../components/PetCard/PetCard.js';
import { useParams } from 'react-router-dom';

export const DogInfoPage = (props) => {

    const [imgSrc, setImg] = useState()

    useEffect(() =>
        getImage().then(data => setImg(data.message), data => setImg("")),
        [])

    // const dogPictureStyle = {
    //     background: `url(${dogProfilePic}) no-repeat center`,
    //     backgroundSize: 'cover'
    // }

    const dogPictureStyle = {
        backgroundImage: `url(${imgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const {id}=useParams()

    console.log(id)

    return (
        <PageBase>
            <div className={style.dogInfoPage}>
                <div className={style.returnBack}>
                    <a className={style.returnBackButton} href=''>
                        <img src={returnBackIcon} alt='returnBackIcon' />
                        <p>Назад</p>
                    </a>
                </div>
                    <div className={style.dogInfo}>
                        <div className={style.dogPicture} style={dogPictureStyle}>
                            <div className={style.dogPictureButtons}>
                                <a href=''></a>
                                <a href=''></a>
                                <a href=''></a>
                                <a href=''></a>
                            </div>
                        </div>
                        <div className={style.dogProfile}>
                            <div className={style.dogMainInfo}>
                                <div className={style.infoBox}>
                                    <div className={style.dogText}>
                                        <p className={style.dogName}>Самоед щенок</p>
                                        <p className={style.dogDescription}>Дружелюбная, веселая, добрая к другим собакам и детям</p>
                                    </div>
                                    <div className={style.dogTextBottom}>
                                        <p className={style.dogPrice}>40 000 ₽</p>
                                        <Button text='Записаться на просмотр' fontSize={20} isBorder={true} />
                                    </div>
                                </div>
                            </div>
                            <div className={style.addInfo}>
                                <p>Дополнительная информация:</p>
                                <p className={style.addInfoText}>Размер взрослой собаки: 50-60см, шерсть гипоаллегренная</p>
                            </div>
                        </div>
                        <div className={style.dogProfile_mobile}>
                            <div className={style.dogMainInfo}>
                                <div className={style.infoBox}>
                                    <div className={style.dogText}>
                                        <div>
                                            <p className={style.dogName}>Самоед щенок</p>
                                            <p className={style.dogDescription}>Дружелюбная, веселая, добрая к другим собакам и детям</p>
                                        </div>
                                        <p className={style.dogPrice}>40 000 ₽</p>
                                    </div>


                                    <div className={style.dogTextBottom}>
                                        <Button text='Записаться на просмотр' fontSize={12} isBorder={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className={style.dogParams}>
                    <DogInfoBox title='Порода' info='Самоед' />
                    <DogInfoBox title='Пол' info='Женский' />
                    <DogInfoBox title='Возраст' info='4 месяца' />
                    <DogInfoBox title='Окрас' info='Белый' />
                    <DogInfoBox title='Длина шерсти' info='Длинная' />
                    <DogInfoBox title='Размер' info='30 см' />
                    <DogInfoBox title='Вес' info='25 кг' />
                </div>
                <div className={style.dogHistory}>
                    <Button text='Посмотреть родословную' fontSize={16} />
                    <Button text='Вакцинация' fontSize={16} />
                </div>
                <div className={style.dogHistory_mobile}>
                    <Button text='Посмотреть родословную' fontSize={11} />
                    <Button text='Вакцинация' fontSize={11} />
                </div>
                <div className={style.addInfo_mobile}>
                    <p>Дополнительная информация:</p>
                    <p className={style.addInfoText}>Размер взрослой собаки: 50-60см, шерсть гипоаллегренная</p>
                </div>
                <div className={style.reccomendations}>
                    <div className={style.sepLine}></div>
                    <div className={style.similar}>
                        <p>Похожие объявления</p>
                        <div className={style.dogShowcase}>
                            <PetCard/>
                            <PetCard/>
                            <PetCard/>
                        </div>
                    </div>
                    <div className={style.watched}>
                        <p>Уже просмотренные</p>
                        <div className={style.dogShowcase}>
                            <PetCard/>
                            <PetCard/>
                            <PetCard/>
                        </div>
                    </div>
                </div>
            </div>
        </PageBase>
    )
}