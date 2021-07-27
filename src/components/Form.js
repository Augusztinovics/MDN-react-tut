import React, {useState} from "react";



export default function Form(props) {
    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (name === ""){
            return;
        }
        props.addTask(name);
        setName("");
       }

    return(
        <form onSubmit={handleSubmit} >
        <h2 className="label-wrappr">
          <label htmlFor="new-todo-input" className="label_lg">
            What needs to be done?
          </label>
        </h2>
        <input  
           type="text"
           id="new-todo-input"
           className="input input_lg"
           name="text"
           autoComplete="off" 
           value={name}
           onChange={handleChange}
        />
        <button type="submit" className="btn btn_primary btn_lg">Add</button>
      </form>
    );
}