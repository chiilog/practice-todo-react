import React from "react";
import "./App.css";

import { IncompleteItem } from './component/IncompleteItem';
import { CompleteItem } from './component/CompleteItem';

export const App = () => {
	/**
	 * 未完了TODOの配列
	 *
	 * @type {string[]}
	 */
	const inCompleteList = ['あ', 'い'];

	/**
	 * 完了TODOの配列
	 *
	 * @type {string[]}
	 */
	const completeList = ['う'];

	return (
		<>
			<div className="input-area">
				<input type="text" placeholder="TODOを入力" />
				<button>追加</button>
			</div>
			<div className="incomplete-area">
				<p className="title">未完了のTODO</p>
				<ul>
					<IncompleteItem />
				</ul>
			</div>
			<div className="complete-area">
				<p className="title">完了のTODO</p>
				<ul>
					<CompleteItem />
				</ul>
			</div>
		</>
	);
}
