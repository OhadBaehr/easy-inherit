export default function inherit(parents,child){
    if(!Array.isArray(parents)) parents=[parents]
    child.prototype = Object.create(parents[0].prototype); // create a prototype
    for(let parent of parents){
        Object.assign(Object.getPrototypeOf(child.prototype), parent.prototype); // inherit parent functions
        Object.keys(parent).map(prop=>{child[prop]=parent[prop]}) // inherit static properties and methods
    }
    child.prototype.constructor=child; // correct the child constructor pointer because it points to parent
    return child
}