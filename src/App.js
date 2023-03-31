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
import { Hooks } from './components/Task-8/task8';
import { FruitCount } from './components/Task-9/task9';
import { Home } from './components/Portfolio/Home/home';
import { Menubar } from './components/Portfolio/Menubar/menubar';
import { Contact } from './components/Portfolio/Contact/contact';
import { About } from './components/Portfolio/About/about';
import { Certificate } from './components/Portfolio/Certificate/certificate';
import { Skills } from './components/Portfolio/Skills/skills';
import { FeedBack } from './components/Task-10/task10';
import { FeedBackThanks } from './components/Task-10/feedback';
import { DateFunction } from './components/Task-11/task11';
import { Products } from './components/Task-12/task12';
import { Work } from './components/Portfolio/Work/work';

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
        <Route path='/hooks' element={[<Navbar/>,<Hooks/>]}/>
        <Route path='/fruitcount' element={[<Navbar/>,<FruitCount/>]}/>
        <Route path='/feedbackthanks' element={[<Navbar/>,<FeedBackThanks/>]}/>
        <Route path='/feedback' element={[<Navbar/>,<FeedBack/>]}/>
        <Route path='/datefunction' element={[<Navbar/>,<DateFunction/>]}/>
        <Route path='/products' element={[<Navbar/>,<Products/>]}/>
        <Route path='/profile' element={[<Menubar/>,<Home/>,<Work/>,<About/>,<Certificate/>,<Skills/>,<Contact/>]}/>
        <Route path='/home' element={[<Menubar/>,<Home/>]}/>
        <Route path='/work' element={[<Menubar/>,<Work/>]}/>
        <Route path='/about' element={[<Menubar/>,<About/>]}/>
        <Route path='/contact' element={[<Menubar/>,<Certificate/>]}/>
        <Route path='/skills' element={[<Menubar/>,<Skills/>]}/>
        <Route path='/contact' element={[<Menubar/>,<Contact/>]}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
