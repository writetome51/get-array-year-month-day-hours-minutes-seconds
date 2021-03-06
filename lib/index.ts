import { get_ymd_hms } from './privy/privy';
import { YMD_HMS } from './privy/types';


export { YMD_HMS, Y_M_D, H_M_S } from './privy/types';


export function get_ymd_hms_local(
	date: Date, options = {includeFullYear: false} // if false, year has 2 digits
): YMD_HMS {
	return get_ymd_hms(date, 'local', options);
}


export function get_ymd_hms_UTC(
	date: Date, options = {includeFullYear: false} // if false, year has 2 digits
): YMD_HMS {
	return get_ymd_hms(date, 'UTC', options);
}
