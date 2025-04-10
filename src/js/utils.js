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

export const WebSafeFonts = [
                    // Sans Serif
                    "Arial",
                    "Arial Black",
                    "Arial Narrow",
                    "Arial Rounded MT Bold",
                    "Avant Garde",
                    "Calibri",
                    "Candara",
                    "Century Gothic",
                    "Franklin Gothic Medium",
                    "Futura",
                    "Geneva",
                    "Gill Sans",
                    "Helvetica",
                    "Impact",
                    "Lucida Grande",
                    "Optima",
                    "Segoe UI",

                    "Tahoma",
                    "Trebuchet MS",
                    "Verdana",
                    // Serif
                    "Big Caslon",
                    "Bodoni MT",
                    "Book Antiqua",
                    "Calisto MT",
                    "Cambria",
                    "Didot",
                    "Garamond",
                    "Georgia",
                    "Goudy Old Style",
                    "Hoefler Text",
                    "Lucida Bright",
                    "Palatino",
                    "Perpetua",
                    "Rockwell",
                    "Rockwell Extra Bold",
                    "Basketville",
                    "Times New Roman",
                   // Monospaced
                    "Consolas",
                    "Courier New",
                    "Lucida Console",
                    "Lucida Sans Typewriter",
                    "Monaco",
                    "Andale Mono",
                    // Fantasy
                    "Copperplate",
                    "Papyrus",
                    // Script
                    "Brush Script MT"
                    
               ]

export function truncate(str = "", n){
  if (str === null) str = "";
  return (str.length > n) ? str.slice(0, n-1) + '...' : str;
};

export function base64ToBytes(base64) {
					  const binString = atob(base64);
					  return Uint8Array.from(binString, (m) => m.codePointAt(0));
					}

export async function saveFile(filename,data) {
  // create a new handle
  const newHandle = await window.showSaveFilePicker({ suggestedName: filename });

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write(data);

  // close the file and write the contents to disk.
  await writableStream.close();
}

// Function to download data to a file
export function downloadData(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.trigger("click");
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

// convert a base64 string to blob 
const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

// Function to download data to a file
export function downloadBlob(filename,file,forceblob) {
    log(`downloadBlob(${filename})`);
    const regSVG = new RegExp(/<svg/i);
    if (typeof(file) === "string" && regSVG.test(file)) {
    	var a = document.createElement("a");
        a.href = `data:image/svg+xml;base64,${btoa(file)}`;
        a.download = filename;
        document.body.appendChild(a);
        a.trigger("click");
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0);
    } else if (typeof(file) === "string" && !forceblob) {
    	var a = document.createElement("a");
        a.href = `data:text/plain;base64,${btoa(file)}`;
        a.download = filename;
        document.body.appendChild(a);
        a.trigger("click");
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0);
    }
    else if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.trigger("click");
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0);
    }
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


export async function fetchJSON(url, param, todo) {
		var myHeaders = new Headers({
    	//	'crossDomain' : true,
			// ''
    		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    	//	'Content-Type': 'application/json'
		});

		var myInit = { method: 'GET',
		               headers: myHeaders,
		               mode: 'no-cors',
		               cache: 'default' };    // exécuter ma requête fetch ici
		
		window.fetch(url, myInit)
		.then(function(response) {
				return response.text()})
		.then(function(text){if (typeof text === "string") todo(text,"OK")});
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function isObject(objValue) {
  return objValue && typeof objValue === 'object' && objValue.constructor === Object;
}

export function uniqid(prefix) {
	return `${prefix}${Math.floor(Math.random() * Date.now()).toString(32)}`;
}


function traverseAndFlatten(currentNode, target, sep = '.', flattenedKey) {
    for (var key in currentNode) {
        if (currentNode.hasOwnProperty(key)) {
            var newKey;
            if (flattenedKey === undefined) {
                newKey = key;
            } else {
                newKey = flattenedKey + sep + key;
            }

            var value = currentNode[key];
            if (typeof value === "object") {
                traverseAndFlatten(value, target, sep, newKey);
            } else {
                target[newKey] = value;
            }
        }
    }
}

export function getFlatten(obj,sep = 'zzz') {
    var flattenedObject = {};
    traverseAndFlatten(obj, flattenedObject,sep);
    return flattenedObject;
}

export function setFlatten(obj,prefix = undefined,sep = 'zzz',force = false) {
    if (force || !obj.flattened)
      traverseAndFlatten(obj, obj, sep, prefix);
    obj.flattened = true;
    return obj;
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

window.translateDictionnary = function (array_ctx, array_target) {
	if (typeof gTransl != "function") return alert("function gTrans is not defined");
	const dict = sugarcrepeHL.dictionnary;
	sugarcrepeHL.numberOfTranslationTodo = 0;
	sugarcrepeHL.numberOfTranslationDone = 0;
	sugarcrepeHL.numberOfTranslationFail = 0;
	if (!isObject(dict)) return dict;

	const sources = {
		"schl" : "en",
		"categories" : "en",
		"products" : "en",
		"clariprint" : "en",
		"materials" : "fr"
	};

	var actx = ["schl","categories","products","clariprint","materials"];
	var targets = ["es","de","it","nl","pl","pt","sv"];

	if (Array.isArray(array_ctx)) actx = array_ctx;
	if (Array.isArray(array_target)) targets = array_target;

	function translationEnd() {
		if (sugarcrepeHL.numberOfTranslationTodo === sugarcrepeHL.numberOfTranslationDone + sugarcrepeHL.numberOfTranslationFail) {
			alert(`End of translation of ${sugarcrepeHL.numberOfTranslationTodo} terms, ${sugarcrepeHL.numberOfTranslationFail} fails`);
		}
	}

	actx.forEach(ctx => {
		const source = sources[ctx];
		if (!isObject(dict[ctx])) dict[ctx] = {};
		targets.forEach(lang => {
			if (!isObject(dict[ctx][lang])) dict[ctx][lang] = {};
			const dict_to_translate = dict[ctx][lang];
			if (["en","fr"].includes(source) && isObject(dict[ctx][source])) {
				Object.entries(dict[ctx][source]).forEach(entry => {
					const [key,en_exp] = entry;
					sugarcrepeHL.numberOfTranslationTodo++;
					gTransl(en_exp,source,lang,
						function(response){
							// log(response);
							const data = response.data;
							if (isObject(data) && Array.isArray(data.translations) && data.translations.length > 0 && 
								typeof data.translations[0].translatedText === "string") {
								dict_to_translate[key] = data.translations[0].translatedText;
								sugarcrepeHL.numberOfTranslationDone++;
							} else {
								dict_to_translate[key] = en_exp;
								sugarcrepeHL.numberOfTranslationFail++;
							}

							translationEnd();
						},
						function(){
							dict_to_translate[key] = en_exp;
							sugarcrepeHL.numberOfTranslationFail++;
							translationEnd();
						})
				});
			}
		}); 
	});
}

/************************************************************************
 * 
 * 	legacy de JQuery en ES6
 * 
 * **********************************************************************/

export const ajax = function (options = {}) {
    const {
      url,
      method = options.type || 'GET',
      data = null,
      dataType = 'json',
      contentType = 'application/x-www-form-urlencoded',
      headers = {},
      beforeSend = () => {},
      success = () => {},
      error = () => {}
    } = options;

    let body;
    console.log(`ajax(${method},${url})`);

    // Gérer le body en fonction du contentType
    if (data && method.toUpperCase() !== 'GET') {
      if (contentType === 'application/json') {
        body = JSON.stringify(data);
      } else {
        body = new URLSearchParams(data).toString();
      }
    }

    // Hook avant envoi
    try {
      beforeSend();
    } catch (e) {
      console.warn('[HU.ajax] beforeSend() error:', e);
    }

    // Construire l’objet fetch
    const fetchOptions = {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': contentType,
        ...headers
      },
      ...(body ? { body } : {})
    };

    // Ajouter les données au querystring pour les GET
    let finalUrl = url;
    if (data && method.toUpperCase() === 'GET') {
      const params = new URLSearchParams(data).toString();
      finalUrl += (url.includes('?') ? '&' : '?') + params;
    }

    // Exécution de la requête
    console.log(`finaleUrl: ${finalUrl}`);
    if (!finalUrl) return console.error('ajax error : url is undefined !');
  // Promesse principale
   const p = fetch(finalUrl, fetchOptions)
      .then(async res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const parsed = (dataType === 'json') ? await res.json() : await res.text();
        success(parsed);              // 👈 callback jQuery-style
        return parsed;               // 👈 pour chainage avec .done()
      })
      .catch(err => {
        error(err);                  // 👈 callback jQuery-style
        throw err;                   // 👈 pour .fail()
      });

    // Enrichir avec .done() et .fail()
    p.done = (cb) => {
      p.then(cb);
      return p;
    };

    p.fail = (cb) => {
      p.catch(cb);
      return p;
    };
    return p;


}

export const get = (url, success) => ajax({ url, method: 'GET', success });
export const post = (url, data, success) => ajax({ url, method: 'POST', data, success });


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

export class BtSelect {
	static allInstances = [];

	static updateFromA($a) {
  		console.log($a);
        const $bt_select = $a.parents("div.bootstrap-select");
        $bt_select.find("div.filter-option-inner-inner").html($a.html());
        $bt_select.find("select option").attr("selected",false);
//        $($bt_select.find("select option")[parseInt($a.attr("aria-index"))]).attr("selected",true);
        $bt_select.find("select")[0].selectedIndex = parseInt($a.attr("aria-index"));
        $bt_select.find("select").change();
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
    	BtSelect.allInstances.forEach((bts) => BtSelect.init(bts));
    }

    constructor($node){
      console.log("new BtSelect()");
      console.log($node);
     
     	this.$snode = $node;
      BtSelect.allInstances.push(this);
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

/************************************************************************
 * 
 *  refactor bt tabs, modal & tooltip
 * 
 * **********************************************************************/
export const tabs = {

  init(container = document) {
    console.log("HU.tabs.init()");    
    let   tabsSelector = '.nav-tabs', // 'data-tabs',
          contentSelector = '.tab-content',
          tabsButtonSelector = '.nav-link[data-bs-target]', //  'data-tab-target',
          tabsPaneSelector = '.tab-pane';

    const tabGroups = container.querySelectorAll(tabsSelector);

    tabGroups.forEach(group => {
      console.log(group);
      const buttons = group.querySelectorAll(tabsButtonSelector);
      const tabContent = group.nextElementSibling;
      const panes = tabContent ? tabContent.querySelectorAll(tabsPaneSelector) : [];
      console.log(buttons);
      console.log(panes);

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.dataset.bsTarget;
          const targetPane = document.querySelector(targetId);
          
          console.log("click on tab");
          console.log(btn);
          console.log(targetPane);
          if (!targetPane) return;

          // Retire .active des autres boutons
          buttons.forEach(b => b.classList.remove('active'));

          // Retire .active des autres panes
          panes.forEach(p => p.classList.remove('active', 'show'));

          // Active bouton et pane
          btn.classList.add('active');
          targetPane.classList.add('active', 'show');
        });
      });
    });
  }
};

// Extensions Cash.js

$.fn.modal = function (action = 'toggle') {
  this.each((i, el) => {
    if (!(el instanceof HTMLElement)) return;

    if (action === 'show') {
      el.classList.add('show');
      el.style.display = 'block';
      document.body.classList.add('modal-open');

      // Optionnel : backdrop
      let backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade show';
      backdrop.dataset.huBackdrop = 'true';
      document.body.appendChild(backdrop);
    }

    if (action === 'hide') {
      el.classList.remove('show');
      el.style.display = 'none';
      document.body.classList.remove('modal-open');

      const backdrop = document.querySelector('.modal-backdrop[data-hu-backdrop]');
      if (backdrop) backdrop.remove();
    }

    if (action === 'toggle') {
      $(el).modal(el.classList.contains('show') ? 'hide' : 'show');
    }
  });

  return this;
};

$.fn.tooltip = function () {
  this.each((i, el) => {
    if (!(el instanceof HTMLElement)) return;
    const title = el.getAttribute('title');
    if (!title) return;

    // Supprime le title pour éviter les tooltips natifs
    el.setAttribute('data-tooltip', title);
    el.removeAttribute('title');

    el.addEventListener('mouseenter', () => {
      const tip = document.createElement('div');
      tip.className = 'hu-tooltip';
      tip.textContent = el.getAttribute('data-tooltip');
      document.body.appendChild(tip);

      const rect = el.getBoundingClientRect();
      tip.style.position = 'absolute';
      tip.style.top = `${rect.top - 30}px`;
      tip.style.left = `${rect.left + rect.width / 2}px`;
      tip.style.transform = 'translateX(-50%)';
      tip.style.padding = '5px 10px';
      tip.style.background = 'rgba(0,0,0,0.75)';
      tip.style.color = 'white';
      tip.style.fontSize = '0.8rem';
      tip.style.borderRadius = '4px';
      tip.style.pointerEvents = 'none';
      tip.style.zIndex = 9999;
      tip.dataset.huTooltip = 'true';
    });

    el.addEventListener('mouseleave', () => {
      document.querySelectorAll('[data-hu-tooltip]').forEach(t => t.remove());
    });
  });

  return this;
};

