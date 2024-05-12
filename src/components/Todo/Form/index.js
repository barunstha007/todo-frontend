import React from 'react'
import { FormContainer, Input, Button } from './styles'

function Form({
	name,
	setName,
	description,
	setDescription,
	date_time,
	setDateTime,
	completed,
	setCompleted,
	addTodo,
}) {
	return (
		<div className="space-y-3 w-[80%]">
			<div className="grid grid-cols-2 gap-x-3">
				<p htmlFor="name" className="text-right">
					Name :
				</p>
				<Input
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Enter name"
					required
				/>
			</div>
			<div className="grid grid-cols-2 gap-x-3">
				<p htmlFor="description" className="text-right">
					Description :
				</p>
				<textarea
					className="border-2 border-red-400 rounded-lg p-2 active:border-red-400"
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					type="text"
					placeholder="Enter short description"
					rows={3}
					required
				/>
			</div>
			<div>
				<div className="grid grid-cols-2 gap-x-3">
					<p htmlFor="dateTime" className="text-right">
						Date & Time :
					</p>
					<Input
						id="dateTime"
						value={date_time}
						onChange={(e) => setDateTime(e.target.value)}
						type="datetime-local"
						placeholder="Select date & time"
						required
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-x-3">
				<p htmlFor="completed" className="text-right">
					Completed :
				</p>
				<div className="text-left">
					<input
						id="completed"
						value={completed}
						onChange={(e) => setCompleted(e.target.checked)}
						type="checkbox"
					/>
				</div>
			</div>
			<div className="text-center">
				<Button type="submit" onClick={(e) => addTodo(e)}>
					Add
				</Button>
			</div>
		</div>
	)
}

export default Form
