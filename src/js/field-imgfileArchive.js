export default (field) => { return `
              <input type="file" accept="archive/zip"
                    class="form-control" role="${ value.role }"
                    name="${ fid }"  
                    aria-labelledby="label${ fid }"
                    onchange="
                        const $loadbtn = sugarcrepeHL.instance(this).$find('button[role=loadTexture]');
                        $loadbtn.attr('disabled',true);
                        const c3D = sugarcrepeHL.instance(this).$find('canvas[role=viewer3D]');
                        const $divImg = $(this).next();
                        $divImg.html('');
                        const FR1  = new FileReader();
                        this.reader = FR1;
                       // FR1.readAsDataURL(this.files[0]);
                        FR1.readAsBinaryString(this.files[0]);
                        FR1.addEventListener('loadend', $.proxy(function() { 
                            const content = FR1.result;
                            var new_zip = new JSZip();
                            var img_counter = 0;
                            var img_file = 0;
                            // more files !
                            new_zip.loadAsync(content)
                            .then(function(zip) {
                                // you now have every files contained in the loaded zip
                                var imgIndex = 0;
                                zip.forEach(function (relativePath, zipEntry) { 
                                    const firstFileChar = relativePath.split('/').at(-1)[0];
                                    const matchPngExt = relativePath.match(/.png/);
                                    const matchJpgExt = relativePath.match(/.jpg/);
                                    const matchJpegExt = relativePath.match(/.jpeg/);
                                    console.log(\`try to load ${relativePath} / first filename char: '${firstFileChar}' / match png ext ? ${matchPngExt}\`);
                                    if (firstFileChar === '.' || !matchPngExt && !matchJpgExt && !matchJpegExt) return;
                                    img_file++;
                                   
//                                    zipEntry.async('base64').then(function(b64){
                                    zipEntry.async('blob').then(function(b64){
                                        const config = {
                                          quality: 0.05,
                                          maxWidth: 200,
                                          maxHeight: 200,
                                          debug: true,
                                          mimeType:'image/png'
                                        };

                                        // Note: A single file comes from event.target.files on <input>
                                        BrowserImageResizer.readAndCompressImage(b64, config)
                                          .then(resizedImage => {
                                            const reader = new FileReader();
                                            reader.addEventListener('load',() => {
                                               // console.log(reader.result);    
                                                const $img = $(\`<img role='${value.role}-${++imgIndex}' style='display: inline-flex;' width='100px' height='100px'/>\`);
                                                $divImg.append($img);
                                                const img = $img[0];
                                                img.src=reader.result;
                                                img.onload = function(){
                                                    img_counter++;
                                                    if (img_counter === img_file && c3D !== undefined) {
                                                        $loadbtn.attr('disabled',false);
                                                  //      c3D.attr('reload_textures','1');
                                                   //     c3D.trigger('click');
                                                    }
                                                }
                                                img.onerror = function(){
                                                    img_counter++;
                                                    if (img_counter === img_file && c3D !== undefined) 
                                                        $loadbtn.attr('disabled',false);
                                                };
                                            });
                                            reader.readAsDataURL(resizedImage);
                                          });
/*
                                        Jimp.read(Buffer.from(b64,'base64'))
                                          .then((image) => {
                                            image.resize(250, Jimp.AUTO);
                                            image.quality(30);
                                            image.getBase64(Jimp.MIME_PNG,function(cb64){
                                                const $img = $(\`<img role='${value.role}-${++imgIndex}' style='display: inline-flex;' width='100px' height='100px'/>\`);
                                                $divImg.append($img);
                                                const img = $img[0];
                                                img.src='data:image/png;base64,' + cb64;
                                                img.onload = function(){
                                                    img_counter++;
                                                    if (img_counter === img_file && c3D !== undefined) {
                                                        c3D.attr('reload_textures','1');
                                                        c3D.trigger('click');
                                                    }
                                                };
                                            });
                                            // Do stuff with the image.
                                          })
                                          .catch((err) => {
                                            console.log('!!!!!!!!!!!! error on read img buffer !!!!!!!!!!!!!!!!');
                                            console.log(err);
                                            // Handle an exception.
                                          }); */
                                    })
                                });
                            });
                        },this));"
                    placeholder="" value="" ${ !locals.require ? "" : "required"}>
            <div role="archive-img" archive-role="${ value.role }"></div>`;
}