/**
/**
 * @author Shravan Gauta
 * @version 1.3.1
 */

// Require files 
// http://apidata.awgp.org/lib/js/env.js
// http://apidata.awgp.org/lib/js/uiobject.js

/**
 * [MD5 Md5 encryption handing tools]
 * @class MD5
 * @constructor
 */
var MD5 = function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};

function SelectionControl()
{
    this.getSelectionHtml = function()
    {
        var html = "";
        if (typeof window.getSelection != "undefined") {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var container = document.createElement("div");
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    container.appendChild(sel.getRangeAt(i).cloneContents());
                }
                html = container.innerHTML;
            }
        } else if (typeof document.selection != "undefined") {
            if (document.selection.type == "Text") {
                html = document.selection.createRange().htmlText;
            }
        }
        return html;
    }
    this.deselect = function()
    {
        if (typeof window.getSelection != "undefined") {
            var sel = window.getSelection();
            sel.removeAllRanges();
        } else if (typeof document.selection != "undefined") {

            document.selection.empty();

        }
    }
}
selectionControl = new SelectionControl();


////////////////////////// DEVICE Controler  /////////////////////////





/**
 * [YDevCtl Yajan Device Controler]
 * @class YDevCtl
 * @constructor
 */
function YDevCtl()
{
	this.hashKey="123456";
	/**
	 * Reading file from local device stored file.
	 * @method fileRead
	 * @param  {string} filename filepath for reading data that store into application instance into device
	 * @return {string}          return string data if file reading successfuly or return null if reading failed.
	 */
	this.fileRead=function(filename)
	{
		var md = MD5(filename);
		return localStorage.getItem(md);
	}
	/**
	 * Writing data into file that store on local device
	 * @method fileWrite
	 * @param  {String} filename filepath for writing data 
	 * @param  {String} data     data string
	 * @return {Boolean}          return true when writing success or return false.
	 */
	this.fileWrite=function(filename,data)
	{
		var filelist = localStorage.getItem("filelist");
		filelist = filelist+","+filename;
		var md = MD5(filename);
		localStorage.setItem(md, data);
		return true;
	}
	/**
	 * Data appned into exist file
	 * @method fileAppend
	 * @param  {String} filename Filepath for appending data
	 * @param  {String} data     Data string
	 * @return {Boolean}          return true when writing success or return false.
	 */
	this.fileAppend=function(filename,data)
	{
		var md = MD5(filename);
		var od = localStorage.getItem(md);
		localStorage.setItem(md, od+data);
		return true;
	}
	/**
	 * Getting size of file 
	 * @method getFileSize
	 * @param  {String} filename Filepath for getting size 
	 * @return {Integer}          File size in bytes
	 */
	this.getFileSize=function(filename)
	{
		var md = MD5(filename);
		return localStorage.getItem(md).length;
	}
	/**
	 * Deleting exist file
	 * @method fileDelete
	 * @param  {String} filename Filepath for deleting data
	 * @return {Boolean}          return true when deleting success or return false.
	 *
	 */
	
	this.fileDelete=function(filename)
	{
		var md = MD5(filename);
		localStorage.setItem(md, "");
	}
	/**
	 * Check file exist or not
	 * @method fileExist
	 * @param  {String} filename Filepath for checking existance.
	 * @return {Boolean}          return true when file exist or return false.
	 */
	this.fileExist=function(filename)
	{
		var filelist = localStorage.getItem("filelist");
		filelist = filelist.split(",");
		for(var i=0;i<filelist.length;i++)
		{
			if(filelist[i]==filename)
			{
				return true;
			}
		}
		return false;
	}
	/**
	 * Show toast notification on nativie device
	 * @method showToast
	 * @param  {String} message Message string
	 */
	this.showToast=function(message)
	{
		console.info(message);
	}
	/**
	 * Show alert dailog with title on native device
	 * @method alertOK
	 * @param  {String} title   Title String
	 * @param  {String} message Message string
	 */
	this.alertOK=function(title,message)
	{
		alert(message);
	}
	/**
	 * Show alert dailog with Yes and No choice to user on native device
	 * @method alertYesNo
	 * @param  {String} title   Title String
	 * @param  {String} message Message string
	 * @param {Function} callbackOK Callback function execute when user select "Yes" option
	 * @param {Function} callbackCANCLE Callback function execute when user select "Cancle" option
	 */
	this.alertYesNo=function(title,message)
	{
		if(window.confirm(message))
		{
			dev.control.callback._callbackAlertYES();
		}
		else
		{
			dev.control.callback._callbackAlertNO();
		}
	}
	/**
	 * Show process bar 
	 * @method showProcessBar
	 * @param  {String} message Process bar dailog message string
	 */
	this.showProgressBar=function(message)
	{
	}
	/**
	 * Change process bar index that allrady showing using showProcessBar
	 * @method changeProcessBar
	 * @param  {Integer} index Integer valie for progress index as percentege.
	 */
	this.changeProgressBar=function(index)
	{
	}
	/**
	 * Hide processbar dailog that allrady opened by showProcessBar
	 * @method hideProgressBar
	 */
	this.hideProgressBar=function()
	{
	}
	this.captureCameraImage=function()
	{
	}
	/**
	 * Create or replace cookies using native instance
	 * @method setCookie
	 * @param {String} name Cookie name
	 * @param {String} value  Cookie value
	 */
	this.setCookie=function(string,value)
	{
		//document.cookie =string;
		if(typeof setCookie=="function")
		{
			setCookie(string,value);
		}
	}
	/**
	 * Get cookie value
	 * @method getCookie
	 * @param  {String} name Cookie name
	 * @return {String}      If cookie exist then return value of cookie or return null.
	 */
	this.getCookie=function(name)
	{
		//return document.cookie;
		if(typeof getCookie =="function")
		{
			return getCookie(name);
		}
	}
	this.getDeviceType = function()
	{
		if(typeof devctl.getApplicationId=="function")
		{
			this.deviceType = "android";
		}
		else
		{
			this.deviceType = "browser";
			if(typeof YMIApp != "undefined")
			{
				YMIApp.deviceType = devctl.deviceType;
			}
			/*
			var ib = new YajanIOSBrige();
			ib.getDeviceType(function()
			{
				devctl.deviceType="ios";
				if(typeof YMIApp != "undefined")
				{
					YMIApp.deviceType = devctl.deviceType;
				}
			});
			*/
		}
	}
	/**
	 * Get uniqie id of local device instance
	 * @method getDeviceId
	 * @return {String} Local device id when using on native instance or return randome id when using on browser
	 */
	this.getDeviceId=function()
	{
		if(YMI.getCookie("deviceId")!="")
		{
			return YMI.getCookie("deviceId");
		}
		else
		{
			return ""+parseInt(Math.random()*10000000)+"";
		}
		
	}
	/**
	 * Get native app version name.
	 * @method getVersionName
	 * @return {String} If running on native device then return Native App Version name or return "web"
	 */
	this.getVersionName=function()
	{
		return "web";
	}
	this.chatMessageServiceStart =function()
	{
	}
	this.chatMessageServiceStop=function()
	{
	}
	/**
	 * Get extra data of native app
	 * @return {String} Return native app extra data
	 */
	this.getActivityExtraData=function()
	{
		return "";
	}
	this.addOptionMenu=function()
	{
		
	}
	this.openUrl=function(url)
	{
		window.open(url,"");
	}
	this.setNavigationbarBackground=function(color)
	{

	}
	this.getApiHash=function(str)
	{
		return MD5(str+this.hashKey);
	}
	this.makeNotification=function(title,text,data)
	{
		console.info("Notification: "+title);
		console.info(text);
	}
	
}


if(typeof devctl =="undefined")
{
	devctl=new YDevCtl();
}












///////////////////////////    DEVICE Environment   //////////////////


function YDevOptionMenu()
{
	this.items = [];
	this.callback={};
	this.addItem = function(title,callback,parm)
	{
		var v = {"title":title,"callback":callback,"parm":parm};
		this.items[this.items.length]=v;
		devctl.addOptionMenu(title);
		this.callback.items = this.items;
	}
	this.clear = function()
	{
		this.items = [];
		if(typeof devctl.clearOptionMenu !="undefined")
		{
			devctl.clearOptionMenu();
		}
		
	}
	this.remove = function(index)
	{
		var t = [];
		for(i=0;i<this.items.length;i++)
		{
			if(i!=index)
			{
				t[t.length]=this.items[i];
			}
		}
		this.items = t;
	}
	this.callback._onOptionMenuItemSelected=function(string)
	{
		for(var i=0;i<this.items.length;i++)
		{
			if(this.items[i].title==string)
			{
				this.items[i].callback(this.items[i].parm);
			}
		}
	}
}
function YDevCotextualMenu()
{
    this.items = [];
	this.callback={};
	this.addItem = function(title,callback,parm)
	{
		var v = {"title":title,"callback":callback,"parm":parm};
		this.items[this.items.length]=v;
		devctl.addContectualItem(title);
		this.callback.items = this.items;
	}
	this.clear = function()
	{
		this.items = [];
		if(typeof devctl.clearContextualBar!="undefined")
		{
			devctl.clearContextualBar();	
		}
		
	}
	this.remove = function(index)
	{
		var t = [];
		for(i=0;i<this.items.length;i++)
		{
			if(i!=index)
			{
				t[t.length]=this.items[i];
			}
		}
		this.items = t;
	}
	this.callback._onContextualMenuItemSelected =function(string)
	{
		for(var i=0;i<this.items.length;i++)
		{
			if(this.items[i].title==string)
			{
				this.items[i].callback(this.items[i].parm);
			}
		}
	}
	this.hideIcon=function()
	{
		if(YMI.runLevel=="native")
		{
			devctl.hideNavigationIcon();
		}
	}
	this.showIcon=function()
	{
		if(YMI.runLevel=="native")
		{
			devctl.showNavigationIcon();
		}
	}
}
function YDevNavigationMenu()
{
	this.items = [];
	this.callback={};
	this.addItem = function(title,callback,parm,icon)
	{
		var v = {"title":title,"callback":callback,"parm":parm,"icon":icon};
		this.items[this.items.length]=v;
		if(typeof devctl.addNavigationMenu == "function")
		{
			if(icon!="")
			{
			    devctl.addNavigationMenu(title,icon);
			}
			else
			{
			    devctl.addNavigationMenu(title);
			}
		}
		this.callback.items = this.items;
	}
	this.clear = function()
	{
		this.items = [];
		if(typeof devctl.clearNavigationMenu!="undefined")
		{
			devctl.clearNavigationMenu();	
		}
		
	}
	this.remove = function(index)
	{
		var t = [];
		for(i=0;i<this.items.length;i++)
		{
			if(i!=index)
			{
				t[t.length]=this.items[i];
			}
		}
		this.items = t;
	}
	this.callback._onNavigationMenuItemSelected =function(string)
	{
		for(var i=0;i<this.items.length;i++)
		{
			if(this.items[i].title==string)
			{
				this.items[i].callback(this.items[i].parm);
			}
		}
	}
	this.hideIcon=function()
	{
		if(YMI.runLevel=="native" && devctl.hideNavigationIcon== "function")
		{
			devctl.hideNavigationIcon();
		}
	}
	this.showIcon=function()
	{
		if(YMI.runLevel=="native"  && devctl.showNavigationIcon== "function")
		{
			devctl.showNavigationIcon();
		}
	}
}










/**
 * Background ajax api service class for getting new messeges from server
 * @class YMessageService
 * @constructor
 */
function YMessageService()
{
	/**
	 * Callback is collection of function that execute by service then receive responce from server
	 * @property {Object} callback 
	 */
	this.callback=Object;
	/**
	 * Execute when message receive
	 * @property {Function} callback.whenMessageReceive default is null
	 */
	this.callback.whenMessageReceive=null;
	/**
	 * Execute when getting error on access to server
	 * @property {Function} callback.whenError default is null
	 */
	this.callback.whenError=null;
	this.callback._errorMessage=function(message)
	{
		if(this.whenError!=null)
		{
			this.whenError(message);
		}
	}
	this.callback._messageReceive=function(type,text)
	{
		if(this.whenMessageReceive!=null)
		{
			this.whenMessageReceive(type,text);
		}
	}
	/**
	 * Start service
	 * @method start
	 */
	this.start=function()
	{
		devctl.chatMessageServiceStart("mygp",YMI.getCookie("uid"),dev.app.getDeviceId(),"chatMessage");
	}
	/**
	 * Stop service
	 *@method stop
	 */
	this.stop=function()
	{
		devctl.chatMessageServiceStop();
	}
}

/**
 * Sqlite Database driver class
 * @class YDeviceDB
 * @constructor
 */
function YDeviceDB()
{
	this.callback={};
	this.callback.importComplite=null;
	/**
	 * Add or open database that hosted into native applicattion instance or deploied into Assetes folder. Using this mathod can add multiple database.
	 * @method add
	 * @param {String} name Database name
	 */
	this.add=function(name)
	{
		return devctl.addDb(name,name+".db");
	}
	/**
	 * Execute sql query that supported by sqlite database.
	 * @method exec
	 * @param  {String} query SQL Query command string
	 * @return {JSON}       SQL Query output 
	 */
	this.exec=function(query)
	{
		return $.parseJSON(devctl.execDb(query));
	}
	/**
	 * When we add multiple database then we can switch database using this method
	 * @method changeDb 
	 * @param  {String} name Database name
	 * @return {Boolean}      reutrn true when successfuly switch or return false
	 */
	this.changeDb=function(name)
	{
		return devctl.changeDb(name);
	}
	/**
	 * Importing sql script using this function into opened database
	 * @method importSql
	 * @param  {String}   url      File path/url of sql script
	 * @param  {Function} callback execute when import complite
	 */
	this.importSql=function(url,callback)
	{
		this.callback.importComplite=callback;
		devctl.importSql(url);
	}
}

/**
 * Device IO Controlder
 * @class YDeviceAPIIo
 */
function YDeviceAPIIo()
{
	/**
	 * File Reading
	 * @method fileRead
	 * @param  {String} filename File path
	 * @return {String}         return file content
	 */
    this.fileRead=function(filename)
    {
		return devctl.fileRead(filename);
    }
    /**
     * File content write into a path
     * @method fileWrite
     * @param  {String}   filename file path
     * @param  {String}   data     Content data
     * @param  {Function} callback when content writing complite then execute callback
     * @return {Boolean}            reutrn true / false
     */
    this.fileWrite=function(filename,data,callback)
    {
		this.callback.fileWriteDone=callback;
		return devctl.fileWrite(filename,data);
    }
    /**
     * Content append into exist file
     * @method fileAppend
     * @param  {String} filename File path
     * @param  {String} data     Content data string
     * @return {Boolean}          return true / false
     */
    this.fileAppend=function(filename,data)
    {
		return devctl.fileAppend(filename,data);
    }
    /**
     * Get size of file
     * @method getFileSize
     * @param  {String} filename File path
     * @return {Integer}         File size into byte
     */
	this.getFileSize=function(filename)
	{
		return devctl.getFileSize(filename);
	}
	/**
	 * Deleting file
	 * @method fileDelete
	 * @param  {String} filename File path
	 * @return {Boolean}          return true / false when process done
	 */
	this.fileDelete=function(filename)
	{
		return devctl.fileDelete(filename);
	}
	/**
	 * Check file exist or not
	 * @method fileExist
	 * @param  {String} filename File path
	 * @return {Boolean}         return true / false
	 */
	this.fileExist=function(filename)
	{
		return devctl.fileExist(filename);
	}
	
	
	
	this.callback=Object;
	/**
	 * @property {Function} callback.ioException
	 * @type {Function}
	 */
	this.callback.ioException=null;
	/**
	 * @property {Function} callback.fileWriteDone
	 * @type {[type]}
	 */
	this.callback.fileWriteDone=null;

	this.callback._ioExceptionCallback=function(message)
	{
		if(dev.io.callback.ioException!=null)
		{
			dev.io.callback.ioException(message);
		}
	}
	this.callback._fileWriteDoneCallback=function()
	{
		
		if(dev.io.callback.fileWriteDone!=null)
		{
			dev.io.callback.fileWriteDone();
		}
	}
}
/**
 * Device fruntend Controls
 * @class YDeviceAPIControl
 * @constructor
 */
function YDeviceAPIControl()
{
    this.alertOKCallback=null;
    this.alertYESCallback=null;
    this.alertNOCallback=null;
    this.callbackParameter=null;
	this.callback= Object;
	/**
	 * Barcode callback is post execution of Barcode scanner closed
	 * @property {Function} barcodeCallback
	 */
	this.barcodeCallback=null;
	/**
	 * Date Picker Callback is execute after date selection from Date Picker Dailog
	 * @property {Function} datePickerCallback
	 */
	this.datePickerCallback=null;
	/**
	 * Time Picker Callback is execute after date selection from Time Picker Dailog
	 * @property {Function} timePickerCallback
	 */
	this.timePickerCallback=null;
	/**
	 * Open barcode reader
	 * @method readBarcode
	 */
	this.readBarcode=function()
	{
		devctl.readBarcode();
	}
	/**
	 * Show notification on native device and show info into console of web browser
	 * @param  {String} title     Title text
	 * @param  {String} text      Text message
	 * @param  {String} extraData Extra data for calling to app start and passing into Native Extra Data
	 */
	this.notification=function(title,text,extraData)
	{
		devctl.makeNotification(title,text,extraData);
	}

	this.callback._timePickerCallback=function(hour,minute)
	{
		
		if(dev.control.timePickerCallback!=null)
		{
			dev.callback.timePickerCallback(hour,minute);
		}
	}
	this.callback.parm=null;
	this.callback._datePickerCallback=function(day,month,year)
	{
		if(dev.control.datePickerCallback!=null)
		{
			month=parseInt(month)+1;
			if(month<10)
			{
				month="0"+month;
			}
			day = parseInt(day);
			if(day<10)
			{
				day = "0"+day;
			}
			dev.control.datePickerCallback(day,month,year,dev.control.callback.parm);
			dev.control.callback.parm=null;
		}
	}
    this.callback._callbackAlertOK=function()
	{
		if(dev.control.alertOKCallback!=null)
		{
			dev.control.alertOKCallback();
		}
	}
    this.callback._callbackAlertYES=function()
    {

		if(dev.control.alertYESCallback!=null)
		{
			dev.control.alertYESCallback(dev.control.callbackParameter);
			dev.control.callbackParameter=null;
		}
    }
    this.callback._callbackAlertNO=function()
    {
		if(dev.control.alertNOCallback!=null)
		{
			dev.control.alertNOCallback(dev.control.callbackParameter);
			dev.control.callbackParameter=null;
		}
    }
	this.callback._readBarcodeCallback=function(status,value,type)
	{
		
		if(dev.control.barcodeCallback!=null)
		{
			dev.control.barcodeCallback(status,value,type);
		}
	}
	
	
	/**
	 * Show Time Picker Dailog
	 * @method timePicker
	 */
	this.timePicker=function()
	{
		devctl.timePicker();
	}
	/**
	 * Show Date picker dailog
	 * @method datePicker
	 * @return {[type]} [description]
	 */
	this.datePicker=function(callback,defaultValue,parm)
	{
		dev.control.datePickerCallback=callback;
		if(arguments.length>2)
		{
			dev.control.callback.parm=parm;	
		}
		if(defaultValue=="" || defaultValue==null)
		{
			devctl.datePicker();
		}
		else
		{
			devctl.datePicker(defaultValue);	
		}
		
	}
	/**
	 * Show taost message on native device
	 * @method toast
	 * @param  {String} message Text content
	 */
    this.toast=function(message)
    {
        devctl.showToast(message);
    }
    /**
     * Show alert dailog with OK Button
     * @method alertOK
     * @param  {String}   title    Title text 
     * @param  {String}   message  Message content. if this is not applide then title text will be show as message.
     * @param  {Function} callback Callback function will execute after user click/touch on OK butotn
     */
    this.alertOK=function(title,message,callback)
    {
        this.alertOKCallback=callback;
        if(typeof message=="undefined")
        {
        	message=title;
        }
        devctl.alertOK(title,message);
    }
    /**
     * Show confirmation dailog with YES and NO button
     * @method alertYesNo
     * @param  {String} title       title text
     * @param  {String} message     Message content text
     * @param  {Function} yesCallback yesCallback execute after when user click/touch on YES Button
     * @param  {Function} noCallback  noCallback execute after when user click/touch on NO Button
     */
    this.alertYesNo=function(title,message,yesCallback,noCallback,parm)
    {
        this.alertYESCallback=yesCallback;
        this.alertNOCallback=noCallback;
        this.callbackParameter = parm;
        devctl.alertYesNo(title,message);
    }
    /**
     * Show Progress Bar Dailog
     * @method showProgress
     * @param  {String} message Message content text
     */
    this.showProgress=function(message)
    {
        devctl.showProgressBar(message);
    }
    /**
     * Change Prograce bar position value
     * @method changeProgress
     * @param  {Integer} index Integer value for showing progress percentage
     */
    this.changeProgress=function(i)
    {
        devctl.changeProgressBar(i);
    }
    /**
     * Hide Prograce bar dailog
     * @method hideProgress
     */
    this.hideProgress=function()
    {
        devctl.hideProgressBar();
    }
	
}
/**
 * Device Media Controler
 * @class YDeviceAPIMedia
 * @constructor
 */
function YDeviceAPIMedia()
{
	this.callback=Object;
	/**
	 * Callback execute when user select media 
	 * @property {Function} callback.mediaSelectionDone
	 */
	this.callback.mediaSelectionDone=null;
	this.callback._mediaSelectionDoneExec=function(url)
	{
		if(this.mediaSelectionDone!=null)
		{
			this.mediaSelectionDone(url);
		}
	}
	
	/**
	 * Close opened video player
	 * @method closeVideoPlayer
	 * @return {[type]} [description]
	 */
	this.closeVideoPlayer=function()
	{
		devctl.closeVideoPlayer();
	}
	/**
	 * Open video playe window
	 * @method videoPlay
	 * @param  {String} url   Video file path/url
	 * @param  {String} title Video title 
	 */
	this.videoPlay=function(url,title)
	{
		devctl.showVideoPlayer(url,title);
	}
	/**
	 * Stop played video 
	 * @method videoStop
	 */
	this.videoStop=function()
	{
		devctl.videoStop();
	}
	/**
	 * Pause played video
	 * @method videoPause
	 */
	this.videoPause=function()
	{
		devctl.videoPause();
	}
	/**
	 * Resume paused video
	 * @method videoResume
	 */
	this.videoResume=function()
	{
		devctl.videoResume();
	}
	/**
	 * Open Youtube video player
	 * @method youtubeVideoPlay
	 * @param  {String} id    Youtube video ID
	 * @param  {String} title Video title
	 */
	this.youtubeVideoPlay=function(id,title)
	{
		devctl.showYoutubeVideo(id,title);
	}
	/**
	 * Open audio player window
	 * @method audioPlayerShow
	 * @param  {String} title Audio title
	 * @param  {String} url   Audio file path/url
	 */
	this.audioPlayerShow=function(title,url)
	{
		devctl.showAutioPlayer(title,url);
	}
	/**
	 * Start playing audio
	 * @method audioPlayerPlay
	 */
	this.audioPlayerPlay=function()
	{
		devctl.audioPlayerPlay();
	}
	/**
	 * Stop played audio
	 * @method audioPalyerStop
	 */
	this.audioPlayerStop=function()
	{
		devctl.audioPlayerStop();
	}
	/**
	 * Pause played audio
	 * @method audioPalyerPause
	 */
	this.audioPlayerPause=function()
	{
		devctl.audioPlayerPause();
	}
	/**
	 * Resume paused audio
	 * @method audioPlayerResume
	 */
	this.audioPlayerResume=function()
	{
		devtl.audioPlayerResume();
	}
}
/**
 * Device application handler
 * @class YDeviceAPIApp
 * @constructor
 */
function YDeviceAPIApp()
{
	this.appStatus="open";
	this.onClickBackButton=null;
	this.initScreen=null;
	this.builtVersion = "1";
	this.applicationId="";
	this.applicationKey="";
	/**
	 * Callback execute after native onCreate app
	 * @property {Function} onStart
	 */
	this.onStart=null;
	/**
	 * Callback execute after native onStop app
	 * @property {Function} onStop
	 */
	this.onStop=null;
	/**
	 * Callback execute after native onPause app
	 * @property {Function} onStop
	 */
	this.onPouse=null;
	/**
	 * Callback execute after native onResume app
	 * @property {Function} onResume
	 */
	this.onResume=null;
	this.callback=Object;
	this.theam = "blue";
	/**
	 * cssPath is url/path for css liberary
	 * @property {String} cssPath
	 */
	this.cssPath="";
	/**
	 * jsPath is url/path for js library
	 * @property {String} jsPath
	 */
	this.jsPath="";
	/**
	 * appJs is main executable js file
	 * @property {String} appJs
	 * @type {String}
	 */
	this.appJs="";

	/**
	 * url is URL Object of window.location
	 * @property {URL} url
	 * @type {URL}
	 */
	//this.url = new URL(window.location);
	/**
	 * Application init function
	 * @method initApp
	 */
	this.initApp=function()
	{
		if(dev.app.cssPath=="")
		{
			dev.control.alertOK("CSS Library path is configure");
			return;
		}

		if(dev.app.jsPath=="")
		{
			dev.control.alertOK("JS Library path is configure");
			return;
		}

		if(dev.app.appJs=="")
		{
			dev.control.alertOK("Application base JS file not configure");
			return;
		}
		
		
		
		dev.app.addCss(dev.app.cssPath+"/jquery-ui.min.css");
		dev.app.addCss(dev.app.cssPath+"/bootstrap-base.css");
		dev.app.addCss(dev.app.cssPath+"/ymi.css");
		dev.app.addCss(dev.app.cssPath+"/yajan.css");
		dev.app.addCss(dev.app.cssPath+"/theams/"+dev.app.theam+".css");
		
		dev.settings=new YajanAPISetting();
		dev.app.addJs(dev.app.appJs,function()
		{
			
			if(dev.app.run!=null)
			{
				if(dev.app.getBuildVersion()<21)
				{
					dev.app.run();
				}
				else
				{
					dev.app.run();
				}
			}
			else
			{
				dev.control.alertOK("dev.app.run is not configured");
				dev.control.alertYesNo("Application","Are you want to reload this application",function()
				{
					if(dev.app.getBuildVersion()>15)
					{
						dev.app.clearCache();
					}
					dev.control.toast("Reloading...");
					window.location.reload(true);
				},
				function()
				{
				});
			}
		});
	
	}
	this.setApplicationId=function(appId)
	{
		this.applicationId=appId;
	}
	this.setApplicationKey=function(key)
	{
		this.applicationKey=key;
	}
	this.setBuiltVersion=function(version)
	{
		this.builtVersion = version;
	}
	/**
	 * Get value of query string parameter
	 * @method getUrlParameter
	 * @param  {String} name variable name
	 * @return {String}      query string variable value
	 */
	this.getUrlParameter=function(name)
	{
		return this.url.searchParams.get(name);
	}
	/**
	 * Open native device dailer with contact number
	 * @method dialContactPhone
	 * @param  {String} number Contact number
	 */
	this.dialContactPhone=function(number)
	{
		devctl.dialContactPhone(number);
	}
	/**
	 * Send sms using native device
	 * @method sendSms
	 * @param  {String} number Contact number
	 * @param  {String} text   SMS Text content
	 */
	this.sendSms=function(number,text)
	{
		devctl.sendSms(number,text);
	}
	/**
	 * Get native application extra data
	 * @method getExtraData
	 * @param  {String} keyName Extra data key name
	 * @return {String}         Extra data key value
	 */
	this.getExtraData=function(keyName)
	{
		return devctl.getActivityExtraData(keyName);
	}
	this.debugEnale=function(val)
	{
		devctl.enableJsDebuging(val);
	}
	/**
	 * Add dynemicly js file into application
	 * @method addJs
	 * @param {String} name JS File url
	 */
	this.addJs=function(name)
	{
		var callback=null;
		if(arguments.length>1)
		{
			callback=arguments[1];
		}
		var sc = document.createElement("script");
		sc.src=name;
		sc.onload=callback;
		sc.type="text/javascript";
		document.head.appendChild(sc);
	}
	/**
	 * Set cookie
	 * @method setCookie
	 * @param {String} name  cookie name
	 * @param {String} value cookie value
	 */
	this.setCookie=function(cname,cvalue)
	{
		
		var exp = null;
		if(arguments.length>3)
		{
			exp = arguments[3];
		}
		if(exp!=null)
		{
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires="+ d.toUTCString();
			//alert(cname + "=" + cvalue + ";" + expires + ";path=/");
			//devctl.setCookie(cname + "=" + cvalue + ";" + expires + ";path=/");
			devctl.setCookie(cname,cvalue);
		}
		else
		{
			//devctl.setCookie(cname + "=" + cvalue + ";path=/");
			devctl.setCookie(cname,cvalue);
		}
		
		
	}
	this.getCookie=function(name)
	{
		return devctl.getCookie(name);
	}
	/**
	 * Get native device ID
	 * @method getDeviceId
	 * @return {String} Device ID String
	 */
	this.getDeviceId=function()
	{
		return devctl.getDeviceId();
	}
	/**
	 * Vibrate Phone 
	 * @method vibratePhone
	 * @param  {Integer} duration Integer value in microsecong
	 */
	this.vibratePhone=function(duration)
	{
		devctl.vibratePhone(duration);
	}
	/**
	 * Add dinemicly CSS file into app instance
	 * @method addCss
	 * @param {String} url CSS File path/url
	 */
	this.addCss=function(name)
	{
		var sc = document.createElement("link");
		sc.rel="stylesheet";
		sc.href=name;
		document.head.appendChild(sc);
	}
	/**
	 * Clear browser cache
	 * @method cleareCache
	 * @return {[type]} [description]
	 */
	this.clearCache=function()
	{
		devctl.clearCache();
	}
	/**
	 * Get native app build version
	 * @method getBuildVersion
	 * @return {Integer} Native app build version from gradle
	 */
	this.getBuildVersion=function()
	{
		if(typeof devctl.getBuildVersion=="undefined")
		{
			return this.builtVersion;
		}
		else
		{
			return devctl.getBuildVersion();
		}
	}
	/**
	 * Get native freamwork (Android) version
	 * @method getApiVersion
	 * @return {Integer} Native freamwork version
	 */
	this.getApiVersion=function()
	{
		return devctl.getApiVersion();
	}
	/**
	 * Get native app packege name as AppId
	 * @method getAppId
	 * @return {String} Native application app ID (Packege name)
	 */
	this.getAppId=function()
	{
		if(typeof devctl.getApplicationId == "function")
		{
			return devctl.getApplicationId();
		}
		return "myGP";
	}
	/**
	 * Get native version name 
	 * @method getVersionName
	 * @return {String} Native application version name
	 */
	this.getVersionName=function()
	{
		return devctl.getVersionName();
	}
	/**
	 * Get MAC Address of native device
	 * @method getMACAddress
	 * @param  {String} interface Network interface name
	 * @return {String}           MAC Address of provided interface name
	 */
	this.getMACAddress=function(interface)
	{
		return devctl.getMACAddress(interface);
	}
	/**
	 * Check WIFI Connectivity
	 * @method isWifiConnected
	 * @return {Boolean} return true when wifi connected or retrun false
	 */
	this.isWifiConnected=function()
	{
		return devctl.isWifiConnected();
	}
	/**
	 * Get native device network interface list
	 * @method getInterfaceList
	 * @return {JSON} Network interface list
	 */
	this.getInterfaceList=function()
	{
		return devctl.getInterfaceList();
	}
	/**
	 * Get native device connected interface IP Address
	 * @method getIp
	 * @return {String} Conneted interface IP Address
	 */
	this.getIp=function()
	{
		return devctl.getIp();
	}
	/**
	 * MD5 Hash caclucater
	 * @method md5
	 * @param  {String} string Content string for MD5 Hash calculate
	 * @return {String}        MD5 Hash String
	 */
	this.md5=function(string)
	{
		return devctl.md5(string);
	}
	/**
	 * Calculate APP Hash
	 * @method getApiHash
	 * @param  {String} data Content data
	 * @return {String}      HASH String
	 */
	this.getApiHash=function(data)
	{
		return devctl.getApiHash(data);
	}
	this.onNotificationClick=null;
	this.callback._onNotificationClick=function(command)
	{
		if(dev.app.onNotificationClick!=null)
		{
			dev.app.onNotificationClick(command);	
		}
		
	}
	this.callback._clickBackButton=function()
	{
		if(dev.app.onClickBackButton!=null)
		{
			dev.app.onClickBackButton();
		}
	}
	this.callback._onStart=function()
	{
		dev.app.appStatus="open";
		if(dev.app.onStart!=null)
		{
			dev.app.onStart();
		}
	}
	this.callback._onResume=function()
	{
		dev.app.appStatus="open";
		if(dev.app.onResume!=null)
		{
			
			dev.app.onResume();
		}
	}
	this.callback._onPouse=function()
	{
		dev.app.appStatus="close";
		if(dev.app.onPouse!=null)
		{
			dev.app.onPouse();
		}
	}
	this.callback._onStop=function()
	{
		dev.app.appStatus="close";
		if(dev.app.onStop!=null)
		{
			dev.app.onStop();
		}
	}
	/**
	 * Callback execute after call ringing
	 * @property {Function} callback.onCallRinging
	 */
	this.callback.onCallRinging=null;
	/**
	 * Callback execute after call complite
	 * @property {Function} callback.onCallComplite
	 */
	this.callback.onCallComplite=null;
	/**
	 * Callback execute after call dailing
	 * @property {Function} callback.onCallDialing
	 * @type {[type]}
	 */
	this.callback.onCallDialing=null;
	this.callback._onCallRinging=function()
	{
		if(typeof this.onCallRinging=="function")
		{
			this.onCallRinging();
		}
	}
	this.callback._onCallComplite=function()
	{
		if(typeof this.onCallComplite=="function")
		{
			this.onCallComplite();
		}		
	}
	this.callback._onCallDialing=function()
	{
		if(typeof this.onCallDialing=="function")
		{
			this.onCallDialing();
		}		
	}
	/**
	 * Start Text to speech translation 
	 * @method textSpeechStart
	 * @param  {String} text Content text
	 */
	this.textSpeechStart=function(text)
	{
		devctl.speechTextStart(text);
	}
	/**
	 * Stop Text to speech translation 
	 * @method textSpeechStart
	 */
	this.textSpeechStop=function()
	{
		devctl.speechTextStop();
	}
	/**
	 * Open text to speech translation service instance
	 * @method textSpeechOpen
	 */
	this.textSpeechOpen=function()
	{
		devctl.speechTextOpen();
	}
	/**
	 * Close text to speech translation service instance
	 * @method textSpeechClose
	 */
	this.textSpeechClose=function()
	{
		devctl.speechTextClose();
	}
	/**
	 * Set text to speech translation pitch
	 * @method setTextSpeechPitch
	 * @param {Integer} pitch Pitch value for Text to Speech
	 */
	this.setTextSpeechPitch=function(n)
	{
		devctl.setSpeechTextPitch(n);
	}
	/**
	 * Set text to speech translation rate
	 * @method setTextSpeechRate
	 * @param {Integer} rate Playing rate for Text to Speech
	 */
	this.setTextSpeechRate=function(n)
	{
		devctl.setTextSpeechRate(n);
	}
	/**
	 * Show share item panel for shairing Content
	 * @method shareItem
	 * @param  {String} title Title text
	 * @param  {String} text  Text Content
	 * @param  {String} image Image path/url
	 */
	this.shareItem=function(title,text,image)
	{
		devctl.shareItem(title,text,image);
	}
	/**
	 * Open url into new Browser window from native
	 * @method openUrl
	 * @param  {String} url http:// or https:// url string
	 */
	this.openUrl=function(url)
	{
		devctl.openUrl(url);
	}

	this.PayUPayment=function(name,email,mobile,product,amount,f1,f2,f3,f4,f5)
	{
		devctl.PayUPayment(name,email,mobile,product,parseFloat(amount),f1,f2,f3,f4,f5);
	}
	
}
/**
 * Network interace controller
 * @class YMINetApi
 * @constructor
 */
function YMINetApi()
{
	this.networkError=null;
	/**
	 * Check internet is connected
	 * @method isInternetConnected
	 * @return {Boolean} return true if internet is connected or return false
	 */
	this.isInternetConnected=function()
	{
		devctl.isInternetConnected();
	}
}
/**
 * Device API
 * @class YDeviceAPI
 * @constructor
 */
function YDeviceAPI()
{
	/**
	 * List of services
	 * @property {Object} service
	 * @type {Object}
	 */
	this.service=Object;
	/**
	 * Chat service
	 * @extends {YMessageService}
	 * @property {YMessageService} service.chat
	 * @type {YMessageService}
	 */
	this.service.chat = new YMessageService();
	/**
	 * Device app controler
	 * @extends {YDeviceAPIApp}
	 * @property {YDeviceAPIApp} app
	 * @type {YDeviceAPIApp}
	 */
	this.app = new YDeviceAPIApp();
	/**
	 * Device Media Controler
	 * @extends {YDeviceAPIMedia}
	 * @property {YDeviceAPIMedia} media
	 * @type {YDeviceAPIMedia}
	 */
	this.media=new YDeviceAPIMedia();
	/**
	 * Device IO Controler
	 * @extends {YDeviceAPIIo}
	 * @property {YDeviceAPIIo} io
	 * @type {YDeviceAPIIo}
	 */
    this.io = new YDeviceAPIIo();
    /**
     * Device User Control Controler
     * @extends {YDeviceAPIControl}
     * @property {YDeviceAPIControl} control
     * @type {YDeviceAPIControl}
     */
    this.control=new YDeviceAPIControl();
    /**
     * Device network controler
     * @extends {YMINetApi}
     * @property {YMINetApi} net
     * @type {YMINetApi}
     */
    this.net=new YMINetApi();
    /**
     * Device Database controler
     * @extends {YDeviceDB}
     * @property {YDeviceDB} db
     * @type {YDeviceDB}
     */
	this.db = new YDeviceDB();
	/**
	 * Device setting controler
	 * @property {Object} settings
	 * @type {Object}
	 */
	this.settings=null;//new YajanAPISetting();
	
	this.version = {libVersion:11,appVersion:this.app.getBuildVersion()};
	/**
	 * Update version from server api
	 * @method updateVersion
	 */
	this.contextualMenu = new YDevCotextualMenu()
	this.navigationMenu = new YDevNavigationMenu();
	this.optionMenu = new YDevOptionMenu();
	this.updateVersion=function()
	{
		dev.app.setCookie("libVersion",this.version.libVersion);
		dev.app.setCookie("appVersion",this.version.appVersion);
		dev.app.setCookie("apiVersion",this.version.apiVersion);
		
		setCookie("libVersion",this.version.libVersion);
		setCookie("appVersion",this.version.appVersion);
		setCookie("apiVersion",this.version.apiVersion);		
		
		if(typeof devctl.getDeviceType != "undefined")
		{
			setCookie("deviceType", devctl.getDeviceType());
			dev.app.setCookie("deviceType",devctl.getDeviceType());
			this.type = devctl.getDeviceType();
		}
		else
		{
			setCookie("deviceType", "mobile");
			dev.app.setCookie("deviceType","mobile");
			this.type = "mobile";
		}
	}
	/**
	 * This is test running device type. If running device is mobile type then return true
	 * @return {Boolean} If runnint device is mobile then return true or false.s
	 */
	this.isMobile=function()
	{
		//return window.mobilecheck();
		if(navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i) )
        {
            // do mobile stuff
            return true;
        } else {
            // do desktop stuff
            return false;
        }
	}
	this.isAndroid=function()
	{
		if(typeof devctl.getApplicationId=="function")
		{
			return true;
		}
		return false;
	}
}
/**
 * dev is device representator
 * @class dev
 * @extends {YDeviceAPI}
 * @type {YDeviceAPI}
 */
dev = new YDeviceAPI();


///////////////////////////   YMI Widgets ///////////////////////////




function UITableColumn(name,type)
{
	this.name = name;
	this.type = type;
}
function UITableRow()
{
}
function UITable()
{
	this.columns = Array();
	this.columnMap = Array();
	this.addColumns()
	{
		for(var i=0;i<arguments.length;i++)
		{
			this.columns[i] = new UITableColumn(arguments[i],"string");
		}
	}
	this.bindWith = function(columnName,dbColumn)
	{
		var t = {};
		t.uiColumn = columnMap;
		t.dbColumn = dbColumn;
		this.columnMap[this.columnMap.length]=t;
	}
	this.setRecordset = function(rec)
	{
		
	}
}



function YMIWidget(id)
{
	this.id = id;
	this.obj = Object;
	this.call=null;
	this.title=true;
	this.run = function(callback)
	{
		
		this.call=callback;
		this.obj.win = document.createElement("div");
		this.obj.win.id="w"+parseInt(Math.random()*100000000);
		this.obj.win.className="postItem";
		this.obj.message=document.createElement("div");
		this.obj.message.className="message";
		this.obj.message.id= "M"+this.obj.win.id;
		if(this.title==true)
		{
			this.obj.title=document.createElement("div");
			this.obj.title.className="title";
			this.obj.win.appendChild(this.obj.title);
		}		
		this.obj.win.appendChild(this.obj.message);
		
		
		
		
		YMI.mainView.children[0].appendChild(this.obj.win);
		this.call(this.obj);
	}
}

function YMILink(id)
{
	this.id = id;
	this.object = document.createElement("a");
	this.object.id=this.id;
	this.onClick=null;
	this.className=null;
	this.href="javascript:";
	this.innerHTML="Link "+id;
	this.run=function()
	{
		this.object.onclick=this.onClick;
		this.object.href=this.href;
		this.object.className=this.className;
		this.object.innerHTML=this.innerHTML;
		YMI.mainView.children[0].appendChild(this.object);
	}
}

function YMIDiv(id)
{
	this.id = id;
	this.object = document.createElement("div");
	this.object.id=this.id;
	this.onClick=null;
	this.className=null;
	this.innerHTML="";
	this.run=function()
	{
		this.object.onclick=this.onClick;
		this.object.href=this.href;
		this.object.className=this.className;
		this.object.innerHTML=this.innerHTML;
		YMI.mainView.children[0].appendChild(this.object);
	}
}
function YMITextBox(id)
{
	this.id = id;
	this.object = document.createElement("input");
	this.object.id=this.id;
	this.onClick=null;
	this.className=null;
	this.run=function()
	{
		this.object.onclick=this.onClick;
		this.object.href=this.href;
		this.object.className=this.className;
		this.object.innerHTML=this.innerHTML;
		YMI.mainView.children[0].appendChild(this.object);
	}
}

function YMIAddButton(id)
{
	this.id = id;
	this.callback=null;
	this.object = document.createElement("div");
	this.object.id = this.id;
	this.className="YMI_AddButton";
	this.run = function()
	{
		if(this.callback!=null)
		{
			this.object.onclick = this.callback;
			this.object.className = this.className;
			
			YMI.mainView.children[0].appendChild(this.object);
		}
	}
}


/**
 * Convert object to json string
 * @function
 * @name toJsonStr
 * @param  {Object} obj object to be convert as string
 * @return {String}   JSON String
 */
function toJsonStr(j)
{
	var dq='"';
	var json="{";
	var last=Object.keys(j).length;
	var count=0;
	for(x in j)
	{
	json += dq+x+dq+":"+dq+j[x]+dq;
	count++;
	if(count<last)
	   json +=",";
	}
	json+="}";
	return json;
}
/**
 * Notification service 
 * @class YMINoficationService
 * @constructor
 */
function YMINoficationService()
{
	this.requestId="2";
	/**
	 * Running state of servie
	 * @property {Boolean} runStatus
	 * @type {Boolean}
	 */
	this.runStatus=false;
	/**
	 * Chekcing duration of server
	 * @property {Number} duration
	 * @type {Number}
	 */
	this.duration=60000;
	/**
	 * Refresh data from service
	 * @method update
	 */
	this.update=function()
	{
		console.info("YMINS.update running");
		
		if(this.runStatus)
		{
			var uid = getCookie("uid");
			if(uid==null)
			{
				uid="0";
			}
			ajax("https://api.awgp.org/api/notification/get","requestId="+this.requestId+"&deviceId="+YMI.getCookie("deviceClientId")+"&userid="+uid,function(resp)
			{
				try{
					var obj= $.parseJSON(resp);
					if(typeof obj.TYPE !="undefined")
					{
					}
					else
					{
						for(var i=0;i<obj.length;i++)
						{
							dev.control.notification(obj[i].TITLE,obj[i].TEXT,obj[i].DATA);
							
						}
					}
				}
				catch(ex)
				{
				}
			},true);
			setTimeout("YMINS.update();",this.duration);
		}
	}
	/**
	 * Start service
	 * @method start
	 */
	this.start=function()
	{
		this.runStatus=true;
		this.update();
	}
	/**
	 * Stop serivce
	 * @method stop
	 */
	this.stop = function()
	{
		this.runStatus=false;
	}
}

YMINS = new YMINoficationService();

/**
 * Local Notification service
 * @class YMILocalNotificationService
 * @constructor
 */
function YMILocalNotificationService()
{
	this.url ="";
	/**
	 * Running state of servie
	 * @property {Boolean} runStatus
	 * @type {Boolean}
	 */
	this.runStatus=false;
	/**
	 * Refresh duration
	 * @type {Number}
	 */
	this.duration=60000;
	/**
	 * Getting update from service
	 * @method update
	 */
	this.update=function()
	{
		console.info("YMILNS.update running");
		
		if(this.runStatus)
		{
			if(this.url=="")
			{
				this.url= serverUrl+"/app/notification/init";
			}
			ajax(this.url,"",function(resp)
			{
				try{
					var obj= $.parseJSON(resp);
					if(typeof obj.TYPE !="undefined")
					{
					}
					else
					{
						for(var i=0;i<obj.length;i++)
						{
							if(obj[i].ONGOING!="")
							{
								dev.control.notification(obj[i].TITLE,obj[i].TEXT,obj[i].DATA,true);
							}
							else
							{
								dev.control.notification(obj[i].TITLE,obj[i].TEXT,obj[i].DATA);	
							}
						}
					}
				}
				catch(ex)
				{
				}
			},true);
			setTimeout("YMILNS.update();",this.duration);
		}
	}
	/**
	 * Start service
	 * @method start
	 */
	this.start=function()
	{
		this.runStatus=true;
		this.update();
	}
	/**
	 * Stop service
	 * @method stop
	 */
	this.stop = function()
	{
		this.runStatus=false;
	}
}
YMILNS = new YMILocalNotificationService();


/**
 * Global Variable Handler
 * @class YMIVars
 * @constructor
 */
function YMIVars()
{
	this.data = Array();
	/**
	 * Set the value
	 * @method set
	 * @param {String} name Variable name
	 * @param {String} val  Variable Value
	 */
	this.set=function(name,val)
	{
		this.data[name]=val;
	}
	/**
	 * Get the value
	 * @method get
	 * @param  {String} name Variable name
	 * @return {String}      Variable value
	 */
	this.get=function(name)
	{
		return this.data[name];
	}
}
/**
 * YMI Data contenor
 * @param {String} url      Data URL String
 * @param {String} filename Cash file path
 * @class YMIDataProvider
 * @constructor
 */
function YMIDataProvider(url,filename)
{
	
	this.url = url;
	this.dataFile=filename;
	this.data=Array();
	/**
	 * Init data provider. data populate from cash file
	 * @method init
	 */
	this.init = function()
	{
		fun=null;
		if(arguments.length>0)
		{
			fun=arguments[0];
		}
		this.data=Array();
		if(this.dataFile!="")
		{
            var d = dev.io.fileRead(this.dataFile);
            try
            {
                this.data = $.parseJSON(d);
                if(this.data==null)
                {
                    this.data=Array();
                }
                if(fun!=null)
                {
                    if(typeof fun == "function")
                    {
                        fun();
                    }
                }
            }
            catch(ex)
            {

            }
		}
	}
	this.init();
	/**
	 * Reload data from server and make cache file
	 * @method refreshData
	 * @param  {Function} callback Execute after data reload complite.
	 */
	this.refreshData = function(fun)
	{
		if(url!="")
		{
			$.ajax({url: this.url,dataFile:this.dataFile,callback:fun}).done(function(resp)
			{
				try
				{
					this.data = $.parseJSON(resp);
					dev.io.fileWrite(this.dataFile,resp);
					if(typeof this.callback =="function")
					{
						this.callback();
					}
				}
				catch(ex)
				{
					
				}
			});
		}
	}
	/**
	 * Filter data from Data Provider
	 * @param  {String} filterBy    Key name for filtering data
	 * @param  {String} filterValue Key value of key name
	 * @return {Array}             Data array
	 */
	this.getData = function(filterBy,filterValue)
	{
		filterBy = filterBy.toUpperCase();
		var n = Array();		
		if(this.data!=null)
		{
			for(var i=0;i<this.data.length;i++)
			{
				if(this.data[i][filterBy]==filterValue)
				{
					n[n.length]=this.data[i];
				}
			}
		}
		return n;
	}
	/**
	 * Add new json row into data provider
	 * @param {JSON Object} row json data object
	 */
	this.addRow=function(row)
	{
		this.data[this.data.length]=row;
	}
	/**
	 * Change key value using key name
	 * @param {String} key  key name
	 * @param {String} data key value string
	 */
	this.set=function(key,data)
	{
		for(var i in this.data)
		{
			if(Object.keys(this.data[i])[0]==key)
			{
				this.data[i][key]=data;
			}
		}
		var o = new Object;
		o[key]=data;
		this.data.push(o);
	}
	/**
	 * get value using key name
	 * @param  {String} key Key name
	 * @return {String}     Key value
	 */
	this.get=function(key)
	{
		
		for(var i in this.data)
		{
			if(Object.keys(this.data[i])[0]==key)
			{
				return this.data[i][key];
			}
		}
		return null;
		
	}
	/**
	 * Save data into cache
	 * @return {Boolean} Return true when succeed else return false.
	 */
	this.save=function()
	{
		var str = JSON.stringify(this.data);
		dev.io.fileWrite(this.dataFile,str);
	}
	/**
	 * Add data item into Data provider
	 * @param {String} id   Item id string
	 * @param {String} name Item name string
	 */
	this.addItem=function(id,name)
	{
		var v = {"ID":id,"NAME":name,"TYPE":"url","MENU_SET":"1"};
		var index = this.data.length;
		this.data[index]=v;
		return this.data[index];
	}
}
/**
 * Mobile Interface history manager
 * @class YMIHistory
 * @constructor
 */
function YMIHistory()
{
	this.history=Array();
	this.position=0;
	this.callback=null;
	this.dashCount=0;
	/**
	 * Cleare history events
	 * @method clear
	 */
	this.clear=function()
	{
		this.history=Array();
	}
	/**
	 * Add history event
	 * @method addEvent
	 * @param {String} eventName Event name
	 * @param {String} value     Event value
	 * @param {JSON Object} parm      Parameter json object
	 */
	this.addEvent=function(eventName,value,parm)
	{
		var o = Array();
		o["event"]=eventName;
		o["value"]=value;
		o["parm"]=parm;
		o['scroll']=document.body.scrollTop;
		this.history[this.history.length]=o;
		this.position++;
	}
	/**
	 * Replace last event to new event
	 * @method changeLastEvent
	 * @param  {String} eventName Event name
	 * @param  {String} value     Evnet value
	 */
	this.changeLastEvent=function(eventName,value)
	{
		var o = Array();
		o["event"]=eventName;
		o["value"]=value;
		this.history[this.history.length-1]=o;

		
	}
	/**
	 * Execute second last event
	 * @method goBack
	 */
	this.goBack=function()
	{
		
		if(this.history.length>1)
		{
			var scroll = YMIH.history[YMIH.history.length-1].scroll;
			YMIH.history.splice(-1,1);
			var o = YMIH.history[this.history.length-1];
			YMI.runScreen(o.value,false,o.parm);
			document.body.scrollTop=scroll;
			this.dashCount=0;

		}
		else
		{
		    if(this.history.length>0)
		    {
		    	if(typeof dev.app.initScreen!="undefined")
		    	{
		    		if(dev.app.initScreen!=null)
		    		{
		    			YMI.runScreen(dev.app.initScreen);		
		    		}
		    		else
		    		{
		    			YMI.runScreen("home");
		    		}
		    	}
		        else
		        {
		        	YMI.runScreen("home");
		        }
		    }
		    else
		    {
                this.dashCount++;
                if(this.dashCount==2 && YMI.currentScreen.id==dev.app.initScreen)
                {
                    this.dashCount=0;
                    devctl.moveToBack();
                }
		    }

		}
	}
	/**
	 * Show back button on Screen
	 * @method backButton
	 */
	this.backButton=function()
	{
		var obj=false;
		if(arguments.length>0)
		{
			obj=document.getElementById(arguments[0]);
		}
		var b = document.createElement("button");
		b.onclick=function()
		{
			YMIH.goBack();
		}
		b.innerHTML="Go Back";
		
		if(obj)
		{
			b.className="form-control button_gray";
			obj.appendChild(b);
		}
		else
		{
			b.className="form-control button_gray margin_top_20";
			YMI.mainView.children[0].appendChild(b);
		}
	}
}
/**
 * Mobile interface Panel Controlbar driver class
 * @class YMIPanelControlBar
 * @constructor
 */
function YMIPanelControlBar()
{
	this.items=Array();
	this.controlWindow;
	/**
	 * Add Item into control bar
	 * @method addItem
	 * @param {String}   itemName Name of item
	 * @param {Function} callback cassback function when click/touch user on th item
	 */
	this.addItem=function(itemName,callback)
	{
		var t = Array();
		t['name']=itemName;
		t['callback']=callback;
		this.items[this.items.length]=t;
	}
	/**
	 * Rander controlbar
	 * @param  {ControlWindow} controlWindow Parent Control Window Object
	 */
	this.run=function(controlWindow)
	{
	    this.controlWindow = controlWindow;
        this.show();
	}
	this.clear=function()
	{
	    this.items = Array();

	}
    this.show=function()
    {
        this.controlWindow.innerHTML="";
        var table = document.createElement("table");
        var tr = document.createElement("tr");
        var p = parseInt(100/this.items.length);
        for(var i=0;i<this.items.length;i++)
        {
            var t = document.createElement("td");
            t.innerHTML=this.items[i].name;
            t.width=p+"%";
            t.onclick=this.items[i].callback;
            tr.appendChild(t);
        }
        table.appendChild(tr);
        this.controlWindow.appendChild(table);
    }

}
/**
 * Mobile Interface Panel Driver
 * @param {String} panelId Panel ID String
 * @param {String} url     Remote web view url
 */
function YMIPanel(panelId,url)
{
	this.id=panelId;
	this.titleBar=true;
	this.controlBar=new YMIPanelControlBar();
	
	this.initialUrl=url;
	this.title="";
	this.url=this.initialUrl;
	this.titleObject =  document.createElement("div");
	this.menu = false;
	/**
	 * Init panel 
	 * @method init
	 */
	this.init=function()
	{
		this.url=this.initialUrl;
	}
	/**
	 * Rander panel into App control
	 * @method run
	 * @param  {String}   mode     Rander mode
	 * @param  {Function} callback Execute when rander finish panel
	 */
	this.run=function(mode,callback)
	{
		callback();	
	}
	/**
	 * Set title will set the title into title bar of application
	 * @method setTitle
	 * @param {String} title Title string
	 */
	this.setTitle=function(title)
	{
		if(YMI.runLevel=="web")
		{
			this.titleObject.innerHTML=title;
		}
		else
		{
			devctl.setTitle(title);
		}
	}
	/**
	 * Reload panel 
	 * @method load
	 * @param  {String} url Remote url
	 */
	this.load=function(url)
	{
		this.url  = url;
		var callback=null;
		if(arguments.length>1)
		{
			callback=arguments[1];
		}
		this.run(true,callback);
	}

	this.goBake=function(url)
	{
		var callback=null;
		if(arguments.length>1)
		{
			callback=arguments[1];
		}
		this.url  = url;
		this.run(false,callback);
	}
}
/**
 * [YMIMenu description]
 * @class  YMIMenu
 * @constructor
 * @param {[type]} menuId [menu id]
 */
function YMIMenu(menuId)
{
	this.id = menuId;
	this.menuPosition="left";
	this.button = document.createElement("div");
	this.button.menu = this;
	this.button.className="menuButton";
	var a = document.createElement("div");
	this.button.appendChild(a);
	var a = document.createElement("div");
	this.button.appendChild(a);
	var a = document.createElement("div");
	this.button.appendChild(a);
	this.panel=document.createElement("div");
	this.panel.id=menuId+"_panel";
	this.panel.className="YMI_menuPanel";
	this.panel.style.overflowY="auto";
	this.panel.menu=this;
	this.title="Menu "+menuId;
	this.data=Array();
	this.profileImage=null;
	this.profileName=null;
	/**
	 * Tooles is controler object of Menu toolbar. this work into web interface
	 * @property {Object} tools
	 */
	this.tools=Object;
	this.tools.list=Array();
	this.tools.toolbar=null;
	/**
	 * Update or refresh menu toolbar
	 * @method tools.update
	 */
	this.tools.update=function()
	{
		this.toolbar.innerHTML="";
		var table = document.createElement("table");
		var tr = document.createElement("tr");
		
		for(var i=0;i<this.list.length;i++)
		{
			var tool = document.createElement("td");
			tool.innerHTML=this.list[i].name;
			tool.onclick=this.list[i].callback;
			if(i<this.list.length-1)
			{
				tool.className=" whightBorder";
			}
			//tool.className="toolItem";
			tr.appendChild(tool);
		}
		table.appendChild(tr);
		this.toolbar.appendChild(table);
		
	}
	/**
	 * Add item into menu toolbar
	 * @method tools.add
	 * @param {String}   name     Tool name
	 * @param {Function} callback Execute callback function when user click/touch
	 */
	this.tools.add=function(name,callback)
	{
		this.list[this.list.length]={"name":name,"callback":callback};
	}

	/**
	 * Add menu item
	 * @method add
	 * @param {String} id    Menu item ID
	 * @param {String} name  Menu name
	 * @param {String} type  Menu type. this can be URL/SEPERATOR
	 * @param {String} color Menu frunt color. RGB HTML Color code
	 * @param {String} bg    Menu back color. RGB HTML Color code
	 */
	this.add=function(id,name,type,color,bg,icon)
	{
		this.data[this.data.length]={"NAME":name,"ID":id,"BG":bg,"COLOR":color,"TYPE":type,"ICON":icon}
	}
	this.clear=function()
	{
		this.data=Array();
	}

	/**
	 * Rander or refresh menu
	 * @method run
	 */
	this.run = function()
	{
		if(YMI.runLevel=="web")
		{
			this.panel.innerHTML="";
			var m = document.createElement("div");
			m.className="menuHead";
			var profileImage=document.createElement("div");
			profileImage.className="profileImage";
			this.profileImage = document.createElement("img");
			var profilePicture = dev.settings.get("profilePicture");
			this.profileImage.style.width="100%";
			if(profilePicture!="" && profilePicture!=null)
			{
				this.profileImage.src=profilePicture;
			}
			profileImage.appendChild(this.profileImage);
			m.appendChild(profileImage);
			this.profileName = document.createElement("div");
			this.profileName.className="profileName";
			this.profileName.innerHTML="Profile";
			m.appendChild(this.profileName);
			this.panel.appendChild(m);
			
			
			this.tools.toolbar = document.createElement("div");
			this.tools.toolbar.className="toolbar";
			m.appendChild(this.tools.toolbar);
			
			
			
			
			if(this.data.length>0)
			{
				var u = document.createElement("ul");
				u.className="menuList";
				for(var i=0;i<this.data.length;i++)
				{
					
					var o = document.createElement("li");
					if(this.data[i].TYPE=="url")
					{
						
						var a = document.createElement("a");
						a.innerHTML=this.data[i].NAME;
						if(typeof this.data[i].BG != "undefined" && this.data[i].BG!="" && this.data[i].BG!=null)
						{
							a.style.backgroundColor=this.data[i].BG;
						}
						if(typeof this.data[i].COLOR != "undefined" && this.data[i].COLOR!="" && this.data[i].COLOR!=null)
						{
							a.style.color=this.data[i].COLOR;
						}
						a.style.cursor="pointer";
						
						a.menuId = this.data[i].ID;
						a.onclick=function()
						{
							YMI.loadMenu(this.menuId);
						}
						
						o.appendChild(a);
						
					}
					else if(this.data[i].TYPE=="seprator")
					{
						o.style.padding="0";
						var a = document.createElement("hr");
						o.appendChild(a);
					}
					u.appendChild(o);
				}
				this.panel.appendChild(u);
			}
			if(this.tools!=null)
			{
				this.tools.update();
				
			}
		}
		else
		{
			dev.navigationMenu.clear();
			for(var i=0;i<this.data.length;i++)
			{
				
				
				if(this.data[i].TYPE=="url")
				{
					dev.navigationMenu.addItem(this.data[i].NAME,function(parm)
					{
						YMI.loadMenu(parm.ID);
					},this.data[i],this.data[i].ICON);
					
				}

			}
			if(this.data.length>0)
			{
				dev.navigationMenu.showIcon();
			}
			else
			{
				dev.navigationMenu.hideIcon();	
			}
		}
	}
	this.panel.onclick=function()
	{
		$( "#"+this.menu.panel.id ).toggle("slide");
	}
	this.button.onclick=function()
	{
		//YMI.mainWindow.appendChild(this.menu.panel);
		$( "#"+this.menu.panel.id ).toggle("slide");
		YMI.showMenu();
		
	}
}
/**
 * Screen option window
 * @class YMIScreenOption
 * @constructor
 */
function YMIScreenOption()
{
	this.items = Array();
	this.button = document.createElement("div");
	this.button.className="YMI_screenOption";
	var a = document.createElement("div");
	this.button.appendChild(a);
	this.button.handler=this;
	var a = document.createElement("div");
	this.button.appendChild(a);
	var a = document.createElement("div");
	this.button.appendChild(a);
	this.oncloseCallback=null;
	/**
	 * onclose callback execute run when option window close by user
	 * @property {Function} onclose
	 * @param  {Function} callback callback function
	 */
	this.onclose=function(callback)
	{
		this.oncloseCallback=callback;
	}
	/**
	 * [onclick description]
	 * @return {[type]} [description]
	 */
	this.button.onclick=function()
	{
		YMI.showFregment("screenOption",function(obj,parm)
		{
			var bDiv= document.createElement("div");
			bDiv.style.position="fixed";
			bDiv.style.bottom="10px";
			bDiv.style.width="100%";
			bDiv.style.marginLeft="-20px";
			var b =document.createElement("button");
			b.className=" button_orange YMI_FregmentButton";
			b.closeCallback=parm[0].oncloseCallback;
			b.onclick=function(){
				
				if(this.closeCallback!=null)
				{
					this.closeCallback(this);
				}
				this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
			}
			b.innerHTML="Close";
			bDiv.appendChild(b);
			obj.appendChild(bDiv);
			
			
			parm[0].button.callback(obj,parm[0],parm[0].button.parm);
		},this.handler);
	}
	/**
	 * Rander or open option window
	 * @param  {Function} callback Execute function after opening window
	 * @param  {JSON Object}   parm     optional parameter
	 */
	this.run=function(callback,parm)
	{
		this.button.callback=callback;
		this.button.parm=parm;
		YMI.currentPanel.titleObject.appendChild(this.button);
	}	
}

/**
 * Application setting controller
 * @class YajanAPISetting
 * @constructor
 */
function YajanAPISetting()
{
	this.api = new YMIDataProvider("","setting.dat");
	this.api.init();
	/**
	 * Get value of key
	 * @method get
	 * @param  {String} key Key name
	 * @return {Object}     Value of key
	 */
	this.get=function(key)
	{
		return this.api.get(key);
	}
	/**
	 * Set value of key
	 * @method set
	 * @param {String} key   Key name
	 * @param {Object} value JSON Object / String / Array
	 */
	this.set=function(key,value)
	{
		this.api.set(key,value);
		this.api.save();
		this.api.init();
	}	
}
/**
 * Yajan Mobile Interface controlder
 * @class YajanMI
 * @constructor
 */
function YajanMI()
{
	this.runLevel="web";
	/**
	 * @property {Integer} animationWaitTime
	 * @type {Number}
	 */
	this.animationWaitTime=200;
	/**
	 * @property {Object} currentScreen
	 * @type {Object}
	 */
	this.currentScreen=null;
	this.callback={};
	this.callback.priChangeView=null;
	this.callback.postChangeView=null;
	this.callback.priRunScreen=null;
	this.callback.postRunScreen=null;

	this.panels = Array();
	this.processScreen=document.createElement("div");
	this.processScreen.className="YMI_processScreen";

	this.processMessage = document.createElement("div");
	this.processMessage.innerHTML='<img src="images/loader.gif" style="width:50px" />';
	this.processMessage.className="message";
	this.processScreen.appendChild(this.processMessage);
	this.screens=Array();
	var b = document.createElement("div");
	b.id="busyPanel1";
	b.className="busyPanel1";
	this.processScreen.appendChild(b);
	var b = document.createElement("div");
	b.id="busyPanel2";
	b.className="busyPanel2";
	this.processScreen.appendChild(b);
	/**
	 * Get open view ID
	 * @method getViewId
	 * @return {String} Open view ID
	 */
	this.getViewId=function()
	{
		return this.mainView.children[0].id;
	}
	/**
	 * Get open view object
	 * @method getView
	 * @return {HTLM Object} Open view html object
	 */
	this.getView=function()
	{
		return this.mainView.children[0];
	}
	/**
	 * Hide open view 
	 * @method hide
	 */
	this.hide=function()
	{
		document.getElementById(this.mainView.id).className="YMI_mainView elementToFadeIn";
	}
	/**
	 * Show hided open view
	 * @method show
	 */
	this.show=function(callback,parm)
	{
		document.getElementById(this.mainView.id).className="YMI_mainView elementToFadeOut";
		if(typeof callback=="function")
		{
			callback(parm);
		};
	}
	this.loadUrl = function(url,parm,callback,lockMode,obj)
	{
		if(typeof lockMode=="undefined")
		{
			lockMode=false;
		}
		if(lockMode)
		{
			YMI.lock(false);	
		}
		
		ajax(url,parm,function(resp)
		{
			YMI.unlock();
			if(typeof obj=="undefined")
			{
				YMI.setView(resp);
			}
			else
			{
				obj.innerHTML(resp);
			}
			if(typeof callback=="function")
			{
				callback(resp);
			}
		},true);
	}
	/**
	 * set view internal html 
	 * @param {String} html html string
	 */
	this.setView=function(html)
	{
		if(this.callback.priChangeView!=null)
		{
			this.callback.priChangeView();
		}
		this.hide();
		setTimeout(function(html)
		{
			$("#"+this.mainView.id).html("");
			var o = document.createElement("div");
			o.id="VIEW"+(parseInt(Math.random()*10000));
			
			o.className="content";
			YMI.mainView.appendChild(o);
			$("#"+o.id).html(html);
			if(YMI.callback.postChangeView!=null)
			{
				YMI.callback.postChangeView();
			}
			YMI.show();
			
		},YMI.animationWaitTime,html);
		//$("#"+this.mainView.id).html(html);
	}
	
	/**
	 * Add screen 
	 * @param {String}   id       Screen ID
	 * @param {String}   name     Screen name
	 * @param {Function} callback executable function when screen will open
	 */
	this.addScreen=function(id,name,callback)
	{
		var t = Array();
		t["id"]=id;
		t["name"]=name;
		t["callback"]=callback;
		t["ooption"]=null;
		if(arguments.length>3)
		{
			t["ooption"]=arguments[3];
		}
		this.screens[id]=t;
	}
	/**
	 * Open screen using screen ID
	 * @method runScreen
	 * @param  {String} id Screen ID
	 * @param {Boolean} historyLog opening new screen and log into history if this is true. by default this is true.
	 * @param {JSON Object} parm Additional parameter for opening new screen as JSON Object
	 */
	this.runScreen=function(id)
	{
		if(YMI.runLevel!="web")
		{
			dev.optionMenu.clear();
		}
		if(typeof id == "undefined")
		{
			console.info("error:runScreen:"+id+" is indefined");
			return;
		}
		if(this.callback.priRunScreen!=null)
		{
			this.callback.priRunScreen();
		}
		var history=true;
		if(arguments.length>1)
		{
			history=arguments[1];
		}
		
		
		var parm = null;
		if(arguments.length>2)
		{
			parm=arguments[2];
		}
		if(history==true)
		{
			YMIH.addEvent("nextMenu",id,parm);
		}
		
		this.currentScreen=this.screens[id];
		this.screens[id].callback(parm);
		if(this.callback.postRunScreen!=null)
		{
			this.callback.postRunScreen();
		}
		document.body.scrollTop=0;
	}
	this.reRunScreen=function(id)
	{
		var history=true;
		if(this.callback.priRunScreen!=null)
		{
			this.callback.priRunScreen();
		}

		if(arguments.length>1)
		{
			history=arguments[1];
		}
		if(history==true)
		{
			YMIH.changeLastEvent("nextMenu",id);
		}
		this.screens[id].callback();
		if(this.callback.postRunScreen!=null)
		{
			this.callback.postRunScreen();
		}

	}
	/**
	 * load menu into current panel
	 * @method loadMenu
	 * @param  {String} menuId Menu ID
	 * @param  {[type]} data   [description]
	 * @return {[type]}        [description]
	 */
	this.loadMenu=function(menuId,data)
	{
		if(typeof this.screens[menuId] != "undefined")
		{
			
			//YMIH.addEvent("nextMenu",menuId);
			//this.screens[menuId].callback();
			YMI.runScreen(menuId,true,data);
		}
		else
		{
			dev.control.alertOK("INFO","Menu screen "+menuId+" is under development.");
		}
	}
	/**
	 * Lock screen control window
	 * @method lock
	 * @param {Booean} mode Locking mode. if this is true then background will hide or if this is false background will showing on screen and control locked
	 */
	this.lock=function()
	{
		var cleanLock=true;
		if(arguments.length>0)
		{
			cleanLock=arguments[0];
		}
		var height = this.mainWindow.clientHeight;
		if(this.body.clientHeight>height)
		{
			height=this.body.clientHeight;
		}
		this.processScreen.style.height=height;
		this.body.appendChild(this.processScreen);
		if(cleanLock==false)
		{
			var v = document.getElementById("busyPanel1");
			v.style.visibility= "hidden";
		}
		else
		{
			var v = document.getElementById("busyPanel1");
			v.style.visibility= "visible";
		}
		this.processMessage.style.marginLeft=0-(this.processMessage.clientWidth/2);
		this.processMessage.style.marginTop=0-(this.processMessage.clientHeight/2);
	}
	/**
	 * unlock locked screen
	 * @method unlock
	 */
	this.unlock=function()
	{
		if(this.processScreen.parentNode!=null)
		{
			this.processScreen.parentNode.removeChild(this.processScreen);
		}
	}
	this.init=function()
	{
		
		this.titleWindow = document.createElement("div");
	
		this.mainWindow = document.createElement("div");
		this.mainView=document.createElement("div");
		this.mainView.className="YMI_mainView";
		this.mainView.id="mainView";
		this.mainWindow.appendChild(this.mainView);
		this.controlWindow = document.createElement("div");
		this.currentPanel=null;
		this.body=document.getElementsByTagName("body")[0];	
		this.body.className="noselect";
		this.oncontextmenu="return false;";
		this.body.innerHTML="";
		
	}
	/**
	 * Rander panel
	 * @method run
	 * @param  {String}   panelId  Panel id for loading added panel's to open
	 * @param  {Function} callback executable function to run after opening 
	 * @return {[type]}            [description]
	 */
	this.run=function(panelId,callback)
	{
		//this.body=document.getElementsByTagName("body")[0].children[0];	
		
		var p = this.findPanel(panelId);
		if(p)
		{
			
			this.init();
			this.currentPanel=p;
			this.initMain(p);
			if(YMI.runLevel=="web")
			{
				if(p.titleBar==true)
				{
					this.initTitle(p);
				}
			}
			else
			{
				if(p.menu!=false)
				{
					p.menu.run();
				}
			}
			if(p.controlBar.items.length>0)
			{
				this.initControl(p);
			}
			
			p.init();
			p.run(true,callback);
		}
	}
	
	this.initMain=function(palen)
	{
		this.mainWindow.className="YMI_mainWindow";
		this.mainWindow.id="app";
		if(YMI.runLevel=="native")
		{
			this.mainWindow.style.paddingTop="0px";
		}
		this.body.appendChild(this.mainWindow);
	}
	this.initTitle=function(panel)
	{
		this.titleWindow.className="YMI_titleWindow";
		panel.titleObject.className="titlePanel";
		
		panel.titleObject.innerHTML=panel.title;
		if(panel.menu!=false)
		{
			this.titleWindow.appendChild(panel.menu.button);
			panel.menu.run();
			YMI.mainWindow.appendChild(panel.menu.panel);
		}
		this.titleWindow.appendChild(panel.titleObject);
		this.mainWindow.appendChild(this.titleWindow);
	}
	this.initControl=function(panel)
	{
		this.controlWindow.className="YMI_controlWindow";
		var d = document.createElement("div");
		d.className="controlPanel";
		
		this.controlWindow.appendChild(d);
		
		this.mainWindow.appendChild(this.controlWindow);
		panel.controlBar.run(d);
	}
	this.findPanel=function(panelId)
	{
		for(var i=0;i<this.panels.length;i++)
		{
			var p = this.panels[i];
			if(p.id==panelId)
			{
				return p;
			}
		}
		return false;
	}
	/**
	 * Add new panel into YMI
	 * @method addPanel
	 */
	this.addPanel=function(panel)
	{
		var find=false;
		for(var i=0;i<this.panels.length;i++)
		{
			var p = this.panels[i];
			if(p.id==panel.id)
			{
				console.warn(panel.id+" is allrady exist");
				find=true;
			}
			
		}
		if(!find)
		{
			this.panels[this.panels.length]=panel;
		}
	}
	/**
	 * load url to remote html
	 * @method load
	 * @param  {String} url Remote html url
	 */
	this.load=function(url)
	{
		this.currentPanel.load(url);
	}
	/**
	 * Show fregment is option window for each screen
	 * @method showFregment
	 * @param  {String}   id       fregent ID
	 * @param  {Function} callback Executable functoin after showing fregent.
	 */
	this.showFregment=function(id,callback)
	{
		var obj = document.createElement("div");
		obj.id = id;
		obj.className="YMI_Fregment";
		obj.style.padding="10px";
		var parm = Array();
		for(var i=0;i<arguments.length-2;i++)
		{
			parm[i]=arguments[i+2];
		}
		
		
		
		YMI.mainView.appendChild(obj);
		callback(obj,parm);
	}
	/**
	 * Show Tiles is show Menu Data as Tiles
	 * @method showTiles
	 * @param  {Array/DataProvider}   menuSet  Data provider object or filtered provided
	 * @param  {String}   id       Parent HTML View ID
	 * @param  {Function} callback Executable function that execute after showing complite
	 */
	this.showTiles=function(menuSet,id,callback)
	{
		//YMI.lock();
			
			if(typeof menuSet=="object")
			{
				var data = menuSet.data;
			}
			else
			{
				var data = menuData.getData("menu_set",menuSet);
			}
				var c = document.createElement("div");
				c.className="YMI_dashboard";

				var o = document.createElement("div");
				o.className="row";
				var obj = null;
				if(typeof id =="string")
				{
					obj = document.getElementById(id);
				}
				else if(typeof id =="object")
				{
					if(id.isUiObject)
					{
						obj = id.object;
					}
					else
					{
						obj=id;
					}
				}
				
				obj.style.padding="0px";
				for(var i=0;i<data.length;i++)
				{
					
					
						var i1 = document.createElement("div");
						i1.className="YMI_dashboard_item col-xs-6";
						if(data[i].ICON!=null)
						{
							var imdiv = document.createElement("div");
							imdiv.className="iconDiv";
							//var im = document.createElement("img");
							//im.className="menuIcon";
							if(data[i].OFFSET!=null)
							{
								
								var off = data[i].OFFSET.split(",");
								imdiv.style.backgroundImage="url('images/icons/"+data[i].ICON+"')";
								imdiv.style.backgroundPosition=off[0]+"px "+off[1]+"px"  ;
									//im.style.clip="rect("+parseInt(off[1])+","+parseInt(off[0]+off[2])+","+parseInt(off[1]+off[3])+","+parseInt(off[0])+")";
							}
							//im.src="/images/icons/"+data[i].ICON;
							//imdiv.appendChild(im);
							i1.appendChild(imdiv);
							
						}
						
						var title = document.createElement("div");
						title.innerHTML=data[i].NAME;
						title.className="menuTitle";
						i1.appendChild(title);
						if(typeof data[i].BG != "undefined" && data[i].BG!="" && data[i].BG!=null)
						{
							i1.style.backgroundColor=data[i].BG;
						}
						if(typeof data[i].COLOR != "undefined" && data[i].COLOR!="" && data[i].COLOR!=null)
						{
							i1.style.color=data[i].COLOR;
						}
						i1.style.cursor="pointer";
						
						i1.menuId=data[i].ID;
						if(typeof data[i].CALLBACK == "function")
						{
							i1.onclick=data[i].CALLBACK;
						}
						else
						{
							i1.onclick=function()
							{
								YMI.loadMenu(this.menuId);
							}
						}
						
						obj.appendChild(i1);
				}
				//c.appendChild(o);
				
				if(typeof obj != "undefined" && obj != null)
				{
					
					//obj.appendChild(c);
				}
				if(typeof callback=="function")
				{
					callback(this);
				}
				//YMI.mainView.children[0].innerHTML="";
				//YMI.mainView.children[0].appendChild(c);
			
		
		
	}

	this.setCookie = function(cname, cvalue) 
	{
		var exdays = null;
		if(arguments.length>2)
		{
			exdays = arguments[2];
		}
		if(exdays!=null)
		{
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires="+ d.toUTCString();
			//alert(cname + "=" + cvalue + ";" + expires + ";path=/");
			//document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
			//devctl.setCookie(cname + "=" + cvalue + ";" + expires + ";path=/");
			devctl.setCookie(cname,cvalue);
			if(typeof setCookie=="function")
			{
				setCookie(cname,cvalue,exdays);	
			}
			
		}
		else
		{
			//document.cookie = cname + "=" + cvalue + ";path=/";
			//devctl.setCookie(cname + "=" + cvalue + ";path=/");
			devctl.setCookie(cname,cvalue);
			setCookie(cname,cvalue);
		}
		
	} 
	this.getCookie= function(cname) 
	{
		var r = devctl.getCookie(cname);
		if(r==null)
		{
			return "";
		}
		return r;

	} 
	this.isJoined=function()
	{
		if(this.getCookie("mobile")=="")
		{
			return false;
		}
		return true;
	}
	this.isLogin=function()
	{
		if(this.getCookie("session")=="")
		{
			return false;
		}
		return true;
	}
	/**
	 * Show menu is update menu using dataset that can retrive from Data Provider Filtering mathod
	 * @method showMenu
	 * @param  {MenuSet} menuSet Menu set object returned by Dataprovider filter mathod
	 */
	this.showMenu=function(menuSet)
	{
		if(this.currentPanel.menu!=null)
		{

			YMI.currentPanel.menu.run();

		}
	}
	/**
	 * Show list is showing menuset as list view
	 * @method showList
	 * @param  {MenuSet/Dataprovider}   menuSet  Menu set or data provider object
	 * @param  {HTML Object}   id       Parent html object or html object ID
	 * @param  {Function} callback Executablt function that run after rander complite
	 */
	this.showList=function(menuSet,id,callback)
	{
		//YMI.lock();
		
			if(typeof menuSet=="object")
			{
				var data = menuSet.data;
			}
			else
			{
				var data = menuData.getData("menu_set",menuSet);
			}
				var o = document.createElement("div");
				o.className="YMI_list";
				for(var i=0;i<data.length;i++)
				{
					
					
						var i1 = document.createElement("div");
						i1.className="YMI_listItem";
						i1.innerHTML=data[i].NAME;
						if(typeof data[i].BG != "undefined" && data[i].BG!="" && data[i].BG!=null)
						{
							i1.style.backgroundColor=data[i].BG;
						}
						if(typeof data[i].COLOR != "undefined" && data[i].COLOR!="" && data[i].COLOR!=null)
						{
							i1.style.color=data[i].COLOR;
						}
						i1.style.cursor="pointer";
						i1.menuId=data[i].ID;
						i1.handler = data[i];
						if(typeof data[i].CALLBACK == "function")
						{
							i1.onclick=data[i].CALLBACK;
						}
						else
						{
							i1.onclick=function()
							{
								YMI.loadMenu(this.menuId,this.handler);
							}
						}
						o.appendChild(i1);
				}
				//this.mainView.children[0].appendChild(o);
				var obj=null;
				if(typeof id == 'string')
				{
					obj = document.getElementById(id);
				}
				else if(typeof id == "object")
				{
					if(typeof id.isUiObject == "boolean")
					{
						obj = id.object;
					}
					else
					{
						obj = id;
					}
				}
				else
				{
					console.error("UIObject perent not found");
				}
				if(typeof obj != "undefined" && obj != null)
				{
					obj.appendChild(o);
				}
				if(typeof callback=="function")
				{
					callback(this);
				}		
				
			
	}
	/**
	 * Set application title
	 * @method setTitle
	 * @param {String} title title
	 */
	this.setTitle=function(title)
	{
		this.currentPanel.setTitle(title);
	}
	this.pageUnload=function()
	{
		window.history.forward();
		
	}
	/**
	 * Clear View is remove content of opened view and hide this.
	 * @method clearView
	 */
	this.clearView=function()
	{
		this.hide();
		var callback = null;
		var arg = Array();
		if(arguments.length>0)
		{
			callback = arguments[0];

			for(var i=1;i<arguments.length;i++)
			{
				arg[arg.length]=arguments[i];
			}
		}
		
		setTimeout(function(callback)
		{
			YMI.mainView.innerHTML="";
			var o = document.createElement("div");
			o.id="VIEW"+(parseInt(Math.random()*10000));
			o.className="content";
			YMI.mainView.appendChild(o);
			if(callback!=null)
			{
				callback(arg);
			}
			
		},YMI.animationWaitTime,callback);
		
	}
	this.getQueryParams=function(qs) 
	{
		if(typeof qs == "string")
		{
			qs = qs.split('+').join(' ');

			var params = {},
				tokens,
				re = /[?&]?([^=]+)=([^&]*)/g;

			while (tokens = re.exec(qs)) {
				params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
			}
			
			return params;
		}
		else
		{
			return {};
		}
	}
}

/**
 * YMIH is Mobile event history
 * @class YMIH
 * @extends {YMIHistory}
 * @type {YMIHistory}
 */
YMIH = new YMIHistory();
/**
 * YMI is object of YajanMI
 * @class YMI
 * @extends {YajanMI}
 * @type {YajanMI}
 */
YMI = new YajanMI();
AJAX_LISTNER_STATUS=false;
function backKey()
{
	YMIH.goBack();
}
/**
 * global is Vairbale contenor
 * @class global 
 * @extends {YMIVars}
 * @type {YMIVars}
 */
global = new YMIVars();

/////////////////////////////   Language Strings   /////////////////
/**
 * Mobile Interface language controler
 * @class YMIStringLang
 * @constructor
 */
function YMIStringLang()
{
	this.list=Array();
	this.lang=YMI.getCookie("lang");
	this.setLang=function(lang)
	{
		this.lang=lang;
		YMI.setCookie("lang",this.lang,999);
	}

	if(this.lang=="")
	{
		this.setLang("EN");
	}
	/**
	 * Add new key with english and hindi option
	 * @param {String} id Key Name
	 * @param {String} en English Defination String
	 * @param {String} hi Hindi Defination string
	 */
	this.add=function(id,en,hi)
	{
		this.list[id]={"EN":en,"HI":hi};
	}
	/**
	 * Get key value as per selected language by mobile setting.
	 * @method get
	 * @param  {Steing} id Key Name
	 */
	this.get=function(id)
	{
		if(typeof this.list[id] != "undefined")
		{
			return this.list[id][this.lang];
		}
		return "";
	}
}



function UISliderSwitch(contenor)
{
	this.div = new UIObject("label",contenor);
	this.div.className("sliderSwitch");
	
	this.checkbox = new UIObject("input",this.div);
	this.checkbox.object.setAttribute("type", "checkbox");
	this.checkbox.className("sliderSwitch input");
	
	this.span = new UIObject("span",this.div);
	this.span.className("sliderContenor round");
	this.object = this.checkbox.object;
	this.object.handler=this;
	this.value=function(val)
	{
		this.object.checked=val;
		return this.object.value;
	}
	this.onchange=function(callback)
	{
		this.object.onchange=callback;
	}
	this.style=function(style)
	{
		this.span.style(style);
	}
}



function UIFormatedTextBox(container,format)
{
	this.format = format;
	this.format = this.format.toLowerCase();
	this.input = new UIObject("input",container);
	this.input.format = this.format;
	this.input.arrayList=["1","2","3","4","5","6","7","8","9","0"];
	this.input.DateFormatSymbol =["/","-"];
	this.input.baseFormat = this.format.replace(/r/g,"*");
	this.input.baseFormat = this.input.baseFormat.replace(/d/g,"*");
	this.input.baseFormat = this.input.baseFormat.replace(/m/g,"*");
	this.input.baseFormat = this.input.baseFormat.replace(/y/g,"*");	
	this.input.object.maxlength = this.input.baseFormat.length;
	this.input.base=this;
	this.input.object.onkeyup=function()
	{
		var currentDate = this.value;
		currentDateLength=currentDate.length;
		lastestEnteredNumber= currentDate[currentDateLength - 1];
		var fChar = this.handler.baseFormat[this.value.length-1];
		
		if(this.value.length<=this.handler.baseFormat.length)
		{
			var ch = this.value[this.value.length-1];
			var val = this.value;
			if(fChar=="*")
			{
				if(this.handler.arrayList.indexOf(ch)==-1)
				{
					val = currentDate.substring(0, currentDate.length - 1);
				}
				if(this.value.length<this.handler.baseFormat.length-1)
				{
					for(var i=this.value.length;i<=this.handler.baseFormat.length-1;i++)
					{
						if(this.handler.baseFormat[i]!="*")
						{
							val+= this.handler.baseFormat[i];
						}
						else
						{
							break;
						}
					}
				}
			}
			else
			{
				val = currentDate.substring(0, currentDate.length - 1);
			}
		}
		else
		{
			val = currentDate.substring(0, currentDate.length - 1);
		}
		this.value = val;
	}
	this.value = function(value)
	{
		return this.input.value(value);
	}
}



YMI.string = new YMIStringLang();
function restoreCookie() {
	var str = dev.io.fileRead("offlineCookieData");
    var cookies = str.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var ex = cookie.split("=");
        document.cookie = ex[0] + "="+ex[1];
        YMI.setCookie(ex[0],ex[1]);
    }
}

dev.awgp={};
dev.awgp.payment={};
dev.awgp.payment.callback={};
dev.awgp.payment.callback.postPaymentComplite=null;
dev.awgp.payment.callback._postPaymentComplite=function(payuResponse,merchantResponse)
{
	restoreCookie();
	if(dev.awgp.payment.callback.postPaymentComplite!=null)
	{
		dev.awgp.payment.callback.postPaymentComplite(payuResponse,merchantResponse);
	}
}

function urlStringToJSON(queryString) {
  if(queryString.indexOf('?') > -1){
    queryString = queryString.split('?')[1];
  }
  var pairs = queryString.split('&');
  var result = {};
  pairs.forEach(function(pair) {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });
  return result;
}