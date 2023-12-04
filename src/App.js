import React, { useState } from "react";
import Carousel from "./Carousel";

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function App() {
  return (
    <div className="App">
      <CampaignHelper />
    </div>
  );
}

function CampaignHelper() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <SkillTreeSection />
      <GemsSection />
      <TextSection />
      <UploadAndDisplayImage
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <Carousel images={images} />
    </div>
  );
}

function SkillTreeSection() {
  return (
    <div>
      <ul>
        <li>Skill Tree</li>
      </ul>
    </div>
  );
}

function GemsSection() {
  return <div></div>;
}

function TextSection() {
  return <div></div>;
}

const UploadAndDisplayImage = ({ setSelectedImage, selectedImage }) => {
  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default App;
