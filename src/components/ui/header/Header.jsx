import logo from '../../../logo.svg';
import './Header.css';
import ListElement from "./ListElement";
import Button from "./Button";

function Header() {
    let obj = {
        name: "Login"
    }

    return (
    <header className="Header">
        <ul>
            <ListElement value={
                <img src={logo} className="Header-logo" alt="logo"/>
            }/>
            <ListElement value="BenefitBistro" />
        </ul>

        {/* Использование второго типа синтекса через Children из React*/}
        <Button onClick={() => console.log('Logging in')}>{obj}</ Button>
    </header>
    );
}

export default Header;
