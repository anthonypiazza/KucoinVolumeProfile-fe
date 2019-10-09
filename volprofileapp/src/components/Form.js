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
                <label >Base Coin</label>
                <input 
                    style={{ borderRadius: '10px', padding: '10px', border: 'none'}}
                    placeholder="i.e. BTC"
                    type="text"
                    onChange={handleChange}
                    name="base"
                />
                
                <label>Paired Coin</label>
                <input
                    style={{ borderRadius: '10px', padding: '10px', border: 'none'}}
                    placeholder="i.e. USDT"
                    type="text"
                    onChange={handleChange}
                    name="paired"
                />
                
                <label>Time Period</label>
                <select
                    style={{ borderRadius: '10px', padding: '10px', border: 'none'}}
                    onChange={handleChange}
                    name="period"
                >
                    <option style={{ borderRadius: '10px', padding: '10px', border: 'none'}} disabled>Select period...</option>
                    <option style={{ borderRadius: '10px', padding: '10px', border: 'none'}} >1day</option>
                    <option style={{ borderRadius: '10px', padding: '10px', border: 'none'}} >1week</option>
                </select>
                <button style={{ marginTop: '20px', borderRadius: '10px', padding: '10px', border: 'none'}} onClick={handleSubmit}>Calculate Buy/Sell Zones</button>

            </form>
        </div>
    )
}

export default connect(null, { getValueArea })(Form);