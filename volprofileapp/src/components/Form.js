import React, {useState} from 'react';
import { connect } from 'react-redux';
import {getValueArea} from '../store/actions';

const Form = (props) => {

    const [formData, setFormData] = useState({
        base: '',
        paired: '',
        period: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getValueArea(formData, props.history)
        props.history.push('/results')
    }
    return(
        <div>
            <form style={{display: 'flex', flexDirection: 'column'}}>
                <label>Base Coin</label>
                <input 
                    type="text"
                    onChange={handleChange}
                    name="base"
                />
                
                <label>Paired Coin</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="paired"
                />
                
                <label>Time Period</label>
                <input                    
                    type="text"
                    onChange={handleChange}
                    name="period"
                />

                <button onClick={handleSubmit}>Calculate Buy/Sell Zones</button>

            </form>
        </div>
    )
}

export default connect(null, { getValueArea })(Form);