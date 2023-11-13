import React from 'react';
import ScarletPic from '../assets/images/Scarlet.jpg';

export default function Scarlet(){
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
        <h1>Scarlet</h1>
        <p>Beagle/Greyhound Mix</p>
      </header>

      <section style={{ margin: "20px", textAlign: "center" }}>
        {/* Placeholder for an image */}
        <img
          src= {ScarletPic}
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