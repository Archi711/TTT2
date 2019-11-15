//taken from Underscore.js 
// maybe in future I will use whole lib ?
export function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


/**
 * @class
 * @classdesc Utility error class
 * @constructor
 * @param {number} errorCode
 *   code 0 - no errors
 *   code 2 - Room full error
 * @returns ErrorObject
 */
export class ConnectionError{
  constructor(code){
    this.code = code;
    switch(code){
      case 0 : {
        this.msg = "";
        break;
      }
      case 2 : {
        this.msg = "Room full!";
        break;
      }
      default : {
        this.msg = "Unexpected error!";
      }
    }
  }
}