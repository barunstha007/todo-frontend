import styled from 'styled-components'

export const ListContainer = styled.ul`
	padding: 0;
	cursor: pointer;
`

export const Row = styled.li`
	display: flex;
	alight-itmes: center;
	justify-content: space-between;
	padding: 8px 0;
	font-size: 1rem;
`

export const Text = styled.span`
	::first-letter {
		text-transform: capitalized;
	}
`
export const CheckBox = styled.span`
	font-size: 1.2em;
	color: ${({ completed }) => (completed ? 'green' : 'red')};
`

export const DeleteIcon = styled(Text)``
