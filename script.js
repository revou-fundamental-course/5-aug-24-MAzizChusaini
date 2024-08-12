function calculateBMI() {
  const gender = document.querySelector('input[name="gender"]:checked');
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    alert("Please enter valid values.");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";
  let tlk = "";

  if (bmi < 18.5) {
    category = "Kekurangan Berat Badan";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Berat Badan Normal";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Berat Badan Lebih";
  } else {
    category = "Obesitas";
  }

  tlk = `Anda Memiliki ${category}`;

  document.querySelector(".bmi-status").textContent = category;
  document.querySelector(".bmi-value").textContent = bmi;
  document.querySelector(".bmi-tlk").textContent = tlk;
  document.getElementById("result").style.display = "block";

  if (bmi < 18.5) {
    document.querySelector(".bmi-range").textContent =
      "Hasil BMI Anda di bawah 18.5";
  } else if (bmi > 18 && bmi <= 20) {
    document.querySelector(".bmi-range").textContent =
      "Hasil BMI Anda di antara 18 dan 20 ";
  } else if (bmi > 20 && bmi <= 22) {
    document.querySelector(".bmi-range").textContent =
      "Hasil BMI Anda di antara 20 dan 22 ";
  } else if (bmi > 22 && bmi <= 24) {
    document.querySelector(".bmi-range").textContent =
      "Hasil BMI Anda di antara 22 dan 24 ";
  } else if (bmi > 24 && bmi <= 26) {
    document.querySelector(".bmi-range").textContent =
      "Hasil BMI Anda di antara 24 dan 26 ";
  } else if (bmi > 26 && bmi <= 28) {
    document.querySelector(".bmi-range").textContent =
      "Hasil BMI Anda di antara 26 dan 28 ";
  } else if (bmi > 28 && bmi <= 30) {
    document.querySelector(".bmi-range").textContent =
      "Hasil BMI Anda di antara 28 dan 30 ";
  } else if (bmi > 30) {
    document.querySelector(".bmi-range").textContent =
      "Hasil BMI Anda di atas 30.0 ";
  }

  let advice = "";
  if (category === "Kekurangan Berat Badan") {
    advice =
      "Anda berada dalam kategori Underweight. Jika anda berada di dalam kategori ini, Disarankan untuk menambah berat badan dengan diet yang sehat, rutin berolahraga, dan mengkonsumsi makanan yang kaya akan nutrisi.";
  } else if (category === "Berat Badan Normal") {
    advice =
      "Anda berada dalam kategori Normalweight. Tetap jaga pola makan dan olahraga teratur.";
  } else if (category === "Berat Badan Lebih") {
    advice =
      "Anda berada dalam kategori Overweight. Jika anda berada di dalam kategori ini, anda di anjurkan mempertimbangkan untuk menurunkan berat badan sampai ke batas normal, melalui diet yang sehat, memperhitungkan kalori anda perharinya dan berolahraga.";
  } else if (category === "Obesitas") {
    advice =
      "Anda berada dalam kategori Obesity. Jika anda berada di dalam kategori ini, Konsultasikan dengan dokter untuk rencana penurunan berat badan yang aman.";
  }
  document.querySelector(".bmi-advice").textContent = advice;
  document.querySelectorAll(".hidden").forEach((button) => {
    button.style.display = "block";
  });
}

function resetForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("age").value = "";

  const genderRadios = document.querySelectorAll('input[name="gender"]');
  genderRadios.forEach((radio) => (radio.checked = false));

  document.querySelector(".bmi-value").textContent = "0";
  document.querySelector(".bmi-status").textContent = "";
  document.querySelector(".bmi-range").textContent = "";
  document.querySelector(".bmi-tlk").textContent = "";
  document.querySelector(".bmi-advice").textContent = "";

  document.getElementById("result").style.display = "block";

  document.querySelectorAll(".hidden").forEach((button) => {
    button.style.display = "none";
  });
}

function downloadResult() {
  const resultText = `Kategori: ${
    document.querySelector(".bmi-status").textContent
  }\nBMI: ${document.querySelector(".bmi-value").textContent}`;

  const blob = new Blob([resultText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "BMI_Result.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
