import React, { ChangeEvent } from "react";

type Props = {
    setImageUpload: React.Dispatch<any>
}

export const UploaderImage = ({ setImageUpload }: Props) => {
  const [previewImage, setPreviewImage] = React.useState([""]);

  const onSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
      const imageArray = e.target.files
      const newImagesPreview = []
      const newImages = []
    if (imageArray) {
        if (imageArray.length === 1) {
        setImageUpload(imageArray[0]);
        setPreviewImage([URL.createObjectURL(imageArray[0])])
      } else {
        for (let i = 0; i < imageArray.length; i++) {
            newImagesPreview.push(URL.createObjectURL(imageArray[i]))
            newImages.push(imageArray[i])
        }
        setImageUpload(newImages)
        setPreviewImage(newImagesPreview)
      }
    }
  };

  return (
    <>
      <input type="file" multiple onChange={(e) => onSelectImage(e)} />
      {previewImage && previewImage.length === 1 ? (
        <><img src={previewImage[0]} /></>
      ) : (
        previewImage.map((item, i) => {
          return <img key={i} src={item} alt="" />;
        })
      )}
    </>
  );
};
