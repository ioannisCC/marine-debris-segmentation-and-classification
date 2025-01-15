import React, { useState } from "react";
import './App.css';

function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleInfer = async () => {
    if (!imageFile) {
      alert('Please upload an image first.');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await fetch('https://5fb3-2a02-587-b805-6f1f-2580-9470-778c-791b.ngrok-free.app/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setImageSrc(`data:image/png;base64,${data.image}`);
        setPredictions(data.predictions);
        // Reset the state and clear input field
        setImageFile(null);
        document.getElementById("file-upload").value = "";
      } else {
        console.error("Inference failed", response);
      }
    } catch (error) {
      console.error('Error during inference:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Marine Debris Classification</h1>
      <h2>Future Workers</h2>
      <h3>5ο & 20ο Δημοτικό Σχολείo Ηλιούπολης</h3>



      <label htmlFor="file-upload" className="custom-file-upload">
          Upload Image
      </label>
      <input 
          type="file" 
          id="file-upload" 
          onChange={handleFileChange} 
      />

      <button onClick={handleInfer} disabled={isLoading}>
        {isLoading ? "Loading..." : "Run Inference"}
      </button>

      <div className="image-container">
      {imageSrc && <img src={imageSrc} alt="Predicted"/>}
      </div>

      {predictions && (
        <div>
          <h2>Predictions</h2>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Confidence (%)</th>
                <th>X</th>
                <th>Y</th>
                <th>Width</th>
                <th>Height</th>
              </tr>
            </thead>
            <tbody>
              {predictions.map((prediction, index) => (
                <tr key={index}>
                  <td>{prediction.class}</td>
                  <td>{(prediction.confidence * 100).toFixed(2)}</td>
                  <td>{prediction.x}</td>
                  <td>{prediction.y}</td>
                  <td>{prediction.width}</td>
                  <td>{prediction.height}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
