import React from 'react';

export const CompleteItem = ( props ) => {
	const { text } = props;

	return (
		<li>
			<div className="list-row">
				<p>{ text }</p>
				<button>戻す</button>
			</div>
		</li>
	);
}
