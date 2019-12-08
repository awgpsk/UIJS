# UIJS
Javascript framework for client development 


UIJs is framework for client application developement. 

### Features of this framework
1. easy to learn
2. standered code structure
3. object orianted structure
4. easy to integrate other framewark as like Angular, React and other

### Intigrity

    //// If not using external jquery then you can use this file otherwist skip this
    <script type="text/javascript" src="env.js"></script>
     
    <script type="text/javascript" src="ajax.js"></script>     
    <script type="text/javascript" src="lib.js"></script>
    <script type="text/javascript" src="uiobject.js"></script>
    <script type="text/javascript" src="uiDoc.js"></script>
    
    //// For mobile application development using YMI (Yajan Mobile Interface)
    <script type="text/javascript" src="ymi.js"></script>
    <script type="text/javascript" src="ymi-f7.js"></script>


### Examples

    <html>
      <head>
            <script type="text/javascript" src="https://raw.githubusercontent.com/awgpsk/UIJS/master/ajax.js"></script>     
            <script type="text/javascript" src="https://raw.githubusercontent.com/awgpsk/UIJS/master/lib.js"></script>
            <script type="text/javascript" src="https://raw.githubusercontent.com/awgpsk/UIJS/master/uiobject.js"></script>
            <script type="text/javascript" src="https://raw.githubusercontent.com/awgpsk/UIJS/master/uiDoc.js"></script>
      </head>
      <body>
        <div id="root">
        </div>
      </body>
      <script type="text/javascript">
      
      
        let base = new UIObject("#root")
        let title = new UIObject("h2",base);
        title.innerHTML("This is title");
        title.style({"textAligh":"center"})
        
        content = new UIObject("div",base)
        content.innerHTML("This is content");
        
        input = new UIObject("input",base");
        input.placeholder("Enter your name");
        input.onchange(function()
        {
          console.info(this.handler.value())
        })
        
        button = new UIObject("button",base);
        button.name = input
        button.onclick(function()
        {
          alert(this.handler.name.value()
        })
        
        
      </script>
    </html>
