import {TYPES} from "./action-types";

const initialState = {
};

export const reducer = (prevState = initialState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case TYPES.MAKE_SCREENSHOT:
            return {...newState, photo: action.photo};

        case TYPES.GET_MEMES:
            return {...newState, memes: action.memes};

    }

    return newState
};


