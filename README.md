# Kanban Board

A simple project management application that allows users to manage tasks in a Kanban-style board. Users can create columns, add tasks, edit tasks, and move tasks between columns using drag-and-drop functionality.

## Features

- Create and delete columns.
- Add, edit, and delete tasks.
- Drag and drop tasks between columns.
- Search tasks by title, type, and assignee.

## Technologies Used

- React
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) (for drag-and-drop functionality)
- [UUID](https://github.com/uuidjs/uuid) (for unique task and column IDs)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/yourusername/kanban-board.git](https://github.com/aadithya-hrao/kanban)
   cd kanban-board
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm start
   ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Known Issues
- Drag and drop finiky
- search is basic, no filtering
- minimal styling, looks basic 
