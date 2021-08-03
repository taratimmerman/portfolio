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
    font-size: 	2rem;
    line-height: 1.06;
    letter-spacing: 1.88px;
    margin: 2rem 0 0.5rem 0;

    @media (min-width: 768px) {
        font-size: 2.75rem;
    }
`;

export const PageTitleBorder = styled.div`
    border-bottom: solid 2px #ef4b6c;
    width: 50px;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        margin-bottom: 3rem;
    }
`;