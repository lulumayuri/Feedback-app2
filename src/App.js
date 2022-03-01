
import {useState} from 'react'
import { BrowserRouter as Router ,Route , Routes} from 'react-router-dom';
import Header from "./Components/Header";
import FeedbackList from './Components/FeedbackList';
import feedbackdata from './data/feedbakcdata';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import {v4 as uuidv4 } from 'uuid'
import About from './pages/About';
import AboutIcon from './Components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';
function App(){
    const [feedback , setFeedback]=useState(
       feedbackdata
    )
  
    const addFeedback=(newfeedback)=>{
        newfeedback.id=uuidv4()
        setFeedback([newfeedback,...feedback])
    }
    return(
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <div>
                        <FeedbackForm handlerAdd={addFeedback}/>
                        <FeedbackStats />
                        <FeedbackList />
                        
                        </div>
                        
                     } />
                        
                    
            
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <AboutIcon />
            </div>
        </Router>
        </FeedbackProvider>
         
    )
}

export default App;