import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { HelloWorld } from './components/Task-1/task1';
import { Congrats } from './components/Task-2/task2';
import { SuperOver } from './components/Task-3/task3';
import { SocialButtons } from './components/Task-4/task4';
import { Notification } from './components/Task-5/task5';
import { LoginDesign } from './components/Task-6/task6';
import { TechnologyCards } from './components/Task-7/task7';
import { Home } from './components/Portfolio/Home Page/home';
import { Menubar } from './components/Portfolio/Menubar/menubar';
import { Contact } from './components/Portfolio/Contact/contact';
import { About } from './components/Portfolio/About/about';
import { Design } from './components/Portfolio/Design&Developement/design';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Navbar/>,<HelloWorld/>]}/>
        <Route path='/congrats' element={[<Navbar/>,<Congrats/>]}/>
        <Route path='/superover' element={[<Navbar/>,<SuperOver/>]}/>
        <Route path='/socialbuttons' element={[<Navbar/>,<SocialButtons/>]}/>
        <Route path='/notifications' element={[<Navbar/>,<Notification/>]}/>
        <Route path='/login' element={[<Navbar/>,<LoginDesign/>]}/>
        <Route path='/technologycard' element={[<Navbar/>,<TechnologyCards/>]}/>
        <Route path='/profile' element={[<Menubar/>,<Home/>,<About/>,<Design/>,<Contact/>]}/>
        <Route path='/home' element={[<Menubar/>,<Home/>]}/>
        <Route path='/contact' element={[<Menubar/>,<Contact/>]}/>
        <Route path='/about' element={[<Menubar/>,<About/>]}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
