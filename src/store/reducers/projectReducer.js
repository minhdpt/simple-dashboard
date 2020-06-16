const initState = {
    projects: [
        {id: '1', title: 'project A', content: 'aaaaa'},
        {id: '2', title: 'project B', content: 'bbbbbbbb'},
        {id: '3', title: 'project C', content: 'ccccccccccc'}
    ]
}

const projectReducer = (state = initState, action) => {
    // console.log("action" + action.type)
    switch(action.type)
    {
        case "CREATE_PROJECT":
            console.log(state);
            break;

        default:
            break;
    }
    return state;
}

export default projectReducer