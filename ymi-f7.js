function YMIF7()
{
	this.newPage=function()
	{
		var page = new UIObject("div",YMI.getView());
		page.className("page");
		var pageContent =new UIObject("div",page);
		pageContent.className("page-content");
		return pageContent;
	}	
	this.showList=function(data,page,callback)
	{
		var list = new UIObject("div",page);
		list.className("list links-list");
		var ul = new UIObject("ul",list);
		
		for(var i=0;i<data.length;i++)
		{
			var li = new UIObject("li",ul);
			var a = new UIObject("a",li);
			a.href("javascript:");
			a.innerHTML(data[i].name);
			a.id(data[i].id);
			a.data=data[i];
			a.onclick(callback);
		}
	}
}

YF7 = new YMIF7();