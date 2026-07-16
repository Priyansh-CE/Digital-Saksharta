/* ==========================================================
   Digital Saksharta
   Main JavaScript
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Loader
    =========================== */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 700);
    });

    /* ===========================
       Dark Mode
    =========================== */

    const darkBtn = document.getElementById("darkMode");

    // Load saved theme
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
        darkBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }

    darkBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

            darkBtn.innerHTML=`<i class="fa-solid fa-sun"></i>`;

        }

        else{

            localStorage.setItem("theme","light");

            darkBtn.innerHTML=`<i class="fa-solid fa-moon"></i>`;

        }

    });

    /* ===========================
       Scroll To Top
    =========================== */

    const scrollBtn=document.getElementById("scrollTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>300){

            scrollBtn.classList.add("show");

        }

        else{

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ===========================
       Animated Counter
    =========================== */

    const counters=document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const updateCounter=()=>{

            const target=+counter.dataset.target;

            const count=+counter.innerText;

            const increment=target/100;

            if(count<target){

                counter.innerText=Math.ceil(count+increment);

                setTimeout(updateCounter,20);

            }

            else{

                counter.innerText=target+"+";

            }

        }

        updateCounter();

    });

    /* ===========================
       Navbar Background on Scroll
    =========================== */

    const header=document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>50){

            header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

            header.style.background="rgba(255,255,255,.90)";

            if(document.body.classList.contains("dark")){

                header.style.background="rgba(15,23,42,.95)";

            }

        }

        else{

            header.style.boxShadow="none";

            header.style.background="rgba(255,255,255,.75)";

            if(document.body.classList.contains("dark")){

                header.style.background="rgba(15,23,42,.85)";

            }

        }

    });

    /* ===========================
       Smooth Active Navigation
    =========================== */

    const navLinks=document.querySelectorAll(".nav-links a");

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.forEach(nav=>nav.classList.remove("active"));

            link.classList.add("active");

        });

    });

    /* ===========================
       Welcome Toast
    =========================== */

    setTimeout(()=>{

        showToast("👋 Welcome to Digital Saksharta!");

    },1200);

});

/* ====================================
   Toast Notification
==================================== */

function showToast(message){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerText=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },500);

    },3000);

}
