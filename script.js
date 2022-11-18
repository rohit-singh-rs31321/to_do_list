window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_div = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
//checking if input field is empty throw alert message
    if (!task) {
      alert("PLEASE FILL OUT THE TASK !!!");
      return;
    }
//creating div and adding classname to it.
    const task_div = document.createElement("div");
    task_div.classList.add("task");

    const task_content_div = document.createElement("div");
    task_content_div.classList.add("content");
	
//adding the div to child div
    task_div.appendChild(task_content_div);

    const task_input_text = document.createElement("input");
    task_input_text.classList.add("text");
    task_input_text.type = "text";
    task_input_text.value = task;
    task_input_text.setAttribute("readonly", "readonly");

    task_content_div.appendChild(task_input_text);

    const task_actions_div = document.createElement("div");
    task_actions_div.classList.add("actions");

    const task_edit_button = document.createElement("button");
    task_edit_button.classList.add("edit");
    task_edit_button.innerText = "Edit";

    const task_delete_button = document.createElement("button");
    task_delete_button.classList.add("delete");
    task_delete_button.innerText = "Delete";

    task_actions_div.appendChild(task_edit_button);
    task_actions_div.appendChild(task_delete_button);

    task_div.appendChild(task_actions_div);

    list_div.appendChild(task_div);

    // after submit task clear input field
	input.value = '';


    task_edit_button.addEventListener("click", (e) => {
      if (task_edit_button.innerText.toLowerCase() == "edit") {
        task_edit_button.innerText = "Save";
        task_input_text.removeAttribute("readonly");
        task_input_text.focus();
      } else {
        task_edit_button.innerText = "Edit";
        task_input_text.setAttribute("readonly", "readonly");
      }
    });

    task_delete_button.addEventListener("click", (e) => {
      var del = confirm("are you really want to delete");
      if (del == false) {
        return false;
      } else {
        list_div.removeChild(task_div);
      }
    });
	
  });
});
