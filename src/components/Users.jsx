import React, { useState } from 'react';
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm';
import UsersTable from './UsersTable';

const Users = () => {

    const usersData=[
        {id: 1, name: 'João', username: 'joao12', email:'graciel-guerreiro@outlook.com'}, 
        {id: 2, name: 'Maria', username: 'maria12', email:'maria12@gmail.com'},
        {id: 3, name: 'Pedro', username: 'pedro12', email:'pedro@gmail.com'},

    ]

    const initForm = {id: null, name: '', username: '', email:''}

    const [users, setUsers] = useState(usersData)
    const[currentUser, setCurrentUser] = useState(initForm)

    const[editing, setEditing] = useState(false)

    const addUser = (user) => {

        user.id = Users.length + 1
        setUsers([...Users, user])

    }
    const deleteUser = id => {
		setEditing(false)

		setUsers(Users.filter(user => user.id !== id))
	}

    const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(
			user => (user.id === id ? updatedUser : user)))
	}

    const editRow = (user) => {

        setEditing(true)
        setCurrentUser({id: user.id, name: user.name, username: user.username, email:user.email})

    }

    return(
        <div>
            <h2>Cadastro de Usuários</h2>
            <div>
                <div>

                    {
                        editing?(
                            <div>
                                <h3>Editar Usuário</h3>
                                <EditUserForm 
                                    editing={editing}
                                    setEditing={setEditing}
                                    currentUser={currentUser}
                                    updateUser={updateUser}
                                />
                            </div>
                        ):(
                            <div>

                                <h3>Novo usuário</h3>
                                <AddUserForm addUser={addUser} />

                            </div>
                        )
                    }

                </div>
<div>
                    <h3>Lista de usuários</h3>
                    <UsersTable 
                        users={users}
                        editRow={editRow}
                        deleteUser={deleteUser}
                    />
                </div>
            </div>
        </div>
    )

}

export default Users
