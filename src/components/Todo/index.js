import React, { useState } from 'react'
import Form from './Form'
import { Container } from './styles'

function Todo() {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [dateTime, setDateTime] = useState('')
	const [completed, setCompleted] = useState('')
	return (
		<Container>
			<h2>List of Todos</h2>
			{/* Form Component */}
			<Form
				name={name}
				setName={setName}
				description={description}
				setDescription={setDescription}
				dateTime={dateTime}
				setDateTime={setDateTime}
				completed={completed}
				setCompleted={setCompleted}
			/>
			{/* Todo List */}
			{/* Key */}
			{/* Author */}
		</Container>
	)
}

export default Todo
