import React from "react";


const NewUserInput = ({ newUser, addItem, handleInputChange, inputIsNotValid }) => {
  
    console.log(`toto ${newUser !== null}`)
    console.log(`nono ${Object.keys(newUser)}`)
    console.log(`lolo ${Object.values(newUser)}`)
    console.log(`coco ${newUser["firstName"] === ''}`)
    console.log(`soso ${newUser.firstName === ''}`)




  
    return (
        <div className="create-user">
            <form onSubmit={addItem}>
                <label>First Name</label>
                <input
                    name='firstName'
                    type="text"
                    placeholder="Enter First Name"
                    value={ newUser.firstName }
                    onChange={handleInputChange}
                />
                <label>Last Name</label>
                <input
                    name='lastName'
                    type="text"
                    placeholder="Enter Last Name"
                    value={newUser.lastName}
                    onChange={handleInputChange}
                />
                <label>Username</label>
                <input
                    name='userName'
                    type="text"
                    placeholder="Enter Username"
                    value={newUser.userName}
                    onChange={handleInputChange}
                />
                <button disabled={ inputIsNotValid() }>Add New User</button>
            </form>
        </div>
    )
}

export default NewUserInput
