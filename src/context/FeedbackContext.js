import { createContext,useState,useEffect } from "react";



const FeedbackContext = createContext()



export const FeedbackProvider =({children})=>{
    const [feedback,setFeedback]=useState([]
        
    )
    const[isLoading,setIsLoading]=useState(true)
    const handler = async (id)=>{
        if(window.confirm('Are you sure you wanna delete this?')){
            await fetch(`/feedback/${id}`,{
                method:'DELETE'
            })
            setFeedback(feedback.forEach((item)=>item.id !== id))

        }
    }
    const [feedbackedit,setFeedbackedit]=useState({
        item:{},
        edit:false
    })
    useEffect(()=>{
        fetchFeedback()
    },[])
    const fetchFeedback = async()=>{
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }
    const editFeedback = (item)=>{
        setFeedbackedit(
            {
                item,
                edit:true
            }
        )
    }
    const updateitem = async (id,updItem)=>{
        const response = await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(updItem)
        })
        const data = await response.json()
        setFeedback(
            feedback.map((item)=>(item.id===id ? {...item ,...data} : item))
        )
    }
    const handlerAdd= async(newfeedback)=>{
        const response = await fetch(`/feedback`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(newfeedback)
        })
        const data = await response.json()

        setFeedback([data,...feedback])
    }
    return <FeedbackContext.Provider value={{
        feedback,
        handler,
        handlerAdd,
        editFeedback,
        feedbackedit,
        updateitem,
        isLoading,
        }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;