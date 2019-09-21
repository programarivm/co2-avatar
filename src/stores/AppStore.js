import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from "../dispatcher/AppDispatcher.js";
import { EventEmitter } from 'events';

class AppStore extends EventEmitter {
	constructor() {
		super();
		this.state = {};
		AppDispatcher.register(this.handleActions.bind(this));
	}

	getState() {
		return this.state;
	}

	seeResults(results) {
		this.state = results;
	}

	handleActions(action) {
		switch (action.type) {
			case ActionTypes.SEE_RESULTS:
				this.seeResults(action.results);
				break;
			default:
        // do nothing
		}
	}
}

export default new AppStore();
