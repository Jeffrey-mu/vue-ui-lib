import copy from "./modules/copy";
import waterMarker from "./modules/waterMarker";
import draggable from "./modules/draggable";
import debounce from "./modules/debounce";
import throttle from "./modules/throttle";
import longpress from "./modules/longpress";
import ripple from "./modules/ripple";

const directivesList: any = {
	// Custom directives
	copy,
	waterMarker,
	draggable,
	debounce,
	throttle,
	longpress,
	ripple
};



export default directivesList;
