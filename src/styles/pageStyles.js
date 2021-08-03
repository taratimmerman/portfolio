import styled from 'styled-components';

export const PageSection = styled.section`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 6;
`;

export const PageTitle = styled.h2`
    color: #404040;
    font-size: 	2.75rem;
    line-height: 1.06;
    letter-spacing: 1.88px;
    margin: 3rem 0 0.5rem 0;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const PageTitleBorder = styled.div`
    border: solid 1px #ef4b6c;
    width: 50px;
    margin: 0 0 5rem 0;
`;