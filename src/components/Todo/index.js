import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import Card from './Card'
import Filter from './Filter'
import Form from './Form'
import { Container } from './styles'

function Todo() {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [date_time, setDateTime] = useState('')
	const [completed, setCompleted] = useState('')
	const [todos, setTodos] = useState([])
	const todoArr = todos.data

	const fetchData = async () => {
		try {
			const response = await axios.get('/todos')
			setTodos(response.data)
		} catch (error) {
			console.log(error.message)
		}
	}
	const fetchFilter = async (filter) => {
		try {
			const response = await axios.get(`/todos?filter=${filter}`)
			setTodos(response.data)
		} catch (error) {
			console.log(error.message)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	let addTodo = async (e) => {
		e.preventDefault()
		try {
			if (
				name.trim() === '' ||
				description.trim() === '' ||
				date_time.trim() === ''
			) {
				console.log('Name, description, or date_time cannot be empty')
				return
			}
			await axios.post('/todos', {
				name,
				description,
				completed: false,
				date_time,
			})
			fetchData()
			setName('')
			setDescription('')
			setDateTime('')
			setCompleted(false)
		} catch (error) {
			console.error('Error adding todo:', error.message)
		}
	}
	return (
		<Container>
			{/* Filter */}
			<div className="flex gap-3">
				<Filter
					title="Upcoming"
					todos={todos}
					fetchFilter={fetchFilter}
					className="bg-yellow-500 text-white py-1 px-3 rounded-md ml-2"
				/>
				<Filter
					title="Done"
					todos={todos}
					fetchFilter={fetchFilter}
					className="bg-green-500 text-white py-1 px-3 rounded-md ml-2"
				/>
				<Filter
					title="All"
					todos={todos}
					fetchFilter={fetchFilter}
					className="bg-blue-500 text-white py-1 px-3 rounded-md ml-2"
				/>
			</div>
			{/* Form Component */}
			<Form
				name={name}
				setName={setName}
				description={description}
				setDescription={setDescription}
				dateTime={date_time}
				setDateTime={setDateTime}
				completed={completed}
				setCompleted={setCompleted}
				addTodo={addTodo}
			/>
			<h2 className="mb-4">List of Todos</h2>

			{/* Todo List */}
			<div className="flex flex-wrap -mx-2">
				{todoArr?.map((todo) => (
					<Card todo={todo} key={todo._id} fetchData={fetchData} />
				))}
			</div>
		</Container>
	)
}

export default Todo
