/**
 * HForm/field-imgfile.js
 * Template file for select fields in Hopes Form.
 *
 * @module HForm
 * @version 1.0.0
 * @author Laurent REBIERE
 * @license MIT
 * @repository https://github.com/expert-solutions-clariprint/hopes-form
 * 
 * This file is part of the Hopes Form open source project.
 */
export default (field) => {
  const locals = field;
  const fid = field.fid;
  const selectval = field.value.value; 
  const showUnit = !!field.value.unit && field.value.unit != "";
  const _options = field.value.options;
  const _imgs = field.value.options_img;
  const dyn_select = Array.isArray(_imgs) ? true : false;
  if (dyn_select && _imgs.length < _options.length) {
      for (var i=_imgs.length;i<_options.length;i++) 
        _img.push("select/default.png");
  }
  const img_path = !!locals["img_path"] ? `${locals["img_path"]}/select/` : "/img/select/";
  var tContext = "product";
  if (locals.translationContext) tContext = locals.translationContext;

  var i = 0;
  var tplOptions = "";
  field.value.options.forEach(opt => { 
  	var val = ""; var label = "";
    if (opt.value && opt.label) {val = opt.value; label = HForm.transl(opt.label,'products')} 
    else if (typeof(opt) === "number") {val = opt; label = opt} 
    else if (typeof(opt) === "string") {val = opt; label = HForm.transl(opt,tContext)} 
    tplOptions += `
    				<option ${showUnit ? 'style="text-align: right;"' : ''} 
              value="${val}" ${val === selectval ? 'selected' : ''} 
    				${dyn_select ? 
              `data-content="<div class='d-flex justify-content-between'><span>${label}</span><img src='${img_path}${_imgs[i++]}' width='128px' height='128px'/></div>"` : ''
            }>${label}</option>`;
 });

  var tplOptions2 = "";
  i = 0;
  if (dyn_select)
    field.value.options.forEach(opt => { 
    	var val = ""; var label = "";
      if (opt.value && opt.label) {val = opt.value; label = HForm.transl(opt.label,'products')} 
      else if (typeof(opt) === "number") {val = opt; label = opt} 
      else if (typeof(opt) === "string") {val = opt; label = HForm.transl(opt,tContext)} 
      tplOptions2 += `
                        <li>
                          <a role="option" class="dropdown-item" id="bs-select-1-0" tabindex="0" aria-index="${i}">
                            <span class="text">
                              <div class="d-flex justify-content-between">
                                <span style="white-space: normal;place-content: center;">${label}</span>
                                <img src="${img_path}${_imgs[i++]}" style="width:128px;height:128px;">
                              </div>
                            </span>
                          </a>
                        </li>`
    });

  return `${dyn_select ? `
              <div class="dropdown form-control bootstrap-select" id="${fid}">` : ""}
               <select class="form-control" name="${fid}zzzvalue" placeholder="" aria-labelledby="label${fid}">
              ${tplOptions}
               </select>
              ${dyn_select ? `
                <button type="button" tabindex="-1" 
                    class="btn dropdown-toggle btn-light" 
                    data-bs-toggle="dropdown" 
                    role="combobox" 
                    aria-owns="bs-select-1" 
                    aria-haspopup="listbox" 
                    aria-expanded="false">
                  <div class="filter-option">
                    <div class="filter-option-inner">
                      <div class="filter-option-inner-inner">

                      </div>
                    </div> 
                  </div>
                </button>
                <div class="dropdown-menu" style="max-height: 511.74px; overflow: hidden; min-height: 0px;">
                  <div class="inner" role="listbox" id="bs-select-1" tabindex="-1" aria-activedescendant="bs-select-1-2" style="max-height: 493.74px; overflow: hidden auto; min-height: 0px;">
                    <ul class="dropdown-inner" role="presentation" style="margin-top: 0px; margin-bottom: 0px;">
				${tplOptions2}  
                    </ul>
                  </div>
                </div>` : ""}
        ${dyn_select ? `
              </div>` : ""}
     ${dyn_select ? `
     <script type="text/javascript">
      new HU.BtSelect($("div.bootstrap-select#${fid}"));
    </script>` : ""}`

}