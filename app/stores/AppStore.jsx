import alt from '../alt';
import {List, fromJS} from 'immutable';
import {createStore} from 'alt-utils/lib/decorators';
import AppActions from '../actions/AppActions';

import {fetchDataFromApi} from '../data/source';

@createStore(alt)
export default class AppStore {

    constructor() {
        this.bindActions(AppActions);

        this.state = {
            todos: List([])
        }
    }

    /**
     * Updates the list of todos in the state.
     * @param todos
     */
    onUpdate(todos) {
        this.setState({
            todos: fromJS(todos)
        });
    }

    /**
     * Performs an API call and calls the update action, to save the fetched data to the state.
     */
    async onFetch() {
        try {
            const todos = await fetchDataFromApi();
            AppActions.update(todos);
        } catch (e) {
            console.error('Error fetching todo list', e);
        }
    }



}
