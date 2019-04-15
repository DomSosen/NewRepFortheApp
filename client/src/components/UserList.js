import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from "reactstrap/es/Button";

export default class UserList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}



	componentDidMount() {
	    axios.get('http://localhost:7778/person/' )
	    .then(res => {
	    	this.setState({ users:  res.data.list });
	    }).catch(function (error) {
			console.log(error.toString());
		});


		// .then( response => {
		// 	this.setState({users: response.data});
		// 	console.log(response.data);
		// })
    }

	deleteUser = (id) => () => {
		axios.delete(`http://localhost:7778/person/${id}`)
			.then(res => {
				this.setState({ users: this.state.users.filter(x => x._id !== id) });
			}).catch(function (error) {
				console.log(error.toString());
			});
	};

	renderUsersRow(user) {
		return (
			<tr>
				<td> { user.firstName } </td>
				<td> { user.lastName } </td>
				<td> { user.age } </td>

				<td>
					<Link to={"/edit/"+user._id}><Button>Edit</Button></Link>
					<Button onClick={this.deleteUser(user._id)}>Delete</Button>
				</td>
			</tr>
		);
	}

 	userList() {
 		return this.state.users.map((currentUser, i) => {
 			return this.renderUsersRow(currentUser);
 		})
 	}
 	
    render() {
     	return(
	      	<div>
	      		<h3> User List </h3>
	      		<table className="table table-striped" style={{ marginTop: 20}}>
	      		<thead>	
	      			<tr>
	      				<th>First Name </th>
	      				<th>Last Name</th>
	      				<th>Age</th>
						<th>&nbsp;</th>
	      			</tr>
	      		</thead>
	      			<tbody>
	      				 { this.userList() }
	      			</tbody>
	      		</table>
	      	</div>
      	)
    }  
}



