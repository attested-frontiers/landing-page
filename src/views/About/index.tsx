export default function AboutView(): JSX.Element {
  return (
    <div className='flex flex-col items-center mt-8 px-4'>
      <h1 className='text-5xl'>ABOUT</h1>
      <p className='text-base mt-4 text-justify max-w-screen-md'>
        Attested Frontiers is our mission to explore the frontiers of attested data. So much data is signed these days; few have scratched the surface of the composability this technology brings. Attested Frontiers focuses uniquely on first-party attested data which often connotes unique trust guarantees. Join us as we revolutionize the way commercial trust is built in the digital era.
      </p>
    </div>
  );
}
