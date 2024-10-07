import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ScrollToTop from './utils/scrollToTop.js';
import './app.scss';

const App = () => {
  return (
    <section className='app'>
      <div>
        <ScrollToTop />
        <Header />
        <Main />
      </div>
      <Footer />
    </section>
  );
};

export default App;
