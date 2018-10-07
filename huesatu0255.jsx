var doc = app.activeDocument;
doc.activeLayer = doc.activeLayer;

function HueSatLight(Hue,Sat,Light) {  
    var desc9 = new ActionDescriptor();  
    desc9.putBoolean( charIDToTypeID('Clrz'), true );  
        var list2 = new ActionList();  
            var desc10 = new ActionDescriptor();  
            desc10.putInteger( charIDToTypeID('H   '), Hue );  
            desc10.putInteger( charIDToTypeID('Strt'), Sat );  
            desc10.putInteger( charIDToTypeID('Lght'), Light );  
        list2.putObject( charIDToTypeID('Hst2'), desc10 );  
    desc9.putList( charIDToTypeID('Adjs'), list2 );  
    executeAction( charIDToTypeID('HStr'), desc9, DialogModes.NO );  
    SavePNG(Hue);
};  

function SavePNG(joku){ 
    
    var opts, file;
        opts = new ExportOptionsSaveForWeb();
        opts.format = SaveDocumentType.PNG;
        opts.PNG8 = false;
        opts.quality = 100;

        pngFile = new File("D:/Google Drive/Pictures kansio/threathtwitch/automata/threat_"+joku+".png");
        doc.exportDocument(pngFile, ExportType.SAVEFORWEB, opts);
} 

for(var i = 0; i < 256;){
    HueSatLight(i, 75, 0);
    i = i+5;
}