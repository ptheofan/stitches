// Copyright 2013, Matthew Cobbs

// Licensed under the MIT license.

define(["jquery","layouts/compact","layouts/vertical","layouts/horizontal"],function(g,i,j,k){var h={compact:i,vertical:j,horizontal:k};return{setLayout:function(a){this.layout=new (h[a]||h.compact)},getDimensions:function(a,b){return this.layout.getDimensions(a,b)},placeSprites:function(a,b,c,d){var f=this;d(0,"info");g.map(a,function(e){e.placed||(e.placed=f.layout.placeSprite(e,b,c));d(b.length/a.length)});a=g.map(a,function(a){return a.placed?null:a})},trim:function(a,b){var c=0,d=0;g.map(a,function(a){c=
c>a.x+a.width?c:a.x+a.width;d=d>a.y+a.height?d:a.y+a.height});b.width=c||b.width;b.height=d||b.height},makeSpritesheet:function(a,b){var c,d,f;c=document.createElement("canvas");c.width=b.width;c.height=b.height;try{d=c.getContext("2d"),g.map(a,function(a){d.drawImage(a.image,a.x+a.padding,a.y+a.padding)}),f=c.toDataURL("image/png")}catch(e){this.$element.trigger("error",[e])}return f},makeStylesheet:function(a,b,c,d){b=d?b:"download.png";a=a.sort(function(a,b){return a.name<b.name?-1:1});var f=["."+
c+" {","    background: url("+b+") no-repeat;","}\n"];g.map(a,function(a){f=f.concat(["."+c+"-"+a.name+" {","    width: "+a.image.width+"px;","    height: "+a.image.height+"px;","    background-position: -"+a.x+"px -"+a.y+"px;","}\n"])});return"data:text/plain,"+encodeURIComponent(f.join("\n"))},dataToObjectURL:function(a){var b=a.split(",");a=0<=b[0].indexOf("base64")?atob(b[1]):decodeURIComponent(b[1]);var b=b[0].split(":")[1].split(";")[0],c=a.length,d=new ArrayBuffer(c),f=new Uint8Array(d),e;
for(e=0;e<c;e++)f[e]=a.charCodeAt(e);a=this.createBlob(d,b);return this.createObjectURL(a)},createBlob:function(a,b){var c=window.BlobBuilder||window.WebKitBlobBuilder;if(!c)throw Error("BlobBuilder is unsupported.");c=new c;c.append(a);return c.getBlob(b)},createObjectURL:function(a){if(window.URL&&window.URL.createObjectURL)return window.URL.createObjectURL(a);if(window.webkitURL&&window.webkitURL.createObjectURL)return window.webkitURL.createObjectURL(a);throw Error("createObjectURL is unsupported.");
}}});