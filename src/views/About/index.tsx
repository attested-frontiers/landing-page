import { ReactElement } from 'react';
import jackImage from '../../assets/jack.avif';
import mohammedImage from '../../assets/mohammed_square.jpeg';
import ianImage from '../../assets/ian.avif';

const CONTRIBUTORS = [
  {
    name: 'Jack Gilcrest',
    bio: 'Built HomeFi, a $30M on-chain credit system. Designs and ships applied ZK systems for EF, PSE, and Aztec Bridges legal structure and smart contracts through protocol-native primitives.',
    image: jackImage,
    github: 'https://github.com/jp4g/',
  },
  {
    name: 'Mohammed Al',
    bio: 'Built shipping automation across global container routes. Former futures trader with deep ops exposure. Pushed zkemail in o1js, Holesky testnet and COW AMM research.',
    image: mohammedImage,
    github: 'https://github.com/mohammed7s',
  },
  {
    name: 'Ian Brighton',
    bio: 'ZK full-stack engineer focused on decentralized infrastructure and cryptographic tooling. Contributed to ZKEmail.nr, Z-Imburse, and Halo2 backend systems across open-source circuits and protocols.',
    image: ianImage,
    github: 'https://github.com/Ian-Bright',
  },
];

export default function AboutView(): ReactElement {
  return (
    <div className='max-w-4xl mx-auto px-6 py-8'>
      <h1 className='text-2xl font-semibold text-left mb-6 text-gray-600'>About</h1>
      
      <div className='mb-16'>
        <h2 className='text-2xl font-semibold mb-6'>Our Mission</h2>
        <p className='text-lg text-gray-700 leading-relaxed'>
          We're building the infrastructure to connect smart contracts with real-world systems through cryptographically verifiable attestations. Our work focuses on enabling programmable finance that can react to real events — like bank payments, identity verifications, and legal agreements — without requiring trusted intermediaries or sacrificing privacy.
        </p>
      </div>

      <div>
        <h2 className='text-2xl font-semibold mb-8'>Contributors</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {CONTRIBUTORS.map((contributor) => (
            <div
              className='flex flex-col items-center text-center'
              key={contributor.name}
            >
              <img
                src={contributor.image}
                alt={`${contributor.name}'s photo`}
                className='h-40 w-40 rounded-full object-cover mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>
                {contributor.name}
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed mb-2'>
                {contributor.bio}
              </p>
              <a
                href={contributor.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 hover:underline text-sm'
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-16 text-center space-y-4'>
        <p className='text-lg text-gray-700'>
          We welcome contributions and are open for collaborations on projects that advance verifiable, real-world applications of cryptography.
        </p>
        <p className='text-gray-600'>
          Contact us at{' '}
          <a 
            href='mailto:contact@attestedfrontiers.xyz' 
            className='text-blue-600 hover:text-blue-800 hover:underline'
          >
            contact@attestedfrontiers.xyz
          </a>
        </p>
      </div>
    </div>
  );
}
