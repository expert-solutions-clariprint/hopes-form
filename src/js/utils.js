/**
 * HForm/utils.js
 * Utils module for Hopes Form.
 *
 * @module HForm
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 * 
 * This file is part of the Hopes Form open source project.
 */
import Cash from 'cash-dom';
window.$ = Cash;
window.jQuery = window.$;

/********************************************************************************
 * 
 * 	Some basic global utils
 * 
 * ******************************************************************************/

export const verbose = 0

export function log(msg,verb) {
	if (!verb && verbose > 0)  console.log(msg);
    else if (verbose >= verb) console.log(msg);
	}
	
export function alert(msg) {
		if (verbose > 5) alert(msg)
		else if (verbose > 0) console.log(msg);
	}

export function isObject(objValue) {
  return objValue && typeof objValue === 'object' && objValue.constructor === Object;
}

export function uniqid(prefix) {
    return `${prefix}${Math.floor(Math.random() * Date.now()).toString(32)}`;
}

export function fetchEJS(url, param, todo) {
	log(`fetchEJS(${url})`);
//	console.log(param);
	if (window.fetch) {
		var myHeaders = new Headers({
    		'Content-Type': 'text/plain; charset=UTF-8'
		});

		var myInit = { method: 'GET',
		               headers: myHeaders,
		               mode: 'cors',
		               cache: 'default' };    // exécuter ma requête fetch ici
		
		window.fetch(url, myInit)
		.then(function(response) {
				return response.text()})
		.then(function(text){if (typeof text === "string") todo(text,"OK")});
	} else {
		get(url, param, todo);
	}
}


export function jpath(obj,path,prefixToIgnore = null,sep = '.') {
  var gpath = !!prefixToIgnore ? path.split(prefixToIgnore).at(-1) : path;
  const spath = gpath.split(sep);
  var cobj = obj;
  spath.forEach(key => {
    if (!!cobj[key]) cobj = cobj[key];
    else return null;
  });
  return cobj === obj ? null : cobj;
}

/************************************************************************
 * 
 * 	legacy de JQuery en ES6
 * 
 * **********************************************************************/

/**
* Remplace $.proxy(fn, context, ...args)
* @param {Function} fn - La fonction à exécuter
* @param {Object} context - Le contexte this à lier
* @param {...any} args - Arguments partiels à lier si fournis
* @returns {Function}
*/
export function proxy(fn, context, ...args) {
    if (typeof fn !== 'function') {
      throw new TypeError('HU.proxy: le premier argument doit être une fonction');
    }

    if (args.length) {
      return function(...invokeArgs) {
        return fn.apply(context, [...args, ...invokeArgs]);
      };
    } else {
      return fn.bind(context);
    }
}

/**
* Remplace $.extend(target, ...sources)
* @returns {Object} L'objet target étendu
*/
export function extend(target, ...sources) {
    if (typeof target !== 'object' || target === null) {
      throw new TypeError('HU.extend: le premier argument doit être un objet');
    }
    for (const source of sources) {
      if (typeof source === 'object' && source !== null) {
        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
}


/************************************************************************
 * 
 * 	btselect
 * 
 * **********************************************************************/
/*
export class BtSelect {
	static instances = [];

	static updateFromA($a) {
  		console.log($a);
        const $bt_select = $a.parents("div.bootstrap-select");
        $bt_select.find("div.filter-option-inner-inner").html($a.html());
        $bt_select.find("select option").attr("selected",false);
//        $($bt_select.find("select option")[parseInt($a.attr("aria-index"))]).attr("selected",true);
        $bt_select.find("select")[0].selectedIndex = parseInt($a.attr("aria-index"));
        $bt_select.find("select").trigger("change");
    }	

	static init($n) {
  		console.log($n);
        var $bt_node = $n;
        var $bt_select = null;
        if ($n[0].tagName === "SELECT") {
        	$bt_node = $n.parent();
        	$bt_select = $n;
        }

	    if ($bt_node.hasClass("bootstrap-select")) {
	        if (!$bt_select) $bt_select = $bt_node.find("select");
	        const selectInd = $bt_select[0].selectedIndex;
	        const $a = $($bt_node.find("a[role=option]")[selectInd]);
	        $bt_node.find("button div.filter-option-inner-inner").html($a.html());    
    	}
    }	

    static initInstances() {
    	BtSelect.instances.forEach((bts) => BtSelect.init(bts));
    }

    constructor($node){
      console.log("new BtSelect()");
      console.log($node);
     
     	this.$snode = $node;
      BtSelect.instances.push(this);
      $node.each((ind,n) => {
      		BtSelect.init($(n));
      });
     
      $node.find("select").on("change",(evt) => {BtSelect.init($node)});

      $node.find("a[role=option]")
		.off("click")
		.on("click",(evt) => {
	        var $a = $(evt.target).parents("a");
	        BtSelect.updateFromA($a);
	    });    	
    }
}
*/
export class BtSelect {
  static instances = [];

  static updateFromA($a) {
    const $bt_select = $a.closest(".bootstrap-select");
    const $select = $bt_select.find("select");
    const index = parseInt($a.attr("aria-index"), 10);

    // Update displayed value
    $bt_select.find("div.filter-option-inner-inner").html($a.html());

    // Update native select
    $select[0].selectedIndex = index;
    $select.trigger("change");

    // Close dropdown
    $bt_select.find(".dropdown-menu").removeClass("show");
  }

  static init($n) {
    let $bt_node = $n;
    let $bt_select = null;

    if ($n[0].tagName === "SELECT") {
      $bt_node = $n.parent();
      $bt_select = $n;
    }

    if ($bt_node.hasClass("bootstrap-select")) {
      if (!$bt_select) $bt_select = $bt_node.find("select");
      const selectInd = $bt_select[0].selectedIndex;
      const $a = $($bt_node.find("a[role=option]")[selectInd]);
      $bt_node.find("button .filter-option-inner-inner").html($a.html());
    }
  }

  static initInstances() {
    BtSelect.instances.forEach((bts) => BtSelect.init(bts.$snode));
  }

  constructor($node) {
    this.$snode = $node;
    BtSelect.instances.push(this);

    // Init HTML
    $node.each((i, el) => BtSelect.init($(el)));

    // Bind events
    const $select = $node.find("select");
    $select.hide();

    // $select.on("change", () => BtSelect.init($node));

    // Toggle dropdown on button click
    const $button = $node.find("button.dropdown-toggle");
    const $menu = $node.find(".dropdown-menu");

    $button.on("click", (evt) => {
      evt.preventDefault();
      $menu.toggleClass("show");
    });

    // Close dropdown on outside click
    $(document).on("click", (evt) => {
      if (
        !$(evt.target).closest($node).length &&
        !$(evt.target).is($button)
      ) {
        $menu.removeClass("show");
      }
    });

    // Click on option
    $node.find("a[role=option]")
      .off("click")
      .on("click", (evt) => {
        const $a = $(evt.target).closest("a");
        BtSelect.updateFromA($a);
      });
  }
}
