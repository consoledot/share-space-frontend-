import "./listing.style.scss";
import { useState } from "react";
import Button from "../../components/Button/button.component";
import FormInput from "../../components/FormInput/forminput.component";
import Spaces from "../../requests/spaces";

const Listing = () => {
  const { addSpace } = Spaces();
  const [details, setDetails] = useState({
    name: "",
    location: "",
    price: "",
    picture: [],
    description: "",
  });
  const handleInput = (event) => {
    const { value, name, files } = event.target;

    if (files) {
      let formData = new FormData();
      const filesArray = [...files];
      filesArray.forEach((file, i) => {
        formData.append("photos-" + i, file, file.name);
      });
      setDetails({ ...details, [name]: formData });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };
  const Submit = async (event) => {
    event.preventDefault();
    const data = await addSpace(details);
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
