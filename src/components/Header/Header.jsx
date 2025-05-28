import { Logo } from '../Logo/Logo';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { ShopCart } from '../ShopCart/ShopCart';
import './Header.css'

export const Header = () => {

  return(
    <>
    <header id="header">
      <div className='box-header'>
        <div className='box-header-children'>
          <Logo margin={'.5rem 0 0 .25rem'}/>
          <Input 
            width={'34.938rem'}
            height={'3.75rem'}
            margin={'0 3rem 0 1.688rem'}
            type={'text'}
            placeholder={'pesquisar produto...'}
            src={'../../../public/search.svg'}
          />
          <Useful
            value={'Cadastre-se'}
            margin={'1rem 0 0 0'}
            color={'#474747'}
            href={'#'}
            textDecoration={'underline'}
          />
          </div>
          <Button 
          width={'7.125rem'} 
          height={'2.5rem'}
          margin={'2.75rem 0 0 1.875rem'}
         >Entrar</Button>
         <ShopCart value={7}/>
      </div>
    </header>
    </>
  );
}