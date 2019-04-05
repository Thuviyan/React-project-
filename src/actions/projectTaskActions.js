import axios from "axios";
import { GET_ERRORS, GET_PROJECT_TASKS } from "./types";

export const addProjectTask = (project_task, history) => async dispatch => {
    console.log(project_task);
    try {
        await axios.post("http://localhost:8080/integration/api/board", project_task);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }

};

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/integration/api/board/all")
    dispatch({
        type: GET_PROJECT_TASKS,
        payload: res.data
    });
};

export const deleteProjectTask = pt_id => async dispatch => {
    await axios.delete()
}