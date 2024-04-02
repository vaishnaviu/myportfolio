import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project">
        <h3>Facial Recognition</h3>
        <p>
          Built a Facial Recognition System with data preprocessing, augmentation, feature extraction, & SVM classification using Python, Scikit-learn, Keras, and OpenCV.
        </p>
      </div>
      <div className="project">
        <h3>Clothesmate: IoT-based wardrobe manager</h3>
        <p>
          Developed an IoT wardrobe manager integrating Arduino, Firebase Database, & Android Studio for efficient data management, enabling clothing tracking, deletion, and recommendations based on weather, occasion, & style using Java, C++, Arduino, and Android Studio.
        </p>
      </div>
      <div className="project">
        <h3>Malware Image Classification using CNN</h3>
        <p>
          Built a Convolutional Neural Network model to perform a Multiclass classification of Malwares using Scikit-learn, Tensorflow, and the Malimg dataset.
        </p>
      </div>
      <div className="project">
        <h3>Weather Notification Publish/Subscribe system on Docker</h3>
        <p>
          Developed an event-driven asynchronous communication system for efficient event-based notifications to subscribers using Docker, Python, and HTML.
        </p>
      </div>
      <div className="project">
        <h3>Functional HTTP Web-server</h3>
        <p>
          Built a multi-client HTTP server handling text-based protocol requests and generating relevant HTTP responses using Java, HTML, and Postman.
        </p>
      </div>
      <div className="project">
        <h3>Active Noise Cancellation (ANC)</h3>
        <p>
          Designed and developed a system for noise reduction in audio signals using least-mean squared adaptive filters using MATLAB and LabVIEW.
        </p>
      </div>
    </section>
  );
}

export default Portfolio;