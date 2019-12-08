/**
 * @author Shravan Gautam
 * @version 1.0.5
 */
class UIOptionList
{
    constructor(tag,parent)
    {
        this.options = [];
        this.binding ={"code":"code","name":"name"};
        this.base = new UIObject(tag,parent);
        this.controller = new UIObject("input",this.base);
        //this.controller.object.handler = this;
        this.controller.base = this;
        this.handler = this;
        this.autoStructure=true;
        this.onchangeCallback = null;
        this.onclickCallback = null;
        this.label = new UIObject("TextBox",this.base);
        this.label.style({"padding":"6px"});
        this.controller.label = this.label;
        this.controller.onchange(function()
        {
            var obj = this.handler.base.findByCode(this.value);
            if(obj!=null)
            {
                if(typeof obj[this.handler.base.binding.name] != "undefined")
                {
                    this.handler.label.innerHTML(obj[this.handler.base.binding.name]);    
                }
                else if(typeof obj[this.handler.base.binding.name.toUpperCase()]!="undefined")
                {
                    this.handler.label.innerHTML(obj[this.handler.base.binding.name.toUpperCase()]);    
                }
            }
            else
            {
                this.handler.label.innerHTML("");    
            }
            if(this.handler.base.localOnchangeCallback!=null)
            {
                this.handler.base.localOnchangeCallback(obj);
            }
        })
        this.controller.onclick(function()
        {
            var obj = this.handler.base.findByCode(this.value);
            if(obj!=null)
            {
                if(this.handler.base.localOnclickCallback!=null)
                {
                    this.handler.base.localOnclickCallback(obj);
                }
            }
        })
    }
    
    id(id)
    {
        this.controller.id(id);
    }
    style(style)
    {
        this.controller.style(style);
    }
    className(className)
    {
        this.controller.className(className);
    }
    validateDatalist()
    {
        return true;
    }
    value(value)
    {
        if(typeof value != "undefined")
        {
            var obj = this.findByCode(value);
            if(obj != null)
            {
                return this.controller.value(value);                
            }
        }
        else
        {
            return this.controller.value(value);
        }
    }
    onchange(callback)
    {
        this.localOnchangeCallback = callback;
    }
    onclick(callback)
    {
        this.localOnclickCallback = callback;
    }
    findByCode(code)
    {
        for(var i=0;i<this.options.length;i++)
        {
            if(this.options[i][this.binding.code]==code)
            {
                return this.options[i];
            }
            else if(this.options[i][this.binding.code.toUpperCase()]==code)
            {
                return this.options[i];
            }
        }
        return null;
    }

    loadOptionFromJson(json,binding)
    {
        this.options = json;
        if(typeof binding!="undefined")
        {
            this.binding = binding;
        }
        this.controller.loadOptionFromJson(this.options,this.binding);
    }
    
    
    
}

var UIClassList = {
    "ComboBox":{"base":UIObject,"name":"ComboBox","tag":"select","type":"","value":"value","datatype":"varchar","formater":null},
    "TextBox":{"base":UIObject,"name":"TextBox","tag":"input","type":"text","value":"value","datatype":"varchar","formater":null},
    "TextArea":{"base":UIObject,"name":"TextArea","tag":"textarea","type":"","value":"value","datatype":"varchar","formater":null},
    "JQDate":{"base":UIObject,"name":"JQDate","tag":"input","type":"date","value":"value","datatype":"date","formater":null},
    "Button":{"base":UIObject,"name":"Button","tag":"input","type":"button","value":"value","datatype":"varchar","formater":null},
    "Span":{"base":UIObject,"name":"Span","tag":"span","type":"","value":"innerHTML","datatype":"varchar","formater":null},
    "Link":{"base":UIObject,"name":"Link","tag":"a","type":"","value":"innerHTML","datatype":"varchar","formater":null},
    "Div":{"base":UIObject,"name":"Div","tag":"div","type":"","value":"innerHTML","datatype":"varchar","formater":null},
    "CheckBox":{"base":UIObject,"name":"CheckBox","tag":"input","type":"checkbox","value":"checked","datatype":"varchar","formater":null},
    "HiddenItem":{"base":UIObject,"name":"HiddenItem","tag":"input","type":"hidden","value":"value","datatype":"varchar","formater":null},
    "Currency":{"base":UIObject,"name":"Currency","tag":"div","type":"","value":"innerHTML","datatype":"varchar","formater":function(value){return formats.formatIndianMoney(value)}},
    "Number":{"base":UIObject,"name":"Number","tag":"input","type":"currency","value":"value","datatype":"number","formater":null},
    "Mobile":{"base":UIObject,"name":"Mobile","tag":"input","type":"mobile","value":"value","datatype":"number","formater":null},
    "Email":{"base":UIObject,"name":"Email","tag":"input","type":"email","value":"value","datatype":"varchar","formater":null},
    "UIDoc":{"base":UIObject,"name":"UIDoc","tag":"div","type":"","value":"value","datatype":"json","formater":null},
    "UIOptionList":{"base":UIOptionList,"name":"UIOptionList","tag":"div","type":"","value":"value","datatype":"varchar","formater":null},
    "Section":{"base":UIObject,"name":"Section","tag":"div","type":"","value":"innerHTML","datatype":"varchar","formater":null},
};

class UIDoc
{
    constructor(base)
    {
        if(typeof base=="string")
        {
            this.base = new UIObject(base);
        }
        else
        {
            this.base = base;
        }
        this.trigger=[];
        this.rowIndex=0;
        this.struct = {};
        this.data = [];
        this.section = [];
        this.mode="form";
        this.baseTag="table";
        this.randerTemplate=null;
        this.columns = 2;
    }
    findFieldById(id)
    {
        for(var i=0;i<this.struct.fields.length;i++)
        {
            if(this.struct.fields[i].id==id)
            {
                return this.struct.fields[i];
            }
        }
    }
    sync()
    {
        this.data=[];
        for(var j=0;j<this.rows.length;j++)
        {
            var row = this.rows[j];
            var v = {};
            for(var i=0;i< this.struct.fields.length;i++)
            {
                var key = this.struct.fields[i];
                var classObj = UIClassList[key.type];
                var f = row[key.id];
                if(key.type=="UIDoc")
                {
                    this.rows[j][key.id].sync();
                    v[key.id] = this.rows[j][key.id].data;
                    
                }
                if(key.type!="Section")
                {
                    if(this.rows[j][key.id].class.name=="HiddenItem")
                    {
                        v[key.id] = f.value();
                        if(v[key.id]=="true")
                        {
                            v[key.id]=true;
                        }
                        else if(v[key.id]=="false")
                        {
                            v[key.id]=false;
                        }
                        else
                        {
                            v[key.id] = f.value();   
                        }
                    }
                    else if(this.rows[j][key.id].class.name=="Div")
                    {
                        v[key.id] = f.innerHTML();
                    }
                    else
                    {
                        v[key.id] = f[classObj.value]();
                    }
                    
                }
                
            }
            //console.info(this.data);
            this.data[this.data.length]=v;
        }
    }
    disableEnter()
    {
        this.form.object.onkeypress=function(e)
        {
            var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
            if( keyCode == 13 ) 
            {
                if(!e) var e = window.event;

                e.cancelBubble = true;
                e.returnValue = false;

                if (e.stopPropagation) 
                {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        }    
    }
    value(val)
    {
        if(typeof val == "undefined")
        {
            return this.data;
        }
        else if(typeof val =="string")
        {
            try
            {
            val = JSON.parse(val);
            this.data = val;
            }
            catch(ex)
            {
                console.info("invalid json string");
            }
        }
        else
        {
            if(typeof val.length != "undefined")
            {
                this.data = val;
            }
            else
            {
                this.data = [val];
            }
        }
        if(this.autoStructure==1)
        {
            this.buildStructure();
        }
        
    }
    buildStructure()
    {
        for(var col in this.data[0])
        {
            if(typeof col != "undefined")
            {
                var find = false;
                for(var i=0;i<this.struct.fields.length;i++)
                {
                    //console.info(this.struct.fields[i].id+"-----"+col);
                    if(this.struct.fields[i].id==col)
                    {
                        find  = true;
                    }
                }
                //console.info(find);
                if(!find)
                {
                    var st = {"id":col,"type":"TextBox","name":col};
                    //this.struct.fields[this.struct.fields.length]=st;
                    this.addField(st);
                }
            }
        }
    }
    addField(obj)
    {
        //console.info(obj);
        if(typeof obj.id =="undefined" || obj.id == null)
        {
            alert("field id is required.");
            return;
        }
        if(typeof obj.name =="undefined" || obj.name == null)
        {
            alert("field name is required.");
            return;
        }
        if(typeof obj.type =="undefined" || obj.type ==null)
        {
            alert("field type is required.");
            return;
        }
        else
        {
            if(typeof UIClassList[obj.type] != "undefined")
            {
                obj.class=UIClassList[obj.type];
            }
            else
            {
                alert("invalid field type.");
                return;
            }
        }
        if(typeof obj.property =="undefined" || obj.property ==null)
        {
            obj.property = {};
        }
        if(typeof obj.style =="undefined" || obj.style == null)
        {
            obj.style = {};
        }
        if(typeof obj.hidden == "undefined" || obj.hidden == null)
        {
            obj.hidden = 0;
        }
        if(typeof obj.column == "undefined" || obj.column == null || obj.column=="")
        {
            obj.column = 1;
        }
        if(typeof obj.binding == "undefined" || obj.binding == null)
        {
            obj.binding = {"code":"code","name":"name"};
        }
        if(typeof obj.summery =="undefined" || obj.summery == null)
        {
            obj.summery = "";
        }
        if(typeof obj.cssClass =="undefined" || obj.cssClass==null)
        {
            obj.cssClass = "";
        }
        if(typeof obj.default =="undefined" || obj.default == null)
        {
            obj.default = "";
        }
        if(typeof obj.options =="undefined" || obj.options == null)
        {
            obj.options = [];
        }
        if(typeof obj.mendetry =="undefined" || obj.mendetry == null)
        {
            obj.mendetry = 0;
        }
        if(typeof obj.bold =="undefined" || obj.bold == null)
        {
            obj.bold = 0;
        }
        if(typeof obj.readOnly =="undefined" || obj.readOnly ==null)
        {
            obj.readOnly = 0;
        }
        if(typeof obj.length =="undefined" || obj.length == null)
        {
            obj.length = 0;
        }
        if(typeof obj.fetchIfEmpty =="undefined" || obj.fetchIfEmpty == null)
        {
            obj.fetchIfEmpty = 0;
        }
        if(typeof obj.inListView =="undefined" || obj.inListView == null)
        {
            obj.inListView = 1;
        }
        if(typeof obj.inFilter =="undefined" || obj.inFilter == null)
        {
            obj.inFilter = 0;
        }
        if(typeof obj.inGlobalSearch =="undefined" || obj.inGlobalSearch == null)
        {
            obj.inGlobalSearch = 0;
        }
        if(typeof obj.unique =="undefined" || obj.unique == null)
        {
            obj.unique = 0;
        }
        if(typeof obj.setOnlyOnce =="undefined" || obj.setOnlyOnce == null)
        {
            obj.setOnlyOnce = 0;
        }
        if(typeof obj.ignoreUserPermission =="undefined" || obj.ignoreUserPermission == null)
        {
            obj.ignoreUserPermission = 0;
        }
        if(typeof obj.noCopy =="undefined" || obj.noCopy == null)
        {
            obj.noCopy = 0;
        }
        if(typeof obj.printHide =="undefined" || obj.printHide == null)
        {
            obj.printHide = 0;
        }
        
        //console.info(obj);
        
        this.struct.fields[this.struct.fields.length] = obj;
        //console.info(this.struct.fields.length);
        //console.info(obj);
        return obj;
    }
    setStructure(struct)
    {
        //var str = JSON.parse(JSON.stringify(a));
        this.struct = JSON.parse(JSON.stringify(struct));
        this.struct.fields = [];
        if(typeof this.struct.id =="undefined" || this.struct.id == null)
        {
            alert("doc id is required.");
            return;
        }
        if(typeof this.struct.name =="undefined" || this.struct.name == null)
        {
            alert("doc name is required.");
            return;
        }
        if(typeof this.struct.controller =="undefined" || this.struct.controller==null)
        {
            if(typeof this.struct.submitUrl =="undefined" || this.struct.submitUrl == null)
            {
                this.struct.submitUrl="";
            }
            else
            {
                this.struct.controller="";
            }
        }
        else
        {
            this.struct.submitUrl=this.struct.controller+"/submit";
        }
        if(typeof this.struct.mode =="undefined" || this.struct.mode==null)
        {
            this.struct.mode = "form";
        }
        this.mode=this.struct.mode;
        if(typeof this.struct.showSummery =="undefined" || this.struct.showSummery==null)
        {
            this.struct.showSummery = 0;
        }
        if(typeof this.struct.listOrderColumn =="undefined" || this.struct.listOrderColumn == null)
        {
            this.struct.listOrderColumn = "id";
        }
        if(typeof this.struct.listOrderDesc =="undefined" || this.struct.listOrderDesc == null)
        {
            this.struct.listOrderDesc = "id";
        }
        if(typeof this.struct.submitMode =="undefined" || this.struct.submitMode == null)
        {
            this.struct.submitMode = "form";
        }
        if(typeof this.struct.columns =="undefined" || this.struct.columns == null)
        {
            this.struct.columns = 2;
        }
        if(typeof this.struct.isDownloadable =="undefined" || this.struct.isDownloadable == null)
        {
            this.struct.isDownloadable = 0;
        }
        if(typeof this.struct.isSubmitable =="undefined" || this.struct.isSubmitable == null)
        {
            this.struct.isSubmitable = 1;
        }
        if(typeof this.struct.encryption =="undefined" || this.struct.encryption == null)
        {
            this.struct.encryption = "none";
        }
        if(typeof this.struct.editButton =="undefined" || this.struct.editButton == null)
        {
            this.struct.editButton = 0;
        }
        if(typeof this.struct.isEditable =="undefined" || this.struct.isEditable == null)
        {
            this.struct.isEditable = 0;
        }
        if(typeof this.struct.isChildTable =="undefined" || this.struct.isChildTable == null)
        {
            this.struct.isChildTable = 0;
        }
        if(typeof this.struct.isSinngal =="undefined" || this.struct.isSinngal == null)
        {
            this.struct.isSinngal = 0;
        }
        if(typeof this.struct.trackChange =="undefined" || this.struct.trackChange==null)
        {
            this.struct.trackChange = 0;
        }
        if(typeof this.struct.autoId =="undefined" || this.struct.autoId==null)
        {
            this.struct.autoId = 0;
        }
        if(typeof this.struct.fields == "undefined" || this.struct.field == null)
        {
            this.struct.fields = [];
        }
        
        if(struct.fields.length>0)
        {
            for(var i=0;i<struct.fields.length;i++)
            {
                this.addField(struct.fields[i]);
            }
        }
        //console.info(this.struct.fields);
        //console.info(this.struct);
        if(typeof this.trigger["postStructure"] == "function")
        {
            this.trigger["postStructure"](this);
        }
    }
    update()
    {
        if(this.mode=="form")
        {
            this.showForm();
        }
        else if(this.mode=="table")
        {
            this.showTable();
        }
        if(this.struct.isDownloadable==true)
        {
            this.showDownloadOption(null);
        }
        

    }
    showDownloadOption(base,parm)
    {
        var op = {};
        var p = new UIObject("div",this.base);
        p.style({"marginTop":"20px"});
        p.className("noPrint");
        if(typeof base !="undefined")
        {
            if(base!=null)
            {
                p = base;
            }
        }
        op.base = p;
        op.print = new UIObject("button",p);
        op.print.innerHTML("Print");
        op.print.doc = this;
        op.print.style({"marginLeft":"10px"});
        op.print.onclick(function()
        {
            window.print();
        });
        
        op.base = p;
        op.csv = new UIObject("button",p);
        op.csv.innerHTML("Download CSV");
        op.csv.style({"marginLeft":"10px"});
        op.csv.doc = this;
        op.csv.parm =parm;
        op.csv.onclick(function()
        {
            this.handler.doc.downloadCSV(this.handler.doc.struct.name+"-report.csv",this.handler.parm);
        });

        op.json = new UIObject("button",p);
        op.json.innerHTML("Download JSON");
        op.json.doc = this;
        op.json.style({"marginLeft":"10px"});
        op.json.onclick(function()
        {
            this.handler.doc.downloadJSON(this.handler.doc.struct.name+"-report.json");
        });
        return base;
    }
    addDefaultRow()
    {
        var a = {};
        for(var i=0;i<this.struct.fields.length;i++)
        {
            if(typeof this.struct.fields[i].default!= "undefined")
            {
                a[this.struct.fields[i].id]=this.struct.fields[i].default;
            }
            else
            {
                a[this.struct.fields[i].id]="";
            }
        }
        this.data[this.data.length]=a;
    }
    addBaseTableRow()
    {
        if(this.baseTag=="table")
        {
            var tr = this.table.createRow();
            for(var ii = 0;ii<this.struct.columns;ii++)
            {
                var td = tr.createCell();
                td.style({"verticalAlign":"top"});
                this.tableColumns[ii]=new UIObject("table",td);
                this.tableColumns[ii].style({"width":"100%"});
            }
        }
    }
    addSection(base,title,column)
    {
        var section = new UIObject("div",base);
        section.className("form-section ");
        if(title!="")
        {
            var h5 = new UIObject("h5",section);
            h5.className("form-section-title");
            h5.innerHTML(title);
        }
        var colBase = new UIObject("div",section);
        colBase.className("row ");
        var colCss = parseInt(12/column);
        var sectionColumn = [];
        for(var i=0;i<column;i++)
        {
            sectionColumn[i]=new UIObject("div",colBase);
            sectionColumn[i].className("table-responsive col-sm-12 col-md-"+colCss+" col-lg-"+colCss);
        }
        section.columns = sectionColumn;
        this.section[this.section.length] = section;
        return section;
    }
    showForm()
    {
        if(typeof this.trigger["updating"] == "function")
        {
            this.trigger["updating"](this);
        }
        if(this.randerTemplate==null)
        {
            this.randerTemplate=function(tr,field)
            {
                var row = new UIObject("div",tr);
                row.style({"clear":"both"});
                var lb = new UIObject("div",row);
                lb.className("form-label");
                var name = field.name;
                if(field.mendetry == true)
                {
                    name+="*";
                }
                lb.innerHTML(name);
                var td = new UIObject("div",row);
                td.className("form-input");
                td.lb = lb;
                return td;
            }
        }
        this.mode="form";
        this.base.innerHTML("");
        //this.title = new UIObject("h4",this.base);
        //this.title.innerHTML(this.struct.name);
        this.form = new UIObject("form",this.base);
        this.rows=[];
        this.rows[0]={};
        this.table = new UIObject("div",this.form);
        if(this.data.length==0)
        {
            this.addDefaultRow();
        }
        this.tableColumns = [];
        //this.addBaseTableRow();
        var section = this.addSection(this.table,"Detail of "+this.struct.name,this.struct.columns);
        for(var i=0;i<this.struct.fields.length;i++)
        {
            var item = {};
            var dataRow = this.data[this.rowIndex];
            
            if(typeof this.struct.fields[i].hidden != "undefined" && this.struct.fields[i].hidden == true)
            {
                var classObj = UIClassList["HiddenItem"];
                var item = new UIObject(classObj.tag,this.table);
                item.class = classObj;
                if(classObj.type!="")
                {
                    item.object.type=classObj.type;
                }
                if(dataRow[this.struct.fields[i].id]=="" || dataRow[this.struct.fields[i].id]==null)
                {
                    item[classObj.value](this.struct.fields[i].default);
                }
                else
                {
                    item[classObj.value](dataRow[this.struct.fields[i].id]);
                }
                item.struct = this.struct.fields[i];
                item.id(this.struct.fields[i].id);
                item.form = this;
                this.rows[0][this.struct.fields[i].id]=item;
                this[this.struct.fields[i].id]=item;
            }
            else
            {
                if(this.struct.fields[i].type=="Section")
                {
                    section = this.addSection(this.table,this.struct.fields[i].name,this.struct.fields[i].column);
                    continue;
                }
                if(this.baseTag=="table")
                {
                    var tr = section.columns[(this.struct.fields[i].column-1)];
                }
                else
                {
                    var tr = new UIObject("li",this.table);
                }
                tr.rowData = dataRow;
                var td = this.randerTemplate(tr,this.struct.fields[i]);
                td.section = section;
                var type = "Div";
                if(this.struct.isEditable)
                {
                    type = this.struct.fields[i].type;    
                }
                else
                {
                    if(this.struct.fields[i].hidden==true)
                    {
                        type = this.struct.fields[i].type;
                    }
                    else
                    {
                        type="Div";
                    }
                    
                }

                var classObj = UIClassList[type];
                if(classObj==undefined)
                {
                    console.error("Invalid fields class "+this.struct.fields[i].type);
                    continue;
                }
                
                
                
                var item = new classObj.base(classObj.tag,td);
                item.label = td.lb;
                item.struct = this.struct.fields[i];
                item.class = classObj;
                item.struct.class = classObj;
                if(classObj.name=="UIDoc")
                {
                    //item = //this.struct.fields[i].options[0];
                    td.style({"float":"none","width":"100%"});
                    item = new UIDoc(item);
                    item.class = classObj;
                    item.label = td.lb;
                    item.struct = this.struct.fields[i];
                    item.struct.class = classObj;
                    ajaxJson(HOME+"/api/"+this.struct.fields[i].options[0]+"/getStructure","",function(resp,parm)
                    {
                        resp.mode="table";
                        resp.isSubmitable=0;
                        resp.name="";
                        parm.baseStruct = parm.struct;
                        parm.setStructure(resp);
                        firedoc.form.onCreate(parm);
                        if(parm.struct.editButton==1)
                        {
                            var fl = parm.addField({"id":"edit","name":"Edit","type":"Button","default":"Edit","inListView":1,"cssClass":"tableListTable"});

                            if(typeof parm.trigger["onClickRowEdit"] == "function")
                            {
                                fl.onclick=parm.trigger["onClickRowEdit"];
                                //this.trigger["updating"](this);
                            }
                        }
                        
                        if(dataRow[parm.baseStruct.id]!=null)
                        {
                            if(parm.class.formater!=null)
                            {
                                parm[classObj.value](parm.class.formater(dataRow[parm.baseStruct.id]));
                            }
                            else
                            {
                                parm[classObj.value](dataRow[parm.baseStruct.id]);
                            }
                        }
                        parm.on("updated",firedoc.form.onUpdate);
                        firedoc.form.onShowList(parm);
                        parm.showTable();

                        firedoc.form.onLoad(parm);
                        if(parm.struct.isChildTable==1)
                        {
                            parm.addButton = new UIObject("input",parm.base.object.parentNode);
                            parm.addButton.type("button");
                            parm.addButton.value("Add");
                            parm.addButton.item = parm;
                            parm.addButton.className("btn btn-grey-light");
                            parm.addButton.style({"width":"70px","margin":"0 auto","fontSize":"10px"});
                            parm.addButton.onclick(function(obj,e)
                            {
                                this.handler.item.add({});
                                this.handler.item.update();
                            })
                        }
                    },true,item);
                    
                    
                }
                
                
                if(classObj.type!="")
                {
                    item.object.type=classObj.type;
                }
                
                
                if(item.class.name!="UIDoc")
                {
                    item.id(this.struct.fields[i].id);
                }
                
                
                item.tr = tr;
                item.form = this;                
                
                
                
                if(this.struct.fields[i].property!="")
                {
                    for(var p in this.struct.fields[i].property)
                    {
                        if(typeof item[p] == "function")
                        {
                            item[p](this.struct.fields[i].property[p]);
                        }
                        else
                        {
                            item.object[p] = this.struct.fields[i].property[p];
                        }
                    }
                }
                this[this.struct.fields[i].id]=item;
                if(item.class.name!="UIDoc")
                {
                    if(this.struct.fields[i].cssClass!=undefined)
                    {
                        item.className(this.struct.fields[i].cssClass);
                    }

                    

                    if(this.struct.fields[i].bold)
                    {
                        item.label.style({"fontWeight":"bold"});
                        item.style({"fontWeight":"bold"});
                    }
                    if(this.struct.fields[i].readOnly)
                    {
                        item.label.style({"color":"#AAA"});
                        item.object.disabled=true
                    }
                    if(this.struct.fields[i].noCopy)
                    {
                        item.object.oncopy=function()
                        {
                            return false;
                        }
                    }
                    if(this.struct.fields[i].printHide)
                    {
                        item.tr.className("noPrint");
                    }
                    if(this.struct.fields[i].length>0)
                    {
                        item.object.maxLength = parseInt(this.struct.fields[i].length);
                    }
                    item.loadOptions=function(json,binding)
                    {
                        //this.loadOptionFromJson(json);
                        if(typeof binding=="undefined")
                        {
                            binding = {"code":"code","name":"name"};
                        }
                        this.struct.binding = binding;
                        this.struct.options = json;
                        this.update();
                    }
                    item.update=function()
                    {
                        if(this.form.struct.isEditable)
                        {
                            var vf = UIClassList[this.class.name];
                        }
                        else
                        {
                            var vf = UIClassList["Div"];
                        }


                        if(typeof this.struct.options!="undefined")
                        {
                            if(this.struct.options.length>0)
                            {
                                this.loadOptionFromJson(this.struct.options,this.struct.binding);
                            }
                            
                        }

                        if(typeof this.form.data[this.form.rowIndex][this.struct.id]!="undefined")
                        {
                            if(this.class.formater!=null)
                            {
                                this[vf.value](this.class.formater(this.form.data[this.form.rowIndex][this.struct.id]));
                            }
                            else
                            {
                                this[vf.value](this.form.data[this.form.rowIndex][this.struct.id]);
                            }
                        }
                        else
                        {
                            if(this.class.formater!=null)
                            {
                                this[vf.value](this.class.formater(this.struct.default));
                            }
                            else
                            {
                                this[vf.value](this.struct.default);
                            }
                        }
                    }
                    if(typeof this.struct.fields[i].options != "undefined")
                    {
                        if(this.struct.fields[i].options.length>0)
                        {
                            item.loadOptions(this.struct.fields[i].options);    
                        }
                    }
                    if(typeof this.struct.fields[i].onchange != "undefined")
                    {
                        item.onchangeCallback = this.struct.fields[i].onchange;
                    }
                    if(typeof this.struct.fields[i].onclick != "undefined")
                    {
                        item.onclickCallback = this.struct.fields[i].onclick;
                    }
                    if(typeof this.struct.fields[i].style != "undefined")
                    {
                        item.style(this.struct.fields[i].style);
                    }


                    
                    item.onchange(function()
                    {
                        //console.info("AS");
                        
                        var classObj = UIClassList[this.handler.class.name];
                        if(!this.handler.validateDatalist())
                        {
                            alert("Invalid value for "+this.handler.struct.name);
                            //this.handler[classObj.value](this.handler.form.data[this.handler.form.rowIndex][this.handler.struct.id]);
                            this.handler[classObj.value]("");
                        }
                        
                        this.handler.form.data[this.handler.form.rowIndex][this.handler.struct.id] = this.handler[classObj.value]();
                        if(typeof this.handler.onchangeCallback!="undefined" && this.handler.onchangeCallback!=null)
                        {
                            this.handler.onchangeCallback(this.handler,this.handler.tr);
                        }
                        
                    });
                    
                    
                    item.onclick(function()
                    {
                        var classObj = UIClassList[this.handler.class.name];
                        if(!this.handler.validateDatalist())
                        {
                            alert("Invalid value for "+this.handler.struct.name);
                            this.handler[classObj.value](this.handler.form.data[this.handler.form.rowIndex][this.handler.struct.id]);
                        }
                        
                        this.handler.form.data[this.handler.form.rowIndex][this.handler.struct.id] = this.handler[classObj.value]();
                        if(typeof this.handler.onclickCallback!="undefined" && this.handler.onclickCallback!=null)
                        {
                            this.handler.onclickCallback(this.handler,this.handler.tr);
                        }
                    });
                    
                    if(dataRow[this.struct.fields[i].id]!=null)
                    {
                        if(typeof dataRow[this.struct.fields[i].id] !="undefined")
                        {
                            if(item.struct.class.formater!=null)
                            {
                                item[classObj.value](item.struct.class.formater(dataRow[this.struct.fields[i].id]));
                            }
                            else
                            {
                                item[classObj.value](dataRow[this.struct.fields[i].id]);
                            }
                        }
                        else
                        {
                            if(item.struct.class.formater!=null)
                            {
                                item[classObj.value](item.struct.class.formater(item.struct.default));
                            }
                            else
                            {
                                item[classObj.value](item.struct.default);
                            }
                        }
                    }
                }
                
                this.rows[0][this.struct.fields[i].id]=item;
            }
            
        }

        if(typeof this.struct.isSubmitable !="undefined")
        {
            if(this.struct.isSubmitable==true)
            {
                if(typeof this.submitCallback =="undefined")
                {
                    this.submitCallback=function(resp)
                    {
                        console.info(resp);
                    }
                }
                var tr = new UIObject("div",this.table);
                tr.className("noPrint");
                //var td = tr.createCell();
                var td = new UIObject("div",tr);

                this.submitButton = new UIObject("input",td);
                this.submitButton.object.type="button";
                this.submitButton.value("Submit");
                this.submitButton.form = this;
                
                this.submitButton.onclick(function()
                {
                    var form = this.handler.form;
                    
                    form.doSubmit(form.struct.submitUrl,form.trigger["submited"]);
                });
            }
        }
        if(typeof this.trigger["updated"] == "function")
        {
            this.trigger["updated"](this);
        }
    }
    checkMendetry()
    {
        this.sync();
        for(var j=0;j<this.rows.length;j++)
        {
            for(var i=0;i<this.struct.fields.length;i++)
            {
                var row = this.rows[j];
                var f = this.struct.fields[i];
                var classObj = UIClassList[f.type];
                var k= row[f.id];
                if(f.mendetry)
                {
                    if(k[classObj.value]()=="" || k[classObj.value]() == false)
                    {
                        if(typeof this.trigger["mendetryNull"]=="function")
                        {
                            this.trigger["mendetryNull"](this.struct.fields[i]);
                        }
                        else
                        {
                            alert(this.struct.fields[i].name+" is mendetry.");
                        }
                        
                        this[this.struct.fields[i].id].focus();
                        return false;
                    }
                }
            }
        }
        return true;
    }
    doSubmit(url,callback)
    {
        var silent = false;
        if(arguments.length>2)
        {
            silent = arguments[2];
        }
        if(this.checkMendetry())
        {
            var ajaxForm = new AjaxForm(url,function(resp)
            {
                if(silent==false)
                {
                    SC.unlock();
                }
                
                if(typeof callback!="undefined")
                {
                    callback(resp);
                }
                
            });
            if(this.struct.submitMode=="json")
            {
                var dt = {};
                dt.struct = this.struct;
                dt.data = this.value();
                /*
                for(var i=0;i<dt.rows.length;i++)
                {
                    for(var k in dt.rows[i])
                    {
                        if(typeof dt.rows[i][k] == "undefined")
                        {
                            dt.rows[i][k] = "";
                        }
                    }
                }
                */
                var data = JSON.stringify(dt);
                
                if(this.struct.encryption=="base64")
                {
                    data = Base64.encode(data);
                }
                ajaxForm.addParameter("data",data);
            }
            else
            {
                for(var i=0;i<this.struct.fields.length;i++)
                {
                    var val = this.data[0][this.struct.fields[i].id];
                    if(this.struct.encryption=="base64")
                    {
                        val = Base64.encode(val);
                    }
                    ajaxForm.addParameter(this.struct.fields[i].id,val);
                }

            }
            
            ajaxForm.submit();
            if(silent==false)
            {
                SC.lock("Precessing...");
            }
            
        }
    }
    showTableReport()
    {
        if(typeof this.trigger["updating"] == "function")
        {
            this.trigger["updating"](this);
        }
        this.mode="table";
        this.rows = [];
        this.base.innerHTML("");
        this.title = new UIObject("h4",this.base);
        this.title.innerHTML(this.struct.name);
        
        
        this.table = new UIObject("table",this.base);
        this.table.style({"minWidth":"100%"});
        this.table.className("whightTable");
        var tr = document.createElement("tr");
        this.table.object.appendChild(tr);
        var summery = [];
        this.summery = summery;
        for(var i=0;i<this.struct.fields.length;i++)
        {
            var field = this.struct.fields[i];
            
            if(!field.hidden && field.inListView)
            {
                var td = document.createElement("td");
                tr.appendChild(td);
                td.style.fontWeight="bold";
                td.innerHTML=field.name;
                if(typeof field.style!="undefined")
                {
                    for(var st in field.style)
                    {
                        td.style[st] = field.style[st];
                    }
                }
            }

            if(field.summery!="")
            {
                if(field.summery=="min")
                {
                    summery[field.id]=999999999999999999999;    
                }
                else if(field.summery=="max")
                {
                    summery[field.id]=-999999999999999999999;    
                }
                else
                {
                    summery[field.id]=0;
                }
            }
        }

        for(var j=0;j<this.data.length;j++)
        {
            var tr = document.createElement("tr");
            var dataRow = this.data[j];
            for(var i=0;i<this.struct.fields.length;i++)
            {
                var td = document.createElement("td");
                var field = this.struct.fields[i];
                var classObj = UIClassList[field.type];
                var val ='';
                if(typeof dataRow[field.id]=="undefined")
                {
                    if(classObj.formater!=null)
                    {
                        val = classObj.formater(field.default);
                    }
                    else
                    {
                        val = field.default;
                    }
                }
                else
                {
                    if(classObj.formater!=null)
                    {
                        val = classObj.formater(dataRow[field.id]);
                    }
                    else
                    {
                        val = dataRow[field.id];
                    }
                }
                td.innerHTML = val;
                tr.appendChild(td);


                if(field.summery!="")
                {
                    var sValue = dataRow[field.id];
                    if(sValue == null)
                    {
                        sValue = 0;
                    }
                    sValue = parseFloat(sValue);
                    if(field.summery=="sum")
                    {
                        summery[field.id] = summery[field.id] + sValue;
                    }
                    else if(field.summery=="count")
                    {
                        summery[field.id] = summery[field.id] + 1;
                    }
                    else if(field.summery=="min")
                    {
                        if(summery[field.id]> sValue)
                        {
                            summery[field.id] =  sValue;
                        }
                    }
                    else if(field.summery=="max")
                    {
                        if(summery[field.id]< sValue)
                        {
                            summery[field.id] =  sValue;
                        }
                    }
                }

                /*                
                var item  = new UIObject(td);


                */
                if(field.cssClass!=undefined)
                {
                    //item.className(field.cssClass);
                    td.className = field.cssClass;
                }

                

                if(field.bold)
                {
                    
                    //item.style({"fontWeight":"bold"});
                    td.style.fontWeight="bold";
                }

                if(field.readOnly)
                {
                    
                    td.disabled=true
                }

                if(field.noCopy)
                {
                    td.oncopy=function()
                    {
                        return false;
                    }
                }
                if(field.printHide)
                {
                    tr.className="noPrint";
                }

                if(field.length>0)
                {
                    td.maxLength = parseInt(this.struct.fields[i].length);
                }

                if(typeof field.style!="undefined")
                {
                    for(var st in field.style)
                    {
                        td.style[st] = field.style[st];
                    }
                }
                //item.style({"width":"100%"})
                
            }
            
            this.table.object.appendChild(tr);
        }
        if(this.struct.showSummery)
        {
            var tr = document.createElement("tr");
            this.table.object.appendChild(tr);
            this.summeryRow = tr;
            for(var i=0;i<this.struct.fields.length;i++)
            {
                var field = this.struct.fields[i];
                if(!field.hidden)
                {
                    var td = document.createElement("td");
                    tr.appendChild(td);
                    //td.style({"fontWeight":"bold"});
                    td.style.fontWeight="bold";

                    if(typeof field.summery != "undefined" && field.summery!="")
                    {
                        if(field.class.formater!=null)
                        {
                            td.innerHTML = field.class.formater(summery[field.id]);
                        }
                        else
                        {
                            td.innerHTML = summery[field.id];
                        }
                        
                    }
                    if(typeof field.style!="undefined")
                    {
                        for(var st in field.style)
                        {
                            td.style[st] = field.style[st];
                        }
                    }

                }
                
            }
        }
        if(typeof this.trigger["updated"] == "function")
        {
            this.trigger["updated"](this);
        }
    }
    showTable()
    {
        if(typeof this.trigger["updating"] == "function")
        {
            this.trigger["updating"](this);
        }
        this.mode="table";
        this.rows = [];
        this.base.innerHTML("");
        this.title = new UIObject("h4",this.base);
        this.title.innerHTML(this.struct.name);
        
        
        this.table = new UIObject("table",this.base);
        this.table.style({"minWidth":"100%"});
        this.table.className("whightTable");
        var tr = this.table.createRow();
        var summery = [];
        this.summery = summery;
        for(var i=0;i<this.struct.fields.length;i++)
        {
            var field = this.struct.fields[i];
            
            if(!field.hidden && field.inListView)
            {
                var td = tr.createCell();
                td.style({"fontWeight":"bold"});
                td.innerHTML(field.name);
                if(typeof field.style!="undefined")
                {
                    td.style(field.style);
                }

            }
            if(field.summery!="")
            {
                if(field.summery=="min")
                {
                    summery[field.id]=999999999999999999999;    
                }
                else if(field.summery=="max")
                {
                    summery[field.id]=-999999999999999999999;    
                }
                else
                {
                    summery[field.id]=0;
                }
            }
        }
        
        for(var j=0;j<this.data.length;j++)
        {
            var tr = this.table.createRow();
            var dataRow = this.data[j];
            tr.rowIndex = j;
            tr.rowData = dataRow;
            if(typeof this.trigger["clickOnRow"]!="undefined")
            {
                tr.onclick(this.trigger["clickOnRow"]);
                tr.style({"cursor":"pointer"});
            }
            
            this.rows[this.rows.length]=tr;
            for(var i=0;i<this.struct.fields.length;i++)
            {
                this.rowIndex = j;
                
                var field = this.struct.fields[i];
                if(field.summery!="")
                {
                    var sValue = dataRow[field.id];
                    if(sValue == null)
                    {
                        sValue = 0;
                    }
                    sValue = parseFloat(sValue);
                    if(field.summery=="sum")
                    {
                        summery[field.id] = summery[field.id] + sValue;
                    }
                    else if(field.summery=="count")
                    {
                        summery[field.id] = summery[field.id] + 1;
                    }
                    else if(field.summery=="min")
                    {
                        if(summery[field.id]> sValue)
                        {
                            summery[field.id] =  sValue;
                        }
                    }
                    else if(field.summery=="max")
                    {
                        if(summery[field.id]< sValue)
                        {
                            summery[field.id] =  sValue;
                        }
                    }
                }
                
                if(!field.hidden && field.inListView)
                {
                    var td = tr.createCell();
                    if(this.struct.isEditable)
                    {
                        var classObj = UIClassList[field.type];
                    }
                    else
                    {
                        var classObj = UIClassList["Div"];
                    }

                    //td.innerHTML(this.data[j][field.id]);

                    var item = new UIObject(classObj.tag,td);
                    
                    item.class = classObj;
                    if(classObj.type!="")
                    {
                        item.object.type=classObj.type;
                    }
                    
                    //item.label = lb;
                    item.struct = field;
                    //item.id(this.struct.fields[i].id);
                    
                    item.tr = tr;
                    item.form = this;                
                    for(var p in item.struct.property)
                    {
                        if(typeof item[p] == "function")
                        {
                            item[p](item.struct.property[p]);
                        }
                        else
                        {
                            item.object[p] = item.struct.property[p];
                        }
                    }
                    if(typeof dataRow[field.id]=="undefined")
                    {
                        if(item.struct.class.formater!=null)
                        {
                            item[classObj.value](item.struct.class.formater(item.struct.default));
                        }
                        else
                        {
                            item[classObj.value](item.struct.default);
                        }
                    }
                    else
                    {
                        if(item.struct.class.formater!=null)
                        {
                            item[classObj.value](item.struct.class.formater(dataRow[field.id]));
                        }
                        else
                        {
                            item[classObj.value](dataRow[field.id]);
                        }
                    }
                    
                    
                    if(field.cssClass!=undefined)
                    {
                        item.className(field.cssClass);
                    }

                    

                    if(field.bold)
                    {
                        
                        item.style({"fontWeight":"bold"});
                    }
                    if(field.readOnly)
                    {
                        
                        item.object.disabled=true
                    }
                    if(field.noCopy)
                    {
                        item.object.oncopy=function()
                        {
                            return false;
                        }
                    }
                    if(field.printHide)
                    {
                        item.tr.className("noPrint");
                    }
                    if(field.length>0)
                    {
                        item.object.maxLength = parseInt(this.struct.fields[i].length);
                    }
                    item.style({"width":"100%"})
                    item.loadOptions=function(json,binding)
                    {
                        //this.loadOptionFromJson(json);
                        this.struct.options = json;
                        if(typeof binding =="undefined")
                        {
                            binding={"code":"code","name":"name"};
                        }
                        this.struct.binding = binding;
                        this.update();
                    }
                    item.update=function()
                    {
                        //console.info("update");
                        if(this.form.struct.isEditable)
                        {
                            var vf = UIClassList[this.struct.type];
                        }
                        else
                        {
                            var vf = UIClassList["Div"];
                        }
                        if(typeof this.struct.options!="undefined")
                        {
                            if(this.struct.options.length>0)
                            {
                                this.loadOptionFromJson(this.struct.options);
                            }
                        }
                        if(typeof this.form.data[this.form.rowIndex][this.struct.id] !="undefined")
                        {
                            if(this.struct.class.formater!=null)
                            {
                                this[vf.value](this.struct.class.formater(this.form.data[this.form.rowIndex][this.struct.id]));
                            }
                            else
                            {
                                this[vf.value](this.form.data[this.form.rowIndex][this.struct.id]);
                            }
                        }
                        else
                        {
                            if(this.struct.class.formater!=null)
                            {
                                this[vf.value](this.struct.class.formater(this.struct.default));
                            }
                            else
                            {
                                this[vf.value](this.struct.default);
                            }
                        }

                        
                        
                    }
                    
                    if(typeof field.options != "undefined")
                    {
                        if(field.options.length>0)
                        {
                            item.loadOptions(field.options,field.binding);
                        }
                        
                    }
                    if(typeof field.onchange != "undefined")
                    {
                        item.onchangeCallback = field.onchange;
                    }
                    if(typeof field.onclick != "undefined")
                    {
                        item.onclickCallback = field.onclick;
                    }
                    if(typeof field.style != "undefined")
                    {
                        item.style(field.style);
                    }
                    
                    item.onchange(function()
                    {
                        
                        var classObj = UIClassList[this.handler.class.name];
                        if(!this.handler.validateDatalist())
                        {
                            alert("Invalid value.");
                            this.handler[classObj.value](this.handler.form.data[this.handler.tr.rowIndex][this.handler.struct.id]);
                        }
                        //console.info(this.handler.tr.rowIndex);
                        
                        this.handler.form.data[this.handler.tr.rowIndex][this.handler.struct.id] = this.handler[classObj.value]();
                        //console.info(this.handler.form.data[this.handler.tr.rowIndex][this.handler.struct.id]);
                        if(typeof this.handler.onchangeCallback!="undefined" && this.handler.onchangeCallback!= null)
                        {
                            this.handler.onchangeCallback(this.handler,this.handler.tr);
                        }
                    });
                    
                   
                    item.onclick(function()
                    {
                        var classObj = UIClassList[this.handler.class.name];
                        if(!this.handler.validateDatalist())
                        {
                            alert("Invalid value for "+this.handler.struct.name);
                            this.handler[classObj.value](this.handler.form.data[this.handler.form.rowIndex][this.handler.struct.id]);
                        }
                        
                        this.handler.form.data[this.handler.tr.rowIndex][this.handler.struct.id] = this.handler[classObj.value]();
                        if(typeof this.handler.onclickCallback!="undefined" && this.handler.onclickCallback!=null)
                        {
                            this.handler.onclickCallback(this.handler,this.handler.tr);
                        }
                    });
                    
                    tr[field.id]=item;
                }
                else
                {
                    var classObj = UIClassList["HiddenItem"];
                    var item = new UIObject(classObj.tag,this.table);
                    item.class = classObj;
                    if(classObj.type!="")
                    {
                        item.object.type=classObj.type;
                    }

                    //item.label = lb;
                    item.struct = field;
                    //item.id(this.struct.fields[i].id);
                    
                    item.tr = tr;
                    item.form = this;  
                    if(item.struct.class.formater!=null)
                    {
                        item[classObj.value](item.struct.class.formater(dataRow[field.id]));
                    }
                    else
                    {
                        item[classObj.value](dataRow[field.id]);
                    }
                    tr[field.id]=item;
                }
            }
            this.rowIndex = 0;
        }
        if(this.struct.showSummery)
        {
            var tr = this.table.createRow();
            this.summeryRow = tr;
            for(var i=0;i<this.struct.fields.length;i++)
            {
                var field = this.struct.fields[i];
                if(!field.hidden)
                {
                    var td = tr.createCell();
                    td.style({"fontWeight":"bold"});
                    if(typeof field.summery != "undefined" && field.summery!="")
                    {
                        if(field.class.formater!=null)
                        {
                            td.innerHTML(field.class.formater(summery[field.id]));
                        }
                        else
                        {
                            td.innerHTML(summery[field.id]);
                        }
                        
                    }
                    if(typeof field.style!="undefined")
                    {
                        td.style(field.style);
                    }

                }
                
            }
        }
        if(typeof this.trigger["updated"] == "function")
        {
            this.trigger["updated"](this);
        }
    }
    nextRecord()
    {
        if(this.rowIndex<this.data.length-1)
        {
            this.rowIndex++;
            this.update();
        }
    }
    previousRecord()
    {
        if(this.rowIndex>0)
        {
            this.rowIndex--;
            this.update();
        }
    }
    onchange(col,callback)
    {
        
        for(var i=0;i<this.struct.fields.length;i++)
        {
            if(this.struct.fields[i].id==col)
            {
                this.struct.fields[i].onchange=callback;
            }
        }
        
    }
    onclick(col,callback)
    {
    
        for(var i=0;i<this.struct.fields.length;i++)
        {
            if(this.struct.fields[i].id==col)
            {
                this.struct.fields[i].onclick=callback;
            }
        }
    
        
    }
    on(name,fun)
    {
        this.trigger[name]=fun;
    }
    add(obj)
    {
        this.data[this.data.length]=obj;
    }
    addRow(obj)
    {
        var tr = this.table.createRow();
        for(var i=0;i<this.struct.fields.length;i++)
        {
            
            var field = this.struct.fields[i];
            //var cl = UIClassList[field.type];
            if(field.hidden==0)
            {
                var td = tr.createCell();
                var div = new UIObject("div",td);
                if(typeof field.style!="undefined")
                {
                    div.style(field.style);
                }
                if(typeof obj[field.id]!="undefined")
                {
                    //div.innerHTML(obj[field.id]);
                    if(field.class.formater!=null)
                    {
                        div.innerHTML(field.class.formater(obj[field.id]));
                    }
                    else
                    {
                        div.innerHTML(obj[field.id]);
                    }
                }
            }
            
        }
        return tr;
    }
    download(filename, text) 
    {
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        pom.setAttribute('download', filename);
    
        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }
    }
    downloadCSV(filename,parm)
    {
        var str = "";
        if(typeof parm !="undefined")
        {
            for(var i in parm)
            {
                str+=i+',"'+parm[i]+'"'+"\n";
            }
        }
        str+="\n\n";
        for(var i=0;i<this.struct.fields.length;i++)
        {
            str+='"'+this.struct.fields[i].name+'"';
            if(i<this.struct.fields.length-1)
            {
                str+=",";
            }
        }
        str+="\n";
        for(var i=0;i<this.data.length;i++)
        {
            for(var j=0;j<this.struct.fields.length;j++)
            {
                var val = this.data[i][this.struct.fields[j].id];
                if(val==null)
                {
                    val="";
                }
                str+='"'+val+'"';
                if(j<this.struct.fields.length-1)
                {
                    str+=",";
                }
            }
            str+="\n";
        }
        this.download(filename,str);
    }
    downloadJSON(filename)
    {
        var str = JSON.stringify(this.data);
        this.download(filename,str);
    }
    aggregate(type,column)
    {
        this.sync();
        var val = 0;
        if(type=="min")
        {
            val=9999999999999999999999999999999;
        }
        else if(type=="max")
        {
            val=-9999999999999999999999999999999;
        }
        for(var i=0;i<this.data.length;i++)
        {
            if(type=="sum")
            {
                val = parseFloat(val) + parseFloat(this.data[i][column]);
            }
            else if(type=="count")
            {
                val = val + 1;
            }
            else if(type=="max")
            {
                if(val<parseFloat(this.data[i][column]))
                {
                    val = parseFloat(this.data[i][column]);
                }
            }
            else if(type=="min")
            {
                if(val>parseFloat(this.data[i][column]))
                {
                    val = parseFloat(this.data[i][column]);
                }
            }
        }
        return val;
    }
}
