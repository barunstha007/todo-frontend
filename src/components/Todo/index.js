import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import Card from './Card'
import Form from './Form'
import { Container } from './styles'
import TodoList from './TodoList'

function Todo() {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [date_time, setDateTime] = useState('')
	const [completed, setCompleted] = useState('')
	const [todos, setTodos] = useState([])

	const fetchData = async () => {
		try {
			const response = await axios.get('/todos')
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
			<h2 className='mb-4'>List of Todos</h2>
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
			{/* Todo List */}
			<Card todos={todos} fetchData={fetchData} />
			{/* Key */}
			{/* Author */}
		</Container>
	)
}

export default Todo
