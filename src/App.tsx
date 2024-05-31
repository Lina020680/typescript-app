import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
//import Layout from "components/Layout/Layout";
//import About from "pages/About/About";
//import Home from "pages/Home/Home";
//import Users from "pages/Users/Users";
//import Clients from "pages/Clients/Clients";
//import Amazon from "pages/Clients/components/Amazon/Amazon";
//import Facebook from "pages/Clients/components/Facebook/Facebook";
//import Google from "pages/Clients/components/Google/Google";


// Lessons
//import Lesson06 from 'lessons/Lessons06/Lessons06';
//import Lesson07 from 'lessons/Lesson07/Lesson07';
//import Lesson08 from 'lessons/Lesson08/Lesson08';
//import Lesson09 from "lessons/Lesson09/Lesson09";
//import Lesson10 from "lessons/Lesson10/Lesson10";
//import Lesson11 from "lessons/Lesson11/Lesson11";
//import Lesson12 from "lessons/Lesson12/Lesson12";
//import Lesson14 from "lessons/Lesson14/Lesson14";

// Homeworks
//import Homework08 from "homeworks/Homework08/Homework08";
//import Homework09 from "homeworks/Homework09/Homework09";
//import Homework11 from "homeworks/Homework11/Homework11";
import Homework14 from "homeworks/Homework14/Homework14";

// Consultations
//import Consultation05 from "Consultation/Consultation05/Consultation";



function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/*<Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/clients/amazon" element={<Amazon/>}/>
          <Route path="/clients/facebook" element={<Facebook/>}/>
          <Route path="/clients/google" element={<Google/>}/>
          <Route path="*" element='Page Not Found'/>
        </Routes>
  </Layout>*/}
      {/*<Lesson06 />*/}
      {/*<Lesson07/>*/}
      {/*<Lesson08/>*/}
      {/*<Homework08 />*/}
      {/*<Lesson09 />*/}
      {/*<Homework09 />*/}
      {/*<Lesson10 />*/}
      {/*<Lesson11 />*/}
      {/*<Homework11/>*/}
      {/*<Lesson12 />*/}
      {/*/*<Consultation05 />*/}
      {/*<Lesson14 />*/}
      <Homework14 />
    </BrowserRouter>
  );
}

export default App;
