import React from 'react';
import TrelloCard from './TrelloCard';

const TrelloList = ({title}) => {
    return (
        <div style={styles.container}>
            <h2>{title}</h2>
            <TrelloCard />
        </div>
    );
};

const styles = {
    container:{
        backgroundColor: "grey",
        borderRadius: 3,
        width: "300px",
        padding:"8px"
    }
}

export default TrelloList;