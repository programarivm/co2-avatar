import ActionTypes from '../constants/AppConstants';
import AppDispatcher from "../dispatcher/AppDispatcher.js";
import { EventEmitter } from 'events';

class AppStore extends EventEmitter {
	constructor() {
		super();
		this.state = {
			connected: false
		};
		AppDispatcher.register(this.handleActions.bind(this));
	}

	getState() {
		return this.state;
	}

	logIn() {
		console.log('TODO...');
		fetch("http://api.co2.today/auth", {
			method: "POST"
		}).then(res => res.json())
			.then(response => console.log('Success:', JSON.stringify(response)))
			.catch(error => console.error('Error:', error));

		this.emit("logIn");
	}

	handleActions(action) {
		switch (action.type) {
			case ActionTypes.LOG_IN:
				this.logIn();
				break;
			default:
        // do nothing
		}
	}
}

export default new AppStore();
