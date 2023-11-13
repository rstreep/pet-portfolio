import React from "react";

export default function Homepage() {
  return (
    <div>
      <header
        style={{
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1>Welcome to Our Website</h1>
        <p>Explore and Discover Something Amazing</p>
      </header>

      <section style={{ margin: "20px", textAlign: "center" }}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          tortor vel ligula commodo suscipit. Proin auctor sapien eu tellus
          consequat, a eleifend elit congue. Integer in leo eu purus dapibus
          accumsan.
        </p>
      </section>

      <section style={{ margin: "20px", textAlign: "center" }}>
        <h2>Featured Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          tortor vel ligula commodo suscipit. Proin auctor sapien eu tellus
          consequat, a eleifend elit congue. Integer in leo eu purus dapibus
          accumsan.
        </p>
        {/* Placeholder for an image */}
        <img
          src="https://via.placeholder.com/600x300"
          alt="Placeholder Image"
          style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }}
        />
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        <p>&copy; 2023 Your Website Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
