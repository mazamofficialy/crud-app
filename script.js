window.addEventListener("load", () => {
    const form = document.querySelector("#form");
    const name = document.querySelector("#name");
    const salary = document.querySelector("#salary");
    const phone = document.querySelector("#phone");
    const mainDiv = document.querySelector("#newDiv");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name1 = name.value;
        const salary1 = salary.value;
        const phone1 = phone.value;
        if (name1 == "" || salary1 == "" || phone1 == "") {
            window.alert("Fill the fields first")
        } else {
            const subDiv = document.createElement("div");
            subDiv.classList.add("content");


            const names = document.createElement("input");
            names.classList.add("text");
            names.type = "text";
            names.value = name1;
            names.setAttribute("readonly", "readonly");
            const salaries = document.createElement("input");
            salaries.classList.add("text");
            salaries.type = "text";
            salaries.value = salary1;
            salaries.setAttribute("readonly", "readonly");
            const phones = document.createElement("input");
            phones.classList.add("text");
            phones.type = "text";
            phones.value = phone1;
            phones.setAttribute("readonly", "readonly");

            const editButton = document.createElement("button");
            editButton.classList.add("edit");
            editButton.innerText = "Edit";

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete");
            deleteButton.innerText = "Delete";


            subDiv.appendChild(names);
            subDiv.appendChild(salaries);
            subDiv.appendChild(phones);
            subDiv.appendChild(editButton)
            subDiv.appendChild(deleteButton)


            mainDiv.appendChild(subDiv);

            name.value = ""
            salary.value = ""
            phone.value = ""

            editButton.addEventListener("click", () => {
                if (editButton.innerText == "Edit") {
                    editButton.innerText = "Save";
                    names.removeAttribute("readonly");
                    names.focus();
                    salaries.removeAttribute("readonly");
                    phones.removeAttribute("readonly");

                } else {
                    editButton.innerText = "Edit";
                    names.setAttribute("readonly", "readonly");
                    phones.setAttribute("readonly", "readonly");
                    salaries.setAttribute("readonly", "readonly");
                }
            })
            deleteButton.addEventListener("click", () => {
                subDiv.removeChild(names)
                subDiv.removeChild(salaries)
                subDiv.removeChild(phones)
                subDiv.removeChild(editButton)
                subDiv.removeChild(deleteButton)

            })
        }
    });
});

