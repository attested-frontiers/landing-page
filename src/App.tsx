import { Mail } from 'lucide-react';
import github from './assets/github.png';
// import linkedin from './assets/linkedin.png';
import { Link, Route, Routes } from 'react-router-dom';
import HomeView from './views/Home';
import AboutView from './views/About';
import SolutionsView from './views/Solutions';
import TeamView from './views/Team';
import NotFoundView from './views/NotFound';
import logo from './assets/logo.png';

function App() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <header className='flex items-center justify-between px-4'>
        <div className='flex-[.5]'>
          <div className='max-w-16'>
            <Link to='/'>
              <img alt='Logo' className='h-full w-full' src={logo} />
            </Link>
          </div>
        </div>
        <nav
          className='flex font-galdeano justify-between mx-auto py-4 text-3xl tracking-wider flex-1'
          aria-label='Main Navigation'
        >
          <Link to='/solutions'>Solutions</Link>
          <Link to='/about'>About</Link>
          <Link to='/team'>Team</Link>
        </nav>
        <div className='flex-[.5]' />
      </header>
      <main className='flex flex-col items-center justify-center'>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/solutions' element={<SolutionsView />} />
          <Route path='/team' element={<TeamView />} />
          <Route path='*' element={<NotFoundView />} />
        </Routes>
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
