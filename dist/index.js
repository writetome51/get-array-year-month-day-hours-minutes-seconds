import {get_hms, get_ymd} from './privy.js';


export function get_ymd_hms(
	includeFullYear = false // if false, year has 2 digits
) {
	let date = new Date(); // gets user machine's local date and time.

	return {ymd: get_ymd(date, includeFullYear), hms: get_hms(date)};
}
