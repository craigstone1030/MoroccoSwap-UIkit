import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22" height="24" viewBox="0 0 22 24"{...props}>
      <image id="small-logo" width="22" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAABHNCSVQICAgIfAhkiAAAAhtJREFUSEu1VTtMFFEUPXdmIbiGACHEQuISCDUFWiJbLmoBQQmdS0Ps2LUmARpKY6mVbLuEQMNqibY0FH6IRsKSGGMIcS0YAuvM5d4xwA6w856/l7zM797zzpx33z0Ew+DMeBccfwZEWTC2QZil1WLBlEf1Ajg93Ipk45QCXYzhNVkkT6XFjXr5lwLznQdZgIQlumKZMS/Aq+ZpbaVyPi4CzPfup8ECCEqbfvXsO1ck5ymVinO1OSFwREd7xGik6q/yvCyu6AfiobFhOPxCblv/FDOSJ/KI9hMkespOU+qfgJ6ABBghvjvGNqDlKwFSB45NqGiLOWvgJ71VPNpKIOnXrdCa/bQE9lzGZH8Vk59d3N5zzaxtGb9p97HbBJSTAR5/avg74KXrPpZl3vAIu42MlFzLSUbHEWFHrvo+/zERPl8YJsYfmgM86/6Jq6Lr/NsGvLrmywwwsOdg9EuMJCZgZaIyLHX6uPXdwXpbgI5DwvSmQQ4bYK0GYsJ+guElAE8qbv6doTpMwFoNU33V8Lcz31xoLT/v8ZH56sRXhwlYN03Baw+GPr9vZtysxByWEPi/HWltQiR9lajFXKBWEQVxmOxZ23QDdYqHVqmXBTGXpS/nTttmbUzY6AOaFfaD1gsw/5CWq41eiZ2OGGsSrzO30wL2j3JGa4qw/2WmOfE9sapzg/m1vMn9tplGFlD7P9FfdYTYf2lxwSTVMd8T7itvaHEtAAAAAElFTkSuQmCC"/>

    </Svg>
  );
};

export default Icon;
