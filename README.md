# Planner

An Angular application for task management and tracking. Utilizes a Spring Boot backend found [here](https://github.com/HPRP01/planner-backend)

UI Sample:
![plannerApplicationUiSample](https://github.com/HPRP01/planner/assets/55462701/d093885c-3c25-4a0f-aea0-bd7945cb300d)

## Purpose
My goal with this project is to further my web development skills by building a full stack application from the ground up. Previously I have only worked in preexisting web applications and gained a good understanding fo how to develop and maintain a preexisting codebase with a team but decided I wanted to understand the entire functionality from the start. The functional purpose of this application is to provide a useful task tracker/planner application that can be used to track progress for a wide range of activities (school assignments, work tasks, etc.).

## Goals
- Provide a fully functional task planner that persists data between sessions
- Develop an intuitive user interface using Angular Material
- Create portable containers of all levels of the application using Docker
- Develop thorough unit and integration tests for all levels of the application
- Automate build processes using CI/CD pipelines (potentially utilizing GitHub actions)

## Progress
7/28 - At this point I have developed a basic framework with core functionality required for the task planner. I have also successfully Dockerized the Angular application and am working through some issues regarding CORS policy between the Docker containers. A user is currently able to create and delete tasks as well as update their statuses and I still need to add the functionality to update information after a task has been created. 

