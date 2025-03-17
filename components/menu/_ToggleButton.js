import styled from 'styled-components'

export const ToggleButton1 = styled.button`
  border: none;
  background-color: ${({ checked, theme }) =>
    checked ? theme.Icon_bkColor : theme.BC_Home2};
  color: ${({ theme }) => theme.Icon_Color};
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`
