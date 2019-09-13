import ActionTypes from '../constants/AppConstants';
import AppDispatcher from "../dispatcher/AppDispatcher.js";
import { EventEmitter } from 'events';

const BASE_URL = 'http://api.co2.today';

class AppStore extends EventEmitter {
	constructor() {
		super();
		this.state = {
			'authenticated': false
		};
		AppDispatcher.register(this.handleActions.bind(this));
	}

	getState() {
		return this.state;
	}

	logIn(credentials) {
		fetch(BASE_URL + '/auth', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(credentials)
		}).then(() => {
			this.state.authenticated = true;
			this.emit("logIn");
		});
	}

	handleActions(action) {
		switch (action.type) {
			case ActionTypes.LOG_IN:
				this.logIn(action.credentials);
				break;
			default:
        // do nothing
		}
	}
}

export default new AppStore();
