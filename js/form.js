document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const offcanvasCloseButton = document.querySelector("[data-bs-dismiss='offcanvas']");

    const closeOffcanvas = () => {
        // Close the offcanvas element
        if (offcanvasCloseButton) {
            offcanvasCloseButton.click();
        }
    };


    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.querySelector(".select-selected").textContent,
            budget: document.querySelector(".select-selected").textContent,
            car: document.getElementById("car").value,
            description: document.getElementById("description").value,
            // acceptance: document.querySelector("input[name='acceptance']").checked,
        };

        try {
            const response = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:-_Ic3UWX/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                alert(" Something went wrong , check Your Fields , Email Specially!")
                throw new Error("Network response was not ok " + response.data.message)

            }

            const responseData = await response.json();
            console.log("Success:", responseData);
            alert("submitted Successfully!")
            closeOffcanvas();

        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    });
});
