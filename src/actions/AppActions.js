import AppDispatcher from "../dispatcher/AppDispatcher.js";
import ActionTypes from '../constants/AppConstants';

class AppActions {
	logIn() {
		AppDispatcher.dispatch({
			type: ActionTypes.LOG_IN
		});
	}

	logOut() {
		AppDispatcher.dispatch({
			type: ActionTypes.LOG_OUT
		});
	}
}

export default new AppActions();
