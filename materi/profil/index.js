
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");
 
menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})

let query = document.querySelector('.query');
    let searchbtn = document.querySelector('.searchbtn')
    searchbtn.onclick = function(){
        let url ='file:///D:/burhan/Tugas%20akhir/index.html#'+query.value;
        window.open(url,'_self');
    }

    let query2 = document.querySelector('#query2');
    let search2 = document.querySelector('#search2')
    search2.onclick = function(){
        let url ='file:///D:/burhan/Tugas%20akhir/index.html#'+query2.value;
        window.open(url,'_self');
    }


    
      //@codewithcurious.com
      
      function calculateBMI() {
        var heightInput = document.getElementById("height");
        var weightInput = document.getElementById("weight");
        var resultDiv = document.getElementById("result");
      
        var height = parseFloat(heightInput.value);
        var weight = parseFloat(weightInput.value);
      
        if (isNaN(height) || isNaN(weight)) {
          resultDiv.innerHTML = "Please enter valid height and weight.";
          return;
        }
      
        var bmi = weight / ((height / 100) ** 2);
        var category = "";
      
        if (bmi < 18.5) {
          category = "Underweight (IMT < 18,5 kg/m²)";
          
        } else if (bmi < 25) {
          category = "Normal Range (IMT 18,5 – 25 kg/m²)";
        } else if (bmi < 30) {
          category = "Overweight at Risk (IMT 25 – 30 kg/m²)";
        } else if (bmi < 35) {
          category = "Obese 1(IMT 31 - 35 kg/m²)"
           } else if (bmi < 40) {
          category = "Obese 2(IMT 36 - 40 kg/m²)"
        } else {
          category = "Obese 3(IMT > 40 kg/m²)";
        }
      
        resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " <br>(" + category + ")";
      }