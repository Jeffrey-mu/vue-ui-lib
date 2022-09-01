import copy from "./modules/copy";
import waterMarker from "./modules/waterMarker";
import draggable from "./modules/draggable";
import debounce from "./modules/debounce";
import throttle from "./modules/throttle";
import longpress from "./modules/longpress";
import ripple from "./modules/ripple";
import filter from "./modules/filter";

const directivesList: any = {
	// Custom directives
	copy,
	waterMarker,
	draggable,
	debounce,
	throttle,
	longpress,
	ripple,
	filter
};

export {
	copy,
	waterMarker,
	draggable,
	debounce,
	throttle,
	longpress,
	ripple,
	filter
}

export default directivesList;
