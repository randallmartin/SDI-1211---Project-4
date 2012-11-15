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





};