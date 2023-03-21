/* JSON Imports */
import agents from "/utils/json/agents.json";
import questions from "/utils/json/questions.json";

/* Components */
import AgentSelector from "../components/AgentSelector";
import React from "react";



export default function SoundTest() {

    /* State Variables */
    const [ agentsJSON, setAgents ] = React.useState(agents.Agents);
    const [ questionsJSON, setQuestions ] = React.useState({});
    const [ currAgentKey, setCurrAgentKey ] = React.useState(0);
    const [ currAgent, setCurrAgent ] = React.useState(agentsJSON[currAgentKey]);
    const [ currQuestion, setCurrQuestion ] = React.useState({});

    console.log(agentsJSON);
    console.log(currAgentKey);
    console.log(currAgent);
    console.log(currAgentKey);
    console.log(currAgent);

    function AgentRotateRight() {
        /* Function to change current agent in state.
           dir - int, -1 or 1
               1 moves agent selection to the right once
               -1 moves agent selection to the left once
           currNode - int, Current node in the Array of agents
               Most likely acquired by state
       */

        setCurrAgentKey(currAgentKey + 1);
        setCurrAgent(agentsJSON[currAgentKey]);
       
    }

    return (
        <div>
            <p>{currAgentKey}</p>
            <AgentSelector agent="Agent Placeholder"></AgentSelector>
            <button onClick={AgentRotateRight}></button>
        </div>
    );
}