import React from 'react';


export default function Forum(){
    const [name, setName] = useState('');

    return (

        <form>
            <label>
                Name:
                <input type='text' />
            </label>
        </form>
    )
}

