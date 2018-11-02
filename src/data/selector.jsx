import {createSelector} from 'reselect'

export const memesSelector = createSelector(state => state.app.memes,
    (memes) => {
        console.log(memes);
        return memes.map((mem) => ({
            src: mem.url,
            width: mem.width,
            height: mem.height
        }))
    }
);