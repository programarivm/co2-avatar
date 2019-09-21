import AppDispatcher from "../dispatcher/AppDispatcher.js";
import ActionTypes from '../constants/ActionTypes';

class AppActions {
	seeResults(data) {
		AppDispatcher.dispatch({
			type: ActionTypes.SEE_RESULTS,
			results: data
		});
	}
}

export default new AppActions();
