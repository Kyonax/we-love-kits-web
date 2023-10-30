import './App.css';

import LoadImage from '../components/hooks/image_load/component';
import ImageTesting from '../assets/wallpaper_img_test/image';

function App() {
  return (
    <div className="App">
      <LoadImage alt="Testing File" load={true} image={ImageTesting} />
    </div>
  );
}

export default App;
