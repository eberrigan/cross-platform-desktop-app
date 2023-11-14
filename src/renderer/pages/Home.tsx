import { MdAgriculture } from 'react-icons/md';
import { PiMagicWandLight } from 'react-icons/pi';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home</h1>
      <p>Home page content</p>
      <div style={{ fontSize: '100px', margin: '20px' }}>
        <PiMagicWandLight /> <MdAgriculture /> <PiMagicWandLight />
      </div>
    </div>
  );
}
