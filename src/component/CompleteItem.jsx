import React from 'react';

export const CompleteItem = ( props ) => {
	const { text, onClickRestore } = props;

	return (
		<li>
			<div className="list-row">
				<p>{ text }</p>
				<button onClick={ onClickRestore }>戻す</button>
			</div>
		</li>
	);
}
