import './app.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="app">
      You're seeing me !
      <Gallery 
        data={[
          {"number":15,"description":"air freshener - lemon","price":1.85,"weight":3.5,"pictureURL":"http://blitz.cs.niu.edu/pics/lem.jpg"},
          {"number":16,"description":"air freshener - cherry","price":1.85,"weight":12.45,"pictureURL":"http://blitz.cs.niu.edu/pics/che.jpg"},
          {"number":17,"description":"air freshener - new car smell","price":2.06,"weight":2,"pictureURL":"http://blitz.cs.niu.edu/pics/usa.jpg"},
          {"number":18,"description":"cargo net (new model)","price":25.36,"weight":2,"pictureURL":"http://blitz.cs.niu.edu/pics/net.jpg"},
          {"number":19,"description":"trunk liner","price":25.38,"weight":2,"pictureURL":"http://blitz.cs.niu.edu/pics/tru.jpg"},
          {"number":20,"description":"floor mat - driver side","price":13.21,"weight":2,"pictureURL":"http://blitz.cs.niu.edu/pics/mat.jpg"},
          {"number":21,"description":"floor mat - passenger side","price":13.21,"weight":0.55,"pictureURL":"http://blitz.cs.niu.edu/pics/mat.jpg"},
        ]}
      />
    </div>
  );
}

export default App;
