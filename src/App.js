import './App.css';
import Modal from './Component/Modal/Modal';
import Home from './Component/pages/Home/Home';
import MyWork from './Component/pages/MyWork/MyWork';
import Contact from './Component/pages/Contact/Contact';


const App = () => {

  return (

    <>

{/* Page */}
      <Home />
      <MyWork/>
      <Contact/>

      {/* COmponent */}

      <Modal/>

    </>

  )

}

export default App;
