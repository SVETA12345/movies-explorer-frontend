import './AboutMe.css';
import imgSveta from '../../images/sveta.jpg'
import strelka from '../../images/about-me__strelka.svg'
import { Link } from 'react-router-dom'; 
function AboutMe() {
  return (
      <section className='about-me'>
        <h2 className='about-me__title'>Студентка</h2>
        <div className='about-me__container'>
            <div>
                <h3 className='about-me__name'>Светлана</h3>
                <h4 className='about-me__subtitle'>Студентка, 18 лет</h4>
                <p className='about-me__paragraph'>В 2022 году я закончила Физико-технический лицей в Саратове и поступила в Москву. Сейчас я учусь в университете
                 "РГУ нефти и газа (НИУ) имени И.М. Губкина". Мне нравиться рисовать, танцевать, играть в волейбол. Чуть меньше года назад начала проходить курс по веб-разработке. Мне понравилось создавать сайты, верстать с макета. В дальнейшем буду искать стажировку в этом направлении.</p>
                <p className='about-me__git'>Github</p>           
            </div>
            <img src={imgSveta} alt='Света' className='about-me__img'/>
        </div>
        <h5 className='about-me__another-subtitle about-me__another-subtitle_portfolio'>Портфолио</h5>
        <ul className='about-me__list'>
            <li className='about-me__site'>
                <a href='https://sveta12345.github.io/how-to-learn/' className='about-me__link' target="_blank" rel="noopener noreferrer">
                    <p className='about-me__another-site about-me__another-site_title'>Статичный сайт</p>
                <img className='about-me__strelka' alt='strelka' src={strelka} /> 
                </a>           
            </li>
            <li className='about-me__site'>
                <a href='https://sveta12345.github.io/russian-travel/' className='about-me__link' target="_blank" rel="noopener noreferrer">
                    <p className='about-me__another-site about-me__another-site_title'>Адаптивный сайт</p>
                <img className='about-me__strelka' alt='strelka' src={strelka} /> 
                </a>           
            </li>
            <li className='about-me__site'>
                <a href='https://sveta12345.github.io/mesto/' className='about-me__link' target="_blank" rel="noopener noreferrer">
                    <p className='about-me__another-site about-me__another-site_title'>Одностраничное приложение</p>
                <img className='about-me__strelka' alt='strelka' src={strelka} /> 
                </a>           
            </li>
        </ul>
      </section>
  );
}

export default AboutMe;