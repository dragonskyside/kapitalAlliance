
import Header from './Components/Header';
// import './index.css';
import './tailwind.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Nft from './Components/Nft';
import { accordionData } from './Utils/content'
import Accordion from './Components/Accordion';



function App() {
  return (
    <div>
      <Header />

      <Hero />

      <Nft />

      <div className="h-screen font-bold mono mx-12 my-24 cursor-pointer">
        <h1>Frequently asked Questions</h1>
        <div className="accordion w-50">
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
