export default (field) => { return `
            <input type="file" accept="image/png, image/jpeg"
                    class="form-control" role="${value.role}"
                    name="${fid}" 
                    aria-labelledby="label${fid}"
                    onchange="
                        const $loadbtn = sugarcrepeHL.instance(this).$find('button[role=loadTexture]');
                        $loadbtn.attr('disabled',true);
                        const c3D = sugarcrepeHL.instance(this).$find('canvas[role=viewer3D]');
                        const img = $(this).next()[0];
                        const config = {
                              quality: 0.1,
                              maxWidth: 300,
                              maxHeight: 300,
                              debug: true,
                              mimeType:'image/png'
                            };
                        // Note: A single file comes from event.target.files on <input>
                        BrowserImageResizer.readAndCompressImage(this.files[0], config)
                          .then(resizedImage => {
                            const reader = new FileReader();
                            reader.addEventListener('load',() => {
                               // console.log(reader.result);    
                                img.src=reader.result;
                                img.style='display: block;';
                                img.onload = function(){
                                    if (c3D !== undefined) {
                                        $loadbtn.attr('disabled',false);
                                    //    c3D.attr('reload_textures','1');
                                    //    c3D.trigger('click');
                                    }
                                };
                            });
                            reader.readAsDataURL(resizedImage);
                          });


  /*
                        const FR1  = new FileReader();
                        this.reader = FR1;
                        // FR1.readAsDataURL(this.files[0]);
                        FR1.readAsBinaryString(this.files[0]);
                        FR1.addEventListener('loadend', $.proxy(function() { 
                            
                          img.src=FR1.result;
                            img.style='display: block;';
                            if (c3D !== undefined) {
                                c3D.attr('reload_textures','1');
                                c3D.trigger('click');
                            } 
                        },this)); */
                        "
                    placeholder="" value="" ${!locals.require ? "" : "required"}>
            <img role="${value.role}" style="display: none;" width="100px" height="100px"/>`;
}
