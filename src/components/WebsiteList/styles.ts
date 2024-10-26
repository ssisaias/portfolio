import styled from 'styled-components';

export const WebsiteListContainer = styled.div`
    flex-shrink: 0;
    
    h2, h3 {
        font-family: 'Baloo 2', cursive;
        font-size: 1.2rem;
        color: ${props => props.theme['base-subtitle']}
    }
    h3 {
        flex: content;
    }
`

export const WSList = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 18px;
    gap: 1rem;
    max-width: 100%;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
