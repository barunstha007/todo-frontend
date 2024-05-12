import React, { useState } from 'react'
import axios from '../../../axios'
import clsx from 'clsx'

function Card({ todo, fetchData,fetchUpcoming,fetchDone }) {
	const [form, setForm] = useState({
		name: todo.name,
		description: todo.description,
		date_time: todo.date_time,
		completed: todo.completed,
	} )
	
	

	const updateTodo = async (id) => {
		try {
			const response = await axios.put(`/todos/${id}`, form)
			// fetchData()
			return response.data.json
		} catch (error) {
			console.error(error.message)
		}
	}

	const deleteTodo = async (id) => {
		try {
			const response = await axios.delete(`/todos/${id}`, { id })
			fetchData()
			return response.data.json
		} catch (error) {
			console.log(error.message)
		}
	}

	function handleChange(key, value) {
		setForm({ ...form, [key]: value })
	}

	return (
		<div className={`w-full sm:w-1/2 md:w-1/3 px-2 mb-4`}>
			<div className="border border-gray-300 p-4 rounded-md">
				<h2 className="text-lg font-bold mb-2">
					Name: <br />
					<input
						value={form.name}
						onChange={(e) => {
							handleChange('name', e.target.value)
						}}
					/>
				</h2>
				<p className="text-gray-600 mb-2">
					Description:{' '}
					<textarea
						value={form.description}
						onChange={(e) => {
							handleChange('description', e.target.value)
						}}
					/>
				</p>
				<p className="text-gray-500 mb-2">
					Date & Time:{' '}
					<input
						type="datetime-local"
						value={form.date_time}
						onChange={(e) => {
							handleChange('date_time', e.target.value)
						}}
					/>
				</p>
				<button
					className="bg-red-500 text-white py-1 px-3 rounded-md mr-2"
					onClick={() => deleteTodo(todo._id)}
				>
					Delete
				</button>

				<button
					className="bg-yellow-500 text-white py-1 px-3 rounded-md mr-2"
					onClick={(e) => {
						e.preventDefault()
						updateTodo(todo._id)
					}}
				>
					Update
				</button>
				<button
					className={clsx(
						'text-white py-1 px-3 rounded-md',
						form.completed ? 'bg-green-100' : 'bg-slate-100'
					)}
					onClick={(e) => {
						e.preventDefault()
						setForm({ ...form, completed: !form.completed })
						updateTodo(todo._id)
					}}
				>
					Mark {form.completed ? 'Incomplete' : 'Complete'}
				</button>
			</div>
		</div>
	)
}

export default Card
