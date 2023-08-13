import './Footer.css'
function Footer() {
    return (
      <footer className="footer">
        <div className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</div>
        <div className='footer__container'>
            <p className="footer__list_text">
                © {new Date().getFullYear()} Mesto Russia
            </p>
            <div className='footer__list'>
                <p className='footer__list_text'>Яндекс.Практикум</p>
                <p className='footer__list_text footer__list_text_git'>Github</p>
            </div>

        </div>
      </footer>
    );
  }
  
  export default Footer;