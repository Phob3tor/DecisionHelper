
$(function() {
    const addButton = $("#addBtn");
    const taskDiv = $("#taskDiv");
    const input = $("#addInp");



    addButton.on("click", () => {   
        if (input.val() === "") {
            alert("Please enter something!");
            return;
        }
        taskDiv.append(`<div class="task"><p class="task__text">${input.val()}</p><div class="task__outer-bar"><div class="task__bar"></div></div><p class="task__percentage">0%</p></div>`);
        input.val("");
    });
});