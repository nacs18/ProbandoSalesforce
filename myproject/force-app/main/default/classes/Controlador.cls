public with sharing class Controlador {
    public Controlador() {
        
    }

    @AuraEnabled
    public static String callWithParam(String msg){
       System.debug(msg);
        return msg+' eres el mejor'; 
    }
}
