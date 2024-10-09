
### **API Documentation**

#### **1. Admin Routes**

- **Create Achievement**
  - **URL:** `POST /api/admin/achievements`
  - **Request Body:**
    ```json
    {
      "title": "Achievement Title",
      "description": "Description of the achievement.",
      "date": "2024-01-01",
      "image_url": "http://example.com/image.jpg"
    }
    ```
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Achievement created successfully.",
      "achievement": {
        "id": "achievement_id",
        "title": "Achievement Title",
        "description": "Description of the achievement.",
        "date": "2024-01-01",
        "image_url": "http://example.com/image.jpg"
      }
    }
    ```

- **Get Achievements**
  - **URL:** `GET /api/admin/achievements`
  - **Response Body:**
    ```json
    {
      "success": true,
      "achievements": [
        {
          "id": "achievement_id",
          "title": "Achievement Title",
          "description": "Description of the achievement.",
          "date": "2024-01-01",
          "image_url": "http://example.com/image.jpg"
        },
        // More achievements...
      ]
    }
    ```

- **Add Gallery Image**
  - **URL:** `POST /api/admin/gallery`
  - **Request Body:**
    ```json
    {
      "image_url": "http://example.com/gallery_image.jpg",
      "description": "Description of the image."
    }
    ```
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Image added to gallery successfully."
    }
    ```

- **Get Gallery**
  - **URL:** `GET /api/admin/gallery`
  - **Response Body:**
    ```json
    {
      "success": true,
      "gallery": [
        {
          "id": "gallery_id",
          "image_url": "http://example.com/gallery_image.jpg",
          "description": "Description of the image."
        },
        // More gallery images...
      ]
    }
    ```

- **Add Winner**
  - **URL:** `POST /api/admin/winners`
  - **Request Body:**
    ```json
    {
      "event_id": "event_id",
      "winner_names": ["Winner 1", "Winner 2"]
    }
    ```
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Winners added successfully."
    }
    ```

- **Get Winners by Event**
  - **URL:** `GET /api/admin/winners/event/:eventId`
  - **Response Body:**
    ```json
    {
      "success": true,
      "winners": [
        {
          "id": "winner_id",
          "event_id": "event_id",
          "winner_name": "Winner 1"
        },
        // More winners...
      ]
    }
    ```

- **Get/Update Hiring Status**
  - **URL:** `GET /api/admin/hiring-status` (GET)
  - **Response Body:**
    ```json
    {
      "success": true,
      "hiring_status": true // or false
    }
    ```
  - **URL:** `PUT /api/admin/hiring-status` (PUT)
  - **Request Body:**
    ```json
    {
      "hiring_status": true // or false
    }
    ```
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Hiring status updated successfully."
    }
    ```

#### **2. Event Routes**

- **Create Event**
  - **URL:** `POST /api/events`
  - **Request Body:**
    ```json
    {
      "title": "Event Title",
      "poster_url": "http://example.com/poster.jpg",
      "description": "Description of the event.",
      "registration_link": "http://example.com/register",
      "venue": "Event Venue",
      "date": "2024-01-01",
      "time": "10:00 AM",
      "is_registration_open": true,
      "type": "upcoming"
    }
    ```
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Event created successfully.",
      "event": {
        "id": "event_id",
        "title": "Event Title",
        "poster_url": "http://example.com/poster.jpg",
        "description": "Description of the event.",
        "registration_link": "http://example.com/register",
        "venue": "Event Venue",
        "date": "2024-01-01",
        "time": "10:00 AM",
        "is_registration_open": true,
        "type": "upcoming"
      }
    }
    ```

- **Get All Events**
  - **URL:** `GET /api/events`
  - **Response Body:**
    ```json
    {
      "success": true,
      "events": [
        {
          "id": "event_id",
          "title": "Event Title",
          "poster_url": "http://example.com/poster.jpg",
          "description": "Description of the event.",
          "registration_link": "http://example.com/register",
          "venue": "Event Venue",
          "date": "2024-01-01",
          "time": "10:00 AM",
          "is_registration_open": true,
          "type": "upcoming"
        },
        // More events...
      ]
    }
    ```

- **Get Event by URL**
  - **URL:** `GET /api/events/:eventUrl`
  - **Response Body:**
    ```json
    {
      "success": true,
      "event": {
        "id": "event_id",
        "title": "Event Title",
        "poster_url": "http://example.com/poster.jpg",
        "description": "Description of the event.",
        "registration_link": "http://example.com/register",
        "venue": "Event Venue",
        "date": "2024-01-01",
        "time": "10:00 AM",
        "is_registration_open": true,
        "type": "upcoming"
      }
    }
    ```

- **Update Event**
  - **URL:** `PUT /api/events/:id`
  - **Request Body:**
    ```json
    {
      "title": "Updated Event Title",
      "description": "Updated description."
    }
    ```
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Event updated successfully."
    }
    ```

- **Delete Event**
  - **URL:** `DELETE /api/events/:id`
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Event deleted successfully."
    }
    ```

#### **3. Member Routes**

- **Create Member**
  - **URL:** `POST /api/members`
  - **Request Body:**
    ```json
    {
      "name": "John Doe",
      "bio": "Bio of the member.",
      "linkedin": "http://linkedin.com/in/johndoe",
      "github": "http://github.com/johndoe",
      "profile_photo": "http://example.com/profile.jpg",
      "type": "member",
      "batch": "2024",
      "designation": "Core Member"
    }
    ```
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Member created successfully.",
      "member": {
        "id": "member_id",
        "name": "John Doe",
        "bio": "Bio of the member.",
        "linkedin": "http://linkedin.com/in/johndoe",
        "github": "http://github.com/johndoe",
        "profile_photo": "http://example.com/profile.jpg",
        "type": "member",
        "batch": "2024",
        "designation": "Core Member"
      }
    }
    ```

- **Get All Members**
  - **URL:** `GET /api/members`
  - **Response Body:**
    ```json
    {
      "success": true,
      "members": [
        {
          "id": "member_id",
          "name": "John Doe",
          "bio": "Bio of the member.",
          "linkedin": "http://linkedin.com/in/johndoe",
          "github": "http://github.com/johndoe",
          "profile_photo": "http://example.com/profile.jpg",
          "type": "member",
          "batch": "2024",
          "designation": "Core Member"
        },
        // More members...
      ]
    }
    ```

#### **4. Project Routes**

- **Create Project**
  - **URL:** `POST /api/projects`
  - **Request Body:**
    ```json
    {
      "member_id": "member_id",
      "title": "Project Title",
      "description": "Description of the project.",
      "github_link": "http://github.com/project",
      "

live_demo_link": "http://example.com/live-demo"
    }
    ```
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Project created successfully.",
      "project": {
        "id": "project_id",
        "member_id": "member_id",
        "title": "Project Title",
        "description": "Description of the project.",
        "github_link": "http://github.com/project",
        "live_demo_link": "http://example.com/live-demo"
      }
    }
    ```

- **Get All Projects**
  - **URL:** `GET /api/projects`
  - **Response Body:**
    ```json
    {
      "success": true,
      "projects": [
        {
          "id": "project_id",
          "member_id": "member_id",
          "title": "Project Title",
          "description": "Description of the project.",
          "github_link": "http://github.com/project",
          "live_demo_link": "http://example.com/live-demo"
        },
        // More projects...
      ]
    }
    ```

- **Get Project by ID**
  - **URL:** `GET /api/projects/:id`
  - **Response Body:**
    ```json
    {
      "success": true,
      "project": {
        "id": "project_id",
        "member_id": "member_id",
        "title": "Project Title",
        "description": "Description of the project.",
        "github_link": "http://github.com/project",
        "live_demo_link": "http://example.com/live-demo"
      }
    }
    ```

- **Update Project**
  - **URL:** `PUT /api/projects/:id`
  - **Request Body:**
    ```json
    {
      "title": "Updated Project Title",
      "description": "Updated description."
    }
    ```
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Project updated successfully."
    }
    ```

- **Delete Project**
  - **URL:** `DELETE /api/projects/:id`
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Project deleted successfully."
    }
    ```

- **Get Projects by Member ID**
  - **URL:** `GET /api/projects/members/:memberId`
  - **Response Body:**
    ```json
    {
      "success": true,
      "projects": [
        {
          "id": "project_id",
          "member_id": "member_id",
          "title": "Project Title",
          "description": "Description of the project.",
          "github_link": "http://github.com/project",
          "live_demo_link": "http://example.com/live-demo"
        },
        // More projects...
      ]
    }
    ```

#### **5. Registration Routes**

- **Register for Event**
  - **URL:** `POST /api/registrations`
  - **Request Body:**
    ```json
    {
      "event_id": "event_id",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "registration_details": {
        "additional_info": "Any additional information."
      }
    }
    ```
  - **Response Body:**
    ```json
    {
      "success": true,
      "message": "Registered successfully.",
      "registration": {
        "id": "registration_id",
        "event_id": "event_id",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "registration_details": {
          "additional_info": "Any additional information."
        },
        "registered_at": "2024-01-01T00:00:00.000Z"
      }
    }
    ```

- **Get All Registrations for an Event**
  - **URL:** `GET /api/registrations/event/:eventId`
  - **Response Body:**
    ```json
    {
      "success": true,
      "registrations": [
        {
          "id": "registration_id",
          "event_id": "event_id",
          "name": "John Doe",
          "email": "johndoe@example.com",
          "registration_details": {
            "additional_info": "Any additional information."
          },
          "registered_at": "2024-01-01T00:00:00.000Z"
        },
        // More registrations...
      ]
    }
    ```

### **Frontend Project Structure (React with Vite)**

Here’s a recommended structure for your React project using Vite:

```
my-club-frontend/
│
├── public/                  # Public assets (index.html, favicon, etc.)
│
├── src/
│   ├── assets/              # Images, fonts, and other static files
│   ├── components/          # Reusable components (e.g., Button, Modal)
│   ├── hooks/               # Custom hooks
│   ├── pages/               # Page components (e.g., Home, About, Events)
│   ├── services/            # API service functions
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point for React
│   ├── context/             # Context API for state management (if needed)
│   └── styles/              # Global styles or theme files
│
├── .env                     # Environment variables
├── index.html               # Main HTML file
├── package.json             # Project dependencies and scripts
└── vite.config.js           # Vite configuration file
```

### **Frontend Development Notes**

- **Service Layer:** Create a `services` directory where you define functions to call your API endpoints. For example, you could have a `eventService.js` to manage all event-related API calls.

- **Components:** Build reusable components in the `components` directory. For example, you can create a `EventCard` component to display event details.

- **Routing:** Use `react-router-dom` for client-side routing to navigate between pages.

- **State Management:** Depending on the complexity of your application, you can use the Context API or a library like Redux for state management.

### **Sample API Service Function (eventsService.js)**

Here’s a simple example of how you might implement an API service for events:

```javascript
// src/services/eventsService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'; // Ensure to set this in your .env

// Function to get all events
export const getAllEvents = async () => {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
};

// Function to create an event
export const createEvent = async (eventData) => {
    const response = await axios.post(`${API_URL}/events`, eventData, {
        headers: {
            Authorization: 'cccdevpassword' // Add your auth token here if needed
        }
    });
    return response.data;
};

// Other API functions can be added here...
```

This structure and documentation will help your frontend developers easily understand how to integrate with the backend API. If you need further clarification or assistance, feel free to ask!
