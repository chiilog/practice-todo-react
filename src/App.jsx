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
	const [ incompleteList, setIncompleteList ] = useState( ['あああ', 'いいい'] );

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

	/**
	 * 追加ボタンをクリックしたら未完了TODOに追加する
	 */
	const onClickAddTodo = () => {
		const newTodos = [...incompleteList, todoText];
		setIncompleteList( newTodos );
		setTodoText( '' );
	};

	/**
	 * 削除ボタンをクリックしたらTODOを削除する
	 * @param {number} index
	 */
	const onClickDelete = ( index ) => {
		const newTodos = [...incompleteList];
		newTodos.splice( index, 1 );
		setIncompleteList( newTodos );
	}

	/**
	 * 完了ボタンをクリックしたら、未完了TODOからTODOを削除し、完了TODOに追加する
	 * @param {number} index
	 */
	const onClickComplete = ( index ) => {
		const incompleteTodos = [...incompleteList];
		const completeTodos = [...completeList, incompleteTodos[index]];
		setCompleteList( completeTodos );
		incompleteTodos.splice( index, 1 );
		setIncompleteList( incompleteTodos );
	}

	/**
	 * 戻すボタンをクリックしたら、完了TODOからTODOを削除し、未完了TODOに追加する
	 *
	 * @param {number} index
	 */
	const onClickRestore = ( index ) => {
		const completeTodos = [...completeList];
		const incompleteTodos = [...incompleteList, completeTodos[index]];
		setIncompleteList( incompleteTodos );
		completeTodos.splice( index, 1 );
		setCompleteList( completeTodos );
	}

	return (
		<>
			<div className="input-area">
				<input type="text" placeholder="TODOを入力" value={ todoText } onChange={ onChangeTodoText } />
				<button onClick={ onClickAddTodo }>追加</button>
			</div>
			<div className="incomplete-area">
				<p className="title">未完了のTODO</p>
				<ul>
					{ incompleteList.map( ( todo, index ) => {
						return <IncompleteItem
							key={ todo }
							text={ todo }
							onClickDelete={ () => onClickDelete( index ) }
							onClickComplete={ () => onClickComplete( index ) }
						/>;
					}) }
				</ul>
			</div>
			<div className="complete-area">
				<p className="title">完了のTODO</p>
				<ul>
					{ completeList.map( ( todo, index ) => {
						return <CompleteItem
							key={ todo }
							text={ todo }
							onClickRestore={ () => onClickRestore( index ) }
						/>;
					}) }
				</ul>
			</div>
		</>
	);
}
