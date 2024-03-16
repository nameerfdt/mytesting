const todaysDate = new Date();
const currentDay = todaysDate.getDay();

if (currentDay >= 1 && currentDay <=3){
    document.querySelector('#banner').style.display = 'block';
} else {
    document.querySelector('#banner').style.display = 'none';
}

const closeBanner = document.querySelector("#closeBanner");
closeBanner.addEventListener("click", () => {
        banner.style.display = "none";
    }
);