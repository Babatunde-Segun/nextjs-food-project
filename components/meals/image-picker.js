"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  const handleClick = function () {
    imageInput.current.click();
  };

  const handleImageChange = function (e) {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpep'
          name={name}
          ref={imageInput}
        />
        <button onClick={handleClick} className={classes.button} type='button'>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
