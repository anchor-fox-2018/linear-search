function linearSearch(angka,random_numbers){
    for(var i = 0;i < random_numbers.length;i++){
        var angkaSama = 0;
        if(angka === random_numbers[i]){
            angkaSama++
            return i
        }
        if(i === random_numbers.length-1 && angkaSama === 0){
            return -1
        }
    }
}
let random_numbers = [6,29,18,2,72,19,18,10,37];
console.log(linearSearch(18,random_numbers));//2
console.log(linearSearch(9,random_numbers));//-1

function globalLinearSearch(huruf,banana_arr){
    var hasil = [];
    for(var i = 0;i < banana_arr.length;i++){
        if(banana_arr[i] === huruf){
            hasil.push(i)
        }
    }
    return hasil
}
let banana_arr = "banana".split("");
console.log(globalLinearSearch("a",banana_arr));//[1,3,5]