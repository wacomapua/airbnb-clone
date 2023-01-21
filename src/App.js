import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner.jsx';
import Card from './components/Card.jsx';
import data from './components/data.jsx';


function App() {

const cards = data.map(item => {
  return (
    <Card 
      img={item.img}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      />
  )
})

  return (
    <div className='grid w-screen place-items-center pb-10'>
    <div className="bg-slate-200 max-w-xl place-content-center justify-center mx-[30px]">
      <Navbar />
      <HeroBanner />
      <div className='grid w-full bg-white place-content-center pt-3'>
      <div className='inline-flex overflow-x-auto overscroll-y-none scrollbar-hide'>
      {cards}
    </div>
    </div>
    </div>
    </div>
  );
}
export default App;
