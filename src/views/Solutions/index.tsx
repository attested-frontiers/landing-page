import { ReactElement } from 'react';
import boltLogo from '../../assets/bolt_logo.png';

export default function SolutionsView(): ReactElement {
  const cards = [
    {
      logo: boltLogo,
      title: 'Bank-Originated Ledger Transactions (BOLT)',
      description: 'BOLT uses the OpenBanking API to compose trustless & noncustodial bank transactions onchain. The BOLT escrow is currently live with the Revolut sandbox on the Aztec Testnet, demonstrating private on/offramping between fiat and cryptocurrency.',
      url: 'https://bolts.money',
    },
  ];

  return (
    <div className='flex flex-col gap-8 p-4'>
      {cards.map((card, index) => (
        <div
          key={index}
          className='flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-lg overflow-hidden w-full'
        >
          <div className='flex-shrink-0 w-full md:w-1/3 p-4'>
            <img
              src={card.logo}
              alt={`${card.title} logo`}
              className='w-full h-auto object-contain'
            />
          </div>
          <div className='flex flex-col w-full md:w-2/3 p-4'>
            <h2 className='text-2xl font-bold mb-2'>{card.title}</h2>
            <p className='text-gray-700 mb-4'>{card.description}</p>
            <a
              href={card.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              {card.url}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
