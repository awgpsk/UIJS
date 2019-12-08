/**
 * @author Shravan Gautam
 * @version 1.0.4
 */
class UIObject
{
	constructor()
	{
		this.name="";
		this.keyboardEvent=false;
		this.object=null;
		this.isUiObject=true;
		if(arguments.length>0)
		{
			var id =arguments[0];
			if(typeof id =="string")
			{
				
				if(id[0]=="#")
				{
					this.object = document.getElementById(id.replace("#",""));
					if(this.object!=null)
					{
						this.object.handler=this;
					}
					else
					{
						console.error("Html object "+id+" is null");
					}
				}
				else
				{
					this.name = id;
				}
			}
			else
			{
				this.object = id;
				this.object.handler = this;
			}
		}
		
		if(this.name !="")
		{
			if(this.name!="body" )
			{
				this.object = document.createElement(this.name);
				
			}
			else
			{
				this.object=document.body;
			}
			this.object.handler=this;
		}

		if(arguments.length>1)
		{
			this.appendInto(arguments[1]);
		}

		this.keyboard=new function()
		{

			this.keyCode = ""; // pressed char code
			this.keyBackspace=8; 
			this.kayTab=9;
			this.keyShift=16;
			this.kayControl=17;
			this.kayAlter=18;
			this.kayPause=19;
			this.kayCapslock=20;
			this.kayEscap=27;
			this.kaySpace=32;
			this.kayPageup=33;
			this.keyPagedown=34;
			this.keyEnd=35;
			this.keyHome=36;
			this.keyInsert=45;
			this.kayDelete=46;
			this.keyEnter=13;
			this.keyUpArrow = 38;
			this.keyDownArrow=40;
			this.keyLeftArrow=37;
			this.keyRightArrow=39;
			

			this.preventDefault=false;
			/**
			 * Keyboard event list
			 * @property {Object} keyboard.event
			 */
			this.event=new function()
			{
				/**
				 * Keyboard key down event
				 * @property {Function} keyboard.event.keydown
				 * @type {Function}
				 */
				this.kaydown=null;
				/**
				 * Keyboard key up event
				 * @property {Function} keyboard.event.up
				 * @type {Function}
				 */
				this.keyup=null;
			}
		}
		this.keyboard.handler=this;
		this.keyboard.event.handler=this;



		this.mouse= new function()
		{
			this.status="";
			this.startX=0;
			this.startY=0;
			this.endX=0;
			this.endY=0;
			this.X=0;
			this.Y=0
			this.key=null;
			/**
			 * List of mouse events
			 * @property {Object} mouse.evnet
			 */
			this.event=new function()
			{
				/**
				 * Click is onClick event
				 * @property {Function} mouse.event.click
				 * @type {Function}
				 */
				this.click=null;
				/**
				 * Mouse down  event
				 * @property {Function} mouse.event.down
				 * @type {Function}
				 */
				this.down=null;
				/**
				 * Mouse up event
				 * @property {Function} mouse.event.up
				 * @type {Function}
				 */
				this.up=null;
				/**
				 * Mouse move event
				 * @property {Function} mouse.event.move
				 * @type {Function}
				 */
				this.move=null;
				/**
				 * When pointer slide down
				 * @property {Function} mouse.event.sslideDown
				 * @type {Function}
				 */
				this.slideDown=null;
				/**
				 * When sliding up
				 * @property {Function} mouse.event.slideUp
				 * @type {Function}
				 */
				this.slideUp=null;
				/**
				 * When Sliding left 
				 * @property {Function} mouse.event.slideLeft
				 * @type {Function}
				 */
				this.slideLeft=null;
				/**
				 * When slide right
				 * @property {Function} mouse.event.slideRight
				 * @type {Function}
				 */
				this.slideRight=null;
			}
			
		}
		this.mouse.handler=this;
		this.mouse.event.handler=this;
		
	}
	
	createDataListObject()
	{
		var listId = new Date().valueOf()+(Math.random(100000)+"").replace(".","");;
		this.object.setAttribute("list",listId); 
		this.datalist = document.createElement("datalist");
		this.datalist.id =listId;
		this.object.appendChild(this.datalist);
	}
	insertBefore(uiObject,target)
	{
		this.object.insertBefore(uiObject.object,target.object);
	}
	appendInto(obj) /// obj = UIObject element
	{
		if(typeof obj == "string")
		{
			obj = new UIObject(obj);
		}
		if(typeof obj.isUiObject != "undefined")
		{
			obj.object.appendChild(this.object); ///object = Html Object Element
		}
		else
		{
			this.appendIntoHtmlEl(obj);
		}
	}
	appendIntoHtmlEl(obj)  /// obj = Html Object Element
	{
		obj.appendChild(this.object);
	}
	addAsChild(el)
	{
		this.appendChildElement(el);
	}
	addAttribute(key,val)
	{
		this.attribute(key,val);
	}
	appendChildElement(el)
	{
		this.object.appendChild(el);
	}
	
	getParent()
	{
		var o = this.object.parentNode;
		var obj = new UIObject();
		if(typeof o.handler!="undefined")
		{
			obj = o.handler;
		}
		o.handler=obj;
		obj.object = o;
		return obj;
	}
	getChild(listMode)
	{

		var a = Array();
		var list = this.object.children;
		for(var i=0;i<list.length;i++)
		{
			var o = list[i];
			var obj = new UIObject();
			if(typeof o.handler!="undefined")
			{
				obj = o.handler;
			}
			o.handler=obj;
			obj.object = o;
			a[a.length]=obj;
		}	
		if(typeof listMode == "undefined")
		{
			return a;	
		}
		else
		{
			var l = new UIObjectList();
			l.items = a;
			l.length = l.items.length;
			return l;
		}
	}
	getChildElement()
	{
		return this.object.children;
	}
		 
	getChildElementAsArray()
	{
		return Array.from(this.getChildElement());
	}
	
	addOption(label,value)
	{
		var v = document.createElement("option");
		v.innerHTML=label;
		v.value=value;
		
		if(this.object.tagName=="SELECT")
		{
			this.object.appendChild(v);	
		}
		else if(this.object.tagName=="INPUT")
		{
			if(this.datalist == undefined)
			{
				this.createDataListObject();
			}
			this.datalist.appendChild(v);
		}
		
	}
	
	createRow()
	{
		var t = new UIObject();
		t.object = this.object.insertRow();
		t.object.handler=t;
		return t;
	}
	
	createCell()
	{
		var t = new UIObject();
		t.object = this.object.insertCell();
		t.object.handler=t;
		return t;
	}
	focus()
	{
		this.object.focus();
	}
	validateDatalist()
	{
		if(typeof this.datalist != "undefined")
		{

			var list = this.datalist.getElementsByTagName("option");
			if(list.length>0 && this.value()!="")
			{
				for(var i=0;i<list.length;i++)
				{
					if(list[i].value == this.value())
					{
						return true;
					}
				}
				return false;
			}
			else
			{
				return true;
			}
		}
		else
		{
			return true;
		}
	}
	
	popupById(id)
	{
		this.object = document.getElementById(id);
		this.object.handler=this;
	}
	
	
	initKayboardEvent()
	{
		this.keyboardEvent=true;
		
		var preventDefault = false;
		this.keyboard.isControlPress=false;
		this.keyboard.isShiftPress=false;
		this.keyboard.isAlterPress=false;
		if(arguments.length>0)
		{
			preventDefault = arguments[0];
		}
		this.keyboard.preventDefault=preventDefault;
		this.addEvent("keydown",function(e)
		{
			e = e || window.event;
			this.handler.keyboard.keyCode=e.keyCode;
			
			if(this.handler.keyboard.keyCode==this.handler.keyboard.kayControl)
			{
				this.handler.keyboard.isControlPress=true;
			}
			if(this.handler.keyboard.keyCode==this.handler.keyboard.keyShift)
			{
				this.handler.keyboard.isShiftPress=true;
			}
			if(this.handler.keyboard.keyCode==this.handler.keyboard.keyAlter)
			{
				this.handler.keyboard.isAlterPress=true;
				
			}
			if(this.handler.keyboard.event.keydown!=null)
			{
				this.handler.keyboard.event.keydown();
			}

			if(this.handler.keyboard.preventDefault)
			{
				e.preventDefault();
			}
			
		});
		this.addEvent("keyup",function(e)
		{
			
			e = e || window.event;
			this.handler.keyboard.keyCode=e.keyCode;
			if(this.handler.keyboard.keyCode==this.handler.keyboard.kayControl)
			{
				this.handler.keyboard.isControlPress=false;
			}
			if(this.handler.keyboard.keyCode==this.handler.keyboard.keyShift)
			{
				this.handler.keyboard.isShiftPress=false;
			}
			if(this.handler.keyboard.keyCode==this.handler.keyboard.keyAlter)
			{
				this.handler.keyboard.isAlterPress=false;
			}
			if(this.handler.keyboard.event.keyup!=null)
			{
				this.handler.keyboard.event.keyup();
			}

			if(this.handler.keyboard.preventDefault)
			{
				e.preventDefault();
			}
			
			
		});
	}
	
	
	initMouseEvent()
	{
		this.addEvent("mousedown",function(e)
		{
			this.handler.mouse.status="down";
			this.handler.mouse.startX = e.pageX;
			this.handler.mouse.startY = e.pageY;	
			this.handler.mouse.key= e.which;
			if(this.handler.mouse.event.down!=null)
			{
				this.handler.mouse.event.down(e);
			}

		});
		this.addEvent("mouseup",function(e)
		{
			this.handler.mouse.status="up";
			this.handler.mouse.endX = e.pageX;
			this.handler.mouse.endY = e.pageY;
			this.handler.mouse.key= e.null;
			if(this.handler.mouse.startX < this.handler.mouse.endX && this.handler.mouse.event.slideRight != null)
			{
				this.handler.mouse.event.slideRight(e);
			}
			else if(this.handler.mouse.startX > this.handler.mouse.endX && this.handler.mouse.event.slideLeft != null)
			{
				this.handler.mouse.event.slideLeft(e);
			}
			
			if(this.handler.mouse.startY < this.handler.mouse.endY && this.handler.mouse.event.slideDown != null)
			{
				this.handler.mouse.event.slideDown(e);
			}
			else if(this.handler.mouse.startY > this.handler.mouse.endY && this.handler.mouse.event.slideUp != null)
			{
				this.handler.mouse.event.slideUp(e);
			}

			if(this.handler.mouse.event.up!=null)
			{
				this.handler.mouse.event.up(e);
			}
			if(this.handler.mouse.event.click!=null)
			{
				this.handler.mouse.event.click(e);
			}

			
		});
		this.addEvent("mousemove",function(e)
		{
			this.handler.mouse.X = e.pageX;
			this.handler.mouse.Y = e.pageY;
			if(this.handler.mouse.event.move!=null)
			{
				this.handler.mouse.event.move(e);
			}
			//console.info("X:"+this.handler.mouseX+",Y:"+this.handler.mouseY);
		});
		
		
		
		this.addEvent("touchstart",function(e)
		{
			this.handler.mouse.status="down";
			this.handler.mouse.startX = e.touches[0].pageX;
			this.handler.mouse.startY = e.touches[0].pageY;
			this.handler.mouse.key= e.which;
			if(this.handler.mouse.event.down!=null)
			{
				this.handler.mouse.event.down(e);
			}

		});
		this.addEvent("touchend",function(e)
		{
			this.handler.mouse.status="up";
			this.handler.mouse.endX = e.changedTouches[e.changedTouches.length-1].pageX;
			this.handler.mouse.endY = e.changedTouches[e.changedTouches.length-1].pageY;
			this.handler.mouse.key= e.null;
			if(this.handler.mouse.startX < this.handler.mouse.endX && this.handler.mouse.event.slideRight != null)
			{
				this.handler.mouse.event.slideRight(e);
			}
			else if(this.handler.mouse.startX > this.handler.mouse.endX && this.handler.mouse.event.slideLeft != null)
			{
				this.handler.mouse.event.slideLeft(e);
			}
			
			if(this.handler.mouse.startY < this.handler.mouse.endY && this.handler.mouse.event.slideDown != null)
			{
				this.handler.mouse.event.slideDown(e);
			}
			else if(this.handler.mouse.startY > this.handler.mouse.endY && this.handler.mouse.event.slideUp != null)
			{
				this.handler.mouse.event.slideUp(e);
			}

			if(this.handler.mouse.event.up!=null)
			{
				this.handler.mouse.event.up(e);
			}
			if(this.handler.mouse.event.click!=null)
			{
				this.handler.mouse.event.click(e);
			}

			
		});
		
		this.addEvent("touchmove",function(e)
		{
			    
				e.stopPropagation();
				e.preventDefault();

				
			
			this.handler.mouse.X = e.touches[0].clientX;
			this.handler.mouse.Y =e.touches[0].clientY;
			if(this.handler.mouse.event.move!=null)
			{
				this.handler.mouse.event.move(e);
			}
			
			//console.info("X:"+this.handler.mouseX+",Y:"+this.handler.mouseY);
		});
		
	}
	
	id()
	{
		
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			this.object.id=v;
			return true;
		}
		else
		{
			return this.object.id;
		}
	}
	
	className()
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false; 
		}
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			this.object.className=v;
			return true;
		}
		else
		{
			return this.object.className;
		}
	}
	
	addEvent(name,callback)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		if(name=="slideUp")
		{
			
		}
		this.object.addEventListener(name,callback,false);
		return true;
	}
	
	onclick(onclick)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		this.object.onclick=onclick;
		return true;
	}
	onkeypress(callback)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		this.object.onkeypress=callback;
		return true;
	}
	onchange(callback)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		this.object.onchange=callback;
		return true;
	}
	
	type()
	{
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			this.object.type=v;
			return true;
		}
		else
		{
			return this.object.type;
		}
	}
	appendHtml(html)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			this.object.innerHTML=this.object.innerHTML+v;
			return true;
		}
		else
		{
			return this.object.innerHTML+v;
		}			
	}
	
	innerHTML(html)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			this.object.innerHTML=v;
			return true;
		}
		else
		{
			return this.object.innerHTML;
		}	
	}
	
	src(src)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			this.object.src=v;
			return true;
		}
		else
		{
			return this.object.src;
		}
		
	}
	
	href(href)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			this.object.href=v;
			return true;
		}
		else
		{
			return this.object.href;
		}
	}

	value(val)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			this.object.value=v;
			if(typeof this.object.onchange!="undefined" && this.object.onchange != null)
			{
				this.object.onchange();
			}
			return true;
		}
		else
		{
			return this.object.value;
		}
	}
	
	name(name)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			this.object.name=v;
			return true;
		}
		else
		{
			return this.object.name;
		}
	}
	
	placeholder(name)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			this.object.placeholder=v;
			return true;
		}
		else
		{
			return this.object.placeholder;
		}
	}
	
	remove()
	{
	    if(this.object==null)
        {
            this.message = "internal object is null";
            return false;
        }
        this.object.remove();
	}
	
	style(style)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		for(var st in style)
		{
			this.object.style[st]=style[st];
		}
		return true;
	}
	
	checked()
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		var v = null;
		if(arguments.length>0)
		{
			v = arguments[0];
		}
		if(v!=null)
		{
			if(v=="0")
			{
				this.object.checked=0;
			}
			else if(v=="1")
			{
				this.object.checked=1;
			}
			else
			{
				this.object.checked=v;
			}
			return true;
		}
		else
		{
			return this.object.checked;
		}
	}
	attribute(key)
	{
		if(this.object==null)
		{
			this.message = "internal object is null";
			return false;
		}
		var v = null;
		if(arguments.length>1)
		{
			v = arguments[1];
		}
		if(typeof this.object.attributes[key] != "undefined")
		{
			if(v!=null)
			{
				this.object.attributes[key].value=v;
				return true;
			}
			else
			{
				return this.object.attributes[key].value;
			}
		}
		else
		{
			if(v!=null)
			{
				this.object.setAttribute(key,v);
				return true;
			}
			else
			{
				return undefined;
			}
		}
	}
	loadOptionFromJson(json,binding)
	{
		this.innerHTML("");
		this.datalist=undefined;
		if(typeof binding=="undefined")
		{
			binding = {"code":"code","name":"name"};
		}
		//this.createDataListObject();
		for(var i=0;i<json.length;i++)
		{
			if(typeof json[i]=="string")
			{
				this.addOption(json[i],json[i]);
			}
			else
			{
				
				if(typeof json[i].name !="undefined")
				{
					this.addOption(json[i][binding.name],json[i][binding.code]);
				}
				else
				{
					this.addOption(json[i][binding.name.toUpperCase()],json[i][binding.code.toUpperCase()]);
				}
			}
		}
		
	}
	
	setSearchBox(obj,mode)
	{
		if(this.object.tagName=="TABLE")
		{
			var v = document.createElement("table");
			v.innerHTML = this.object.innerHTML;
			this.data = v;
		}
		obj.list = this;
		if(typeof mode=="undefined")
		{
			mode="content";
		}
		obj.mode = mode;
		obj.keyboard.event.keyup=function()
		{
			var data = this.handler.list;
			data.object.innerHTML="";
			var ch = this.handler.value();
			var find = false;
			for(var i=0;i<data.data.rows.length;i++)
			{
				var o = [];
				find = false;
				for(var j=0;j<data.data.rows[i].cells.length;j++)
				{
					if(this.handler.mode=="start" && data.data.rows[i].cells[j].innerHTML.toUpperCase().substr(0,ch.length).toUpperCase() == ch.toUpperCase())
					{
						find = true;
						break;
					}
					else if(this.handler.mode=="content" && data.data.rows[i].cells[j].innerHTML.toUpperCase().indexOf(ch.toUpperCase()) > -1)
					{
						find = true;
						break;
					}
				}
				if(find)
				{
					var a = data.object.insertRow();
					a.innerHTML = data.data.rows[i].innerHTML;
				}
			}
		}
	}
	static create()
	{
		if(arguments.length==0)
		{
			return new UIObject();
		}
		else if(arguments.length==1)
		{
			return new UIObject(arguments[0]);
		}
		else if(arguments.length==2)
		{
			return new UIObject(arguments[0],arguments[1]);
		}
	}
}

 


class UIObjectList
{
	constructor(selector)
	{
		if(typeof selector != "undefined")
		{
			var list = [];
			if(selector[0]=="#")
			{
				selector = selector.replace("#","");
				var o = document.getElementById(selector);
				list[list.length]=o;
			}
			else if(selector[0]==".")
			{
				selector = selector.replace(".","");
				list = document.getElementsByClassName(selector);
			}
			else
			{
				list = document.getElementsByTagName(selector);
			}
			this.length=0;
			this.items = [];
			for(var i=0;i<list.length;i++)
			{
				var o = {};
				o=new UIObject();
				list[i].handler=o;
				o.object = list[i];
				this.items[this.items.length] = o;
	
			}
			this.length=this.items.length;
		}
	}
	
	item(index)
	{
		return this.items[index];
	}
	get(index)
	{
		return this.item(index);
	}
	set(item,index)
	{
		this.items[i] = item;
	}
}