import { Mail } from 'lucide-react';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

function App() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <header>
        <nav
          className='flex font-galdeano justify-between mx-auto py-4 text-3xl tracking-wider w-1/2'
          aria-label='Main Navigation'
        >
          <Link to='/solutions'>Solutions</Link>
          <Link to='/about'>About</Link>
          <Link to='/team'>Team</Link>
        </nav>
      </header>
      <main className='flex items-center justify-center'>
        <h1 className='font-galdeano tracking-wider text-5xl'>
          Attested Frontiers
        </h1>
        <img alt='Attested Frontiers Logo' className='h-64 w-64' src={logo} />
      </main>
      <footer className='flex items-center gap-12 justify-center px-10 py-4'>
        <a
          href='https://github.com/attested-frontiers'
          rel='noreferrer'
          target='_blank'
          aria-label='Visit our GitHub'
        >
          <img alt='GitHub Logo' className='h-8 w-8' src={github} />
        </a>
        <a
          href='mailto:contact@attestedfrontiers.xyz'
          aria-label='Send us an email'
        >
          <Mail cursor='pointer' size={36} />
        </a>
        {/* <a
          href='https://linkedin.com/company/attested-frontiers'
          rel='noreferrer'
          target='_blank'
          aria-label='Visit our LinkedIn'
        >
          <img
            alt='LinkedIn Logo'
            className='cursor-pointer h-8 w-8'
            src={linkedin}
          />
        </a> */}
      </footer>
    </div>
  );
}

export default App;
