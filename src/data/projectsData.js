import Project from '../classes/Project';

// TODO: currently, img src is not liking strings with JS injection
// const imgPathPrefix = "project-photos";
// const imgPathSuffix = "png";

// TODO: refactor project name?
const spaceMission = new Project(
    "Space Mission Exercise",
    "React",
    "https://space-mission-exercise.onrender.com/",
    "React certificate class lab practicing React, routing, API calls, etc.",
    ["React", "Node", "JavaScript", "APIs"],
    ["space-mission-exercise-1.png", "space-mission-exercise-2.png"]
);

const todoList = new Project(
    "Todo List Exercise",
    "React",
    "https://todolist-exercise.onrender.com/",
    "In-Progress: Working on a Todo list app using React.",
    ["React", "Node", "JavaScript", "Local Storage"],
    ["todolist-exercise-1.png", "todolist-exercise-2.png"]
);

const listExercises = new Project(
    "List Exercises",
    "React",
    "https://lit-lists-exercise.onrender.com/",
    "Practice displaying data in Lists using React & Material UI.",
    ["React", "Node", "JavaScript", "Material UI"],
    ["lit-lists-exercise-1.png", "lit-lists-exercise-2.png"]
);

const gridExercises = new Project(
    "Grid Exercises",
    "React",
    "https://grid-grind-exercise.onrender.com/",
    "Practice displaying data in Grids using React & Material UI.",
    ["React", "Node", "JavaScript", "Material UI"],
    ["grid-grind-exercise-1.png"]
);

const rhythmAnd = new Project(
    "Rhythm& - Dictionary API Exercise",
    "React",
    "https://rhythm-and-exercise.onrender.com/",
    "In-Progress: Working on an app using React where a user can input a word & the app will return data from multiple dictionary-related APIs.",
    ["React", "Node", "JavaScript", "APIs", "Material UI"],
    ["project-in-progress.png"]
);

const budgeter = new Project(
    "Budgeter Exercise",
    "React",
    "https://budgeter-exercise.onrender.com",
    "In-Progress: React app for budgeting.",
    ["React", "Node", "JavaScript", "Material UI"],
    ["project-in-progress.png"]
);

export const projectsData = [spaceMission, todoList, listExercises, gridExercises, rhythmAnd, budgeter];