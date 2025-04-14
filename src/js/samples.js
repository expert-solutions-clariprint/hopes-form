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
	JDF_LIST : [
            "F4_1",
            "F6_1","F6_4",
            "F8_1","F8_3","F8_4","F8_5",
            "F10_1",
            "F12_3",
            "F14_1",
            "F16_4","F16_5"
        ],
	comment : "list of JDF fold image file name",
	JDF_LIST_IMG : [
            "F4_1.png",
            "F6_1.png","F6_4.png",
            "F8_1.png","F8_3.png","F8_4.png","F8_5.png",
            "F10_1.png",
            "F12_3.png",
            "F14_1.png",
            "F16_4.png","F16_5.png"
        ],
    ADESA_COMBINATORY : [
		"couche permanent;vernis brillant;892",
		"couche permanent;pelliculage brillant;894",
		"pp blanc;vernis brillant;896",
		"pp blanc;pelliculage brillant;898",
		"pp blanc;pelliculage mat;900",
		"pp transparent;vernis brillant;902",
		"pp transparent;pelliculage brillant;904",
		"pp transparent;pelliculage mat;906",
		"pp argent;vernis brillant;908",
		"pp argent;pelliculage brillant;910",
		"pp argent;pelliculage mat;912",
		"couche enlevable;vernis brillant;914",
		"couche enlevable;pelliculage brillant;916",
		"couche enlevable;pelliculage mat;918",
		"tintoretto;sans finition;920",
		"papier perle gaufre;vernis brillant;922",
		"couche permanent;pelliculage mat;928",
		"rush couche permanent;vernis brillant;938",
		"stickers pp blanc;pelliculage mat;946",
		"planches pp blanc;pelliculage brillant;948",
		"planches pp blanc;pelliculage mat;950",
		"pp transparent vitrophanie;vernis brillant;954",
		"planches couche permanent;vernis brillant;958",
		"kraft;sans finition;960",
		"rush couche permanent;pelliculage mat;973",
		"rush couche permanent;pelliculage brillant;975",
		"couche permanent;vernis mat;981",
		"pp blanc;vernis mat;983",
		"rush pp blanc;vernis brillant;985",
		"rush pp blanc;pelliculage brillant;987",
		"rush pp blanc;pelliculage mat;989",
		"pp blanc;pelliculage soft touch;991",
		"fluo jaune;sans finition;1011",
		"couche recycle;sans finition;2025",
		"pla clear;sans finition;2027",
		"pp transparent;vernis mat;2028",
		"couche enlevable;vernis mat;2033",
		"pp blanc opaque dorsal argent;vernis brillant;2035",
		"pp blanc renforce;vernis brillant;2039",
		"couche renforce;pelliculage brillant;2041",
		"couche renforce;pelliculage mat;2043",
		"pp blanc renforce;pelliculage brillant;2045",
		"pp blanc renforce;pelliculage mat;2047",
		"pp blanc renforce;vernis mat;2049"
	]

}

const schema_parts = {
	MATERIAL_SELECTOR : {
        kind : "multiselect",
        value : "PVC Expanse;WHITE;10",
        options : sample_datas.MATERIAL_CSV,
        labels : ["Kind","Color","Thickness"],
        units : ["","","mm"],
        separator : ";",
        cols : 3,
        hiddenIndexes: [],
       // "datas" : "CALLFUNC(fetch,#POS1_ALIAS§API_GET_POS1_SELECTOR_DATAS)",
        context : {},
        filter : "pos1_selector_filter"
    },
    ADESA_SELECTOR : {
        kind : "multiselect",
        value : "couche permanent;vernis brillant;892",
        options : sample_datas.ADESA_COMBINATORY,
        labels : ["Material","Finish",""],
        units : ["","",""],
        separator : ";",
        cols : 2,
        hiddenIndexes: [2],
       // "datas" : "CALLFUNC(fetch,#POS1_ALIAS§API_GET_POS1_SELECTOR_DATAS)",
        context : {},
        filter : null
    }
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

	        { 	fid : "FSA", "label" : "Front Side Angle", "unit" : "degree", 
	        	value : "15", "min" : "0", "max" : "30", "step" : "1" },

	        { 	fid : "FL_H", "label" : "Low Front panel", "unit" : "mm", 
	        	value : "80", "min" : "0", "max" : "300", "step" : "1" },

	        { 	fid : "numShelfs", 
	            label : "Number of shelfs", 
	            unit : "", 
	            help : true,
	            helpTag: 'papiers',
	            value : {
	                "kind" : "select",
	                "value" : 3,
	                "options" : sample_datas.ITEM_NUMBER
	            }
	        },
	        { 	fid : "JDF", 
	        	label : "Kind of folder", 
               	value : {
                	kind : "select", 
                	value : "F4_1", 
                	options : sample_datas.JDF_LIST,
                	options_img : sample_datas.JDF_LIST_IMG
                }
             }
		],
		user_interface_organizer : [
			["Order","q"],
			["Specs","MATERIAL","height","length","width","numShelfs","numWalls","sideOffset"],
			["Options","FL_H","JDF"]
		],
		onchange_effects : [],
		onload: (form)=>{alert("Form loaded !");},
		onchange: (data)=>{console.log(data)},

		buttonConfirm: {
			label: "yes",
			action: function() {alert("coucou");}
		},
		helper: function(){ return 'popopo'; }
	},
	{
		title: "adesa form",
		template : "bootstrap5v1",
		fields : [
	        {	fid : "q", "label" : "Quantity", "unit" : "ex", 
	        	value : "1", "min" : "1", "max" : "10000", "step" : "1"},
	        { 	fid : "height", "label" : "Height", "unit" : "mm", 
	        	value : "50", "min" : "20", "max" : "1000", "step" : "1"},
	        { 	fid : "width", "label" : "Width", "unit" : "mm", 
	        	value : "50", "min" : "20", "max" : "1000", "step" : "1" },
	        {	fid : "model", "label" : "Number of model(s)", "unit" : "ex", 
	        	value : "1", "min" : "1", "max" : "10", "step" : "1"},
	        {	fid : "SCENARIO", "label" : "", 
	            value : schema_parts.ADESA_SELECTOR }
	    ],
		onload: (form)=>{console.log("Form loaded !");},
		onchange: (data)=>{
			console.log(data)
			const fetchOptions = {
		      method: "POST",
		      headers: {
		        'accept': 'application/json',
		        'Content-Type': 'application/json',
		        'Authorization': 'Bearer TOKEN'
		      },
		      ...(body ? { body } : {})
		    };
		    const finalUrl = "https://api.myadesa.fr/quotes";

			const schema = {
					"scenario": {
					"uid": parseInt(data.SCENARIO.split(";").at(-1))
					},
					"application": 1,
					"coreSize": 40,
					"height": data.height,
					"width": data.width,
					"orientation": 90,
					"quantityPerRoll": 200,
					"series": [
					{
						"quantity": data.q
					}
					],
					"country": {
					"countryCode": "fr"
					},
					"shape": {
					"id": 1
					}
			};	    
			fetchOptions.body = JSON.stringify(schema);
    	// Exécution de la requête
 			console.log(fetchOptions);

   			fetch(finalUrl, fetchOptions)
      		.then(async res => {
        		if (!res.ok) throw new Error(`HTTP ${res.status}`);

		        const parsed = await res.json() 
		        console.log(parsed);
		        // success(parsed);              // 👈 callback jQuery-style
		        return parsed;               // 👈 pour chainage avec .done()
      		})
	      .catch(err => {
	        console.log(err);                  // 👈 callback jQuery-style
	        throw err;                   // 👈 pour .fail()
	      });
		}
	}
]
	