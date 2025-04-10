export default (field) => {
  const locals = field;
  const value = field.value;
  const fid = field.fid;
  const label = field.label;
  var tContext = locals.translationContext ? locals.translationContext : "product";

  console.log(`field-multiselect`);
  console.log(locals);

  const selectval = value.value; 
  const _sep = !!value.separator&&value.separator!=="" ? value.separator : ";";  
  const selectValArray = Array.isArray(selectval) ? selectval : selectval.split(_sep);
  console.log(selectValArray);
  const selectNum = selectValArray.length;
  const _units = value.units;
  const showUnit = [];
  var _options = value.options;
  const _datas = value.datas; 
  const _filter = typeof(multiselect_filter) === "object" && 
                  typeof(value.filter) === "string" && 
                  typeof(multiselect_filter[value.filter]) === "function" ? 
                    multiselect_filter[value.filter] : null;

  const _labels = value.labels;
  const _cols = typeof(value.cols) === "number" && [1,2,3,4,6].includes(value.cols) ? value.cols : 1;

  if (!Array.isArray(_options) && typeof(_filter) === "function") _options = _filter(_datas);

  var cardW = 12;
  if (_cols === 2)        cardW = 6;
  else if (_cols === 3)   cardW = 4;
  else if (_cols === 4)   cardW = 3;
  else if (_cols === 6)   cardW = 2;

  const selectMatrix = [];
  const selectMatrixVals = [];
  selectMatrix.length=selectNum;
  selectMatrixVals.length=selectNum;
  showUnit.length=selectNum;
  var opti = 0;
  for (var i=0;i<selectNum;i++) {
    selectMatrix[i] = [];
    selectMatrixVals[i] = [];
    showUnit[i] = Array.isArray(_units)&&!!_units[i]&&_units[i]!=="";
  }
  for (var i=0;opti < _options.length;opti++) {
    const valarr = Array.isArray(_options[opti]) ? _options[opti] : _options[opti].split(_sep);
    if (valarr.length === selectNum) {
      for (i=0;i<selectNum;i++) {
        const _val = Array.isArray(valarr[i]) ? valarr[i][valarr.length-1] : valarr[i]; 
        if (!selectMatrixVals[i].includes(_val)) {
          selectMatrixVals[i].push(_val);
          selectMatrix[i].push(valarr[i]);
        }
      }
    }
  } 
  console.log(selectMatrixVals);
 // console.log(`coucou multiselect 1, selectNum:${selectNum}`);
  for (var i=0;i<selectNum;i++)
    selectMatrix[i].sort();

 console.log("coucou multiselect 2");
 console.log(selectMatrix);


 return `
  <div class="row">` +
  (()=>{
    var ret = "";
    for (var j=0;j<selectNum;j++) { 
      const subLabel = Array.isArray(_labels) ? _labels[j] : null;
      const _opts = selectMatrix[j];

      console.log("coucou multiselect 3");
      ret += ` 
    <div class="col-${cardW}">
      ${ subLabel ? `
      <div class="card mt-2 mb-2 border">  
        <div class="card-header h6">
            <label for="${fid}_${j}">${HForm.transl(label,tContext)}${HForm.transl(subLabel,tContext)}</label>
            <div role="help" field="${fid}_${j}"></div>
        </div>`
          : `
      <div class="card border-0">  `
       }
        <div class="card-body ${subLabel ? "" : "p-0" }">
            <div class="input-group">
               <select class="form-control" role="multiselect" data-index="${j}" fid="${fid}" name="${fid}_${j}zzzvalue" placeholder="">
    ` +
  (()=>{
  var i = 0,
      ret = "";
  _opts.forEach(opt => { 
      var val = ""; var label = "";
      if (Array.isArray(opt) && opt.length > 1) {val = opt[1]; label = HForm.transl(opt[0],'products')} 
      else if (opt.value && opt.label) {val = opt.value; label = HForm.transl(opt.label,'products')} 
      else if (typeof(opt) === "number") {val = opt; label = opt} 
      else if (typeof(opt) === "string") {val = opt; label = HForm.transl(opt,tContext)} 
      ret += `
                    <option ${ showUnit[j] ? `style="text-align: right;"` : ""} 
                        value="${ val }" ${ val === selectValArray[j] ? "selected" : ""}>${ label }</option>`
  }); 
  return ret;})() + `
               </select>
            ${showUnit[j] ? `
              <span class="input-group-text">${ _units[j] }</span>`
                : "" }
          </div>
      </div>
    </div>
  </div>` } 
  return ret;})() + `
    <input type="hidden" role="multiselect" name="${fid}" value="${selectval}"/>
  </div>`
}
