import './Header.css';
import Logo from '../Logo/Logo';
export default function Header () {
  return(
    <header>
      <Logo src={'../../../public/Logo.svg'} cor={'#c92071'}/>
    </header>
  );
}