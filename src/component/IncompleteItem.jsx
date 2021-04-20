import React from 'react';

export const IncompleteItem = ( props ) => {
	const { text, onClickDelete } = props;
	return (
		<li>
			<div className="list-row">
				<p>{ text }</p>
				<button>完了</button>
				<button onClick={ onClickDelete }>削除</button>
			</div>
		</li>
	);
}
