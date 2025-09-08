import { useSelector } from 'react-redux';
import AuthPanel from '../../features/Auth/components/AuthPanel.tsx';
import { RootState } from '../../store/index.ts';
import SearchBar from '../SearchBar/SearchBar.tsx';

export default function Header() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <header className="flex bg-purple-50 justify-center w-full">
      <div className="relative p-2 flex justify-between items-center w-full max-w-[90%]">
        <h1 className="text-xl font-bold mr-2"><a href='/'>careConnect</a></h1>
        <div className='flex flex-row items-center gap-8'>
          {isLoggedIn ? (
            <>
              <nav>
                <ul className='flex gap-6'>
                  <li><a href='/'>Mon profil</a></li>
                  <li><a href='/'>Contact</a></li>
                  <li><a href='/'>Qui sommes-nous</a></li>
                </ul>
              </nav>
            </>
          ) : (
            <>
              <nav>
                <ul className='flex gap-6'>
                  <li><a href='/'>Accueil</a></li>
                  <li><a href='/'>Contact</a></li>
                  <li><a href='/'>Qui sommes-nous</a></li>
                </ul>
              </nav>
            </>
          )}
          <div className="flex-1">
            <SearchBar
              placeholder='ex: éducatrice spécialisée'
              buttonText='ok'
              label='Recherche'
              labelPosition='left'
              labelStyle='default'
              size='default'
            />
          </div>
          <AuthPanel />
        </div>
      </div>
    </header >
  );
}
