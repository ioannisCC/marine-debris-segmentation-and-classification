# Marine Debris Classifier  

This repository contains a React web app designed to classify and segment marine debris using Roboflow's inference engine. The project highlights a modular, scalable approach to AI-powered object detection and citizen science, targeting the critical issue of ocean pollution.  
Access the website here: https://new-one-eight-pearl.vercel.app

---

## Technical Highlights  

### Frontend  
- **Framework**: Built with React for a modern and responsive UI.  
- **Deployment**: Hosted on **Vercel** for fast and reliable access.  
- **Features**:  
  - File upload interface for debris image classification.  
  - Real-time interaction with the backend for inference.  

### Backend  
- **Framework**: Developed with **Flask**, providing lightweight and efficient API endpoints.  
- **Deployment**: Hosted on **Heroku** to ensure scalability and accessibility.  
- **Integration**:  
  - Communicates seamlessly with the frontend and the inference engine.  

### Inference Engine  
- **Powered By**: **Roboflow's API** for object detection and segmentation.  
- **Dockerized**: Runs in a Docker container for modularity and platform independence.  
- **Supported Classes**:  
  1. Fishing net  
  2. Aluminum can  
  3. Bottle  
  4. Plastic bag  
  5. Plastic waste  
  6. Tire  

---

## Features  

### Dockerized Design  
- The inference engine operates in a Docker container, ensuring platform independence and simplifying deployment.  

### Extensibility  
- Easily swap or update models to incorporate new debris classes or refine current detection capabilities.  

### Citizen Science Integration  
- Empowers users to contribute by uploading photos for debris classification, fostering community involvement in ocean health.  

---

## Deployment  

### Frontend  
- Hosted on **Vercel**.  

### Backend  
- Flask API hosted on **Heroku**.  

### Inference Engine  
- Docker container running Roboflow's API for classification and segmentation.  

---

## Usage  

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/yourusername/marine-debris-classifier.git
   cd marine-debris-classifier
