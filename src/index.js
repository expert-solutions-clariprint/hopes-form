import HForm from './js/form.js';
window.HForm = HForm;
import './css/hopesform.css';

window.addEventListener("load",()=>{
              $('div[role="DemoHopesForm"]').each((id,div) => {
                      const hf = new HForm($(div),HForm.tpl_case1);
                      hf.display();
                  })
});
export default HForm;
