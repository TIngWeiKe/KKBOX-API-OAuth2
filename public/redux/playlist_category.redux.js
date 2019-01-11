
import { get_KKbox_API, getCookie } from '../component/getKKboxAPI'

const PLAY_CATEGORY_API_SUCCESS = 'PLAY_CATEGORY_API_SUCCESS'
const PLAY_CATEGORY_API_ERROR_MSG = 'PLAY_CATEGORY_API_ERROR_MSG'
// const INIT_STATE = 'INIT_STATE'
// const INIT_MSG = 'INIT_MSG'

const init = {
    playlist_category_data: {},
    msg: '',
    bool: true,

}


export function playlist_category(state = init, action) {
    switch (action.type) {
        case PLAY_CATEGORY_API_SUCCESS:
            return state = { ...state, bool: false, msg: "success", ...action.payload }
        case PLAY_CATEGORY_API_ERROR_MSG:
            return state = { ...state, msg: '伺服器錯誤', bool: false }
        default:
            return state
    }
}

// export function handle_Init_State(){
//     return {type:INIT_STATE}
// }


function get_Playlist_category_Api_Success(data) {
    return { type: PLAY_CATEGORY_API_SUCCESS, payload: data }
}

function get_Playlist_category_Api_ApiError() {
    return { type: PLAY_CATEGORY_API_ERROR_MSG }
}


export function get_Playlist_category_Api(url) {
    return dispatch => {

        get_KKbox_API(getCookie('token'), url)
            .then(res => {
                console.log(url);
                console.log(getCookie('token'))
                
                if (res && res.status === 200) {

                    dispatch(get_Playlist_category_Api_Success({ playlist_category_data: res.data }))

                } else {
                    dispatch(get_Playlist_category_Api_ApiError())
                    console.log('err')
                    
                }
            })


    }
}

// export function hadndle_Init_State(){
//     return dispatch =>{
//         dispatch(handle_Init_State())
//     }
// }

