let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0]
let result = document.getElementById("result")

function calculateAge(){
    let birthdate = new Date(userInput.value);
    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth()+1;
    let y1 = birthdate.getFullYear();

    let tdy = new Date();
    let d2 = tdy.getDate();
    let m2 = tdy.getMonth()+1;
    let y2 = tdy.getFullYear();

    let d3,m3,y3;
    y3 = y2-y1;
    if(m2>=m1)
    {
        m3 = m2-m1
    }
    else{
        y3--;
        m3 = (12+m2)-m1;
    }
        if(d2>=d1)
    {
        d3 = d2-d1
    }
    else{
        m3--;
        d3 = (getDaysINMonth(y1,m1)+d2)-d1;
    }
    if(m3<0)
    {
        m3=11;
        y3--;
    }
    console.log(y3,m3,d3)
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`
}
function getDaysINMonth(year,month){
    return new Date(year,month,0).getDate();
}