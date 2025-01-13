
from flask import Flask, request, jsonify
import roboflow
import os
from flask_cors import CORS  # Import CORS
import io
import base64
from PIL import Image
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize Roboflow
rf = roboflow.Roboflow(api_key="vOyxQX3E63fUN18WAkq9")
project = rf.workspace().project("global-solution")
model = project.version("4").model

@app.route('/upload', methods=['POST'])
def upload_image():
    # Get the uploaded image file
    file = request.files['image']
    file_path = os.path.join('uploads', file.filename)
    file.save(file_path)

    # Predict on the uploaded image using the Roboflow model
    prediction = model.predict(file_path, confidence=50, overlap=20)
    print(prediction)
    # Manually draw bounding boxes on the image
    img = Image.open(file_path)
    plt.imshow(img)
    ax = plt.gca()

    for pred in prediction.predictions:
        # Get values
        x1 = pred['x'] - pred['width'] / 2
        y1 = pred['y'] - pred['height'] / 2
        width = pred['width']
        height = pred['height']
        confidence = pred['confidence']
        # Draw bounding boxes
        ax.add_patch(plt.Rectangle((x1, y1), width, height, linewidth=2, edgecolor='r', facecolor='none'))
        # Add descriptions
        ax.text(x1-2, y1-2, f"{pred['class']} ({confidence*100:.2f}%)", color='red', fontsize=10)


    # Save the image with bounding boxes to a buffer
    buffer = io.BytesIO()
    plt.axis('off')
    plt.savefig(buffer, format='PNG', bbox_inches='tight', pad_inches=0)
    buffer.seek(0)
    img_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')
    plt.close()

    # Return predictions and base64-encoded image
    return jsonify({'image': img_base64, 'predictions': prediction.json()['predictions']})

if __name__ == '__main__':
    app.run(debug=True, port=9001)
