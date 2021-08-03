import React from 'react';

import styled from 'styled-components';

const TicketPunch = () => {
    return (
        <Construction>
            <h2> 🚧 UNDER CONSTRUCTION 🚧</h2>
        </Construction>
    );
};

export default TicketPunch;

const Construction = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px;
`;