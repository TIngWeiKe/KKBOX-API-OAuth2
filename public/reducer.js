//合併所有reducer並返回
import { combineReducers } from 'redux'
import { box } from './redux/box.redux'

export default combineReducers({box})