import { getKKBoxAPI, getCookie } from '../utils/kkboxAPI'

const PLAY_CATEGORY_API_SUCCESS = 'PLAY_CATEGORY_API_SUCCESS'
const PLAY_CATEGORY_API_ERROR_MSG = 'PLAY_CATEGORY_API_ERROR_MSG'
const INIT_STATE = 'INIT_STATE'

const initState = {
	playlistCategory_data: {},
	msg: '',
	bool: true
}

export function playlistCategory(state = initState, action){
	switch (action.type) {
		case PLAY_CATEGORY_API_SUCCESS:
			return (state = { ...state, bool: false, msg: 'success', ...action.payload })
		case PLAY_CATEGORY_API_ERROR_MSG:
			return (state = { ...state, msg: '伺服器錯誤', bool: false })
		case INIT_STATE:
			return (state = initState)
		default:
			return state
	}
}

export function handleInitState(){
	return { type: INIT_STATE }
}

function getPlaylistCategoryApiSuccess(data){
	return { type: PLAY_CATEGORY_API_SUCCESS, payload: data }
}

function getPlaylistCategoryApiApiError(){
	return { type: PLAY_CATEGORY_API_ERROR_MSG }
}

export function getPlaylistCategoryApi(url){
	return dispatch => {
		getKKBoxAPI(getCookie('token'), url).then(res => {
			if (res && res.status === 200) dispatch(getPlaylistCategoryApiSuccess({ playlistCategory_data: res.data }))
			else dispatch(getPlaylistCategoryApiApiError())
		})
	}
}

// export function handleInitState(){
//     return dispatch =>{
//         dispatch(handleInitState())
//     }
// }
