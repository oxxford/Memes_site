import {TYPES} from "./action-types";

export const makeScreenshot = (photo) => {
    console.log(photo);
    return {
        type: TYPES.MAKE_SCREENSHOT,
        photo: photo
    }
};

export const getMemes = (dispatch) => {
    fetch('https://api.imgflip.com/get_memes', {

        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: TYPES.GET_MEMES,
                memes: data.data.memes
            })
        })
        .catch((error) => {
            console.log(error);
        });
};

export const downloadMemes = () => (dispatch, getState) => {
    return memes.map((mem) => ({
        src: mem.url,
        width: mem.width,
        height: mem.height
    }))
};