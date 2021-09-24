
import logo from '../assets/imgs/logo.png';
import '../App.css';

export function HeaderBar(): JSX.Element {
    return <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark flex-column flex-sm-row">
            <a className="navbar-brand" href="https://whitneyto.github.io/FirstProject/"><img src={logo} alt="" /> </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="https://whitneyto.github.io/FirstProject/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
}