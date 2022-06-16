import React from 'react';
import styled from 'styled-components';
import styles from './styles.module.scss';


// botão principal 
const Button = styled.button`
margin-left: 10px;
margin-right: 10px;
font-size: 14px;

`
//Botão personalizado que herda botão principal
const CancelButton = styled(Button)`

background-color: lightyellow;

`
//Botão personalizado que herda botão principal
const RemoveButton = styled(Button)`

background-color: lightcoral;

`

const Userstable = (props) => (
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Username</th>
                <th>Email</th>
                <th>Ações</th>
            </tr>
        </thead>

        <tbody>

{
    props.users.length > 0 ?
    (

        props.users.map(user => (

            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>

                <EditButton onClick={
                    () => {
                        props.editRow(user)
                    }
                }>
                    Editar
                    </EditButton>

               <RemoveButton onClick={
                    () => {
                        props.deleteUser(user.id)
                    }
                } >
                    Excluir
                </RemoveButton>

            </tr>

        ))

    ):(
        <tr>
            <td colSpan={4}>Lista vazia</td>
        </tr>
    )
}
</tbody>
</table>

)

export default UsersTable;