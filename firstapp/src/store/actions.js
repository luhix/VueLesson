import {RECEIVE_LIST, MOVIES_LIST} from './mutations-type'
import listData from '../datas/list-data'
export default {
    getList({commit}) {
        commit(RECEIVE_LIST, listData)
    },

    getMovieList({commit}, data) {
        commit(MOVIES_LIST, data)
    }
}