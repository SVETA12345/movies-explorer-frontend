import './AboutProject.css';
function AboutProject() {
  return (
    <section className='aboutproject'>
        <h2 className='aboutproject__title'> О проекте</h2>
        <ul className='aboutproject__container'>
            <li className='aboutproject__column'>
                <h3 className='aboutproject__subtitle'>Дипломный проект включал 5 этапов</h3>
                <p className='aboutproject__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </li>
            <li className='aboutproject__column'>
                <h3 className='aboutproject__subtitle'>На выполнение диплома ушло 5 недель</h3>
                <p className='aboutproject__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </li>
        </ul>
            <div className='aboutproject__stage'>
                <div className='another-stage another-stage_back'>
                    <p className='aboutproject__another-stage aboutproject__another-stage_back-week'>1 неделя</p>
                    <p className='aboutproject__another-stage aboutproject__another-stage_back_paragraph'>Back-end</p>
                </div>
                <div className='aboutproject__front'>
                    <p className='aboutproject__another-front aboutproject__another-front_week'>4 недели</p>
                    <p className='aboutproject__another-front aboutproject__another-front_paragraph'>Front-end</p>
                </div>
            </div>
    </section>
  );
}

export default AboutProject;