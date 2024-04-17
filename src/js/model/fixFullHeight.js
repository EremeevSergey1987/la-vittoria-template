import {$vars} from "../state/vars.js";
import {throttle} from "./throttle.js";

const fixFullHeight = () => {
	const vhf = window.innerHeight * 0.01;
	$vars.html.style.setProperty("--vhf", `${vhf}px`);
};

export const fixHeight = throttle(fixFullHeight);
