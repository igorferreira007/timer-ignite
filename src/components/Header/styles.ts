import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: .5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: grid;
      place-content: center;

      color: ${({ theme }) => theme["gray-100"]};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme["green-500"]};
      }

      &.active {
        border-bottom: 3px solid ${({ theme }) => theme["green-500"]};
      }
    }
  }
`