({
    selectNumber:function(component,event,helper){
        var selectedNumber = component.find('select').get('v.value');
        component.set("v.output",selectedNumber);
        var appevent =$A.get("e.c:myevent1");
        appevent.setParams({"message":"lanzando y escuchando petardo"});
        console.log("firing event");
        appevent.fire();
    },
})
