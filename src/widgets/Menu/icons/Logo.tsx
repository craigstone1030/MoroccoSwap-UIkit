import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="123" height="26" viewBox="0 0 123 26" {...props}>
     <image id="logo" width="123" height="26" xlinkHref="data:image/png;base64,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"/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
