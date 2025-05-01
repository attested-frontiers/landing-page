import { ReactElement } from 'react';
import jackImage from '../../assets/jack.avif';
import mohammedImage from '../../assets/mohammed_square.avif';
import ianImage from '../../assets/ian.avif';

const TEAM = [
  {
    name: 'Jack Gilcrest',
    bio: 'CEO Mach 34. Contracted with EF PSE, Aztec (ZKEmail.nr, Z-Imburse, Halo2 Noir Backend). Led construction of HomeFi ($30Mm home construction finance protocol). Led consultation with University of Cincinnati’s IUCRC Federal Grant.',
    image: jackImage,
  },
  {
    name: 'Mohammed Al',
    bio: '5yrs+ commodity derivatives trading. Commercial director at an international industrial project. Automated container shipping integrations at b2b marketplace 3yrs+ blockchain engineering.',
    image: mohammedImage,
  },
  {
    name: 'Ian Brighton',
    bio: 'CTO Mach 34. Full-stack Web3 Engineer and ZK Circuit Developer. Provided development services for Ethereum Foundation PSE and Aztec Network (Openbanking.nr, ZKEmail.nr, Z-Imburse, Halo2 Backend for Noir).',
    image: ianImage,
  },
];

export default function TeamView(): ReactElement {
  return (
    <div className='flex flex-col md:flex-row md:justify-between w-full'>
      {TEAM.map((teammate) => (
        <div className='flex flex-col items-center text-center mb-8 md:mb-0' key={teammate.name}>
          <img
            src={teammate.image}
            alt={`${teammate.name}'s photo`}
            className='h-48 w-48 md:h-64 md:w-64 rounded-full object-cover mb-4'
          />
          <div className='text-xl md:text-2xl font-semibold'>{teammate.name}</div>
          <div className='mt-4 text-sm md:text-base w-4/5'>{teammate.bio}</div>
        </div>
      ))}
    </div>
  );
}
