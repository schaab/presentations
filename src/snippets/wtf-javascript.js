function dynamicallyLoad(win, signature) {
    for (var i = 0; i < this.addList.length; i++) {
        if (window[this.addList[i].object] != null)
            continue;
        var object = win[this.addList[i].object];
        if (this.addList[i].type == 'function' || typeof (object) == 'function') {
            var o = String(object);
            var body = o.substring(o.indexOf('{') + 1, o.lastIndexOf('}'))
                .replace(/\\/g, "\\\\").replace(/\r/g, "\\n")
                .replace(/\n/g, "\\n").replace(/'/g, "\\'");
            var params = o.substring(o.indexOf('(') + 1, o.indexOf(')'))
                .replace(/,/g, "','");
            if (params != "")
                params += "','";
            window.eval(String(this.addList[i].object) +
                        "=new Function('" + String(params + body) + "')");
            var c = window[this.addList[i].object];
            if (this.addList[i].type == 'class') {
                for (var j in object.prototype) {
                    var o = String(object.prototype[j]);
                    var body = o.substring(o.indexOf('{') + 1, o.lastIndexOf('}'))
                        .replace(/\\/g, "\\\\").replace(/\r/g, "\\n")
                        .replace(/\n/g, "\\n").replace(/'/g, "\\'");
                    var params = o.substring(o.indexOf('(') + 1, o.indexOf(')'))
                        .replace(/,/g, "','");
                    if (params != "")
                        params += "','";
                    window.eval(String(this.addList[i].object) + ".prototype." + j +
                        "=new Function('" + String(params + body) + "')");
                }
                if (object.statics) {
                    window[this.addList[i].object].statics = new Object();
                    for (var j in object.statics) {
                        var obj = object.statics[j];
                        if (typeof (obj) == 'function') {
                            var o = String(obj);
                            var body = o.substring(o.indexOf('{') + 1, o.lastIndexOf('}'))
                                .replace(/\\/g, "\\\\").replace(/\r/g, "\\n")
                                .replace(/\n/g, "\\n").replace(/'/g, "\\'");
                            var params = o.substring(o.indexOf('(') + 1, o.indexOf(')'))
                                .replace(/,/g, "','");
                            if (params != "")
                                params += "','";
                            window.eval(String(this.addList[i].object) + ".statics." +
                                j + "=new Function('" + String(params + body) + "')");
                        } else
                            window[this.addList[i].object].statics[j] = obj;
                    }
                }
            }
        } else if (this.addList[i].type == 'image') {
            window[this.addList[i].object] = new Image();
            window[this.addList[i].object].src = object.src;
        } else
            window[this.addList[i].object] = object;
    }
    this.addList.length = 0;
    this.isLoadedArray[signature] = new Date().getTime();
}