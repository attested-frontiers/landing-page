import { ReactElement } from 'react';
import boltLogo from '../../assets/bolt_logo.png';
import openbankingLogo from '../../assets/openbanking-logo.png';
import sambaLogo from '../../assets/samba-logo.png';

export default function WorkView(): ReactElement {
  return (
    <div className='max-w-4xl mx-auto px-6 py-8'>
      <h1 className='text-2xl font-semibold text-left mb-6 text-gray-600'>Our Work</h1>
      
      <p className='text-lg text-gray-700 leading-relaxed mb-12 text-left'>
        Attested Frontiers develops and maintains projects that explore how verifiable, real-world data can be used in programmable finance.
      </p>

      <div className='space-y-12'>
        {/* openbanking.nr */}
        <div className='border-b border-gray-200 pb-8'>
          <div className='flex items-start space-x-4 mb-4'>
            <div className='flex-shrink-0'>
              <img 
                src={openbankingLogo} 
                alt="openbanking.nr logo" 
                className='w-20 h-20 object-contain'
              />
            </div>
            <div>
              <h2 className='text-2xl font-bold mb-3'>openbanking.nr</h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                An open-source library for verifying Open Banking payment initiations and account data in zero knowledge, allowing smart contracts to react to regulated financial events.
              </p>
              <a
                href='https://github.com/attested-frontiers/openbanking.nr-circuit'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 hover:underline font-medium'
              >
                → View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* bolts.money */}
        <div className='border-b border-gray-200 pb-8'>
          <div className='flex items-start space-x-4 mb-4'>
            <div className='flex-shrink-0'>
              <img 
                src={boltLogo} 
                alt="bolts.money logo" 
                className='w-20 h-20 object-contain'
              />
            </div>
            <div>
              <h2 className='text-2xl font-bold mb-3'>bolts.money</h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                A programmable escrow platform that uses Open Banking payment proofs to enable non-custodial onramps, auditable stablecoins, and automated settlement for real-world agreements.
              </p>
              <a
                href='https://bolts.money'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 hover:underline font-medium'
              >
                → Visit bolts.money
              </a>
            </div>
          </div>
        </div>

        {/* Samba */}
        <div>
          <div className='flex items-start space-x-4 mb-4'>
            <div className='flex-shrink-0'>
              <img 
                src={sambaLogo} 
                alt="samba logo" 
                className='w-20 h-20 object-contain'
              />
            </div>
            <div>
              <h2 className='text-2xl font-bold mb-3'>samba</h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                A peer-to-peer payments prototype enabling direct platform-to-platform transfers. It uses zkp2p.xyz escrows to facilitate trustless settlement between parties, without intermediaries.
              </p>
              <a
                href='https://github.com/attested-frontiers/zkp2p-dev-client'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:text-blue-800 hover:underline font-medium'
              >
                → View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
