import { styled } from "styled-components";

export const WSCardFooterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    a:link { text-decoration: none; }
    a:visited { text-decoration: none; }

    a{
        display: flex;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 12px;
        width: 40%;
        justify-content: center;
        align-items: center;
        background: ${prosp => prosp.theme['yellow-light']};
        

        gap: 6px;

        span{
            font-family: 'Baloo 2';
            font-size: 1.2rem;
        }
    }

`