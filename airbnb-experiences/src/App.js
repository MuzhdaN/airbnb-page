import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import './index.css';
import data from './data';

function App() {
  let card = data.map((item) => {
    return (
        <Card 
          key={item.id}
          item={item}
        />
    )
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='cards-list'>
        {card}
      </div>
    </div>
  );
}

export default App;
