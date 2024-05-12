import styled from 'styled-components'

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 5px 0px;
`

export const Input = styled.input`
	background-color: #f7f7f7;
	padding: 8px;
	margin-bottom: 10px;
	border: 1px solid #ef7360;
	border-radius: 8px;
	&:focus {
		border: 3px solid #ef7360;
		outline: none;
	}
`

export const Button = styled.button`
	background: #ef7360;
	border-radius: 18px;
	border: 2px solid #ef7360;
	color: white;
	padding: 8px 20px;
	cursor: pointer;
	font-size: 0.8rem;
	font-weight: 600;
	&:hover {
		background: #ff8f7a;
		border-color: #ff8f7a;
	}
`

export const DateTimeContainer = styled.div`
	flex-direction: column;
	align-items: center;
	// width: 50%;
	overflow: hidden;
`

export const CompletedContainer = styled.div`
	display: flex;
	align-items: center;
`
