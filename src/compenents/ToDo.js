import React from "react";


class Todo extends React.Component {
  state = {
    title: [],
    text: ""
  };


//add function
  onClick = () => {
    if (this.state.text !== "") {
      return this.setState({
        title: this.state.title.concat({
          label: this.state.text,
          id: Date.now(),
          done: false,
          complete: "Complete",
          undo: "Undo"
        }),
        text: ""
      });
    } else return alert("please enter a Todo task");
  };
  //save todo and clear input

  onChange = e => {
    if (e.target.value !== "") return this.setState({ text: e.target.value });
    else return null;
  };

  //complete taks or undo
  completed = key => {
    this.setState({
      title: this.state.title.map((todo, i) =>
        i === key ? { ...todo, done: !todo.done } : todo
      )
    });
  };

  //delete todo
  delete = key => {
    this.setState({
      title: this.state.title.filter((todo, i) => (i === key ? null : todo))
    });
  };

  render() {
    return (
      <div>
        <section className="container-fluid bg-primary">
          <div className="row">
            <div className="col title">
              <h1 className=" text-right">To Do-App!</h1>
              <h5 className="text-right">Add a New To-do</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                className="form-control form-control-lg todo-input"
                type="text"
                placeholder="Enter a new task..."
                value={this.state.text}
                onChange={this.onChange}
                name="title"
              />
            </div>
          </div>
          <div className="row justify-content-end">
            <button
              onClick={this.onClick}
              type="button"
              className="add-btn btn-lg btn-primary"
            >
              Add
            </button>
          </div>
        </section>
        <section className="bg-light container add-todo-div">
          <div className="row justify-content-center">
            <p className="h1">Let's get some work done!</p>
          </div>
          {/* todo section */}
          <ul className="list-group list">
            {this.state.title.map((todo, i) => {
              return (
                <li key={i} className="list-group-item">
                  <div className="col-1.5">
                    <button
                      className="btn-lg bg-light todo-btn"
                      onClick={() => this.completed(i)}
                    >
                      {todo.done ? todo.undo : todo.complete}
                    </button>
                  </div>
                  <div className="col-1.5">
                    <button
                      className="btn-lg bg-light todo-btn "
                      onClick={() => this.delete(i)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="col-2">
                    <h2 className={todo.done ? "todo-label" : ""}>
                      {todo.label}
                    </h2>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default Todo;
