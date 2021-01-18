import React, { Component } from 'react'
import { Consumer } from '../../context'

export default class Contacts extends Component {

    componentDidUpdate() {
        console.log("Composant mit à jour")
    }

    state = {
        show: false
    }

    showContact = () => {
        this.setState({
            show: !this.state.show
        })
    }

    deleteContact = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id})
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-3 text-center">
                            <h4>{this.props.nom} &nbsp;
                                <i style={{cursor: "pointer"}} className="fas fa-sort-down"
                                onClick={this.showContact}>
                                </i>
                                <i className="fas fa-times" style={{cursor: "pointer", float: "right", color: "red"}}
                                onClick={() => this.deleteContact(this.props.id, value.dispatch)} >
                                </i>                
                            </h4>
                            {this.state.show ? (
                                <ul className="card card-body mb-3">
                                    <li className="list-group-item">
                                        Email : {this.props.email}
                                    </li>
                                    <li className="list-group-item">
                                        Tel : {this.props.tel}
                                    </li>
                                </ul>
                                ) : null
                            }
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
