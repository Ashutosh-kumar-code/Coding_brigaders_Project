

import logo from './logo.svg';
import './App.css';
import './style.css';
import './home.css';
import { useState } from 'react';
import JoinScreen from './pages/JoinScreen';
import CreateProfile from './pages/CreateProfile';
import Mentors from './pages/Mentors';
import Projects from './pages/Projects';
import { BrowserRouter, Route, Routes  } from "react-router-dom"
// import Login from './pages/Login';
import LearningResources from './pages/LearningResources';
import Home from './pages/Home';
import ContactusPage from './pages/ContactusPage';
import Header from './components/Header';
import UploadProject from './pages/UploadProject';
import QuizPage from './pages/QuizPage';
import MyProjects from './pages/MyProjects';
import MakeTeamforProject from './pages/MakeTeamforProject';
import StudentsList from './pages/StudentsList';
import BuyProjectsList from './pages/BuyProjectsList';
import UploadSaleProjects from './pages/UploadSaleProjects';
import MyProfile from './pages/MyProfile';
import ProfessionalMyProfile from './pages/ProfessionalMyProfile';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/join-us' element={<JoinScreen />} />
          <Route path='/create-profile' element={<CreateProfile />} />
          <Route path='/mentor' element={<Mentors />} />
          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/Login' element={<Login />} /> */}
          <Route path='/learning-resouces' element={<LearningResources />} />
          <Route path='/contact-us' element={<ContactusPage />} />
          <Route path='/upload-project' element={<UploadProject />} />
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/my-project' element={<MyProjects />} />
          <Route path='/make-team' element={<MakeTeamforProject />} />
          <Route path='/students-list' element={<StudentsList />} />
          <Route path='/buy-projects' element={<BuyProjectsList />} />
          <Route path='/upload-saleprojects' element={<UploadSaleProjects />} />
          <Route path='/my-profile' element={<MyProfile />} />
          <Route path="/professional-myprofile" element={<ProfessionalMyProfile/>}></Route>

        </Routes>
        {/* <Footer/> */}

      </BrowserRouter>






    </>
  );
}

export default App;
