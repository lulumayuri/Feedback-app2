import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelected from './RatingSelected'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import {useEffect} from "react"


function FeedbackForm() {
    const {handlerAdd , feedbackedit , updateitem}=useContext(FeedbackContext)
    const [text,setText]=useState('') 
    const [btnDisable,setbtnDisable]=useState(true) 
    const [Message,setMessage]=useState('') 
    const [rating,setRating]=useState(10) 
    useEffect(()=>{
        if(feedbackedit.edit===true){
            setbtnDisable(false)
            setText(feedbackedit.item.text)
            setRating(feedbackedit.item.rating)
            
        }else{
            setbtnDisable(true)
        }
    },[feedbackedit])
   
    const handler = (e)=>{
        if(text === ''){
            setbtnDisable(true)
            setMessage(null)
        }else if(text!=='' && text.trim().length<10){
            setbtnDisable(true)
            setMessage('Review must be at least 10 charchters')

        }else{
            setMessage(null)
            setbtnDisable(false)
        }
        setText (e.target.value)
        
    }
    const handlerSubmit =(e)=>
    {
        e.preventDefault()
        if(text.trim().length >=10){
            const newFeedback ={
                text,
                rating
            }
            if(feedbackedit.edit===true){
                updateitem(feedbackedit.item.id,newFeedback)
                feedbackedit.edit=false
                setbtnDisable(true)
                
            }else{
                handlerAdd(newFeedback)
            }
            
            setText('')
        }
    }

  return (
    
    <Card>
        <form onSubmit={handlerSubmit}>
            <h2>How would You rate our services?</h2>
            <RatingSelected select ={(rating)=>{setRating(rating)}}/>
            <div className="input-group">
                <input onChange={handler} type="text" placeholder='Your rating' value={text}/>
                <Button type="submit" version='secondary' isDisable={btnDisable}>Send</Button>
            </div>
        </form>
        {Message && <div className='message'>{Message}</div>}
    </Card>
  )
}

export default FeedbackForm