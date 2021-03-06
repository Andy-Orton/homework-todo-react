import React from 'react';

class HomeworkTodo extends React.Component{
    constructor(props){
        super(props)
        this.addItem = this.addItem.bind(this);
        this.state ={
            items: []
        };
    }

    addItem(e){
        if(this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);

        e.preventDefault();
    }
    render(){
        return (
            <div className="homeworkListMain app">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(task) => this._inputElement = task} placeholder="Enter Homework Item"></input>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default HomeworkTodo;