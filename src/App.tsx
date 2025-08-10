import { Mail, Menu, X } from 'lucide-react';
import github from './assets/github.png';
// import linkedin from './assets/linkedin.png';
import twitter from './assets/twitter.png';
import { Link, Route, Routes } from 'react-router-dom';
import HomeView from './views/Home';
import AboutView from './views/About';
import WorkView from './views/Solutions';
import NotFoundView from './views/NotFound';
import logo from './assets/logo.png';
import { useState } from 'react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='h-screen flex flex-col justify-between'>
      <header className='flex items-center justify-between px-4 relative'>
        <div className='flex-[.5]'>
          <div className='max-w-16'>
            <Link to='/' onClick={closeMobileMenu}>
              <img alt='Logo' className='h-full w-full' src={logo} />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className='hidden md:flex font-galdeano justify-between mx-auto py-4 text-3xl tracking-wider flex-1'
          aria-label='Main Navigation'
        >
          <Link to='/about'>About</Link>
          <Link to='/work'>Work</Link>
          <a href='/blog/index.html' rel='noreferrer'>
            Blog
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='bg-transparent md:hidden flex items-center justify-center p-2'
          onClick={toggleMobileMenu}
          aria-label='Toggle mobile menu'
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X size={24} className='text-black' />
          ) : (
            <Menu size={24} className='text-black' />
          )}
        </button>

        <div className='flex-[.5] hidden md:block' />

        {/* Mobile Navigation Menu - Slide-out Drawer */}
        {isMobileMenuOpen && (
          <>
            {/* Semi-transparent backdrop */}
            <div
              className='fixed inset-0 bg-black bg-opacity-50 md:hidden z-40'
              onClick={closeMobileMenu}
            />

            {/* Right-side drawer menu */}
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl md:hidden z-50 transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Menu header with close button */}
              <div className='flex items-center justify-end p-4'>
                <button
                  onClick={closeMobileMenu}
                  aria-label='Close menu'
                  className='p-2 hover:bg-gray-100 rounded-md'
                >
                  <X size={24} className='text-black' />
                </button>
              </div>

              {/* Navigation links */}
              <nav className='flex flex-col font-galdeano text-2xl tracking-wider py-8'>
                <Link
                  to='/about'
                  className='px-6 py-4 hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200'
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  to='/work'
                  className='px-6 py-4 hover:bg-gray-50 border-b border-gray-100 transition-colors duration-200'
                  onClick={closeMobileMenu}
                >
                  Work
                </Link>
                <a
                  href='/blog/index.html'
                  rel='noreferrer'
                  className='px-6 py-4 hover:bg-gray-50 transition-colors duration-200'
                  onClick={closeMobileMenu}
                >
                  Blog
                </a>
              </nav>
            </div>
          </>
        )}
      </header>

      <main className='flex flex-col items-center justify-center'>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/work' element={<WorkView />} />
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
        <a
          href='https://x.com/AttestedFront'
          rel='noreferrer'
          target='_blank'
          aria-label='Visit our Twitter'
        >
          <img alt='Twitter Logo' className='h-8 w-8' src={twitter} />
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
