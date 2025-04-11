import HForm from './js/form.js';
window.HForm = HForm;
import './css/hopesform.css';

window.addEventListener("load",()=>{
    $('div[role="DemoHopesForm"]').each((id,div) => {
        HForm.samples.length > 0 ?                   
            HForm.render(div,HForm.samples[0])
            : console.error("HForm dont't have any sample to play !");
                  })
});
export default HForm;
