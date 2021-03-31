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
  const uploadImages = async (files) => {
    const formData = new FormData();
    const urls = [];
    await files.forEach((file) => {
      formData.append("file", file);
      formData.append("upload_preset", "upload");
      fetch("https://api.cloudinary.com/v1_1/bimbo/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          urls.push(data.secure_url);
          setDetails({
            ...details,
            picture: [...details.picture, data.secure_url],
          });
        });
    });
    console.log(urls);
    return urls;
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
    const picture = await uploadImages(imageForm);
    console.log("2");
    setDetails({ ...details, picture: [...picture] });
    console.log("3");
    console.log(details);
    const data = await addSpace(details);
    console.log("4");
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
