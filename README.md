# Team Task Management Software

## Overview
**Team Task Management Software** is a robust application designed to streamline task management between administrators and users. The system enables administrators to assign, monitor, and review tasks, while users can track, complete, and submit their work seamlessly. The application is powered by a **React-Redux frontend** and a **Spring Boot microservice backend**.

## Features

### Admin Features:
- **Task Management**:  
  - Create tasks with details such as **title**, **description**, **tags**, **images**, and **deadline**.  
  - Assign tasks to specific users.  
  - View **unassigned tasks**.  
  - Edit existing tasks.  
- **Task Review**:  
  - Review submitted tasks.  
  - Accept or decline completed work with remarks.  
- **Monitoring**:  
  - View already completed tasks.

### User Features:
- **Task Tracking**:  
  - View assigned tasks.  
  - Complete tasks before the deadline.  
- **Task Submission**:  
  - Submit tasks with links and remarks for review.  
  - Check feedback from the admin.  
  - Resubmit tasks if declined.  
- **Progress Monitoring**:  
  - Tasks accepted by the admin will be moved to the **Done** section.


## Tech Stack

### Frontend:
- **React**: Core UI library.  
- **Redux Toolkit**: State management.  
- **React Router DOM**: Routing between user and admin panels.  
- **Tailwind CSS**: Utility-first CSS framework for styling.  
- **Material UI**: Prebuilt React components for an elegant user interface.

### Backend:
- **Spring Boot**: Java-based framework for microservices.  
- **Hibernate**: ORM for database management.  
- **JPARepository**: Data access layer.  
- **JWT Token**: Secure authentication and authorization.  

### Microservices:
The backend is split into multiple microservices for scalability:  
1. **Eureka Server**: Service discovery server.  
2. **Gateway Server**: API gateway for routing requests.  
3. **User Service**: Manages user and admin credentials.  
4. **Submission Service**: Handles user task submissions.  
5. **Task Service**: Manages task creation, updates, and assignments.  
6. **Notification Service**: Sends notifications for task updates.

## Installation and Setup

### Prerequisites:
- **Node.js** (for frontend)
- **Java Development Kit (JDK)** (for backend)
- **MySQL** (database)
- **Maven** (build tool for Spring Boot)



## Getting Started.

### Backend Setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/team-task-management-backend.git
   cd team-task-management-backend
   ``` 

2.Start the Eureka Server:
```bash
 cd eureka-server
 mvn spring-boot:run
 ```

3.Start the Eureka Server:
```bash
Copy code
cd eureka-server
mvn spring-boot:run
```

4.Start the Gateway Server:
```bash
cd gateway-server
mvn spring-boot:run
```
5.Start individual microservices:

- User Service
- Task Service
 -  Submission Service
  - Notification Service

```bash
mvn spring-boot:run
```
Ensure the database is configured in application.properties for each service.

   
### Frontend Setup:

1.Install dependencies:

```bash
npm install
```
2.Start the development server:

```bash
npm start
```

The application will run on http://localhost:3000.


## Usage:

- Admin Login: Use admin credentials to access the admin panel.
- User Login: Use user credentials to check and manage tasks.
- Follow the interface to perform task creation, assignment, submission, and review.


## Screenshots

### Admin Panel:
![App Screenshot](https://github.com/Jeethanxx01/microservice-architecture/blob/main/images/Screenshot%20from%202024-12-17%2014-02-13.png)

![App Screenshot](https://github.com/Jeethanxx01/microservice-architecture/blob/main/images/Screenshot%20from%202024-12-17%2014-02-30.png)

![App Screenshot](https://github.com/Jeethanxx01/microservice-architecture/blob/main/images/Screenshot%20from%202024-12-17%2014-02-43.png)

### User Panel:
![App Screenshot](https://github.com/Jeethanxx01/microservice-architecture/blob/main/images/Screenshot%20from%202024-12-17%2014-04-57.png)

![App Screenshot](https://github.com/Jeethanxx01/microservice-architecture/blob/main/images/Screenshot%20from%202024-12-17%2014-04-57.png)

### Sign in :

![App Screenshot](https://github.com/Jeethanxx01/microservice-architecture/blob/main/images/Screenshot%20from%202024-12-17%2014-06-36.png)

### Log in :
![App Screenshot](https://github.com/Jeethanxx01/microservice-architecture/blob/main/images/Screenshot%20from%202024-12-17%2014-06-04.png)

### Eureka Server:
![App Screenshot](https://github.com/Jeethanxx01/microservice-architecture/blob/main/images/Screenshot%20from%202024-12-17%2009-58-16.png)
