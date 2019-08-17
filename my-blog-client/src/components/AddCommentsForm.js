import React, { useState } from 'react';



const AddCommentForm = ({ articleName, setArticleInfo }) => {
	
	const [username, setUsername] = useState('');
	const [CommentText, setCommentText] = useState('');

const AddComment = async() => {
	
	const result = await fetch(`/api/articles/${articleName}/add-comment`, {
		method: 'post',
		body: JSON.stringify({ username, text: CommentText }),
		headers: {

			'Content-Type': 'application/json',
		}
	});
	const body = await result.json();
	setArticleInfo(body);
	setUsername('');
	setCommentText('');
}

return( 
	
	<div id="add-comment-form">
		<h3>Add Comment</h3>
		<level>
			Name: 
			<input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
		</level>
		<level>
			Comment:
				<textarea rows = "4" cols="50" value={CommentText} onChange={(event) => setCommentText(event.target.value)}/>
		</level>
		
		<button onClick={() => AddComment()}>Add Comment</button>
	</div>	
	);
};

export default AddCommentForm;