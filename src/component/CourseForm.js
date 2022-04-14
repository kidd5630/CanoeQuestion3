import React, { useState } from 'react';
import {
    BASE_URL,
    submitThisForm
} from '../api';
const CourseForm = ()=>{
    let [choiceA, setChoiceA]= useState('')
    let [choiceB, setChoiceB]= useState('')
    let [choiceC, setChoiceC]= useState('')

    async function submitForm(e){
        e.preventDefault();
        choiceA = choiceA.toLowerCase();
        choiceB = choiceB.toLowerCase();
        choiceC = choiceC.toLowerCase();
       
        if((choiceA !== "calculus") && (choiceB!== "calculus") && (choiceC !== "calculus")){
            alert("One Course Must Be 'Calculus' In Order To Submit"); 
        }else{
        //     try {
        //         const results = await submitThisForm();
        //         if(results){
        //           alert("The Form Was Successfully Sumitted")  
        //         }
        //     } catch(error){
        //         console.error(error);
        //     }
        //     alert("one of these are correct")
        alert("it submitted")
        }
        
    }

    return(
        <div>
        <form className='classRegistration' onSubmit={submitForm} >
            Choice A:
            <input type="text" 
                placeholder='Course Choice'
                onChange={(event) => { setChoiceA(event.target.value) }}
                />
            Choice B:
            <input type="text" 
                placeholder='Course Choice'
                onChange={(event) => { setChoiceB(event.target.value) }}
                />
            Choice C:
            <input type="text" 
                placeholder='Course Choice'
                onChange={(event) => { setChoiceC(event.target.value) }}/>
            <input type="submit" value="Submit"/>
        
        </form>
        </div>
    )

}

export default CourseForm