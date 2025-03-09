import styled from "styled-components"

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme["gray-100"]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["green-700"]};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme["red-500"]};
  color: ${({ theme }) => theme["gray-100"]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["red-700"]};
  }
`