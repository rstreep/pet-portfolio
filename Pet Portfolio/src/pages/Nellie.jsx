import React from 'react';
import NelliePic from '../assets/images/Nellie.jpg';

export default function Nellie(){
    return(
        <div>
            
      <header
        style={{
          backgroundColor: "darkRed",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
          marginTop: "75px",
        }}
      >
        <h1>Nellie</h1>
        <p>Chihuahua/Dachsund Mix</p>
      </header>

      <section style={{ margin: "20px", textAlign: "center" }}>
        {/* Placeholder for an image */}
        <img
          src= {NelliePic}
          alt="Scarlet"
          style={{ maxWidth: "700px", height: "400px", marginTop: "20px" }}
        />
        <h2 style={{ marginTop: '40px', marginBottom: '40px' }}>About Me</h2>
        <p style={{ marginBottom: '75px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          tortor vel ligula commodo suscipit. Proin auctor sapien eu tellus
          consequat, a eleifend elit congue. Integer in leo eu purus dapibus
          accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          tortor vel ligula commodo suscipit. Proin auctor sapien eu tellus
          consequat, a eleifend elit congue. Integer in leo eu purus dapibus
          accumsan.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          tortor vel ligula commodo suscipit. Proin auctor sapien eu tellus
          consequat, a eleifend elit congue. Integer in leo eu purus dapibus
          accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          tortor vel ligula commodo suscipit. Proin auctor sapien eu tellus
          consequat, a eleifend elit congue. Integer in leo eu purus dapibus
          accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          tortor vel ligula commodo suscipit. Proin auctor sapien eu tellus
          consequat, a eleifend elit congue. Integer in leo eu purus dapibus
          accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          tortor vel ligula commodo suscipit. Proin auctor sapien eu tellus
          consequat, a eleifend elit congue. Integer in leo eu purus dapibus
          accumsan.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          tortor vel ligula commodo suscipit. Proin auctor sapien eu tellus
          consequat, a eleifend elit congue. Integer in leo eu purus dapibus
          accumsan.
        </p>
      </section>
        </div>
    )
}