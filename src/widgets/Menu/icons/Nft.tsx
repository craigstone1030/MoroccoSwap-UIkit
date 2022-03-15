import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21 13.0525H13.0525V21H21V13.0525Z" fill="#FCDB2B" />
      <path d="M20.5422 5.36673C19.8346 3.96419 18.3806 3 16.7053 3C14.3372 3 12.4108 4.92659 12.4108 7.29469C12.4108 9.6628 14.3372 11.5892 16.7053 11.5892C18.3806 11.5892 19.8346 10.6251 20.5422 9.22252C20.8348 8.64244 21 7.98752 21 7.29456C21 6.60173 20.8348 5.94681 20.5422 5.36673V5.36673Z" fill="#FCDB2B" />
      <path d="M7.61783 3L3 11.1321H12.2355L7.61783 3Z" fill="#FCDB2B" />
      <path d="M3 17.1243L5.23764 21H9.71292L11.9506 17.1243L9.71292 13.2485H5.23764L3 17.1243Z" fill="#FCDB2B" />
    </Svg>
  );
};

export default Icon;
