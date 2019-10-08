'use strict';

/**
 * [将字符串转为json]
 * @param  {[string]} str [匹配到的字符串]
 * @return {[object]}     [经过转换的json]
 */
module.exports = function(str){
	let _str = str.replace(/[\{|\}]/g, '');
	
	let objArr = _str.split(',');

	let newArr = [];

	let _json = '';

	if(Array.isArray(objArr)){
		objArr.forEach((obj) => {
			let _obj = obj.split(':');
			let _key = _obj[0];
			let _value = _obj[1];

			let _nObj = '"' + _key + '":"' + _value + '"';
			
			newArr.push(_nObj);
		})

		_json = JSON.parse("{" + newArr.toString() + "}");

		return _json
	}

}