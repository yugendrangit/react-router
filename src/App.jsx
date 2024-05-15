import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './Pages/All';
import Career from './Pages/Career';
import Cyber from './Pages/Cyber';
import Ds from './Pages/Ds';
import Quit from './Pages/Quit';
import FullStack from './Pages/FullStack';
import Navbar from './Components/Navbar';

const App = () => {

  let data = [
    {
    image:"https://wallpapercave.com/wp/wp11346423.jpg",
    head: "Full Stack Development",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024",
    
  },
  {
    image:"https://wallpapercave.com/wp/wp11346423.jpg",
    head: "Full Stack Development",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
  {
    image:"https://wallpapercave.com/wp/wp11346423.jpg",
    head: "Full Stack Development",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
  {
    image:"https://media.licdn.com/dms/image/C4D12AQHVwwANhww7Og/article-cover_image-shrink_600_2000/0/1617571765164?e=2147483647&v=beta&t=vSswZXpLUxZ6pGAn5JG8gCMw8xzcGFeQbOaGAZ2wUxU",
    head: "Data Science",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
  {
    image:"https://media.licdn.com/dms/image/C4D12AQHVwwANhww7Og/article-cover_image-shrink_600_2000/0/1617571765164?e=2147483647&v=beta&t=vSswZXpLUxZ6pGAn5JG8gCMw8xzcGFeQbOaGAZ2wUxU",
    head: "Data Science",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
  {
    image:"https://media.licdn.com/dms/image/C4D12AQHVwwANhww7Og/article-cover_image-shrink_600_2000/0/1617571765164?e=2147483647&v=beta&t=vSswZXpLUxZ6pGAn5JG8gCMw8xzcGFeQbOaGAZ2wUxU",
    head: "Data Science",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
  {
    image:"https://www.netcov.com/wp-content/filemgr/2022/07/shutterstock_1092829541.jpg",
    head: "Cyber Security",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
  {
    image:"https://www.netcov.com/wp-content/filemgr/2022/07/shutterstock_1092829541.jpg",
    head: "Cyber Security",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
  {
    image:"https://www.netcov.com/wp-content/filemgr/2022/07/shutterstock_1092829541.jpg",
    head: "Cyber Security",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
  {
    image:"https://png.pngtree.com/thumb_back/fh260/background/20230322/pngtree-the-devops-software-development-it-concept-devops-software-development-it-concept-photo-image_2089424.jpg",
    head: "DevOps",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
  {
    image:"https://png.pngtree.com/thumb_back/fh260/background/20230322/pngtree-the-devops-software-development-it-concept-devops-software-development-it-concept-photo-image_2089424.jpg",
    head: "DevOps",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
  {
    image:"https://png.pngtree.com/thumb_back/fh260/background/20230322/pngtree-the-devops-software-development-it-concept-devops-software-development-it-concept-photo-image_2089424.jpg",
    head: "DevOps",
    content: "Best Full Stack Web Development Project Ideas in 2024",
    date: "09/08/2024"
  },
]
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<All data={data}/>}/>
        <Route path='/devops' element={<Career data={data}/>}/>
        <Route path='/cs' element={<Cyber data={data}/>}/>
        <Route path='/ds' element={<Ds data={data}/>}/>
        <Route path='/fsd' element={<FullStack data={data}/>}/>
        <Route path='/quit' element={<Quit/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;