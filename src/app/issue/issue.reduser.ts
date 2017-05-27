///<reference path="../issues/issue.model.ts"/>
import {Issue} from '../issues/issue.model';
export interface IssueState {
    issue: Issue;
}

export const ISSUE_ACTIONS = {
    ADD_ISSUE: 'ADD_ISSUE',
    REMOVE_ISSUE: 'REMOVE_ISSUE'
};

export function issueReducer(state: IssueState, action) {
    switch (action.type) {
        case ISSUE_ACTIONS.ADD_ISSUE:
            return {
                issue: action.payload
            };
        case ISSUE_ACTIONS.REMOVE_ISSUE:
            return {
                issue: {}
            };
        default:
            return state;
    }
}