import React from 'react';

const seasonConfig = {
    Summer: {
        text: 'Go to beach',
        iconName: 'sun'
    },
    Winter: {
        text: 'Chilly',
        iconName: 'snowflake'
    }
}


const getSeason = (lat, month) => {
    const isAprilToSept = (3 <= month && month <= 8);
    const isNorthHemispehre = (lat >= 0);

    return ((isNorthHemispehre && isAprilToSept) || (!isNorthHemispehre && !isAprilToSept)) ? 'Summer' : 'Winter'
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, (new Date()).getMonth());
    const { iconName, text } = seasonConfig[season];

    return (
        <div> 
            <i className={`${iconName} icon`}></i>
            <h1>{text}</h1> 
            <i className={`${iconName} icon`}></i>
        </div>
    );
}


export default SeasonDisplay;