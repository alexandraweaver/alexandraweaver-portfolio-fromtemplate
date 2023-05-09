import Project from '../classes/Project';

// TODO: refactor project name?
const project1 = new Project(
    "Space Mission Exercise",
    "React",
    "https://space-mission-exercise.onrender.com/",
    "React certificate class lab practicing React, routing, API calls, etc",
    ["React", "Node", "JavaScript", "APIs"],
    ["project-photos/space-mission-exercise-1", "project-photos/space-mission-exercise-2"]
);

export const projectsData = [project1];