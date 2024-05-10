import React from 'react'
import { FormContainer, Input, Button } from './styles'

function Form({
	name,
	setName,
	description,
	setDescription,
	dateTime,
	setDateTime,
	completed,
	setCompleted,
}) {
	return (
		<FormContainer>
			<label htmlFor="name">Name:</label>
			<Input
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				type="text"
				required
			/>
			<label htmlFor="description">Description:</label>
			<Input
				id="description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				type="text"
				required
			/>
			<div className="dateTimeContainer">
				<label htmlFor="dateTime">Date & Time:</label>
				<Input
					id="dateTime"
					value={dateTime}
					onChange={(e) => setDateTime(e.target.value)}
					type="datetime-local"
					required
				/>
			</div>
			<div className="completedContainer">
				<label htmlFor="completed">Completed:</label>
				<input
					id="completed"
					checked={completed}
					onChange={(e) => setCompleted(e.target.checked)}
					type="checkbox"
				/>
			</div>
			<Button type="submit">Submit</Button>
		</FormContainer>
	)
}

export default Form
