import React, { createContext, useState } from 'react'
import runChat from '../C/C';


export const Context=createContext();

export default function ContextProvider(props){

    const [input, setInput] = useState("");
	const [recentPrompt, setRecentPrompt] = useState("");
	const [prevPrompts, setPrevPrompts] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [loading, setLoading] = useState(false);
	const [resultData, setResultData] = useState("");

const delayPara =(index,nextWord)=>{

setTimeout(function() {
    setResultData((prev)=>prev+nextWord);
}, index*75);

}

    const onSent = async(prompt)=>{
    setResultData(" ");    
    setLoading(true);
    setShowResults(true);
    setRecentPrompt(input);

    setPrevPrompts((prev)=>[...prev,input])

    const response=await runChat (input);

    let resposeArray=response.split("**");
    //  let resposeArray2=resposeArray.split("*");
    let newResponse1="";
    for(let i=0;i<resposeArray.length;i++){
        newResponse1+=resposeArray[i];
    }
    let resposeArray11=newResponse1.split("*");
    let newResponse7="";
    for(let i=0;i<resposeArray11.length;i++){
        newResponse7+=resposeArray11[i];
    }
    let resposeArray8= newResponse7.split(" ");


    for(let i=0;i<resposeArray8.length;i++){
        let nextWord=resposeArray8[i];
        delayPara(i,nextWord+" ");
    }


    setResultData(resposeArray8);
    setLoading(false);

    setInput("");

    }
//   onSent("who is naruto uzumaki")

    const contextValues={
		prevPrompts,
		setPrevPrompts,
		onSent,
		setRecentPrompt,
		recentPrompt,
		input,
		setInput,
		showResults,
		loading,
		resultData,
		// newChat,
    };

    return (
        <Context.Provider value={contextValues}>
            {props.children}
        </Context.Provider>
    )

}


