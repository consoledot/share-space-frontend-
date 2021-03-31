import "./listing.style.scss";
import { useState } from "react";
import Button from "../../components/Button/button.component";
import FormInput from "../../components/FormInput/forminput.component";
import Spaces from "../../requests/spaces";
// import uploadImages from "./uploadImage";

const Listing = () => {
  const { addSpace } = Spaces();
  const [imageForm, setImageForm] = useState([]);
  const [details, setDetails] = useState({
    name: "",
    location: "",
    price: "",
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
      const image = await uploadImage(imagedata);
      urls.push(image);
    }
    setDetails({ ...details, picture: urls });
    const data = await addSpace(details);
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
export default Listing;
