export default (field) => { return `
              <input type="file" accept="image/png, image/jpeg"
                    class="form-control" role="${ value.role }"
                    name="${ fid }" 
                    onchange="
                        const FR1  = new FileReader();
                        this.reader = FR1;
                        FR1.readAsDataURL(this.files[0]);
                        FR1.addEventListener('loadend', $.proxy(function() { 
                            const c3D = $(this).parents('div[role=SugarCrepe]').find('canvas[role=viewer3D]');
                            const img = $(this).next()[0];
                            img.src=FR1.result;
                            img.style='display: block;';
                            if (c3D !== undefined) {
                                c3D.attr('reload_textures','1');
                                c3D.trigger('click');
                            }
                        },this));"
                    placeholder="" value="" ${locals.require != true ? "" : "required"}>
            <img role="${ value.role }" style="display: none;" width="100px" height="100px"/>`
}