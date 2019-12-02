import React from 'react';
import Banner from './components/Banner'; 
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Relationships from './components/Relationships'; 
import Requirements from './components/Requirements';
import Users from './components/Users';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
    return (
      <>
        <Header/>
        <Banner/>
        <AboutMe/>
        <Relationships/>
        <Requirements/>
        <Users/>
        <SignUp/>
        <Footer/>
      </>
    );
  }
}

export default App;
