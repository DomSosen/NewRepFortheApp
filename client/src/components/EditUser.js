import React, {Component} from 'react';
import axios from 'axios';

export default class EditUser extends Component {

    constructor(props) {
        super(props);



        if (props.match && props.match.params && props.match.params.id) {
           const id = props.match.params.id;

            this.state = {
                id,
                firstName: '',
                lastName: '',
                age: '',
            };

            axios.get(`http://localhost:7778/person/${id}`)
                .then(res => {
                    this.setState({...res.data})
                }).catch(function (error) {
                    console.log(error.toString());
                });

        }
    }

    componentDidMount() {}

    onChangeCreateFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeCreateLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeCreateAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:7778/person/${this.state.id}`, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };


    render() {

        return (
            <div>
                <h3>Edit existing user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChangeCreateFirstName.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lastName}
                            onChange={this.onChangeCreateLastName.bind(this)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Age: </label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeCreateAge.bind(this)}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}