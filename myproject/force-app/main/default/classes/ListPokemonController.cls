public class ListPokemonController {

    public List<POKEMON__c> pokemons {get;set;}

    public ListPokemonController() {
        pokemons = [
            SELECT ID__c, Name, Vida__c
            FROM POKEMON__c 
            ORDER BY ID__c];
    }


    public Pagereference goToPokemon(){
        PageReference pr=Page.addPokemon;
        return pr;
    }

}
