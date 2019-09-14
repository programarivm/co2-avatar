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
		}).then((res) => {
			switch (res.status) {
				case 204:
					this.state.authenticated = true;
					this.emit("log_in_succeeded");
					break;
				case 401:
					this.emit("log_in_failed");
					break;
				default:
					// do nothing
					break;
			}
		});
	}

	logOut() {
		// TODO: remove access_token cookie
		this.state.authenticated = false;
		this.emit("log_out");
	}

	handleActions(action) {
		switch (action.type) {
			case ActionTypes.LOG_IN:
				this.logIn(action.credentials);
				break;
			case ActionTypes.LOG_OUT:
				this.logOut();
				break;
			default:
        // do nothing
		}
	}
}

export default new AppStore();
