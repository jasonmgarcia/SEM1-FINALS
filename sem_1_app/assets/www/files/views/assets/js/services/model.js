/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "inputsub": new $a.LocalStorage("inputsub", "String"),

    "inputsub2": new $a.LocalStorage("inputsub2", "String"),

    "inputsub3": new $a.LocalStorage("inputsub3", "String")
};