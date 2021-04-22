const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    // id is a 3 digit number based on current date.now in milliseconds
    // spread in existing todos and add a new todo formatted with keys text, completed, & id
    setTodos([
      ...todos, {text: inputText, completed: false, id: new Date().getUTCMilliseconds()}
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
    <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
    <button className="todo-button" type="submit" onClick={submitTodoHandler}>
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
  )
}

export default Form
