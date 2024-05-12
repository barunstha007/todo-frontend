import React from 'react'

function Filter({ title, fetchFilter, className }) {
	return (
		<div>
			<button
				className={className}
				onClick={(e) => {
					e.preventDefault()
					fetchFilter(title.toLowerCase())
				}}
			>
				{title}
			</button>
		</div>
	)
}

export default Filter
