import AppDispatcher from "../dispatcher/AppDispatcher.js";
import ActionTypes from '../constants/AppConstants';

class AppActions {
	logIn(data) {
		AppDispatcher.dispatch({
			type: ActionTypes.LOG_IN,
			credentials: data
		});
	}

	logOut() {
		AppDispatcher.dispatch({
			type: ActionTypes.LOG_OUT
		});
	}
}

export default new AppActions();
