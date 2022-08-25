import {BrowserRouter as Router ,Route,Routes}from 'react-router-dom'
import NavBar from './components/layouts/nav-bar';
import Footer from './components/layouts/footer';
import About from './components/pages/about';
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';
import SingleUser from './components/pages/singleUser';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/layouts/Alert';


function App() {
  return (
    
    <GithubProvider>
      <AlertProvider>
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <NavBar/>
        <main className='container mx-auto px-3'>
          <Alert/>
          <Routes>
            <Route  path='/'element={<Home/>}/>
            <Route  path='/about' element={<About/>}/>
            <Route path='/user/:login' element ={<SingleUser/>}/>
            <Route path='/notfound' element={<NotFound/>}/>
            <Route path='/*' element={<NotFound/>}/>

          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </AlertProvider> 
    </GithubProvider>
   

  )
}

export default App;
