function ajax(url,parm,fun,silent)
{
	var localParm = arguments[4];
	if(typeof silent!="undefined" && silent==false)
	{
		SC.lock("Loading...");
	}
	$.post(url,parm,function(resp)
	{
		if(typeof silent!="undefined"  && silent==false)
		{
			SC.unlock();
		}
		fun(resp,localParm);
	});
}
function AjaxForm(url,callback,errorCallback)
{
	this.url=url;
	this.callback=callback;
	this.data = new FormData();
	this.errorCallback=null;
	if(typeof errorCallback =="function")
	{
		this.errorCallback=errorCallback;
	}
	this.addParameter=function(key,value)
	{
		this.data.append(key,value);
	}
	this.submit = function()
	{
		var instance = this;
		var xmlHttpReq = false;
		if (window.XMLHttpRequest) {
		  var ajax = new XMLHttpRequest();
		}
		else if (window.ActiveXObject) {
		  var ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}

		ajax.open("POST", this.url, true);
		ajax.onload = function() 
		{
			if (this.status == 200) 
			{
				//console.info(this.response);
				instance.callback(this.response,this);
			}
			else
			{
				if(this.errorCallback!=null)
				{
					this.errorCallback(this.status,this)
				}
			}
		};
		ajax.upload.onprogress = function(e) 
		{
			if (e.lengthComputable) 
			{
			  var percentComplete = (e.loaded / e.total) * 100;
			  //console.log(percentComplete + '% uploaded');
			}
		};
		ajax.send(this.data);
	}
}

function ajaxJson(url,parm,fun,silent,parmLocal)
{
	if(silent == undefined)
	{
		silent = false;
	}
	if(silent==false)
	{
		SC.lock("Process...");
	}
	ajax(url,parm,function(resp,lc,xhr,status)
	{
		if(silent==false)
		{
			SC.unlock();
		}
		try
		{
			var obj = JSON.parse(resp);
			fun(obj,lc,xhr,status);
		}
		catch(ex)
		{
			console.error(ex);
		}
	},true,parmLocal);
}