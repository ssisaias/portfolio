import styled from 'styled-components'

export const WebsiteCardContainer = styled.div`
    width: 310px;
    height: auto;
    flex-shrink: 0;
    border-radius: 5%;
    background: ${props => props.theme['base-card']};
`

export const WsCardHeaderContainer = styled.div`
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    h4{
        font-family: 'Baloo 2';
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 130%;
        color: ${props => props.theme['base-subtitle']};
    }
`

export const WsCardDescriptionContainer = styled.div`
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    height: 5.5rem;
    overflow: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    h4{
        font-family: 'Baloo 2';
        font-size: 1rem;
        font-weight: 400;
        line-height: 100%;
        color: ${props => props.theme['base-subtitle']};
    }
`