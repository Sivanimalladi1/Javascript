const elements = document.querySelectorAll(".accordion-header").forEach((button) => {
    button.addEventListener("click", () => {
            const accordionItem = button.parentElement;
            const accordionContent = button.nextElementSibling;
            console.log(accordionContent);

            //Get current height of content for smooth animation
            const contentHeight = accordionContent.querySelector('.accordion-body').offsetHeight;
            console.log(contentHeight);
            if(accordionItem.classList.contains("active")) {
                //close it
                accordionContent.style.maxHeight = "0px";
                accordionItem.classList.remove("active");
                accordionContent.classList.remove("active");
            } 
            else{
                //close any open items
                document.querySelectorAll(".accordion-item.active").forEach((item) => {
                    item.classList.remove("active");
                    item.querySelector(".accordion-content").style.maxHeight = "0px";
                    item.querySelector(".accordion-content").classList.remove("active");
                });
                //open the clicked item
                accordionContent.style.maxHeight = contentHeight + "px";
                accordionItem.classList.add("active");
                accordionContent.classList.add("active");
            }
            
    })
});
