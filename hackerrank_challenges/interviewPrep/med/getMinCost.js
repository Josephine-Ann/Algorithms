function getMinimumCost(k, c) {
    c.sort((a,b)=>b-a);
    let people = k;
    let i = 0
    let price = 0;
    for (i; k > 0; i++) {
        price += c[i]
        k--
    }
    let x = 0;
    let j = 1
    for (i; i <= (c.length - 1); i++) {
       price += ((j + 1) * c[i])
       x++
       if (x === people){
        j++
        x = 0
       } 
    }
    return price
}
// const items = [2,5,6]
// const people = 2
// const items = [1, 3, 5, 7, 9]
const items = [390225, 426456, 688267, 800389, 990107, 439248, 
    240638, 15991, 874479, 568754, 729927, 980985, 132244, 
    488186, 5037, 721765, 251885, 28458, 23710, 281490, 30935, 
    897665, 768945, 337228, 533277, 959855, 927447, 941485, 
    24242, 684459, 312855, 716170, 512600, 608266, 779912, 
    950103, 211756, 665028, 642996, 262173, 789020, 932421, 
    390745, 433434, 350262, 463568, 668809, 305781, 815771, 550800]
const people = 3
console.log(getMinimumCost(people, items))

