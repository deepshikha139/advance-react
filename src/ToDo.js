import './App.css';
import {useState} from 'react'

const ToDo = () => {
    const [toDoData, setToDoData] = useState([{key: 1, name: "tea"}]);
    const [newItemName, setNewItemName] = useState("");

    const onSaveEdit = (editKey, newValue) => {
        let tempList = [...toDoData];
        const editItemIndex = toDoData.findIndex(item => item.key === editKey);
        tempList[editItemIndex].editable = true;
        tempList[editItemIndex].name = newValue; 
        setToDoData([...tempList]);
    }
    const onDelete = (editKey) => {
        let tempList = toDoData.filter(item => item.key !== editKey);
        setToDoData(tempList);
    }

    const onAdd = () => {
        setToDoData([...toDoData, {key: toDoData.length +1, name: newItemName}]);
        setNewItemName("");
    }

    const onWriteNewItem = (newItemValue) => {
        setNewItemName(newItemValue);
    }
    return (
        <div>
                <input
                    value = {newItemName}
                    onChange={(e) => onWriteNewItem(e.target.value)}
                />
                <button onClick={onAdd}>Add Item</button>
            <>
                <div>
                    {toDoData.length > 0 && toDoData.map(item => (
                        <li>
                            <input value={item.name} onChange={(e) => onSaveEdit(item.key, e.target.value)}/>
                            <button onClick={() => onDelete(item.key)}>Delete</button>
                        </li>
                    ))
                    }
                </div>
            </>
        </div>
    )
}

export default ToDo;