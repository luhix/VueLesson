import {RECEIVE_LIST, MOVIES_LIST} from './mutations-type'

export default {
    [RECEIVE_LIST](state, {list_data}) {
        state.listTmp = list_data
    },
    [MOVIES_LIST](state, data) {
        state.movList = data
    }
}