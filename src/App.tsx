import { Mail } from 'lucide-react';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import logo from './assets/logo.png';

function App() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div className='flex font-galdeano justify-between mx-auto py-4 text-3xl tracking-wider w-1/2'>
        <div className='cursor-pointer'>Research</div>
        <div className='cursor-pointer'>Blogs</div>
        <div className='cursor-pointer'>Careers</div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='font-galdeano tracking-wider text-5xl'>
          Attested Frontiers
        </div>
        <img alt='Logo' className='h-64 w-64' src={logo} />
      </div>
      <div className='flex items-center gap-12 justify-center px-10 py-4'>
        <img alt='Github' className='cursor-pointer h-8 w-8' src={github} />
        <Mail cursor='pointer' size={36} />
        <img alt='LinkedIn' className='cursor-pointer h-8 w-8' src={linkedin} />
      </div>
    </div>
  );
}

export default App;
