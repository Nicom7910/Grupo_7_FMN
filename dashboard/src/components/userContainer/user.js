import React, {Component} from 'react';

class Users extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount(){
        fetch('http://fmnelectronica.xyz/api/users')
            .then(res => res.json())
            .then( (resultado) => {
                this.setState({
                    isLoaded: true,
                    users: resultado.data.users
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
}

render() {

    const {error, isLoaded, users} = this.state;

    if(error){
        return <div> Error </div>
    }
    else if ( !isLoaded) {
        return <div>Hola...</div>
    }
    else{
        let largoArray = this.state.users.length;
        return ( 
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                <div> <strong>Id Usuario:</strong> {this.state.users[largoArray-1].id}</div>
                                <div> <strong>Nombre:</strong> {this.state.users[largoArray-1].name} </div>
                                <div> <strong>Apellido:</strong> {this.state.users[largoArray-1].last_name} </div>
                                <div> <strong>Email:</strong> {this.state.users[largoArray-1].email} </div>
                                <div> <strong>Direccion:</strong> {this.state.users[largoArray-1].adress} </div>
                                <div> <strong>Pais:</strong> {this.state.users[largoArray-1].country} </div>
                                <div> <strong>Provincia:</strong> {this.state.users[largoArray-1].province} </div>
                                <div> <strong>Ciudad:</strong> {this.state.users[largoArray-1].city} </div>
                            </div>
            );
        }
    }
};

export default Users;
