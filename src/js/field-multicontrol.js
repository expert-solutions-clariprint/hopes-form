export default (field) => {
  const locals = field;
  const value = field.value;
  const fid = field.fid;
  const label = field.label;
  var tContext = value.translationContext ? value.translationContext
                    : locals.translationContext ? locals.translationContext : "product";

  console.log(`field-multicontrol`);
  console.log(locals);
  const asLabel = locals.label && label !== "";

  return `
    <div class="col-12" role="fieds-multicontrol" id="${fid}">
      <input type="hidden" name="${fid}[value][kind]" value="${value.askind ? value.askind : value.kind}">
       ${asLabel ? `
      <div class="card border mt-2 mb-2">  
        <div class="card-header h6">
            <label id="label${fid}">${HForm.transl(label,tContext)}</label>
            <div role="help" field="${fid}"></div>
        </div>`
        : `
      <div class="card border-0 p-0">`
        }
        <div class="card-body container ${asLabel ? "" : "p-0"}" aria-labelledby="label${fid}">
            <div class="row">` +
(()=>{
    var ret="";
    Object.entries(value.value).forEach(entry => {
      var [rffid,_val] = entry; 
      const ffid = fid.search(/zzz/) < 0 ? `${fid}zzzvaluezzzvaluezzz${rffid}` : `${fid}zzzvaluezzz${rffid}`;
      const asUnit = !!_val["unit"] && _val.unit != "";
      const asLabel = !!_val.label && _val.label !== "";  
      const ctContext = !!_val.translationContext ? _val.translationContext : tContext;

      if (_val.kind) {
        const pseudoFied = {fid : ffid};
        $.extend(pseudoFied,_val);
        pseudoFied.value = ["number","text"].includes(_val.kind) ? _val.value : _val;
        if (_val.kind === "multicontrol")
          pseudoFied.value = _val;
        ret += HForm.template.tplField(pseudoFied);
      }
    });
    return ret;})() + `
            </div>
        </div>
      </div>
    </div>`
}