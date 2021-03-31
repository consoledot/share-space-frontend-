import "./listing.style.scss";
import { useState } from "react";
import Button from "../../components/Button/button.component";
import FormInput from "../../components/FormInput/forminput.component";
import Spaces from "../../requests/spaces";
// import uploadImages from "./uploadImage";
import { connect } from "react-redux";

const Listing = ({ token }) => {
  const { addSpace } = Spaces();
  const [imageForm, setImageForm] = useState([]);
  const [details, setDetails] = useState({
    name: "",
    location: "",
    price: "",
    category: "",
    picture: [],
    description: "",
  });
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload");
    return fetch("https://api.cloudinary.com/v1_1/bimbo/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => data.secure_url);
  };
  const handleInput = (event) => {
    const { value, name, files } = event.target;
    console.log(event.target.name);
    if (files) {
      setImageForm([...files]);
    } else {
      setDetails({ ...details, [name]: value });
    }
  };
  const Submit = async (event) => {
    event.preventDefault();
    console.log("1");
    const urls = [];
    for (let i = 0; i < imageForm.length; i++) {
      const imagedata = imageForm[i];
      const imageUrl = await uploadImage(imagedata);
      urls.push(imageUrl);
    }
    // await setDetails({ ...details, picture: urls });
    const data = await addSpace({ ...details, picture: urls }, token);
    console.log(data);
  };
  return (
    <div className="listing">
      <div className="header">
        <h1>Ready to List your Properties</h1>
        <p>Put your spaces out there and we'll take care of the rest</p>
      </div>
      <section>
        <h2>Fill the form below</h2>
        <form onSubmit={Submit}>
          <FormInput
            name="name"
            placeholder="Property Name"
            onchange={handleInput}
          />
          <FormInput
            name="location"
            placeholder="Location"
            type="text"
            onchange={handleInput}
          />
          <FormInput
            name="price"
            placeholder="Price"
            type="number"
            onchange={handleInput}
          />
          <FormInput
            type="select"
            name="category"
            onchange={handleInput}
            options={["Apartment", "Office", "Store", "Warehouse", "Others"]}
          />
          <FormInput
            name="picture"
            type="file"
            onchange={handleInput}
            multiple
          />
          <FormInput
            type="textarea"
            name="description"
            placeholder="Description"
            onchange={handleInput}
          />
          <Button name="Submit" />
        </form>
      </section>
    </div>
  );
};
const mapStateToProps = (state) => ({
  token: state.token,
});
export default connect(mapStateToProps)(Listing);
