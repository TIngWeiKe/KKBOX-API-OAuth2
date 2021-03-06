import { getKKBoxAPI, getCookie } from '../utils/kkboxAPI'
const PLAYLIST_API_SUCCESS = 'PLAYLIST_API_SUCCESS'
const PLAYLIST_API_ERROR_MSG = 'PLAYLIST_API_ERROR_MSG'
const INIT_PLAYLIST_STATE = 'INIT_PLAYLIST_STATE'
const GET_NAME_SUCCESS = 'GET_NAME_SUCCESS'

const initState = {
	playlist_data: {},
	msg: '',
	bool: true,
	name: ''
}

export function playlist(state = initState, action){
	switch (action.type) {
		case PLAYLIST_API_SUCCESS:
			return (state = { ...state, bool: false, msg: 'success', ...action.payload })
		case PLAYLIST_API_ERROR_MSG:
			return (state = { ...state, msg: '伺服器錯誤', bool: false })
		case INIT_PLAYLIST_STATE:
			return (state = initState)
		case GET_NAME_SUCCESS:
			return (state = { ...state, name: action.payload })
		default:
			return state
	}
}

export function InitState(){
	return { type: INIT_PLAYLIST_STATE }
}

function get_Playlists_Id_Api_Success(data){
	return { type: PLAYLIST_API_SUCCESS, payload: data }
}

function get_Playlists_Id_Api_Error(){
	return { type: PLAYLIST_API_ERROR_MSG }
}
function get_Video_Name_Success(video){
	return { type: GET_NAME_SUCCESS, payload: video }
}

export function getVideoName(video){
	return dispatch => dispatch(get_Video_Name_Success(video))
}

export function getPlaylistsId(url){
	return dispatch => {
		getKKBoxAPI(getCookie('token'), url)
			.then(res => {
				if (res && res.status === 200) dispatch(get_Playlists_Id_Api_Success({ playlist_data: res.data }))
				else dispatch(get_Playlists_Id_Api_Error())
			})
			.catch(res => dispatch(get_Playlists_Id_Api_Error()))
	}
}

export function handleInitState(){
	return dispatch => dispatch(InitState())
}
