function GetSum( a,b )
{
   if (a == b) {
       return a    
   }
   
   let sum = 0
   let high = b
   let low = a
   
   if (a > b) {
       high = a
       low = b
   }

   for(let i = low; i <= high; i++) {
       sum += i
   }
   return sum

}