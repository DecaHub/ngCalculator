"use strict";

angular.module("auxiliary")
	.service("AuxiliaryService", function () {
		
		const createAuxData = function (_symbol, _label) {
			
			return {
				
				symbol: _symbol,
				label: _label
				
			};
			
		};
		
		const _aux = [];
		
		_aux.push(createAuxData("C", "clear"));
		_aux.push(createAuxData("+/−", "posneg"));
		_aux.push(createAuxData("%", "percentage"));
		
		const _dot = createAuxData(".", "dot");
		
		this.getAux = function () {
			
			return _aux;
			
		};
		
		this.getDot = function () {
			
			return _dot;
			
		};
		
	});
