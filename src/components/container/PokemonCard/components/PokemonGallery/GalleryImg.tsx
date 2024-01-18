import { FC, Fragment, ImgHTMLAttributes, PropsWithChildren } from "react";

interface GalleryImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  imageName: string;
}
type GalleryImgComponents = FC<GalleryImgProps> & PropsWithChildren;
const GalleryImg: GalleryImgComponents = ({ imageName, ...resProps }) => {
  return (
    <Fragment>
      <img
        {...resProps}
        className={`${resProps.className ? resProps.className : ""}`}
        alt={imageName}
        title={imageName}
        width={300}
      />
      <span>{imageName}</span>
    </Fragment>
  );
};

export default GalleryImg;
