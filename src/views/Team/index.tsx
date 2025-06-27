import { ReactElement } from 'react';
import jackImage from '../../assets/jack.avif';
import mohammedImage from '../../assets/mohammed_square.jpeg';
import ianImage from '../../assets/ian.avif';

const TEAM = [
  {
    name: 'Jack Gilcrest',
    bio: 'Designs mechanisms and steers protocol architecture. Built HomeFi, a $30M on-chain credit system. Designs and ships applied ZK systems for EF, PSE, and Aztec Bridges legal structure and smart contracts through protocol-native primitives.',
    image: jackImage,
  },
  {
    name: 'Mohammed Al',
    bio: 'Drives product direction and market interface. Built shipping automation across global container routes. Former futures trader with deep ops exposure. Pushed zkemail in o1js, Holesky testnet and COW AMM research.',
    image: mohammedImage,
  },
  {
    name: 'Ian Brighton',
    bio: 'Builds and maintains core systems. ZK full-stack engineer focused on decentralized infrastructure and cryptographic tooling. Contributed to ZKEmail.nr, Z-Imburse, and Halo2 backend systems across open-source circuits and protocols.',
    image: ianImage,
  },
];

export default function TeamView(): ReactElement {
  return (
    <div className='flex flex-col md:flex-row md:justify-between w-full'>
      {TEAM.map((teammate) => (
        <div
          className='flex flex-col items-center text-center mb-8 md:mb-0'
          key={teammate.name}
        >
          <img
            src={teammate.image}
            alt={`${teammate.name}'s photo`}
            className='h-48 w-48 md:h-64 md:w-64 rounded-full object-cover mb-4'
          />
          <div className='text-xl md:text-2xl font-semibold'>
            {teammate.name}
          </div>
          <div className='mt-4 text-sm md:text-base w-4/5'>{teammate.bio}</div>
        </div>
      ))}
    </div>
  );
}
