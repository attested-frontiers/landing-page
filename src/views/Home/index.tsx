import logo from '../../assets/logo.png';

export default function HomeView() {
  return (
    <div className='flex flex-col md:flex-row items-center gap-4 md:gap-0'>
      <img
        alt='Attested Frontiers Logo'
        className='h-32 w-32 md:h-64 md:w-64 order-1 md:order-2'
        src={logo}
      />
      <h1 className='font-galdeano tracking-wider text-3xl md:text-5xl text-center md:text-left order-2 md:order-1'>
        Attested Frontiers
      </h1>
    </div>
  );
}
