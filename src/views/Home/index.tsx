import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function HomeView() {
  return (
    <div className='flex flex-col items-center text-center max-w-4xl mx-auto px-6'>
      <img
        alt='Attested Frontiers Logo'
        className='h-32 w-32 mb-8'
        src={logo}
      />
      <h1 className='font-galdeano tracking-wider text-4xl md:text-6xl mb-8'>
        Attested Frontiers
      </h1>
      
      <div className='text-lg md:text-xl text-gray-700 leading-relaxed mb-12'>
        <p>
          Attested Frontiers is an open source R&D lab focused on connecting smart contracts to real-world systems through verifiable attestations. We explore how technologies like Open Banking, eIDAS signatures, and zero knowledge proofs can be used to enable real commerce, programmable escrows, and financial automation on public blockchains — without relying on custodians or opaque oracles. Our work includes open source libraries, prototype applications, and spinouts built around real-world financial use cases.
        </p>
      </div>

    </div>
  );
}
