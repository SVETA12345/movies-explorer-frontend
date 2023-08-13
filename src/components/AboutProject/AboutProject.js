import './AboutProject.css';
function AboutProject() {
  return (
    <section className='about-project'>
        <h2 className='about-project__title'> О проекте</h2>
        <div className='about-project__container'>
            <div className='about-project__column'>
                <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                <p className='about-project__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className='about-project__column'>
                <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                <p className='about-project__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
            <div className='about-project__stage'>
                <div className='about-project__back'>
                    <div className='about-project__back_week'>1 неделя</div>
                    <p className='about-project__back_paragraph'>Back-end</p>
                </div>
                <div className='about-project__front'>
                    <div className='about-project__front_week'>4 недели</div>
                    <p className='about-project__back_paragraph'>Front-end</p>
                </div>
            </div>
    </section>
  );
}

export default AboutProject;