/**
 * HForm/samples.js
 * Sample of schema for Hopes Form.
 *
 * @module HForm
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 * 
 * This file is part of the Hopes Form open source project.
 */


const sample_datas = {
	ITEM_NUMBER : [1,2,3,4,5,7,8,9,10],
	MATERIAL_CSV : [                
                "PVC Expanse;WHITE;2",
                "PVC Expanse;WHITE;3",
                "PVC Expanse;WHITE;4",
                "PVC Expanse;WHITE;5",
                "PVC Expanse;WHITE;6",
                "PVC Expanse;WHITE;10",

                "PVC Expanse;BLACK;3",
                "PVC Expanse;BLACK;5",
                "PVC Expanse;BLACK;8",
                "PVC Expanse;BLACK;10",
                "PVC Expanse;BLACK;19",

                "PVC Expanse;BLUE;3",
                "PVC Expanse;BLUE;5",
                "PVC Expanse;BLUE;8",

                "PVC Expanse;RED;3",
                "PVC Expanse;RED;5",
                "PVC Expanse;RED;8",

                "PVC Expanse;GREY;3",
                "PVC Expanse;GREY;5",
                "PVC Expanse;GREY;8",


                "PVC Compact;BLUE;2",

                "PVC Compact;WHITE;2",
                "PVC Compact;WHITE;3",

                "PVC Compact;BLACK;2",
                "PVC Compact;BLACK;3",

                "PVC Compact;RED;2",
                "PVC Compact;RED;3",

                "PVC Compact;YELLOW;2",
                "PVC Compact;YELLOW;3",

                "PMMA;TRANSPARENT;2",
                "PMMA;TRANSPARENT;3",
                "PMMA;TRANSPARENT;4",
                "PMMA;TRANSPARENT;5",
                "PMMA;TRANSPARENT;6",
                "PMMA;TRANSPARENT;8",
                "PMMA;TRANSPARENT;10",
                "PMMA;TRANSPARENT;12",

                "Corrugated Cardboard;WHITE;10",
                "Corrugated Cardboard;WHITE;16",
                "Corrugated Cardboard;WHITE;19",

                "Cardboard;WHITE;2",
                "Cardboard;WHITE;3",
                "Cardboard;WHITE;5"
                ],
}

const schema_parts = {
	"MATERIAL_SELECTOR" : {
        "kind" : "multiselect",
        "value" : "PVC Expanse;WHITE;10",
        "options" : sample_datas.MATERIAL_CSV,
        "labels" : ["Kind","Color","Thickness"],
        "units" : ["","","mm"],
        "separator" : ";",
        "cols" : 3,
       // "datas" : "CALLFUNC(fetch,#POS1_ALIAS§API_GET_POS1_SELECTOR_DATAS)",
        "context" : {},
        "filter" : "pos1_selector_filter"
    },

}

export default [
	{
		title : "",
		template : "bootstrap5v1",
		fields : [
	        {	fid : "q", "label" : "Quantity", "unit" : "ex", 
	        	value : "1", "min" : "1", "max" : "10000", "step" : "1"},
	        {
	            fid : "MATERIAL", "label" : "", 
	            value : schema_parts.MATERIAL_SELECTOR
	        }, 
	        
	        { 	fid : "height", "label" : "Height", "unit" : "mm", 
	        	value : "1000", "min" : "300", "max" : "3000", "step" : "1"},
	        { 	fid : "length", "label" : "Length", "unit" : "mm", 
	        	value : "400", "min" : "100", "max" : "1500", "step" : "1"},
	        { 	fid : "width", "label" : "Width", "unit" : "mm", 
	        	value : "1000", "min" : "300", "max" : "3000", "step" : "1" },
	        { 	fid : "sideOffset", "label" : "Side Offset", "unit" : "mm", 
	        	value : "0", "min" : "0", "max" : "400", "step" : "1" },
	        { 	fid : "cornerRadius", "label" : "Corner radius", "unit" : "mm", 
	        	value : "40", "min" : "0", "max" : "400", "step" : "1" },

	        { 	fid : "FSA", "label" : "Front Side Angle", "unit" : "degree", 
	        	value : "15", "min" : "0", "max" : "30", "step" : "1" },

	        { 	fid : "FL_H", "label" : "Low Front panel", "unit" : "mm", 
	        	value : "80", "min" : "0", "max" : "300", "step" : "1" },
	        { 	fid : "FT_H", "label" : "Top Front panel", "unit" : "mm", 
	        	value : "100", "min" : "50", "max" : "300", "step" : "1"},

	        { 	fid : "numShelfs", 
	            "label" : "Number of shelfs", 
	            "unit" : "", 
	            help : true,
	            helpTag: 'papiers',
	            value : {
	                "kind" : "select",
	                "value" : 3,
	                "options" : sample_datas.ITEM_NUMBER
	            }
	        },
	        { fid : "numWalls", 
	            "label" : "Number of vertical walls", 
	            "unit" : "", 
	            value : {
	                "kind" : "select",
	                "value" : 2,
	                "options" : sample_datas.ITEM_NUMBER
	            }
	        }
		],
		user_interface_organizer : [
			["Order","q"],
			["Specs","MATERIAL","height","length","width","numShelfs","numWalls","sideOffset"],
			["Options","FL_H","FT_H","cornerRadius","FSA"]
		],
		onchange_effects : [],
		onload: (form)=>{alert("Form loaded !");},
		onchange: (data)=>{console.log(data)},

		buttonConfirm: {
			label: "yes",
			action: function() {alert("coucou");}
		},
		helper: function(){ return 'popopo'; }
	}
]