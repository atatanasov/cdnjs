/**
 * Localization file for Romanian - Romania (ro-RO)
 */
(function(factory) {
	// Module systems magic dance.
	/*global require,ko,define*/
	if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
		// CommonJS or Node: hard-coded dependency on 'knockout'
		factory(require('knockout'));
	} else if (typeof define === "function" && define['amd']) {
		// AMD anonymous module with hard-coded dependency on 'knockout'
		define(['knockout'], factory);
	} else {
		// <script> tag: use the global `ko` object
		factory(ko);
	}
}(function(ko) {
	if (!ko.validation || typeof ko.validation.defineLocale !== 'function') {
		throw new Error('Knockout-Validation is required, please ensure it is loaded before this localization file');
	}
	return ko.validation.defineLocale('ro-RO', {
		required: 'Acest câmp este obligatoriu.',
		min: 'Introduceţi un număr mai mare sau egal cu {0}.',
		max: 'Introduceţi un număr mai mic sau egal cu {0}.',
		minLength: 'Introduceţi cel puţin {0} caractere.',
		maxLength: 'Introduceţi maxim {0} caractere.',
		pattern: 'Verificaţi această valoare.',
		step: 'Valoarea trebuie să crească cu {0}.',
		email: 'Adresa de email nu este validă.',
		date: 'Vă rugăm introduceţi o dată validă.',
		dateISO: 'Vă rugăm introduceţi o dată validă.',
		number: 'Introduceţi un număr.',
		digit: 'Introduceţi o cifră.',
		phoneUS: 'Vă rugăm să specificați un număr de telefon valid.',
		equal: 'Valorile trebuie să fie egale.',
		notEqual: 'Vă rugăm să alegeți o altă valoare.',
		unique: 'Vă rugăm să vă asigurați că valoarea este unică.'
	});
}));
