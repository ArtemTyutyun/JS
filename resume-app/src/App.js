import './App.css';
import { Contact } from './fgh/Contact';
import { Experience } from './fgh/Info';
import Image from './fgh/ImageComponent';

function App() {
  return (
<div className='fp'>
  <Image imagePath="./images/image.jpg"/>
  <Contact />
  <Experience />
  </div>
  );
}

export default App;
