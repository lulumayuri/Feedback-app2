import React from 'react'
import FeedbackCard from './FeedbackCard'
import {motion , AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'



function FeedbackList() {
    const {feedback,isLoading}=useContext(FeedbackContext)
    
    if(!isLoading && (!feedback||feedback.length===0)){
        return <div>No feedback yet</div>
    }
  return isLoading? <Spinner /> : (<div className='feedback-list'>
                                  <AnimatePresence>
                                      {feedback.map((item)=>(
                                        <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                                        <FeedbackCard key={item.id} item={item} />
                                        </motion.div>
        
        
                                          ))}
                                    </AnimatePresence>
    
    
                                    </div>)
}

export default FeedbackList