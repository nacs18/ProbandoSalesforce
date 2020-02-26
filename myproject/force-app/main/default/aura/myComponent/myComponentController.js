({
    changeVariable : function(component,event, helper){
        console.log(event);
        console.log(component);
        component.set("v.myvariable","Moto");
    },

    handleEvent1 : function(component, event){
        var message = event.getParam("message");
        console.log("observer component 1:"+message)
        component.set("v.myvariableevent",message)
    },

    introducirCoche : function(component, event, helper) {
        var objs = component.get('v.objs');
        var userInput = component.find('carInput').getElement().value;
        var obj = userInput;
        objs.push(obj);
        component.set('v.objs', objs);
    },

    callAuraMethod : function(component, event, helper) {
        var userInput = component.find('input').getElement().value;
              
        var action =component.get("c.callWithParam");
        action.setParams({
            msg:" buenos dias"           
        });

        action.setCallback(this, function(response){
            var state = response.getState();
            if(state==="SUCCESS"){
                component.set("v.myvariable",userInput+response.getReturnValue());                
            }
        });
    }

  })