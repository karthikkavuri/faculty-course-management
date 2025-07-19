
# College API

This is a mock RESTful API built with **Node.js + Express** for managing college faculty and courses.

## Features
- CRUD operations for **faculty** and **courses**.
- Mock dataset with **40 faculty** and **60 courses** stored in JSON files.

## Setup Instructions
1. Install Node.js (if not installed).
2. Install dependencies:
   ```bash
   npm install express body-parser
   ```
3. Start the server:
   ```bash
   node app.js
   ```
4. API runs at `http://localhost:3000`.

## Endpoints

### Faculty
- `GET /faculty` – List all faculty.
- `GET /faculty/:id` – Get a faculty by ID.
- `POST /faculty` – Add a new faculty.
- `PUT /faculty/:id` – Update faculty.
- `DELETE /faculty/:id` – Delete faculty.

### Courses
- `GET /courses` – List all courses.
- `GET /courses/:id` – Get a course by ID.
- `POST /courses` – Add a new course.
- `PUT /courses/:id` – Update a course.
- `DELETE /courses/:id` – Delete a course.

## Data Model
**Faculty Example:**
```json
{
  "id": 1,
  "first_name": "Faculty1",
  "last_name": "Test",
  "email": "faculty1@iiitdm.ac.in",
  "department": "CSE",
  "specialization": ["AI", "ML"],
  "office_location": "AA-101",
  "office_hours": "10-12 Mon"
}
```
**Course Example:**
```json
{
  "id": 1,
  "name": "Course1",
  "code": "CSE101",
  "description": "Description for Course1.",
  "credits": 4,
  "department": "CSE",
  "faculty_id": 1
}
```
