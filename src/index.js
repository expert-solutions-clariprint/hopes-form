import HForm from './js/form.js';
window.HForm = HForm;
import './css/hopesform.css';

window.addEventListener("load",()=>{
              $('div[role="DemoHopesForm"]').each((id,div) => {
                      HForm.render(div,HForm.tpl_case1);
                  })
});
export default HForm;
