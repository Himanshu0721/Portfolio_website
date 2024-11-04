const scrollRevealOption = {
    distance: "200px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header_container img", {
    ...scrollRevealOption,
    origin: "right",
  });
  
  ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header_container .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".header_container a", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  // service container
  ScrollReveal().reveal(".service_card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // projects container
  ScrollReveal().reveal(".project_card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // banner container
  ScrollReveal().reveal(".banner_content", scrollRevealOption);
  
  // blogs container
  ScrollReveal().reveal(".blogs_card", {
    ...scrollRevealOption,
    interval: 500,
  });


  // TEstinh]

  const form = document.getElementById('form-data');
const submitMsg = document.getElementById('submit-popup');

function formSubmit(event) {
    event.preventDefault(); 

    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach((field) => {
        console.log(field);
        if (field.value.trim() === '') {
            field.style.border = '1px solid red !important';
            isValid = false;
        } else {
            field.style.border = ''; 
        }
    });
    if (isValid) {
        submitMsg.style.display = 'flex';
        setTimeout(() => {
            form.submit(); 
            form.reset();
            submitMsg.style.display = 'none';
        }, 2000);
    } else {
        submitMsg.style.display = 'none';
    }
}

document.getElementById('header').addEventListener('click', function () {
    document.getElementById('h1').scrollIntoView({ behavior: 'smooth' });
});
function toggleMenu() {
  const navList = document.getElementById("navList");
  navList.classList.toggle("show");
}
