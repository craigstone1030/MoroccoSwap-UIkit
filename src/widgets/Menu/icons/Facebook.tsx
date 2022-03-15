import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.3726 5.3726 0 12 0C18.6274 0 24 5.3726 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12ZM13.2508 19.0557V12.5271H15.0529L15.2918 10.2773H13.2508L13.2538 9.15125C13.2538 8.56445 13.3096 8.25005 14.1524 8.25005H15.279V6H13.4766C11.3116 6 10.5496 7.0914 10.5496 8.9268V10.2775H9.2V12.5274H10.5496V19.0557H13.2508Z" fill="#5C539B"/>
    </Svg>
  );
};

export default Icon;
