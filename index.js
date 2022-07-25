const telephone = document.querySelector(".telephone");
const telephoneValue = Number(telephone).value;

const mtn_image = document.querySelector(".mtn_image");
const glo_image = document.querySelector(".glo_image");
const etisalat_image = document.querySelector(".etisalat_image");
const airtel_image = document.querySelector(".airtel_image");
const wrong_image = document.querySelector(".wrong_image");

const mtn = [0803, 0806, 0703, 0706, 0813, 0816, 0810, 0814, 0903];
const glo = [0805, 0807, 0705, 0815, 0811, 0905];
const airtel = [0802, 0808, 0812, 0701, 0902];
const etisalat = [0809, 0818, 0817, 0909];


telephone.addEventListener("keyup", function () {
    console.log(telephone.value);
    console.log(typeof telephone.value);


    if (mtn.includes(Number(telephone.value.slice(0, 4)))) {
        mtn_image.classList.remove("hidden");
        glo_image.classList.add("hidden");
        airtel_image.classList.add("hidden");
        etisalat_image.classList.add("hidden");
        wrong_image.classList.add("hidden");


    } else if (glo.includes(Number(telephone.value.slice(0, 4)))) {
        glo_image.classList.remove("hidden");
        mtn_image.classList.add("hidden");
        airtel_image.classList.add("hidden");
        etisalat_image.classList.add("hidden");
        wrong_image.classList.add("hidden");

        
    } else if (airtel.includes(Number(telephone.value.slice(0, 4)))) {
        airtel_image.classList.remove("hidden");
        mtn_image.classList.add("hidden");
        glo_image.classList.add("hidden");
        etisalat_image.classList.add("hidden");
        wrong_image.classList.add("hidden");

        
    } else if (etisalat.includes(Number(telephone.value.slice(0, 4)))) {
        etisalat_image.classList.remove("hidden");
        mtn_image.classList.add("hidden");
        airtel_image.classList.add("hidden");
        glo_image.classList.add("hidden");
        wrong_image.classList.add("hidden");

        
    } else {
        wrong_image.classList.remove("hidden");
        mtn_image.classList.add("hidden");
        airtel_image.classList.add("hidden");
        glo_image.classList.add("hidden");
        etisalat_image.classList.add("hidden");
    }
});

