import {TYPES} from "./action-types";

const initialState = {
    memes: []
};

export const reducer = (prevState = initialState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case TYPES.SUBMIT_MEME:
            return {...newState, final_meme: action.final_meme};

        case TYPES.GET_MEMES:
            return {...newState, memes: action.memes};

        case TYPES.TEMPLATE:
            return {...newState, template: action.template, width: action.width, height: action.height};

        case TYPES.DROP_TEMPLATE:
            return {...newState, template: undefined, width: undefined, height: undefined};
    }

    return newState
};


