import {TYPES} from "./action-types";


export const submitBillMeme = () => (dispatch, getState) => {
    const values  = getState().form.bill.values;
    let src = 'This is ' + values.name + '%0D%0A%0D%0A' + values.name + ' is ' + values.do + '%0D%0A%0D%0ABe like ' + values.name;

    dispatch({
        type: TYPES.SUBMIT_BILL_MEME,
        billSrc: 'https://belikebill.ga/billgen-API.php?text=' + src
    })
};

export const getMemes = (dispatch) => {
    fetch('https://api.imgflip.com/get_memes', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let memes = data.data.memes.map((mem) => ({
                key: mem.id,
                src: mem.url,
                width: mem.width ,
                height: mem.height ,
                alt: mem.name
            }));
            console.log(memes);
            dispatch({
                type: TYPES.GET_MEMES,
                memes: memes
            })
        })
        .catch((error) => {
            console.log(error);
        });
};

export const submitMeme = () => (dispatch, getState) => {
    const boxes = JSON.stringify(makeBody(getState));
    var form = new FormData();

    form.append("template_id", "102156234");
    form.append("boxes", boxes);
    form.append("username", "");
    form.append("password", "");

    fetch('https://api.imgflip.com/caption_image', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        body: form
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success)
                dispatch({
                    type: TYPES.SUBMIT_MEME,
                    final_meme: data.data.url
                });
            else
                dispatch({
                    type: TYPES.SUBMIT_MEME,
                    final_meme: getState().app.template.src
                });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const chooseTemplate = (template) => {
    return {
        type: TYPES.TEMPLATE,
        template: template,
        width: template.width > 700 ? template.width / 2 : template.width,
        height: template.width > 700 ? template.height / 2 : template.height
    }
};

export const dropTemplate = () => {
    return {
        type: TYPES.DROP_TEMPLATE
    }
};

const makeBody = (getState) => {
    const color = "#ffffff";
    const outline_color = "#000000";
    const width = 100;
    const height = 100;

    let boxes = [];
    let values = getState().form.labels.values;

    for (let i in [1, 2, 3, 4, 5]) {
        if (values['label' + i] !== undefined)
            boxes.push ({
                color: color,
                outline_color: outline_color,
                width: width,
                height: height,
                text: values['label' + i],
                x: parseInt(values['x' + i], 10),
                y: parseInt(values['y' + i], 10)
            })
    }

    return boxes
};
