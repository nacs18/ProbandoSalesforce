public class PokemonController {

    public POKEMON__c pokemon {get; set;}

    public PokemonController() {
        pokemon = new POKEMON__c();
    }

    public Pagereference save(){
        try{
            insert pokemon;
        }catch(System.DMLException e){
            ApexPages.addMessages(e);
            System.debug('Unexpected error' + e.getMessage());
            return null;
        }
        return null;
    }

    public Pagereference goToPokemonList(){
        PageReference pr=Page.listPokemon;
        return pr;
    }

}
