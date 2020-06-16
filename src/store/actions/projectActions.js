export const createProject = (project) => {
    return (dispatch, getState) => {
        // console.log(project);
        //make async call to db
        dispatch({type: "CREATE_PROJECT", project});
    }
}