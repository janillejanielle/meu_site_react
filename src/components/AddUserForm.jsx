import React,{UseState} from "react";
import styled from 'styled-components'
import styles from './styles.module.css';

const addButton = {
    background_color: 'lightgreen',
}

//funcintion AddUserForm(props){} 

const AddUserForm = (props) => {

    const initForm = {id: null, name: null, username: null, email: null} 
    const [user, setUser] = UseState(initForm)

    const handleInputChange = (event) => {

        const {name, value} = event.target

        setUser({...user, [name]: value})
    }
    return (
        <form 
        style={{
            display: "flex",
            flexDirection: "column"

        }}
        onSubmit={
            (event) =>{

                event.preventDefault()

                if (!user.name || !user.email || !user.username) {
                    return
                }

                props.addUser(user)
                setUser(initForm)

            }
        }>
            <label className={styles.label}>Nome</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Nome do usuário" />

            <label className={styles.label}>Username</label>
            <input type="text" name='username' value={user.username} onChange={handleInputChange} placeholder="Nickname do usuário" />

            <label className={styles.label}>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email do usuário" />

            <button styles={addButton}>Registrar</button>


        </form>
    )

}

export default AddUserForm