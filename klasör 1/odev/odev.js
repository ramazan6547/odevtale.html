const n1 = +prompt("ilk sayi") ;
const n2 = +prompt("ikinci sayi");
const op = prompt("hangi islemi yapmak istersiniz? + , - , * , / ");
if (op == "+" )
{
    console.log(`islem sonucu ${n1 + n2}`);
}
else if(op =="-")
{
    console.log(`islem sonucu ${n1 - n2}`);
}
else if(op =="*")
{
    console.log(`islem sonucu ${n1 * n2}`);
}
else if(op =="/")
{
    console.log(`islem sonucu ${n1 / n2}`);
}
