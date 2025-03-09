import styled from "styled-components"

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc() 0.5rem;
  color: ${({ theme }) => theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme["gray-500"]};
  height: 2.5rem;
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme["green-500"]};
  }

  &::placeholder {
    color: ${({ theme }) => theme["gray-500"]};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4.5rem;
  text-align: center;
`