const uploadImages = async (files) => {
  const formData = new FormData();
  const filesArray = [...files];
  return filesArray.forEach(async (file, i) => {
    formData.append("file", file);
    formData.append("upload_preset", "upload");
    const result = await fetch("https://api.cloudinary.com/v1_1/bimbo/upload", {
      method: "POST",
      body: formData,
    });
    const result_json = await result.json();
    const data = result_json.secure_url;
    return data;
  });
};
export default uploadImages;
