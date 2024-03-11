import { styled } from "styled-components";

export const WSCardFooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }

  a {
    display: flex;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 12px;
    width: 45%;
    justify-content: center;
    align-items: center;
    background: ${(prosp) => prosp.theme["yellow-light"]};

    gap: 6px;

    span {
      font-family: "Baloo 2";
      font-size: 1.1rem;

      @media (max-width: 768px) {
        font-size: 1.6;
      }
    }
  }

  a:hover {
    background-color: ${(prosp) => prosp.theme["base-hover"]};
    color: ${(prosp) => prosp.theme["yellow"]};
    transition: 0.2s;
  }
`;
