import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: auto;
  text-align: center;
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    padding: 0 2.5rem;
  }
`
export const ThemeToggleFooter = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 6px 6px 0;
`