// import React from 'react'
// import { ListContainer, Row, Text, DeleteIcon, CheckBox } from './style'
// import axios from '../../../axios'
// function TodoList({ todos, fetchData }) {
// 	const todoArr = todos.data

// 	const updateTodo = async (id) => {
// 		try {
// 			const response = await axios.put(`/todos/${id}`, { id })
// 			fetchData()
// 			return response.data.json
// 		} catch (error) {
// 			console.error(error.message)
// 		}
// 	}

// 	const deleteTodo = async (id) => {
// 		try {
// 			const response = await axios.delete(`/todos/${id}`, { id })
// 			fetchData()
// 			return response.data.json
// 		} catch (error) {
// 			console.error(error.message)
// 		}
// 	}
// 	return (
// 		<div>
// 			<ListContainer>
// 				{todoArr?.map((todo) => (
// 					<Row key={todo._id} className="border border-white-50">
// 						<Text onClick={() => updateTodo(todo._id)}>{todo.name}</Text>
// 						<Text>{todo.description}</Text>
// 						<Text>{todo.date_time}</Text>
// 						<CheckBox checked={todo.completed}>
// 							{todo.completed ? '✓' : '◻️'}
// 						</CheckBox>
// 						<DeleteIcon onClick={()=>{deleteTodo(todo._id)}}>X</DeleteIcon>
// 					</Row>
// 				))}
// 			</ListContainer>
// 		</div>
// 	)
// }

// export default TodoList
