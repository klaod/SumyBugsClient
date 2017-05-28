///<reference path="../issues/issue.model.ts"/>
import {Issue} from '../issues/issue.model';

export const ISSUE_ACTIONS = {
    ADD_ISSUE: 'ADD_ISSUE',
    REMOVE_ISSUE: 'REMOVE_ISSUE'
};

export function issueReducer(state = "", action) {
    switch (action.type) {
        case ISSUE_ACTIONS.ADD_ISSUE:
            return action.payload;
        case ISSUE_ACTIONS.REMOVE_ISSUE:
            return {};
        default:
            return state;
    }
}