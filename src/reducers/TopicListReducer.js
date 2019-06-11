const INITIAL_STATE = {
    topics: [
        {   
            id: 23,
            title: 'History'
        },
        {   
            id: 22,
            title: 'Geography'
        },
        {   
            id: 17,
            title: 'Science & Nature'
        },
        {   
            id: 18,
            title: 'Computers'
        },
    ],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
