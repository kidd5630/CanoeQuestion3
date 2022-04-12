import React, { useState } from 'react';

const CourseForm = ()=>{
    const [choiceA, setChoiceA]= useState('')
    const [choiceB, setChoiceB]= useState('')
    const [choiceC, setChoiceC]= useState('')


    console.log("ChoiceA:", choiceA);
    console.log("ChoiceB:", choiceB);
    console.log("ChoiceC:", choiceC);
    return(
        <div>
        <form className='classRegistration' >
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