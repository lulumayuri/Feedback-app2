import React, { useState } from 'react'
import {useEffect,useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelected({select}) {
    const {feedbackedit}=useContext(FeedbackContext)
    useEffect(()=>{
        setSelected(feedbackedit.item.rating)
    },[feedbackedit])
    const [selected , setSelected]=useState(10)
    
   
    const handler =(e)=>{
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)

    }
    
  return (
    <ul className='rating'>
        <li>
            <input type="radio" name="rating" value='1' onChange={handler} checked ={selected===1} id="num1" />
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input type="radio" name="rating" value='2' onChange={handler} checked ={selected===2} id="num2" />
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input type="radio" name="rating" value='3' onChange={handler} checked ={selected===3} id="num3" />
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input type="radio" name="rating" value='4' onChange={handler} checked ={selected===4} id="num4" />
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input type="radio" name="rating" value='5' onChange={handler} checked ={selected===5} id="num5" />
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input type="radio" name="rating" value='6' onChange={handler} checked ={selected===6} id="num6" />
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input type="radio" name="rating" value='7' onChange={handler} checked ={selected===7} id="num7" />
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input type="radio" name="rating" value='8' onChange={handler} checked ={selected===8} id="num8" />
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input type="radio" name="rating" value='9' onChange={handler} checked ={selected===9} id="num9" />
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input type="radio" name="rating" value='10' onChange={handler} checked ={selected ===10} id="num10" />
            <label htmlFor="num10">10</label>
        </li>
    </ul>
  )
}

export default RatingSelected