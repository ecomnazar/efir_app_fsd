import React, { ChangeEvent } from "react";

type Props = {
  setImageUpload: React.Dispatch<any>;
  type: "multiple" | "single";
  contentType?: 'video' | 'image';
};

export const UploaderImage = ({ setImageUpload, type = "single", contentType='image' }: Props) => {
  const [previewImage, setPreviewImage] = React.useState([""]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    const imageArray = e.target.files;
    const newImagesPreview = [];
    const newImages = [];
    if (imageArray) {
      if (imageArray.length === 1) {
        setImageUpload(imageArray[0]);
        setPreviewImage([URL.createObjectURL(imageArray[0])]);
      } else {
        for (let i = 0; i < imageArray.length; i++) {
          newImagesPreview.push(URL.createObjectURL(imageArray[i]));
          newImages.push(imageArray[i]);
        }
        setImageUpload(newImages);
        setPreviewImage(newImagesPreview);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
        className="bg-primary text-white h-[40px] w-full rounded-md mb-2"
      >
        SELECT FILE
      </button>
      <input
        ref={inputRef}
        className="hidden"
        type="file"
        multiple={type === "multiple" ? true : false}
        onChange={(e) => onSelectImage(e)}
      />
      {contentType === 'image' ? previewImage && previewImage.length === 1 ? (
        <>
          <img className="mb-2 rounded-md border" src={previewImage[0]} />
        </>
      ) : (
        previewImage.map((item, i) => {
          return (
            <img className="mb-2 rounded-md border" key={i} src={item} alt="" />
          );
        })
      ) : previewImage.length === 1 ? <>
        <video className="mb-2 rounded-md border" src={previewImage[0]} controls />
      </> : previewImage.map((item, i) => {
        return (
          <video className="mb-2 rounded-md border" key={i} src={item} controls />
        );
      })}
    </>
  );
};
