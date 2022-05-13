import React from 'react';
import style from './Main.module.css';
import { Button, MainDogCard } from '../../components';
import image_left from '../../assets/main_ourInfo_left.png';
import image_right from '../../assets/main_ourInfo_right.png';
import main_reasonImageRight from '../../assets/main_reasonImageRight.png';
import main_reasonImageMid from '../../assets/main_reasonImageMid.png';
import main_reasonImageLeft from '../../assets/main_reasonImageLeft.png';
import sheltiTest from '../../assets/Shelti.png';
import main_articleImageLeft from '../../assets/main_articleImageLeft.png';
import main_articleImageRight from '../../assets/main_articleImageRight.png';
import { PageBase } from '../PageBase';
import {useNavigate} from 'react-router-dom'
import { btnStateStorage } from '../../storage/PageState';

export const Main = () => {

    const changeNavStyle = (btnType) => {
        btnStateStorage.dispatch({type:btnType})
    }

    const navigate=useNavigate()
    return (
        <PageBase>
            <div className={style.main}>
                <div className={style.ourShop}>
                    <div className={style.ourInfo}>
                        <p className={style.ourTitle}>наш магазин</p>
                        <p className={style.ourText}>а это описание нашего магазина.
                            И что-то про собак. Они хорошие. Этот текст довольно длинный.
                            Наверное, еще подлинее. Купите себе собаку.</p>
                        <p className={style.ourText}>а вот второй абзац. Он короткий</p>
                        <div className={style.ourInfoButtonWrapper}><Button text='Выбрать питомца' fontSize={20} onClick={()=>{changeNavStyle("ALLPETS_PAGE"); navigate("/all")}} /></div>
                    </div>
                    <div className={style.shopPictures}>
                        <img className={style.imgLeft} src={image_left} alt='img_left' />
                        <img className={style.imgRight} src={image_right} alt='img_right' />
                    </div>
                </div>
                <div className={style.reasonToChoose}>
                    <div className={style.reasonCard}>
                        <img src={main_reasonImageLeft} alt='main_reasonImageLeft' />
                        <p id={style.reasonTextLeft}>Здесь текст первой причины выбора нашего магазина</p>
                    </div>
                    <div className={style.reasonCardMid}>
                        <img src={main_reasonImageMid} alt='main_reasonImageMid' />
                        <p id={style.reasonTextMid}>Здесь написан текст второй причины</p>
                    </div>
                    <div className={style.reasonCard + ' ' + style.reasonCardRight}>
                        <p id={style.reasonTextRight}>Третья причина почему мы хороши</p>
                        <img src={main_reasonImageRight} alt='main_reasonImageRight' />
                    </div>
                </div>
                <div className={style.reasonToChoose_mobile}>
                    <img src={main_reasonImageRight} className={style.reasonImageRight} alt='main_reasonImageRight' />
                    <div className={style.reasonText_mobile}>
                        <p>Здесь текст первой причины выбора нашего магазина</p>
                        <p>Здесь написан текст второй причины</p>
                        <p>Третья причина почему мы хороши</p>
                    </div>
                </div>
                <div className={style.dogCategory}>
                    <p>Породы собак для семей с детьми</p>
                    <div className={style.dogShowcase}>
                        <MainDogCard image={sheltiTest} text='Шелти' />
                        <MainDogCard image={sheltiTest} text='Шелти' />
                        <MainDogCard image={sheltiTest} text='Шелти' />
                        <MainDogCard image={sheltiTest} text='Шелти' />
                        <MainDogCard image={sheltiTest} text='Шелти' />
                        <MainDogCard image={sheltiTest} text='Шелти' />
                    </div>
                </div>
                <div className={style.articles}>
                    <div className={style.articleCardLeft}>
                        <img src={main_articleImageLeft} />
                        <div>
                            <p>Что нужно знать перед приобретением собаки?</p>
                            <ul>
                                <li>Возможные трудности</li>
                                <li>Небоходимые вещи</li>
                                <li>Воспитание</li>
                                <li>Подбор корма</li>
                            </ul>
                            <a href=''>Читать далее</a>
                        </div>
                    </div>
                    <div className={style.articleCardRight}>
                        <div>
                            <p>Еще какая-то статья</p>
                            <a href=''>Читать далее</a>
                        </div>
                        <img src={main_articleImageRight} />
                    </div>
                </div>
                <div className={style.articles_mobile}>
                    <div className={style.articleTop_mobile}>
                        <p>Что нужно знать перед приобретением собаки?</p>
                        <div>
                            <img src={main_articleImageLeft} />
                            <div className={style.articleTop_text}>
                                <ul>
                                    <li>Возможные трудности</li>
                                    <li>Небоходимые вещи</li>
                                    <li>Воспитание</li>
                                    <li>Подбор корма</li>
                                </ul>
                                <a href=''>Читать далее</a>
                            </div>
                        </div>
                    </div>
                    <div className={style.articleBottom_mobile}>
                        <div className={style.articleBottom_mobile_text}>
                            <p>Еще какая-то статья</p>
                            <a href=''>Читать далее</a>
                        </div>
                        <div className={style.article_mobile_image}>
                            <img src={main_articleImageRight} />
                        </div>
                    </div>
                </div>
            </div>
        </PageBase>
    )
}