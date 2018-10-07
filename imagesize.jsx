var imgpxsize = [72, 36, 18];

function resizeImg(pixsize){
    doc = app.activeDocument;
    doc.resizeImage(UnitValue(pixsize,"px"),UnitValue(pixsize,"px"),null,ResampleMethod.BICUBIC);
    
    var opts, file;
    opts = new ExportOptionsSaveForWeb();
    opts.format = SaveDocumentType.PNG;
    opts.PNG8 = false;
    opts.quality = 100;

    pngFile = new File("D:/Google Drive/Pictures kansio/threathtwitch/automata/threat_"+pixsize+"_95.png");
    doc.exportDocument(pngFile, ExportType.SAVEFORWEB, opts);
}

for(var i = 0; i < imgpxsize.length; i++){
    resizeImg(imgpxsize[i]);
}