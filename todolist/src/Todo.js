import React, { Component } from 'react'

export default class Todo extends Component {
    
    state = {
        element: '',
        items: []
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })     
    } 

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
            element: '',
            items: [...this.state.items, {element: this.state.element}]
        })
    }

    deleteItem = (index) => {
        const arr = this.state.items
        arr.splice(index, 1)
        this.setState({items: arr})
    }

    renderTodo = () => {
        return this.state.items.map((item, index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4>{item.element}
                            <i className="fas fa-times"
                                style={{cursor: 'pointer', float: 'right', color: 'red'}}
                                onClick={() => this.deleteItem(index)}
                            ></i>
                        </h4>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="card my-3">
                    <div className="card-header">To-Do-List</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="element">Chose à faire :</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="element"
                                    onChange={this.onChange}
                                    value={this.state.element}
                                />
                            </div>
                            <button className="btn btn-primary btn-block">
                                Ajouter une chose à faire !
                            </button>
                        </form>
                    </div>
                </div>
                {this.renderTodo()}
            </React.Fragment>
        )
    }
}
