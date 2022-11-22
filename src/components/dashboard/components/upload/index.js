import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import styles from "./upload.module.css";
import dummmy_dp from "../../assets/dummy_dp.png";
import CloudUploadIcon from "./assets/CloudUploadIcon.svg";
import UploadIcon from "./assets/UploadIcon.svg";

function Upload(props) {
  const { onNext } = props;

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  //ref for targetting hidden file input
  const hiddenFileInput = useRef(null);

  function handleChange(e) {
    setSelectedFile(e.target.files[0]);
    setIsSelected(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onNext();
  }

  const handleUpload = (e) => {
    hiddenFileInput.current.click(e);
  };

  return (
    <div className={styles.upload}>
      <div className={styles.welcome__header}>
        <img src={dummmy_dp} alt="user" />

        <div>
          <h2>Hi, Iyanu</h2>
          <h2>Welcome back!</h2>
        </div>
      </div>

      <div className={styles.upload__process}>
        <div className={styles.texts}>
          <h2>Upload Document</h2>
          <p>Attach your CSV documemts for analysis</p>
        </div>

        <form className={styles.upload__form}>
          <div className={styles.input__upload} onClick={handleUpload}>
            {isSelected ? (
              <div className={styles.uploaded_csv__info}>
                <p>Filename: {selectedFile.name}</p>
              </div>
            ) : (
              <div className={styles.no_csv__texts}>
                <img src={CloudUploadIcon} alt="Upload" />
                <h3>Drag and Drop your files here</h3>
                <small>csv or pdf</small>
              </div>
            )}

            <button className={styles.browse_btn}>Browse Files</button>

            <input
              type="file"
              name="file"
              id="csvFileInput"
              accept=".csv"
              onChange={handleChange}
              style={{ display: "none" }}
              ref={hiddenFileInput}
            />
          </div>

          <button
            className={styles.upload_btn}
            onClick={(e) => {
              handleSubmit(e);
            }}>
            <img src={UploadIcon} alt="Upload" />
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;

Upload.propTypes = {
  onNext: PropTypes.func
};
