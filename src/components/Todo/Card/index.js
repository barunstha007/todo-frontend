import React from 'react'
import {
	ListContainer,
	Row,
	Text,
	DeleteIcon,
	CheckBox,
} from '../TodoList/style'
import axios from '../../../axios'
import moment from 'moment'

function Card({ todos, fetchData }) {
	const todoArr = todos.data

	const updateTodo = async (id) => {
		try {
			const response = await axios.put(`/todos/${id}`, { id })
			fetchData()
			return response.data.json
		} catch (error) {
			console.error(error.message)
		}
	}

	const deleteTodo = async (id) => {
    try {
      console.log({id})
			const response = await axios.delete(`/todos/${id}`, { id })
			fetchData()
			return response.data.json
		} catch (error) {
			console.error(error.message)
		}
	}
	return (
		<div className="flex flex-wrap -mx-2">
			{todoArr?.map((todo) => (
				<div
					key={todo.id}
					className={`w-full sm:w-1/2 md:w-1/3 px-2 mb-4 ${
						todo.completed ? 'bg-green-50' : 'bg-white'
					}`}
				>
					<div className="border border-gray-300 p-4 rounded-md">
						<h2 className="text-lg font-bold mb-2">Name: {todo.name}</h2>
						<p className="text-gray-600 mb-2">
							Description: {todo.description}
						</p>
						<p className="text-gray-500 mb-2">
							Date & Time:{' '}
							{moment(todo.date_time).format('MMMM Do YYYY, h:mm:ss a')}
						</p>
						<button
							className="bg-red-500 text-white py-1 px-3 rounded-md mr-2"
							onClick={() => deleteTodo(todo._id)}
						>
							Delete
						</button>
						<button
							className="bg-blue-500 text-white py-1 px-3 rounded-md"
							onClick={() => updateTodo(todo._id)}
						>
							Mark {todo.completed ? 'Incomplete' : 'Complete'}
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default Card
