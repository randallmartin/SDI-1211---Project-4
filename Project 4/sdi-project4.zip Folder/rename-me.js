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
	
	getChangeTitleCase:   function (string) {
		output(string + ", is now, " + toChangeTitleCase(string));
	},

	getCheckEmail:  function (testEmail) {
   		output("Is the email address " + testEmail + " valid? " + toValidateEmail (testEmail));
   	},

   	getReplaceCharacter: function (string,oldChar,newChar) {
		output(string + ", is now, " + toReplaceCharacter (string,oldChar,newChar));
	},

	getCheckPhoneNumber: function (testNumber) {
		output("Is the phone number " + testNumber + " is a phone number? " + toValidatePhoneNumber (testNumber));
	},

	getFixedDecimal: function (number) {
		output(number + ", is now, " + toFixDecimal(number));
	},

	getParseNumber:	function (value) {
		output(value + ", is now, " + toParseNumber(value));
	}


};

})();

randallsLibrary.getChangeTitleCase("I hope to learn more coding soon!");
randallsLibrary.getCheckEmail("aaa@bbb.ccc");
randallsLibrary.getReplaceCharacter("fff@ggg@hhh@jjj@kkk@lll","@",",");
randallsLibrary.getCheckPhoneNumber("205-505-9862");
randallsLibrary.getFixedDecimal(7);
randallsLibrary.getParseNumber("There are 65 diapers in a pack");
