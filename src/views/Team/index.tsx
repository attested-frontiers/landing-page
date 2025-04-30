const TEAM = [
  {
    name: 'Jack Gilcrest',
    bio: 'Jane Doe is a key member of our team, bringing extensive experience in lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. With a passion for ut enim ad minim veniam, Jane leads initiatives that enhance team synergy and drive impactful outcomes. Her approach combines diligence with creativity, making her an invaluable asset to any project she touches.',
  },
  {
    name: 'Mohammed Al',
    bio: 'Jane Doe is a key member of our team, bringing extensive experience in lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. With a passion for ut enim ad minim veniam, Jane leads initiatives that enhance team synergy and drive impactful outcomes. Her approach combines diligence with creativity, making her an invaluable asset to any project she touches.',
  },
  {
    name: 'Ian Brighton',
    bio: 'Jane Doe is a key member of our team, bringing extensive experience in lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. With a passion for ut enim ad minim veniam, Jane leads initiatives that enhance team synergy and drive impactful outcomes. Her approach combines diligence with creativity, making her an invaluable asset to any project she touches.',
  },
];

export default function TeamView(): JSX.Element {
  return (
    <div className='flex justify-between w-9/10'>
      {TEAM.map((teammate) => (
        <div className='flex flex-col items-center text-center'>
          <div className='text-2xl'>{teammate.name}</div>
          <div className='mt-4 text-sm w-4/5'>{teammate.bio}</div>
        </div>
      ))}
    </div>
  );
}
