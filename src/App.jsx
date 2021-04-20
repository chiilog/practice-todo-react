import React, { useState } from 'react';
import "./App.css";

import { IncompleteItem } from './component/IncompleteItem';
import { CompleteItem } from './component/CompleteItem';

export const App = () => {
	/**
	 * 入力するテキストのステート
	 */
	const [ todoText, setTodoText ] = useState( '' );

	/**
	 * 未完了TODOの配列のステート
	 */
	const [ inCompleteList, setInCompleteList ] = useState( ['あああ', 'いいい'] );

	/**
	 * 完了TODOの配列のステート
	 */
	const [ completeList, setCompleteList ] = useState( ['ううう'] );

	/**
	 * inputに入力したらvalueの値を上書きする
	 *
	 * @param event
	 */
	const onChangeTodoText = ( event ) => setTodoText( event.target.value );

	return (
		<>
			<div className="input-area">
				<input type="text" placeholder="TODOを入力" value={ todoText } onChange={ onChangeTodoText } />
				<button>追加</button>
			</div>
			<div className="incomplete-area">
				<p className="title">未完了のTODO</p>
				<ul>
					{ inCompleteList.map( ( todo, index ) => {
						return <IncompleteItem
							key={ todo }
							text={ todo }
						/>;
					}) }
				</ul>
			</div>
			<div className="complete-area">
				<p className="title">完了のTODO</p>
				<ul>
					{ completeList.map( ( todo ) => {
						return <CompleteItem
							key={ todo }
							text={ todo }
						/>;
					}) }
				</ul>
			</div>
		</>
	);
}
