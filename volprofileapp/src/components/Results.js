import React from 'react';
import {connect} from 'react-redux'

const Results = (props) => {
    if(!props.data) return <p>Loading...</p>
    return(
        <div>
            {props.data.map(coin => {
                
                if(!coin) return <p>Loading...</p>
                return (
                    <div key={coin.id}>
                        <h1>{coin.base_name} - {coin.paired_name}</h1>
                        <h4>Bullish Breakout Weekly Close @ ${coin.va_high.toFixed(8)}</h4>
                        <h4>Bearish Breakout Weekly Close @ ${coin.va_low.toFixed(8)}</h4>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.valueAreaObject
    }
}

export default connect(mapStateToProps, {})(Results);