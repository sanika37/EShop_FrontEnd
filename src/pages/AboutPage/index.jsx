import Navbar from "../../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="jumbotron text-center">
        <h1 className="display-4" style={{ fontWeight: "bold" }}>About Us</h1>
        <p className="lead" style={{ fontSize: "1.2rem", marginTop: "10px" }}>
          Discover who we are and what drives us to deliver excellence.
        </p>
      </div>
      <div className="container">
        {/* Section 1 */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <div style={{ flex: "1", paddingRight: "20px" }}>
            <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>Our Mission</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Welcome to <strong>ShopEase</strong>, your trusted partner in online shopping. 
              Our mission is to provide a seamless shopping experience by offering a curated 
              selection of high-quality products at unbeatable prices. From the latest tech 
              gadgets to stylish fashion, home essentials, and more, we are committed to 
              bringing you the best of everything under one roof.
            </p>
          </div>
          <div style={{ flex: "1" }}>
            <img
              src="/tt.jpg" // Replace with your image URL
              alt="Our Mission"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
        </section>

        {/* Section 2 */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
            flexDirection: "row-reverse", // Reverse the order for text on the right
          }}
        >
          <div style={{ flex: "1", paddingLeft: "20px" }}>
            <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>Why Choose Us?</h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              At <strong>ShopEase</strong>, we believe in creating value for our customers. 
              Our team works tirelessly to ensure that every product meets the highest standards 
              of quality and affordability. With a focus on innovation and customer satisfaction, 
              we strive to make your shopping journey enjoyable and hassle-free.
            </p>
          </div>
          <div style={{ flex: "1" }}>
            <img
              src="/dd.jpg" // Replace with your image URL
              alt="Why Choose Us"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;