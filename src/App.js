
import Header from './Components/Header';
// import './index.css';
import './tailwind.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import About from './Components/About';
import Nft from './Components/Nft';
import { accordionData } from './Utils/content'
import Accordion from './Components/Accordion';




function App() {
  return (
    <div>
      <Header />

      <Hero />

      <About/>

      <Nft />

      <div id="faq" className="min-h-screen font-bold mono cursor-pointer p-40 text-white bg-stone-800 opacity-90">
        <h1 className='text-3xl'>Frequently Asked Questions</h1>
        <div className="accordion text-xl text-white">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))
          }
          </div>
        </div>

        

 

      <Footer />

    </div>
   
    
  );
}

export default App;
