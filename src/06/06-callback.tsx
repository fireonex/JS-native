import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {

    const deleteUser = (event:  MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const addUser = () => {
        alert('user should be added')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement> ) => {
        console.log('age changed ' + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log('loose focus')
    }

    return <div>
        <textarea onChange={onNameChanged}
                  onBlur={focusLostHandler}>
            Kataerel
        </textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={deleteUser}>x</button>
    </div>
}
