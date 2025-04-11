import * as HU from "./utils.js";
import * as SELECT from "./field-select.js";
import * as MULTISELECT from "./field-multiselect.js";
import * as MULTICONTROL from "./field-multicontrol.js";

export default {
  tplKind : {
  	"text" : (field) => {
      	return `
      	      <input type="text" name="${field.fid}" id="${field.fid}" 
      	      	class="form-control ${field.unit ? "text-end" : ""}" 
      	      	placeholder="${ field.placeholder ? HForm.transl(field.placeholder,tContext) : ""}" 
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
      	      	placeholder="${ field.placeholder ? HForm.transl(field.placeholder,tContext) : ""}" 
      	      	style="min-width: 50px" 
      	      	value="${field.value}" 
          			min="${field.min}"
          			max="${field.max}"
          			step="${field.step}"
          		${field.require ? "require" : ""}
      	      	aria-labelledby="label${field.fid}">
      	`;
  	},
  	"select" : SELECT.default,
  	"multiselect" : MULTISELECT.default,
  	"multicontrol" : MULTICONTROL.default
  },
  bootstrap5v1 : {
    tplField : (field) => {
      const fid = field.fid;
      const fval = field.value;
      const tContext = field.translationContext ? field.translationContext : "product";
      const asLabel = !!field.label && field.label !== "";
      const asUnit = !!field["unit"] && field.unit != "";
      const asRequire = !!fval.require && !!fval.invalid_msg;
      const label = asLabel ? HForm.transl(field.label,tContext) : "";
      const kind = HU.isObject(fval) && typeof(fval.kind) === "string" 
              ? fval.kind 
              : field.min && field.max ? "number" : "text";
      
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

      const tplKind = HForm.templates.tplKind[kind] ?
                HForm.templates.tplKind[kind](field) : "";

      const toFill = tplKind === "" ? "need-content" : "";
      field.toBefilled = tplKind === "";

      const tplLabel = asLabel ?
          `<div class="${css.cardHeader()}">
              <label id="label${fid}">${label}</label>
              <div role="help" field="${fid}"></div>
          </div>` : "";

      const tplUnit = asUnit ?
      	 `<span class="input-group-text">${ field.unit }</span>` : "";

      const tplFeedback = asRequire ?
          `<div class="invalid-feedback">${ _val.invalid_msg }</div>` : "";

      return `
                <div class="${ css.col() }">
                  <div class="${ css.card() }">  
                   ${tplLabel}
                    <div class="${css.cardBody()}">
                      <div class="input-group ${toFill}" id="${ fid }">
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
      const label = HForm.transl(gid,"products");
      const tplFields = () => {
        var tpl = "";
        group.fields.forEach(field => tpl += HForm.templates.bootstrap5v1.tplField(field));
        return tpl;
      };
       return `
       <div class="col-12" role="fieds-group" id="${gid}">
        <div class="card border mt-2 mb-2">  
          <div class="card-header h6">
              <label for="${gid}">${label}</label>
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
          // case of field is a field item
          if (typeof field.fid === "string") 
            tpl += HForm.templates.bootstrap5v1.tplField(field);
          
          // case of field is a group item
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
}