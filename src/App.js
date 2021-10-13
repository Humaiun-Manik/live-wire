import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MenuBar from './components/MenuBar/MenuBar';
import Banner from './components/Banner/Banner';
import AllCourses from './components/AllCourses/AllCourses';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <MenuBar></MenuBar>
      <Switch>
        <Route exact path="/">
          <Banner></Banner>
        </Route>
        <Route exact path="/home">
          <Banner></Banner>
        </Route>
        <Route exact path="/courses">
          <AllCourses></AllCourses>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
