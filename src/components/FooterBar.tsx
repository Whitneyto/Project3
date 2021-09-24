import '../assets/stylesheet/footer.css'
import logoIcon from '../assets/imgs/logo.png'
import githubIcon from '../assets/imgs/github.png'
import locationIcon from '../assets/imgs/location.png'
import mailIcon from '../assets/imgs/mail.png'
import phoneIcon from '../assets/imgs/phone.png'


export function FooterBar(): JSX.Element {
    return <div className = "footer">
        <div className="footer-row-all">
            <div className="footer-block">
                <img src={logoIcon} className="footer-logo"/>
                <p>My First Project</p>
            </div>
            <div className="footer-block">
                <ul className="footer-list-1">


                    <h4>Navigations</h4>
                    <li className="row-item">
                        <a className="footer-link" href="https://whitneyto.github.io/FirstProject/"> Home</a>
                    </li>
                    <li className="row-item">
                        <a className="footer-link" href="">Projects</a>
                    </li>
                    <li className="row-item">
                        <a className="footer-link" href="#"> About</a>
                    </li>
                    <li className="row-item">
                        <a className="footer-link" href="#">Contacts</a>
                    </li>
                </ul>
            </div>
            <div className="footer-block">
                <ul className="footer-list-2">


                    <h4>Projects</h4>
                    <li className="row-item">
                        <a className="footer-link" href="#">Project 1</a>
                    </li>
                    <li className="row-item">
                        <a className="footer-link" href="#">Project 2</a>
                    </li>
                    <li className="row-item">
                        <a className="footer-link" href="#"> Project 3</a>
                    </li>
                    <li className="row-item">
                        <a className="footer-link" href="#">Project 4</a>
                    </li>
                </ul>
            </div>

            <div className="footer-block">
                <ul className="footer-list-3">


                    <h4>Contacts</h4>
                    <li className="row-item">
                        <img src={locationIcon}/>
                        <a className ="footer-link" href="https://www.udel.edu/"> University of Delaware</a>
                    </li>
                    <li className="row-item">
                        <img src={mailIcon}/>
                        <a className ="footer-link" href="mailto:nguyetto@udel.edu"> nguyetto @udel.edu</a>
                    </li>
                    <li className="row-item">
                        <img src={githubIcon}/>
                        <a className ="footer-link" href="https://github.com/Whitneyto/FirstProject"> Github Page</a>
                    </li>
                    <li className="row-item">
                        <img src={phoneIcon}/>
                        <a className ="footer-link" href="tel:+13028039795">+1 (###) ### ####</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}