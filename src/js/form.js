import * as HU from "./utils";
// import 'ejs/ejs.min.js';

class HForm {
	static instances = [];
	static modules = [];
	static rootejs = { base : '/ejs/' };
	static rootimg = { base : '/img/' };
	static rootcss = { base : '/css/' };
	static rootlang = { base : '/lang/'};
	static mainbar = null;
	static ejsByKind = {
		"form" : "field-form",
		"imgFile" : "field-imgfile",
		"imgFileArchive" : "field-imgfileArchive",
		"tatoo-img" : "field-tatoo-img",
		"tatoo-text" : "field-tatoo-text",
		"number" : "field-number", 
		"text" : "field-text", 
		"string" : "field-text", 
		"select" : "field-select", 
		"multiselect" : "field-multiselect",
		"multicontrol" : "field-multicontrol",
		"object" : "field-object", 
			"array" : "field-array"
	};
	static transl = (term,context)=>{return term};
	static templates = [];
	static template = null;
	static getKind(self) {
		HU.log("getKind()");
		HU.log(self);
		HU.log(typeof(self));
		if (typeof(self) == "object" && typeof(self.kind) == "string" && typeof(HForm.ejsByKind[self.kind]) == "string") return self.kind;
		else if (typeof(self) == "object" && typeof(self.kind) == "string" && 
					typeof(HForm.ejsByKind[self.kind]) == "object" && typeof(HForm.ejsByKind[self.kind].url) == "string") return self.kind;
		else return typeof(self);
	}

	static getRootCss(modname) {
		if (typeof this.rootcss[modname] === "string") return this.rootcss[modname];
		if (typeof modname === "string" && this.modules.includes(modname))
			return `/modules/${modname}/css/`;
		if (typeof this.rootcss.base === "string") return this.rootcss.base;
		return "/css/";
	}

	static getRootImg(modname) {
		var root = "/img/";

		if (typeof this.rootimg[modname] === "string") {
			root = this.rootimg[modname];
		}
		else if (typeof(modname) === "string" && this.modules.includes(modname)) {
			root = `/modules/${modname}/img/`;
		}
		else if (typeof this.rootimg.base === "string") {
			root = this.rootimg.base;
		}

		HU.log(`getRootImg(${modname}) => typeof:${typeof(modname)}, rootimg:${this.rootimg[modname]}, %modules:${this.modules.includes(modname)} => ${root}`);
		return root;
	}

	static getRootEjs(modname) {
		var root = "/ejs/";

		if (typeof this.rootejs[modname] === "string") {
			root = this.rootejs[modname];
		}
		else if (typeof modname === "string" && this.modules.includes(modname)) {
			root = `/modules/${modname}/ejs/`;
		}
		else if (typeof this.rootejs.base === "string") {
			root = this.rootejs.base;
		}
		
		HU.log(`getRootEjs(${modname}) => typeof:${typeof(modname)}, rootejs:${this.rootejs[modname]}, %modules:${this.modules.includes(modname)} => ${root}`);
		
		return root;
	}

	static getEJSbyKind(typename) {
		var rootUrl = '/ejs/';
		if (typeof HForm.rootejs.base === "string")
			rootUrl = HForm.rootejs.base;		
	/*	
		if (sugarcrepeHL[typename] !== undefined) {
			
			return `${rootUrl}${sugarcrepeHL[typename]}`;
		}
	*/
		let ejsurl = HForm.ejsByKind[typename];
		var modname = "base";
		if (HU.isObject(ejsurl)) {
			if (ejsurl.module !== undefined) modname = ejsurl.module.name;
			if (ejsurl.url !== undefined) ejsurl = ejsurl.url;
		}
		
		rootUrl = HForm.getRootEjs(modname);

		HU.log(`getEJSbyKind(${typename}) => modname:${modname},url:${ejsurl},root:${rootUrl}`);

		if (typeof ejsurl == "string")
			return `${rootUrl}${ejsurl}.ejs`;
		else return `${rootUrl}${typename}.ejs`;
	}

	static getCallBackByKind(typename) {
		let ejsurl = HForm.ejsByKind[typename],
			_callback = undefined,
			_comment = "";
		if (typeof ejsurl == "object" && ejsurl.module !== undefined) {
		 	if (typeof(ejsurl.module.getLocals) == "function") {
				_comment = "got it !";
				_callback = ejsurl.module.getLocals;
			} else {
		 		_comment = `unknown getLocals for ${ejsurl.module.name}`;			
			}
		} else _comment = `no module for this kind`;

		HU.log(`getCallBackByKind(${typename}) : ${_comment}`);
		return _callback;
	}

	static getEJSForContent(self) {
		return HForm.getEJSbyKind(HForm.getKind(self));
	}

	static onloadHtmlEJS(parent,url,json,callback,callback2,data) {
  		HU.log(`for ${$(parent)} : call render on ${url}`);
  		HU.log(json);
  		
  		const kind = HForm.getKind(json.value);
  		
  		if (typeof callback2 == "function") callback2();
  		
  		if (typeof callback == "function") callback();
  		else if (kind == "array") {
				var gid = 0;
    		value.forEach(val => {
		        let groupid = `#${json.fid}zzz${gid}`;
		        HU.log(`call htmlEJS on id : ${groupid}`);
		        HForm.htmlEJS($(groupid),HForm.getEJSForContent(val),{ "fid" : `${groupid}`, "label" : `#{gid}`, "value" : val});
		        gid++;
				});      
  		} else if (kind == "object") {
				for (const [key,val] of Object.entries(json.value)) {
	        let groupid = `#${json.fid}zzz${key}`;
	        HU.log(`call htmlEJS on id : ${groupid}`);
	        HForm.htmlEJS($(groupid),HForm.getEJSForContent(val),{ "fid" : `${json.fid}zzz${key}`, "label" : key, "value" : val});
				}    
  		}
	}

	static appendEJS(parent,url, json, callback) { 
		HU.log(`appendEJS(${$(parent).attr("id")},${url})`);
	    
		var counter = 0;

	    const waitForAllIncludes = function() {
	    	counter++;
	    	HU.log(`waitForAllIncludes(${counter})`);
	    	if ($(parent).find(`[role="waitIncludeEJS"]`).length === 0 &&
					typeof callback == "function") return callback();
				else if (counter < 6) return window.setTimeout(waitForAllIncludes, 200);
				else return null;
	    }

	    const todo = function(data,textStatus,jqXHR) {
	  		HU.log(data);
	  		if ($(parent.length > 0)) {
	  			console.log($(parent));
	  			console.log(data);
	  			console.log(json);
	  			const rendering = ejs.render(data,json);
	  			console.log(rendering);
		  		if (!typeof(renderering) !== "string" && !["\n",""].includes(rendering)) $(parent).append(rendering);
		  		else console.error(`ejs.render bad return, typeof:${typeof(rendering)} !!!`);
		  		if ($(parent).find(`[role="waitIncludeEJS"]`).length === 0 &&
							typeof callback == "function") return callback();
					else if (typeof callback == "function") return waitForAllIncludes();
				}
	  	}
	  	if (parent !== null && parent.length > 0 && url !== "") HU.fetchEJS(url,"",todo);
	 	else HU.log("!!!!!!! parent or url undefined !!!!!!!!!!!");
	}

	static htmlEJS(parent, url, json, callback,callback2) {
	    HU.log(`htmlEJS(${parent},${url}})`);
	    // HU.log(parent);
	    HU.log(json);

			var counter = 0;
		
			const waitForAllIncludes = function() {
	    	counter++;
	    	const $waitInclude = $(parent).find(`[role="waitIncludeEJS"]`);
	    	HU.log(`waitForAllIncludes(${$waitInclude.length},${counter})`);
	    	if ($waitInclude.length === 0) {
	    		HU.log("all includes loaded -> call callbacks");
					return HForm.onloadHtmlEJS(parent,url,json,callback,callback2);
				}
				else if (counter < 6) 
					return window.setTimeout(waitForAllIncludes, 200);
				else return console.error(`unable to load waitIncludeEJS : ${$waitInclude.length}`);
	  	}

	    const todo = async function(data,textStatus,jqXHR) {
	  		HU.log(data);
	  		
				var _locals = json;
				if (typeof json.kind === "string" && typeof json.callbackGetLocals === "function") 
					_locals = json.callbackGetLocals(json.kind,json);

				_locals.img_path = HForm.getRootImg();

				const rendering = await ejs.render(data,_locals,{debug : false});
	  		await $(parent).html(rendering);
  		
	  		return window.setTimeout(waitForAllIncludes, 200);
	  	}

	  	if (parent !== null && parent.length > 0 && url !== "") 
	  		HU.fetchEJS(url,"",todo);
	  	else HU.log("!!!!!!! parent or url undefined !!!!!!!!!!!");
	}
	
	static sortFields(ArrOrganizer,sourcefields)
	{
	  const fieldsSorted = [];
	  const cpfields = sourcefields.slice();
	  const field_table = {};
	  cpfields.forEach(_f => {field_table[_f.fid] = _f});

	  if (Array.isArray(ArrOrganizer))
	    ArrOrganizer.forEach(_fid => {
	      if (Array.isArray(_fid) && _fid.length > 1) {
	        const grp = {};
	        const farr = grp[_fid[0]] = [];
	        _fid.shift();
	        _fid.forEach(_ffid => {
	          const _ffid_split = _ffid.split(":");
	          const __ffid = _ffid_split[0];
	          const _ff = field_table[__ffid];
	          if (HU.isObject(_ff)) {
	            const _if = cpfields.indexOf(_ff);
	            if (_if > -1) cpfields.splice(_if,1);
	            if (_ffid_split.length > 1 && [3,4,5,6,7,8,9,12].includes(parseInt(_ffid_split[1]))) 
	            	_ff.bt_nb_cols = parseInt(_ffid_split[1]);
	            farr.push(_ff)
	          }
	        });
	        fieldsSorted.push(grp)
	      } else if (typeof _fid === "string") {
	        const _fid_split = _fid.split(":");
	          const __fid = _fid_split[0];
	        const _f = field_table[__fid];
	        if (HU.isObject(_f)) {
	          const _if = cpfields.indexOf(_f);
	          if (_if > -1) cpfields.splice(_if,1);
	          if (_fid_split.length > 1 && [3,4,5,6,7,8,9,12].includes(parseInt(_fid_split[1]))) 
	            _f.bt_nb_cols = parseInt(_fid_split[1]);
	          fieldsSorted.push(_f);
	        }
	      }
	    });
	  cpfields.forEach(_f => fieldsSorted.push(_f));
	  return fieldsSorted;
	}

	$find(selector) {
		const localitem = $(this.element).find(selector);
		if (localitem.length > 0) return localitem;
		if (typeof HForm.mainbar === "string") 
			return $(HForm.mainbar).find(selector);
		return $([]);
	}
	
	selector_effect_show_target(fids){
		this.$find("#"+fids.join(",#")).show();
	}

	selector_effect_enabled_target(fids){
		const table_fids = {};
		fids.forEach(fid => {
			const fidarr = fid.split(":");
			const _fid = fidarr[0];
			fidarr.shift();
			table_fids[_fid] = fidarr;
		});

		Object.entries(table_fids).forEach(entry => {
			const [fid,args] = entry;
			const checkboxes = this.$find("input[type=radio][name='"+fid+"']");
		//	HU.log(checkboxes);
			if (args.length > 0) { 
				args.forEach(arg => {
					if (checkboxes.length > parseInt(arg))
						checkboxes[parseInt(arg)].disabled = false;
				});
			} else {
				checkboxes.each(function(ind,obj){obj.disabled = false;})
			}

			const select = this.$find("select[name='"+fid+"zzzvalue']");
			if (args.length > 0) { 
				const options = select.find("option");
				args.forEach(arg => {
					if (options.length > parseInt(arg))
						options[parseInt(args[0])].disabled = false;
				});
			} else if (select.length > 0) {
				select[0].disabled = false;
			}	
		});
/*
		const selectorselect = "select[name="+fids.join("zzzvalue],select[name=")+"zzzvalue]";
		const selectorinput = "input[name="+fids.join("],input[name=")+"]";

		this.$find(selectorselect + "," + selectorinput).attr("disabled",false);
*/
	}

	selector_effect_disabled_target(fids){
		const table_fids = {};
		fids.forEach(fid => {
			const fidarr = fid.split(":");
			const _fid = fidarr[0];
			fidarr.shift();
			table_fids[_fid] = fidarr;
		});
		HU.log(table_fids);
		Object.entries(table_fids).forEach(entry => {
			const [fid,args] = entry;
			const checkboxes = this.$find("input[type=radio][name='"+fid+"']");
			if (args.length > 0) { 
				args.forEach(arg => {
					if (checkboxes.length > parseInt(arg))
						checkboxes[parseInt(arg)].disabled = true;
				});
			} else {
				checkboxes.each(function(ind,obj){obj.disabled = true;})
			}

			const select = this.$find("select[name='"+fid+"zzzvalue']");
			if (args.length > 0) { 
				const options = select.find("option");
				args.forEach(arg => {
					if (options.length > parseInt(arg))
						options[parseInt(args[0])].disabled = true;
				});
			} else if (select.length > 0) {
				select[0].disabled = true;
			}	
		});

	//	const selectorselect = "select[name="+fids.join("zzzvalue],select[name=")+"zzzvalue]";
	//	const selectorinput = "input[type='text number'][name='"+fids.join("'],input[name='")+"']";

	//	this.$find(selectorselect + "," + selectorinput).attr("disabled",true);
	}

	selector_effect_hide_target(fids){
		HU.log("selector_effect_hide_target");
		HU.log(fids);
		const selector = "#"+fids.join(",#");
		HU.log(`selector:${selector}`);
		this.$find(selector).hide();
	}

	selector_effect_set_target(fids,arg1){
		const table_fids = {};
		fids.forEach(fid => {
			const fidarr = fid.split(":");
			const _fid = fidarr[0];
			fidarr.shift();
			table_fids[_fid] = fidarr;
		});
		const fidArr = Object.keys(table_fids);

		const selectorinput = "input[name="+fidArr.join("],input[name=")+"]";


	//	const selectorinput = "input#"+fids.join(",input#");
		this.$find(selectorinput).each(function(ind,_obj){
			const obj = $(_obj);
			const args = table_fids[obj.attr("name")];
			if (Array.isArray(args) && args.length > 0)
				obj.val(args[0]);
			else if (!!arg1) obj.val(arg1);
		}); //  val(arg1);

		const selectorselect = "select[name="+fidArr.join("zzzvalue],select[name=")+"zzzvalue]";
		const selectorselectoptions = "select[name="+fidArr.join("zzzvalue] option,select[name=")+"zzzvalue] option";
		// HU.log(`set_target on ${selectorselect}, arg1:${arg1}`);
		// HU.log(table_fids);

		this.$find(`${selectorselectoptions}`).each(function(ind,_obj){
			const obj = $(_obj);
			var _name = obj.parent().attr("name");
			var args = [];
			if (!!_name) args = table_fids[_name.split("zzzvalue")[0]];
			var toselect = null;
			
		//	HU.log(`option value:${obj.attr("value")} =? ${args[0]}`);

			if (Array.isArray(args) && args.length > 0)
				toselect = args;
			else if (!!arg1) toselect = arg1;
			
	//		HU.log(`option ${ind}, toselect:${toselect}`);
			
			if (typeof toselect === "string" && obj.attr("value") === toselect) {
				obj.parent()[0].selectedIndex = obj[0].index;
				// obj.attr("selected",true)
			} else if (Array.isArray(toselect) && toselect.length > 0 && obj.attr("value") === toselect[0]) {
				obj.parent()[0].selectedIndex = obj[0].index;
				// obj.attr("selected",true)
			} else obj.attr("selected",false)
		});
		if (arg1 !== "stop_propagate") this.$find(`${selectorselect}`).trigger("change");
/*
		.attr("selected",false);
		

		this.$find(`${selectorselect} option[selected]`).attr("selected",false);
		this.$find(`${selectorselect} option[value=${arg1}]`).attr("selected",true);
		this.$find(`${selectorselect} option[value!=${arg1}]`).attr("selected",false);
*/
	}
	selector_effect_select_target(fids,arg1){
		const table_fids = {};
		fids.forEach(fid => {
			const fidarr = fid.split(":");
			const _fid = fidarr[0];
			fidarr.shift();
			table_fids[_fid] = fidarr;
		});

		Object.entries(table_fids).forEach(entry => {
			const [fid,args] = entry;
			const checkboxes = this.$find("input[type=radio][name='"+fid+"']");
			if (args.length > 0 && checkboxes.length > parseInt(args[0]))
				checkboxes[parseInt(args[0])].checked = true;
		});
	}
	selector_effect_show_options(fids,arg1){
		const table_fids = {};
		fids.forEach(fid => {
			const fidarr = fid.split(":");
			const _fid = fidarr[0];
			fidarr.shift();
			table_fids[_fid] = fidarr;
		});
		const fidArr = Object.keys(table_fids);

		const selectorselectzzz = "select[name='"+fidArr.join("zzzvalue'] option,select[name='")+"zzzvalue'] option";
		const selectorselect = "select[name='"+fidArr.join("'] option,select[name='")+"'] option";
		console.log(`selector_effect_show_options()`);
		console.log(selectorselect);
		console.log(table_fids);
		
		this.$find(`${selectorselect}, ${selectorselectzzz}`).each(function(ind,_obj){
			const obj = $(_obj);
			const objVal = !!_obj.value ? _obj.value : obj.attr("value");
			const ovalInt = parseInt(objVal);
//			const args = table_fids[obj.attr("name")];
			const selectId = obj.parents("select").attr("name").split("zzzvalue");
			const args = table_fids[selectId[0]];
			console.log(`branch on ${selectId[0]}>${objVal}, args :`);
			console.log(args);
			var toselect = null;
			if (Array.isArray(args) && args.length > 0)
				toselect = args;
			else if (!!arg1) toselect = arg1;
			if (typeof toselect === "string" && obj.attr("value") === toselect) {
				obj.show();
			} 
			else if (Array.isArray(toselect) && toselect.length > 0) {
				console.log("toselect");
				console.log(toselect);
				const valArr = toselect.slice();
				valArr.shift();
				console.log("valArr");
				console.log(valArr);
				const valArrInt = [];
				var i=0;
				const len = valArrInt.length = valArr.length;
				for (;i<len;i++) valArrInt[i] = parseInt(valArr[i]);
				console.log("valArrInt");
				console.log(valArrInt);


				if (toselect[0] === "<" && toselect.length > 1 && ovalInt < parseInt(toselect[1]))
					obj.show();
				else if (toselect[0] === "<=" && toselect.length > 1 && ovalInt <= parseInt(toselect[1]))
					obj.show();
				else if (toselect[0] === ">" && toselect.length > 1 && ovalInt > parseInt(toselect[1]))
					obj.show();
				else if (toselect[0] === ">=" && toselect.length > 1 && ovalInt >= parseInt(toselect[1]))
					obj.show();
				else if (toselect[0] === "%" && toselect.length > 2 && ovalInt >= parseInt(toselect[1]) && ovalInt <= parseInt(toselect[2]))
					obj.show();
				else if (toselect[0] === "=" && valArr.includes(objVal)) 
					obj.show();
				else if (toselect[0] === "=" && !!ovalInt && valArrInt.includes(ovalInt)) 
					obj.show();
				else if (toselect[0] === "!=" && !!ovalInt && !valArrInt.includes(ovalInt)) 
					obj.show();
				else if (toselect[0] === "!=" && !valArr.includes(objVal)) 
					obj.show();
				else obj.hide();
			} else obj.hide();
		});
	}

	onChangeMultiselect(fid,indexAttr) {
		console.log(`onChangeMultiselect(${fid},${indexAttr})`);

		const HLUX = this.locals;

		var _field = null;
		var baseField = null;
		HLUX.fields.forEach(field => {
			// HU.setFlatten(field,field.fid); 
			console.log(field);
			if (field.fid === fid) _field = field.value
			else {
				const jobj = HU.jpath(field,fid,field.fid + 'zzz','zzz');
				if (!!jobj) {
					baseField = _field;
					_field = jobj; 
				}
			}
		});
		const $selectArr =this.$find(`select[role=multiselect][fid=${fid}]`);
		const $input =this.$find(`input[role=multiselect][name=${fid}]`);
		var selectIndex = parseInt(indexAttr);

		// selectIndex = selectIndex === 0 ? 1 : selectIndex;
		console.log(selectIndex);
		console.log($selectArr);
		console.log(baseField);
		console.log(_field);

		const $values = [];
		$selectArr.each(function(idx,select) {
			$values.push($(select).val());
		});
		console.log($values);
		const $selectToUpdate = $($selectArr[selectIndex+1]);
		
		// init field options
		if (!!_field) {
		  var _options = _field.options;
		  const _datas = _field.datas; 
		  var _filter = _field.filter;
		  _filter = typeof(multiselect_filter) === "object" && 
		                  typeof(_filter) === "string" && 
		                  typeof(multiselect_filter[_filter]) === "function" ? 
		                    multiselect_filter[_filter] : null;

		  if (!Array.isArray(_options) && typeof(_filter) === "function") _options = _filter(_datas);
		  _field.options = _options;
		}

		// show only good options
		if ($selectArr.length > 0 && selectIndex < $selectArr.length-1 && 
			!!_field && Array.isArray(_field.options)) {

			const valuesMatrix = [];
			const len = _field.options.length;
			const _sep = !!_field.separator&&_field.separator!=="" ? _field.separator : ";";  
  
			valuesMatrix.length=len;
			for (var i=0;i<len;i++) 
				valuesMatrix[i]= Array.isArray(_field.options[i]) ? _field.options[i] : _field.options[i].split(_sep);

			console.log(valuesMatrix);
	
			const matchLines = [];

		//	var maxI = 1;
		//	if (selectIndex > 1) maxI = selectIndex;
			for (var j=0; j<valuesMatrix.length ; j++) {
				var _and = true;
				for (var i=0; i<=selectIndex; i++) {
					const valMatrixJI = valuesMatrix[j][i]; // Array.isArray(valuesMatrix[j][i]) ? valuesMatrix[j][i].at(-1) : valuesMatrix[j][i];
					_and = _and && (Array.isArray(valMatrixJI) && valMatrixJI.at(-1) === $values[i] || 
													valMatrixJI === $values[i]);
				}
				if (_and) matchLines.push(valuesMatrix[j]);
			}
			console.log(matchLines);

			const goodValues = [];
			matchLines.forEach(line => {
				const _val = line[selectIndex+1];
				goodValues.push(Array.isArray(_val) ? _val.at(-1) : _val);
			});
	
			console.log(goodValues);

			const $options = $($selectToUpdate).find("option");
			console.log($options);

			var firstShow = $options.length-1;
			$options.each(function(idx,elm){
				if (goodValues.includes(elm.value)) {
					$(elm).show();
					firstShow = idx < firstShow ? idx : firstShow;
				} else $(elm).hide();
			});
			console.log($selectToUpdate);

			if (!goodValues.includes($selectToUpdate.val()))
				$selectToUpdate[0].selectedIndex=firstShow;
		}
		if (selectIndex < $selectArr.length-2) $selectToUpdate.trigger("change");
		else {
			$input.val($values.join(';'));
		}
	}

	initMultiSelectEvents() {
		const THIS=this;
		const $select = this.$find("select[role=multiselect]");
		console.log(`initMultiSelectEvents on ${$select.length}`);
		
		$select
	  .off("change")
	  .on("change",THIS,function(evt){
	    console.log("multiselect change !")
	    console.log(evt);
	    const $targ = $(evt.currentTarget);
	    const targIndex = $targ.attr("data-index");

	    THIS.onChangeMultiselect($targ.attr("fid"),targIndex);
	    });
	  	this.$find(`select[role="multiselect"][data-index="0"]`).trigger("change");
	}	

	setUiCustomizerEvents() {
		console.log("setUiCustomizerEvents");
		this.initMultiSelectEvents();
		const THIS = this;
		const HLUX = this.locals;

		const method_table = {
			"show" : THIS.selector_effect_show_target,
			"hide" : THIS.selector_effect_hide_target,
			"set" : THIS.selector_effect_set_target,
			"select" : THIS.selector_effect_select_target,
			"enabled" : THIS.selector_effect_enabled_target,
			"disabled" : THIS.selector_effect_disabled_target,
			"show_options" : THIS.selector_effect_show_options
		}

		function applyChanges(evt,selector_fid,table_val_effects) {
			console.log(`on ${selector_fid} change : ${table_val_effects}`);
			console.log(table_val_effects);
			const _curval = $(evt.target).val();
			const _curvalfloat = parseFloat(_curval);
			if (HU.isObject(table_val_effects)) 
				Object.entries(table_val_effects).forEach(entry => {
					const [_caseval,_eff] = entry;
					const arrValTarget = _caseval.split("|");
					const arrValToMatch = [];
					const arrValToAvoid = [];
					const arrValToBeInf = [];
					const arrValToBeSup = [];

					arrValTarget.forEach(_v => {
						if (_v.length === 0) 0;					
						else if (_v[0] === "<") 
							arrValToBeInf.push(parseFloat(_v.substring(1,_v.length))); 
						else if (_v[0] === ">") 
							arrValToBeSup.push(parseFloat(_v.substring(1,_v.length))); 
						else if (_v[0] === "!") 
							arrValToAvoid.push(_v.substring(1,_v.length)); 
						else arrValToMatch.push(_v)
					});
					HU.log("arrValToAvoid vs curval : " + _curval);
					HU.log(arrValToAvoid);

					if ((	arrValToMatch.includes(_curval) || 
							arrValToAvoid.length > 0 && !arrValToAvoid.includes(_curval) ||
							_curvalfloat !== NaN && arrValToBeInf.length > 0 && _curvalfloat < arrValToBeInf[0] ||
							_curvalfloat !== NaN && arrValToBeSup.length > 0 && _curvalfloat > arrValToBeSup[0]
						) && HU.isObject(_eff)) {
						Object.entries(_eff).forEach(entry2 => {
							const [todo_args,fids] = entry2;
							HU.log(`todo:${todo_args}`);
							HU.log(fids);
							const todoarr = todo_args.split(":");
							const method = method_table[todoarr[0]];
							HU.log(method);
							var arg1 = todoarr[0];
							if (todoarr.length > 1) arg1 = todoarr[1];
							if (typeof(method) === "function"&&Array.isArray(fids)) 
								method.call(THIS,fids,arg1);
						});
					}
				});
		}

		if (HU.isObject(HLUX.user_interface_organizer) && HU.isObject(HLUX.user_interface_organizer.onchange_effects)) {
			Object.entries(HLUX.user_interface_organizer.onchange_effects).forEach(selector_evt => {
				const [selector_fid,table_val_effects] = selector_evt;
				this.$find(`select[name=${selector_fid}zzzvalue]`)
					.on('change',function(evt){ applyChanges(evt,selector_fid,table_val_effects); })
					.trigger("change");
				this.$find(`input[name=${selector_fid}]`)
					.on('change',function(evt){ applyChanges(evt,selector_fid,table_val_effects); })
					.trigger("change");
			});
		}
/*
		if (Array.isArray(HLUX.scriptsToEval)) {
			const SCHL = this;
			HLUX.scriptsToEval.forEach(jss => {
				eval(jss);
			});
		}
*/
	}

	triggerIfFieldsLoaded() {
		const idToBefilled = [];
		this.locals.fields.forEach(field => {field.toBefilled ? idToBefilled.push(field.fid) : 0;});
		if (this.locals.displayed_fields.length === idToBefilled.length)
			$(this.element).trigger("HFORM_FIELDS_DISPLAYED");
	}

	add2displayed(field) {
		HU.log(`add2displayed(${field.fid})`);
		if (!field.fid) {
			console.error(`field with no fid`);
			this.locals.displayed_fields.push(field);
		}
		else if (!this.locals.displayed_fields.includes(field.fid))
			this.locals.displayed_fields.push(field.fid);
		else HU.log(`${field.fid} already added`);
		this.triggerIfFieldsLoaded();
	}

/****************************************************
 * 
 *					APIs
 *
 * ***************************************************/

	static debugOnchange(hf) {
		console.log(hf);
		alert(JSON.stringify(hf.getValues()));
	}

	constructor(elem,tpl) {
		HForm.instances.push(this);
		this.tpl = tpl;
		this.element = elem;
		HForm.template = tpl.template && HForm.templates[tpl.template] ? HForm.templates[tpl.template] : HForm.templates[0];

		if (Array.isArray(elem) && elem.length > 0) elem[0].hform = this;
		else if (elem) elem.hform = this; 
		this.locals = {
			fields : [],
			fieldIds : [],
			displayed_fields : [],
			malformed_fields : []
		}
		$.extend(this.locals,tpl);
		if (Array.isArray(this.locals.fields))
			this.locals.fields.forEach(field => {
				if (field.fid && !this.locals.fieldIds.includes(field.fid))
					this.locals.fieldIds.push(field.fid);
			});
		this.onchange = HForm.debugOnchange;
		if (typeof tpl.onchange === "function") 
			this.onchange = tpl.onchange;
	};

	display(callback) {
		HU.log("HForm:display");
		const THIS = this;

		const onLoad = function() {

			THIS.setUiCustomizerEvents();
			// THIS.$find('form').on("change", HU.proxy(THIS.onchange, THIS, THIS));
			if (typeof catllback === "function")
				callback(THIS);	
			if (typeof THIS.locals.onload === "function")
				THIS.locals.onload(THIS);
		}

		$(this.element).on("HFORM_FIELDS_DISPLAYED",onLoad);
		
		const HLUX = this.locals; 
		HU.log("todo avec load specEJS");
		HU.log(HLUX.fields);
		
		const fillEJSFields = function() {
			var fieldsArr = HLUX.fields.slice();
			
			fieldsArr.forEach(field => {
				HU.log(`display ${field} ...`)
				const _kind = HForm.getKind(field.value);
				const callbackGetLocals = HForm.getCallBackByKind(_kind);
				var _locals = field;

				if (typeof callbackGetLocals === "function" && HU.isObject(_locals)) {
					HU.log("calling a callback for getLocals ...")
	//				_locals = callbackGetLocals(_kind,field);
					_locals["kind"] = _kind;
					_locals["callbackGetLocals"] = callbackGetLocals;
				}
				var _EJS = HForm.getEJSForContent(field.value);
				if (field.unit && (field.max||field.min||field.step))
					_EJS = HForm.getEJSbyKind("number");

	        	HU.log(`display ${field.fid} -> EJS:${_EJS}`);
	        	if (field.fid)
	        		HForm.htmlEJS(THIS.$find(`.need-content#${field.fid}`),
	        							_EJS, // HForm.getEJSForContent(field.value),
	        							_locals,
	        							null,
	        							HU.proxy(THIS.add2displayed,THIS,field));
	       		else HLUX.malformed_fields.push(field);
	        	// HLUX.displayed_fields.push(field);
	        });	
	    }
	    const locals = HLUX;
    	// HForm.htmlEJS(this.element, HForm.getEJSbyKind("form"), locals, fillEJSFields);
    	$(this.element).html(HForm.template.render(locals));
    	this.triggerIfFieldsLoaded();
    	fillEJSFields();
	}
	setValues(values = {}) {

	}

	getValues() {
		HU.log("HForm:getValues");

		const HLUX = this.locals;
		const THIS = this;
		HU.log(HLUX.fields);
		
		// Json spec a
		var a = {};

		// init with default values
		HLUX.fields.forEach(f => a[f.fid] = f.value);

		// fill values from specs form
		var searchid = ""; // "#specForm";

		this.$find(`${searchid} input,textarea,select`).each(function(idx,elem){
			
			var _val = null;
			if (["INPUT","TEXTAREA"].includes(elem.tagName)) _val = $(elem).val();
			else if (elem.tagName === "SELECT") {
				_val = $(elem).val()
			}
			const iname = $(elem).attr("name");
			HU.log(`${elem.tagName} : ${iname}`);
			if (HLUX.fieldIds.includes(iname)) {
				HU.log("% field > init !");
				HU.log(elem);
				if (elem.tagName === "INPUT" && $(elem).attr("type") === "file") {
					_val = a[iname];
					HU.log(" field type FILE !!!!!!!");
				} else {
					_val = decodeURIComponent(_val);
					try {_val = JSON.parse(_val);} catch (error) {}
				}
				a[iname] = _val;
			} else if (typeof(iname) === "string" && iname.match(/zzz/) && $(elem).attr("type") !== 'hidden') {
				HU.log("not % field > maj ...");
			//	const _val = $(elem).val();
				const nsplit = iname.split("zzz");
				HU.log(nsplit);
				var pt = a;
				for (var i = 0; i < nsplit.length-1 ;i++) {
					HU.log(pt);
					var tag = nsplit[i];
					HU.log(tag);
					if (pt[tag] !== undefined) pt = pt[tag];
					else pt[tag] = {};
				}
				HU.log("old value");
				HU.log(pt[nsplit[nsplit.length-1]]);			
				pt[nsplit[nsplit.length-1]] = _val;
				HU.log("new value");
				HU.log(pt[nsplit[nsplit.length-1]]);
				HU.log("end maj");
			
			} else if (typeof(iname) === "string" && iname.match(/[\[\w\]+]/) && !iname.match(/[]/) &&
					($(elem).attr("type") === "checkbox" && $(elem).attr("checked") ||
					["text","hidden"].includes($(elem).attr("type"))  && _val !== ""  ||
					["SELECT","TEXTAREA"].includes(elem.tagName)) ) {
				var nsplit = iname.split("[");
				var tmpsplit = nsplit.at(-1).split("]");
				if (tmpsplit.length === 2 && tmpsplit[1] !== "") nsplit.push(tmpsplit[1]);
			//	const _val = $(elem).val();
				var nsplit2 = [];
				HU.log(nsplit);
				var pt = [a];
				for (var i = 0; i < nsplit.length ;i++) {
					HU.log(pt);
					HU.log(nsplit[i]);
					var tag = nsplit[i];
					if (tag.at(-1) === ']') tag = tag.slice(0,-1);
					nsplit2.push(tag);
					if (typeof(pt[i][tag]) === "object") pt.push(pt[i][tag]);
					else {
						pt[i][tag] = {};
						pt.push(pt[i][tag]);
					}
				}
				HU.log("old value");
				HU.log(pt.at(-2))			
				pt.at(-2)[nsplit2.at(-1)] = _val;
				HU.log("new value");
				HU.log(pt.at(-2));
				HU.log("end maj");

			} else if (typeof(iname) === "string" && iname.match(/[\[\w\]+]/) && iname.match(/[]/) &&
					($(elem).attr("type") === "checkbox" && $(elem).attr("checked") ||
					["text","hidden"].includes($(elem).attr("type")) && _val !== ""	)
				) {
				const nsplit1 = iname.split("[]");
				const nsplit = nsplit1[0].split("[");
			//	const _val = $(elem).val();
				var nsplit2 = [];
				HU.log(nsplit);
				var pt = [a];
				for (var i = 0; i < nsplit.length-1 ;i++) {
					HU.log(pt);
					HU.log(nsplit[i]);
					var tag = nsplit[i];
					if (tag.at(-1) === ']') tag = tag.slice(0,-1);
					nsplit2.push(tag);
					if (typeof(pt[i][tag]) === "object") pt.push(pt[i][tag]);
					else {
						pt[i][tag] = {};
						pt.push(pt[i][tag]);
					}
				}
				HU.log("old value");
				HU.log(pt.at(-2))			
				const _arr = pt.at(-2)[nsplit2.at(-1)];
				if (Array.isArray(_arr)) _arr.push(val);
				else pt.at(-2)[nsplit2.at(-1)] = [_val];
				HU.log("new value");
				HU.log(pt.at(-2));
				HU.log("end maj");
			}
		});
		// 
		Object.entries(a).forEach(entry => {
			const [key,val] = entry;
			if (!HLUX.fieldIds.includes(key)) delete a[key];
			else if (HU.isObject(val) && val.value) a[key] = val.value;
		});
		HU.log(a);

		HLUX.formJson = a;
		return a;
	}
	static render(elm,sch,handlers = {}){
		$.extend(sch,handlers);
		const hf = new HForm(elm,sch);
		hf.display();
	}
}

/******************************************************
 * 
 * 	utilities for EJS templates while HForm supports
 * 	both JS templating & EJS templating
 * 
 * ****************************************************/

window.includeEJS = function (kind,param,tag = "div",includeTag = "includeEJS") {
	let UUID = uniqid("includeEJS"),
      PARAM = param,
	    url = HForm.getEJSbyKind(kind);
	
  var counter = 0;

  const todo = async function(data,textStatus,jqXHR){
		counter++;
    log(`${includeTag}(${kind})->todo(${UUID})`);
		log(data);
		log(PARAM);
    const $elm = $(`#${UUID}`);
    const rendering = ejs.render(data,PARAM);
   // console.log(rendering);
    if ($elm.length > 0 && typeof rendering === "string") 
      $elm.replaceWith(rendering);
    
    else if ($elm.length === 0 && typeof rendering === "string" && counter < 10) {
       console.log(`unable to find includeEJS anchor element from id: ${UUID} => retry in 200ms`);
       window.setTimeout(todo, 200,data,textStatus,jqXHR);
    }
    else if ($elm.length === 0 && typeof rendering === "string")
      console.error(`unable to replace includeEJS anchor element from id: ${UUID}, cause to many try > 10 !!!`);
    else console.error(`unable to replace includeEJS anchor element from id: ${UUID}, cause rendering is malformed`);
    return 0;
	}
  const jparam = JSON.stringify(param);
  log(`EJS url: ${url}`);
  if (typeof url === "string" && url !== "" && url !== "undefined") 
    fetchEJS(url,param,todo);

	log(`includeEJS, create tmp element with id: ${UUID}`);
  return `<${tag} id="${UUID}" role="${includeTag}" kind="${kind}" param="${jparam}"></${tag}>`;
}

window.waitIncludeEJS = function (kind,param,tag = "div") {
	return window.includeEJS(kind,param,tag,"waitIncludeEJS");
}


/******************************************************
 * 
 * 	bt5 template base
 * 
 * ****************************************************/


import * as SELECT from "./field-select.js";
import * as MULTISELECT from "./field-multiselect.js";
import * as MULTICONTROL from "./field-multicontrol.js";
import * as IMGFILE from "./field-imgfile.js";
import * as IMGFILEARCHIVE from "./field-imgfileArchive.js";

HForm.templates.common = {
	tplKind : {
		"text" : (field) => {
        	return `
        	      <input type="text" name="${field.fid}" id="${field.fid}" 
        	      	class="form-control ${field.unit ? "text-end" : ""}" 
        	      	placeholder="${ field.placeholder ? HForm.transl(filed.placeholder,tContext) : ""}" 
        	      	style="min-width: 50px" 
        	      	value="${field.value}" 
        			${field.require ? "require" : ""}
        	      	aria-labelledby="label${field.fid}">
        	`;
		},
		"number" : (field) => {
        	return `
        	      <input type="number" name="${field.fid}" id="${field.fid}" 
        	      	class="form-control text-end"
        	      	placeholder="${ field.placeholder ? HForm.transl(filed.placeholder,tContext) : ""}" 
        	      	style="min-width: 50px" 
        	      	value="${field.value}" 
        			min="${field.min}"
        			max="${field.max}"
        			step="${field.step}"
        			${field.require ? "require" : ""}
        	      	aria-labelledby="label${field.fid}">
        	`;
		},
		"imgFile" : IMGFILE.default,
		"imgFileArchive" : IMGFILEARCHIVE.default,
		"tatoo-img" : (field) => {

			return "";
		},
		"tatoo-text" : (field) => {

			return "";
		},
		"select" : SELECT.default,
		"multiselect" : MULTISELECT.default,
		"multicontrol" : MULTICONTROL.default
	}
}


HForm.templates.bootstrap5v1 = {
  tplField : (field) => {
    const fid = field.fid;
    const fval = field.value;
    const tContext = field.translationContext ? field.translationContext : "product";
    const asLabel = !!field.label && field.label !== "";
    const asUnit = !!field["unit"] && field.unit != "";
    const asRequire = !!fval.require && !!fval.invalid_msg;
    
    const css = {
      col : () => {
        var cssCl = "col-12";
        if (!!field.bt_nb_cols) 
          cssCl = `col col-sm-12 col-lg-${field.bt_nb_cols}`;

        else if (HU.isObject(fval) && fval.kind === "multiselect")
          cssCl = "col col-12";

        else if (!HU.isObject(fval) || HU.isObject(fval) && 
                      ["imgFile"].includes(fval.kind))
          cssCl = "col col-sm-12 col-md-6 col-lg-4";

        else if (HU.isObject(fval) && fval.kind === "select")
          cssCl = "col col-sm-12 col-lg-6";
        return cssCl;
      },
      card : () => {
        if (!asLabel) return "card border-0";
        return "card mt-2 mb-2 border";
      },
      cardBody : () => {return "card-body";},
      cardHeader : () => {return "card-header h6";}
    };
    const tplLabel = asLabel ?
        `<div class="${css.cardHeader()}">
            <label id="label${fid}">${HForm.transl(field.label,tContext)}</label>
            <div role="help" field="${fid}"></div>
        </div>`
        : "";

    const tplUnit = asUnit 
    	? `<span class="input-group-text">${ field.unit }</span>`
        : "";

    const tplFeedback = asRequire 
        ? `<div class="invalid-feedback">${ _val.invalid_msg }</div>`
        : "";

    const kind = HU.isObject(fval) && typeof(fval.kind) === "string" 
    				? fval.kind 
    				: field.min && field.max ? "number" : "text";
    const tplKind = HForm.templates.common.tplKind[kind]
    					? HForm.templates.common.tplKind[kind](field)
    					: "";

    const toFill = tplKind === "";

    field.toBefilled = toFill;

    return `
              <div class="${ css.col() }">
                <div class="${ css.card() }">  
                 ${tplLabel}
                  <div class="${css.cardBody()}">
                    <div class="input-group ${toFill ? "need-content" : ""}" id="${ fid }">
    				${tplKind}
                    ${tplUnit} 
                    </div>
                  ${tplFeedback}     
                  </div>
                </div>
              </div>`;
  },
  tplGroup : (group) => {
    const gid = group.gid;
    const tplFields = () => {
      var tpl = "";
      group.fields.forEach(field => tpl += HForm.templates.bootstrap5v1.tplField(field));
      return tpl;
    };
     return `
     <div class="col-12" role="fieds-group" id="${gid}">
      <div class="card border mt-2 mb-2">  
        <div class="card-header h6">
            <label for="${gid}">${HForm.transl(gid,"products")}</label>
            <div role="help" field="${gid}"></div>
        </div>
        <div class="card-body container">
            <div class="row">
     ${tplFields()}
            </div>
        </div>
    </div>
    </div>`;

  },

  render : (locals) => {
    const content = ()=>{
      var tpl = "";
      const fieldsSorted = HForm.sortFields(locals.user_interface_organizer,locals.fields);
      fieldsSorted.forEach(field => {
        // case of field item
        if (typeof field.fid === "string") 
          tpl += HForm.templates.bootstrap5v1.tplField(field);
        
        // case of group item
        else if (HU.isObject(field)) {
          Object.entries(field).forEach(entry => {
          var [groupId,groupFields] = entry;
          if (Array.isArray(groupFields) && groupFields.length > 0) 
            tpl += HForm.templates.bootstrap5v1.tplGroup({gid:groupId,fields:groupFields});
          });
        }
      });
      return tpl;
    };
    return `
          <div class="container"> 
            <div class="row">
              <form class="needs-validation" novalidate>
              ${content()}
              </form>
            </div>
          </div>
`;
  }
}

/******************************************************
 * 
 * 	exemple of tpl data obj
 * 
 * ****************************************************/


const tpl_datas = {
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

const tpl_parts = {
	"MATERIAL_SELECTOR" : {
        "kind" : "multiselect",
        "value" : "PVC Expanse;WHITE;10",
        "options" : tpl_datas.MATERIAL_CSV,
        "labels" : ["Kind","Color","Thickness"],
        "units" : ["","","mm"],
        "separator" : ";",
        "cols" : 3,
       // "datas" : "CALLFUNC(fetch,#POS1_ALIAS§API_GET_POS1_SELECTOR_DATAS)",
        "context" : {},
        "filter" : "pos1_selector_filter"
    },

}

HForm.tpl_case1 = {
	template : "bootstrap5v1",
	fields : [
        {	fid : "q", "label" : "Quantity", "unit" : "ex", 
        	value : "1", "min" : "1", "max" : "10000", "step" : "1"},
        {
            fid : "MATERIAL", "label" : "", 
            value : tpl_parts.MATERIAL_SELECTOR
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
                "options" : tpl_datas.ITEM_NUMBER
            }
        },
        { fid : "numWalls", 
            "label" : "Number of vertical walls", 
            "unit" : "", 
            value : {
                "kind" : "select",
                "value" : 2,
                "options" : tpl_datas.ITEM_NUMBER
            }
        }
	],
	user_interface_organizer : [
		["Order","q"],
		["Specs","MATERIAL","height","length","width","numShelfs","numWalls","sideOffset"],
		["Options","FL_H","FT_H","cornerRadius","FSA"]
	],
	onchange_effects : [],
	onload: function(){alert("Form loaded !");},
	onchange: null,

	buttonConfirm: {
		label: "yes",
		action: function() {alert("coucou");}
	},
	helper: function(){ return 'popopo'; }

}

export {HForm};
export default HForm;