function Dat() {
   
    const date=new Date();
    const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const current_date=date.getDate()+" "+month[date.getMonth()+1]+" " +date.getFullYear();

       document.getElementById("dat").innerHTML=current_date;
};

function loadData(data){
            if(data =="btn1"){
                document.getElementById("para").innerHTML="History of the Iphone Xs";
                var image= document.getElementById("image1");
                image.src=('/IWT/IWT/src/images/iphone xs full.png');
                
            }else if(data == "btn2"){
                document.getElementById("para").innerHTML="History of the Iphone Xs Max";
                var image= document.getElementById("image1");
                image.src=('/IWT/IWT/src/images/iphone xs max.png');

            }else if(data == "btn3"){
                document.getElementById("para").innerHTML="History of the Iphone 8s Plus";
                var image= document.getElementById("image1");
                image.src=('/IWT/IWT/src/images/iphone 8s plus.png');

            }else if(data == "btn4"){
                document.getElementById("para").innerHTML="History of the Iphone se";
                var image= document.getElementById("image1");
                image.src=('/IWT/IWT/src/images/iphone se.png');

            }else {
                document.write ("there was something error");
            }


}
function priceForLoop(){
    var prices=["Iphone Xs(128gb)-$1,349","Iphone Xs Max-$1,349","Iphone Xs(64gb)-$999","Iphone 8 Plus-$599","Iphone SE-$399"];
    var list="";
    for(let i=0;i<prices.length;i++){
         list += prices[i]+"</br>";
    }
    document.getElementById("para").innerHTML=list;
    var image= document.getElementById("image1");
                image.src=('/IWT/IWT/src/images/apple logo.png');
}
function priceForInLoop(){
    var prices={"Iphone Xs(128gb)":"$1,349","Iphone Xs Max":"$1,349","Iphone Xs(64gb)":"$999","Iphone 8 Plus":"$599","Iphone SE":"$399"};
    let list="The List Of Phone Prices : </br>";

    for(x in prices){
        list+= x +":"+ prices[x]+"</br>";
    }
    document.getElementById("para").innerHTML=list;
}

function priceHigher(){
    var prices=["Iphone Xs(128gb)-$1,349","Iphone Xs Max-$1,349","Iphone Xs(64gb)-$999","Iphone 8 Plus-$599","Iphone SE-$399"];
    var pPrices=[1349,1349,999,599,399];
    let list ="These are the Phones which higher than $1000 :</br>"
    for(xP in pPrices){
        if(pPrices[xP]>=1000){
            list+= prices[xP]+"</br>";
        }
    }
    document.getElementById("para").innerHTML=list;
}
function priceLower(){
    var prices=["Iphone Xs(128gb)-$1,349","Iphone Xs Max-$1,349","Iphone Xs(64gb)-$999","Iphone 8 Plus-$599","Iphone SE-$399"];
    var pPrices=[1349,1349,999,599,399];
    let list ="These are the Phones which higher than $1000 :</br>"
    for(xP in pPrices){
        if(pPrices[xP]<=1000){
            list+= prices[xP]+"</br>";
        }
    }
    document.getElementById("para").innerHTML=list;
}
function checkPassword() {
    if(document.getElementById("pwd").value!= document.getElementById("cnfrmpwd").value) {
        alert("Password Mismatch");
        return false;
    }
    else {
        alert("Success");
        return true;
    }
}
function enableButton() {
    if(document.getElementById("checkBox").checked) {
        document.getElementById("submitBtn").disabled=false;
    }
    else {
        document.getElementById("submitBtn").disabled=true;
    }
}