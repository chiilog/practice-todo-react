import React, { useState } from 'react';
import "./App.css";

import { IncompleteItem } from './component/IncompleteItem';
import { CompleteItem } from './component/CompleteItem';

export const App = () => {
	/**
	 * 未完了TODOの配列
	 */
	const [ inCompleteList, setInCompleteList ] = useState( ['あああ', 'いいい'] );

	/**
	 * 完了TODOの配列
	 */
	const [ completeList, setCompleteList ] = useState( ['ううう'] );

	return (
		<>
			<div className="input-area">
				<input type="text" placeholder="TODOを入力" />
				<button>追加</button>
			</div>
			<div className="incomplete-area">
				<p className="title">未完了のTODO</p>
				<ul>
					{ inCompleteList.map( ( todo ) => {
						return <IncompleteItem text={ todo } />;
					}) }
				</ul>
			</div>
			<div className="complete-area">
				<p className="title">完了のTODO</p>
				<ul>
					{ completeList.map( ( todo ) => {
						return <CompleteItem text={ todo } />;
					}) }
				</ul>
			</div>
		</>
	);
}
