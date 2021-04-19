import React from 'react';

export const IncompleteItem = ( props ) => {
	const { text } = props;
	return (
		<li>
			<div key={ text } className="list-row">
				<p>{ text }</p>
				<button>完了</button>
				<button>削除</button>
			</div>
		</li>
	);
}
