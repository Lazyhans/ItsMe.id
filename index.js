
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
          category = "Underweight (IMT < 18,5 kg/m²)\nResiko Penyakit yang terkait:<br>🔹 Anemia <br>🔹 Osteoporosis<br>🔹 Gangguan sistem kekebalan tubuh<br>🔹 Amenorea & infertilitas<br>🔹 Peningkatan risiko depresi<br>🔹 Risiko kematian lebih tinggi<br>Sarapan:<br>🍞 Roti gandum + selai kacang + pisang<br>🥛 Susu full cream<br>🍳 Telur dadar dengan keju<br>Snack Pagi:<br>🥑 Smoothie alpukat + madu<br>🥜 Segenggam kacang almond<br>Makan Siang:<br>🍚 Nasi merah<br>🍗 Ayam panggang madu<br>🥦 Tumis brokoli + wortel<br>🥭 Jus mangga<br>Snack Sore:<br>🧀 Yoghurt full cream + granola<br>🍫 Dark chocolate (70%)<br>Makan Malam:<br>🍝 Pasta dengan saus daging dan keju parmesan<br>🥗 Salad alpukat dan kacang-kacangan<br>🥛 Susu full cream";
          
        } else if (bmi < 25) {
          category = "Normal Range (IMT 18,5 – 25 kg/m²)<br>Sarapan:<br>🥣 Oatmeal + madu + buah-buahan (strawberry, pisang)<br>🥚 Telur rebus<br>☕ Teh hijau / air putih<br>Snack Pagi:<br>🍏 Apel + segenggam kacang almond<br>Makan Siang:<br>🍚 Nasi merah<br>🐟 Ikan bakar<br>🥗 Tumis kangkung dan tahu<br>🍊 Jeruk<br>Snack Sore:<br>🧀 Greek yoghurt + biji chia<br>Makan Malam:<br>🥗 Sup ayam + sayuran<br>🥖 Roti gandum panggang<br>🥑 Alpukat slice";
        } else if (bmi < 30) {
          category = "Overweight at Risk (IMT 25 – 30 kg/m²)<br>Resiko Penyakit yang terkait:<br>🔹 Hipertensi (tekanan darah tinggi)<br>🔹 Resistensi insulin & prediabetes<br>🔹 Penyakit jantung coroner<br>🔹 Osteoartritis<br>🔹 Sleep apnea<br>🔹 Fatty liver (hati berlemak non-alkoholik/NAFLD)<br>🔹 Peningkatan risiko stroke<br>Sarapan:<br>🍳 Omelet sayur (tomat, bayam, jamur)<br>🍞 Roti gandum dengan alpukat<br>☕ Teh hijau tanpa gula/ menggukan penganti gula daun stevia<br>Snack Pagi:<br>🍐 Pir + segenggam kacang mete<br>Makan Siang:<br>🥗 Nasi merah dalam porsi kecil<br>🍗 Ayam panggang dengan rempah<br>🥦 Sayur kukus (wortel, brokoli)<br>🍹 Infused water lemon<br>Snack Sore:<br>🧃 Smoothie bayam + pisang + susu almond<br>Makan Malam:<br>🐟 Sup ikan bening<br>🥗 Salad sayur dengan minyak zaitun";
        } else {
          category = "Obese (IMT > 30 kg/m²)<br>Resiko Penyakit yang terkait:🔹 Diabetes tipe 2<br>🔹 Penyakit jantung koroner & gagal jantung<br>🔹 Hipertensi kronis<br>🔹 Stroke<br>🔹 Kanker<br>🔹 Sindrom metabolic<br>🔹 Sleep apnea berat<br>🔹 Gangguan ginjal<br>🔹 Demensia & Alzheimer<br>🔹 Masalah psikologis<br>Sarapan:<br>🥚 Telur rebus + tomat segar<br>🥑 Alpukat slice<br>☕ Teh hijau tanpa gula/menggukan penganti gula daun stevia<br>Snack Pagi:<br>🍎 Apel + biji chia<br>Makan Siang:<br>🥗 Nasi merah dalam porsi kecil<br>🐟 Ikan kukus dengan lemon<br>🥦 Tumis sayur hijau tanpa minyak berlebih<br>🍹 Air putih infused lemon<br>Snack Sore:<br>🥒 Smoothie timun + jeruk nipis<br>Makan Malam:<br>🍲 Sup ayam tanpa kulit<br>🥗 Salad sayur hijau dengan biji-bijian";
        }
      
        resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " <br>(" + category + ")";
      }