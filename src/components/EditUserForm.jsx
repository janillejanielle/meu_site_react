import {findByLabelText} from '@testing-library/react';
import React, {UseState,userEffect} from 'react';
import styles from './styled-componentes'
import styles from 'styles.module.scss'



const EditUserForm = (props) => {

    // objeto de estilos
    const editForm = {
        display: 'flex',
        flexDirection: 'column',
    }
    // componentes estilizado
    const CancelButton=styled.button`
        background-color: lightcoral
        `
        
    const [user, setUser] = UseState(props.currentUser)

     userEffect (
        () => {
            setUser(props.currentUser)
        },
        [props]
     )
     const handleInputChange = (event) => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }
    return (
        <form 
        style={editForm}
        onSubmit={
            (event) => {
                event.preventDefault()

                props.updateUser(user.id, user)                
            }
        }>
            <label className={styles.label}>Nome</label> 
            <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Nome do usuário" />

            < label className={styles.label}>Username</label>
            <input type="text" name='username' value={user.username} onChange={handleInputChange} placeholder="Nickname do usuário" />

            <label className={styles.label}>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email do usuário" />
            
            <button
            style={{"background-color": "lightgreen"}}>
                Atualizar
               </button>

             {/*<button onClick={
                () => {
                    props.setEditing(false)
                }
            }>
                Cancelar
            </button> */}
            <CancelButton onClick={
                () => {
                    props.setEditing(false)
                }
            }>
                Cancelar
            </CancelButton>
        </form>
    )

}

export default EditUserForm