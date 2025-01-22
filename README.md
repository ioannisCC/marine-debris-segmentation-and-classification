Marine Debris Classifier

This repository contains a React web app designed for classifying and segmenting marine debris using Roboflow’s inference engine. The project demonstrates a modular, scalable approach to AI-powered object detection and citizen science, targeting the issue of ocean pollution.

Technical Highlights:
	•	Frontend:
	•	Built with React for a modern and responsive UI.
	•	Deployed on Vercel for fast and reliable hosting.
	•	File upload interface for debris image classification.
	•	Backend:
	•	Developed with Flask, providing a lightweight and efficient API for communication with the frontend.
	•	Hosted on Heroku, ensuring accessibility and scalability.
	•	Inference Engine:
	•	Utilizes Roboflow’s API for object detection and segmentation.
	•	Dockerized for modularity, enabling model updates and adaptation to new datasets with minimal effort.
	•	Current model supports six debris classes:
	1.	Fishing net
	2.	Aluminum can
	3.	Bottle
	4.	Plastic bag
	5.	Plastic waste
	6.	Tire
	•	Data Processing:
	•	Supports real-time classification for uploaded images.
	•	Integrated with pre-trained Roboflow models for optimized performance.

Features:
	•	Dockerized Design:
	•	The inference engine runs in a Docker container, providing platform independence and straightforward deployment.
	•	Extensibility:
	•	Easily swap or update models to incorporate new classes or refine existing ones.
	•	Citizen Science Integration:
	•	Allows users to upload photos and participate in debris classification.

Deployment:
	•	Frontend: Vercel (React-based).
	•	Backend: Heroku (Flask API).
	•	Inference Engine: Docker container hosting Roboflow’s API.

Usage:
	•	Clone the repository.
	•	Set up the Docker container for the inference engine.
	•	Start the Flask server and deploy the React frontend.

This project bridges AI technology and sustainability by addressing ocean pollution. Its modular design ensures adaptability for future improvements or expanded use cases.
