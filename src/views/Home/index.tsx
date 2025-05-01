import logo from '../../assets/logo.png';

export default function HomeView() {
  return (
    <div className='flex items-center'>
      <h1 className='font-galdeano tracking-wider text-5xl'>
        Attested Frontiers
      </h1>
      <img alt='Attested Frontiers Logo' className='h-64 w-64' src={logo} />
    </div>
  );
}
