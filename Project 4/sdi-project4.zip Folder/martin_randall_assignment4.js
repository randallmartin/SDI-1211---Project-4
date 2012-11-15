//Randall Martin
//SDI 1211
//Project 4

var output = function(message){console.log (message);};

var randallsLibrary = (function() {

	var toChangeTitleCase = function (string) {
		return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};
	
	var toValidateEmail = function (testEmail) {
		var regexObj = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return (regexObj.test(testEmail));
	};

	var toReplaceCharacter = function (string,oldChar,newChar) {
		var myString = string,
		old = new RegExp(oldChar, "m");
		return (myString.replace(old, newChar));
	};

	var toValidatePhoneNumber 	= function (testNumber) {
		var regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		return (regexObj.test(testNumber));
	};

	var toFixDecimal = function (number) {
		var newNumber;
		return (newNumber = number.toFixed(4));
	};

	var toParseNumber = function (value) {
		var value = parseInt(value);
		return value;
	};


return {
	
		"toChangeTitleCase":     	toChangeTitleCase,
		"toValidateEmail":       	toValidateEmail,
		"toReplaceCharacter": 	 	toReplaceCharacter,
		"toValidatePhoneNumber": 	toValidatePhoneNumber,
		"toFixDecimal":          	toFixDecimal,
		"toParseNumber":         	toParseNumber

};

});

var newLib = new randallsLibrary();

console.log(newLib.toChangeTitleCase("I am happy this class is over."));
console.log(newLib.toValidateEmail("aaa@bbb.ccc"));
console.log(newLib.toReplaceCharacter("fff@ggg@hhh@jjj@kkk@lll","@",","));
console.log(newLib.toValidatePhoneNumber("205-505-9862"));
console.log(newLib.toFixDecimal(7));
console.log(newLib.toParseNumber("65 diapers are in a pack"));
