import React, {useState} from "react";
import trash from './trash.svg'

function App() {
    const [taskInput, updateTaskInput] = useState("");
    const [toDoList, updateToDOList] = useState([]);

    const inputKeyDown = (event) => {
        if (event.keyCode === 13) addNote();
    };
    /*
/********************************************************
* nazwa funkcji: inputKeyDown
*
* parametry wejściowe: event
*
* opis funkcji: Sprawdza czy naciśnięty przycisk był "ENTER"
*
* autor: Maciej Jaroszyński
* ****************************************************/
    const getTaskObject = (description, isComplete) => {
        return {
            description,
            isComplete
        }
    }
/*
/********************************************************
* nazwa funkcji: getTaskObject
*
* parametry wejściowe: description, isComplete
*
* opis funkcji: zwraca description i isComplete
*
* autor: Maciej Jaroszyński
* ****************************************************/
    
    const addNote = () => {
        if (!taskInput || !taskInput.length)
            return;
        toDoList.push(getTaskObject(taskInput, false));
        updateToDOList(toDoList);
        updateTaskInput("")
    };
/*
/********************************************************
* nazwa funkcji: addNote
*
* 
*
* opis funkcji: dodaje do listy kolejny element
*
* autor: Maciej Jaroszyński
* ****************************************************/
    const deleteTask = (index) => {
        let splice = toDoList.filter((item, i) => i !== index);
        updateToDOList(splice);
    }
/*
/********************************************************
* nazwa funkcji: deleteTask
*
* 
*
* opis funkcji: Usuwa element z listy
*
* autor: Maciej Jaroszyński
* ****************************************************/
    const markComplete = (index) => {
        const list = [...toDoList]
        list[index].isComplete = !list[index].isComplete
        updateToDOList(list)
    }
/*
/********************************************************
* nazwa funkcji: markComplete
*
* 
*
* opis funkcji: Zaznacza element listy jako wykonany
*
* autor: Maciej Jaroszyński
* ****************************************************/
    return (
        <div className="app-background">
            <p className="heading-text">Stwórz Liste <span role="img" aria-label="react"></span></p>
            <div className="task-container column">
                <div className="row">
                    <input
                        className="text-input"
                        value={taskInput}
                        onKeyDown={inputKeyDown}
                        onChange={(event) => updateTaskInput(event.target.value)}
                    />
                    <button className="add-button" onClick={addNote}>
                        Dodaj
                    </button>
                </div>
                {toDoList?.length ?
                    toDoList.map((toDoObject, index) =>
                        <ListItem key={index} itemData={toDoObject} markComplete={markComplete}
                                  index={index} deleteTask={deleteTask}/>) :
                    <p className="no-item-text"><span role="img" aria-label="react"></span> &nbsp;Nie dodałeś niczego do listy !</p>}
            </div>
            <p className="footer-text">Maciej Jaroszyński</p>
        </div>
    );
}

function ListItem(props) {
    return (
        <div className="list-item row jc-space-between">
            <span className={props.itemData.isComplete ? 'task-complete' : ''}
                  onClick={() => props.markComplete(props.index)}>{props.itemData.isComplete ? `✅ ` : ''}&nbsp;{props.itemData?.description}</span>
            <img className="delete-icon" src={trash} alt="delete-task"
                 onClick={() => props.deleteTask(props.index)}/>
        </div>
    );
}

export default App;
