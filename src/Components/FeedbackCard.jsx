import {FaTimes , FaEdit} from 'react-icons/fa'
import React from 'react'
import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackCard({item}) {
    // const [ratting , setRatting]=useState(5)
    // const[text , setText]=useState('this feedback is empty')
    // const addvalue = ()=>{
    //     setRatting(
    //         (prev)=>{return prev+1}
    //     )
    // }
    const {feedback,handler,editFeedback}=useContext(FeedbackContext)
        
    
  return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>handler(item.id)}  className='close'>
                <FaTimes color='purple'/>
            </button>
            <button onClick={()=>editFeedback(item)} className='edit'>
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
        
        

   
  )
}
Card.defaultProps={
    reverse:false,
}
Card.prototype={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}
export default FeedbackCard;
