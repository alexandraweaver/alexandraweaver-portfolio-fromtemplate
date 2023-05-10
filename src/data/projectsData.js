import Project from '../classes/Project';

// TODO: currently, img src is not liking strings with JS injection
// const imgPathPrefix = "project-photos";
// const imgPathSuffix = "png";

// TODO: refactor project name?
const project1 = new Project(
    "Space Mission Exercise",
    "React",
    "https://space-mission-exercise.onrender.com/",
    "React certificate class lab practicing React, routing, API calls, etc.",
    ["React", "Node", "JavaScript", "APIs"],
    ["space-mission-exercise-1.png", "space-mission-exercise-2.png"]
);

const project2 = new Project(
    "Todo List Exercise",
    "React",
    "https://todolist-exercise.onrender.com/",
    "In-Progress: Working on a Todo list app using React.",
    ["React", "Node", "JavaScript", "Local Storage"],
    ["todolist-exercise-1.png", "todolist-exercise-2.png"]
);

export const projectsData = [project1, project2];