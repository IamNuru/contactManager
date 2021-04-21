import React, { useContext, useRef, useEffect} from 'react';
import ContactContext from './context/ContactContext';
import '../../src/assets/addcontact.css';

const FilterContacts = () => {
    const contactContext = useContext(ContactContext);
    const { filterContacts, clearFilter, filtered } = contactContext;

    const text = useRef('');

    useEffect(() =>{
        if(filtered === null){
            text.current.value ='';
        }
    })

    const onChange =(e) =>{
        if(text.current.value !== ''){
            filterContacts(e.target.value)
        }else{
            clearFilter()
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
    }

    return (
        <form id="contact" onSubmit={handleSubmit}>
            <input ref={text} type="text" placeholder="Search Contact"
            onChange={onChange}/>
        </form>
    )
}

export default FilterContacts
