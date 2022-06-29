(function() {
  /**
   * Create a new DOM element.
   * @param {String} markup_name
   * @param {String} text
   * @param {HTMLElement} parent
   * @param {Array|Object} attributes
   * @returns HTMLElement
   */
  function createMarkup(markup_name, text, parent, attributes = []) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);

    if (Array.isArray(attributes)) {
      attributes.forEach(function(attr) {
        markup.setAttribute(attr.name, attr.value);
      });
    } else {
      if (attributes && attributes.hasOwnProperty("name")) {
        markup.setAttribute(attributes.name, attributes.value);
      }
    }

    return markup;
  }

  /**
   * Create a new task.
   * @param {string} name
   */
  function createTask(name) {
    const div = createMarkup(
        "div",
        "",
        sectionNewTask,
        {name: "style", value: "border: 1px solid black; padding: 1rem;" +
              " margin: 1rem 0"}
    );
    const div_task = createMarkup(
        "div",
        name,
        div,
        [
          {name: "style", value: "padding-right: 10em; display: inline-block"}
        ]
    )

    const btnValidate = createMarkup(
        "button",
        "Validate",
        div,
        [
          {name: "type", value: "button"},
          {name:"style", value: "margin-right: 1rem"}
        ]
    );

    const btnDelete = createMarkup(
        "button",
        "Delete",
        div,
        {name: "type", value: "button"}
         );

    btnValidate.onclick = function(event) {
      validateTask(event.target, div);
    }
  }

  /**
   * Validate a task.
   * @param {HTMLElement} taskBtn
   * @param {HTMLElement} parent
   */
  function validateTask(taskBtn, parent) {
    taskBtn.previousElementSibling.style.textDecoration = "line-through";
    taskBtn.hidden = true;

    const btnInvalidate = createMarkup(
        "button",
        "Invalidate",
        parent,
        [
          {name: "type", value: "button"},
          {name:"style", value: "margin-right: 1rem"}
        ]
    );

    parent.insertBefore(btnInvalidate, taskBtn.nextElementSibling);

    sectionValidateTask.insertBefore(parent, null);
  }

  const main  = createMarkup("main", "", document.body);
  const form = createMarkup("form", "", main);

  const labelInput = createMarkup(
      "label",
      "Please enter name of task: ",
      form,
      [
        { name: "for", value: "taskname" },
      ]);
  const input = createMarkup(
      "input",
      "",
      form,
      [
      { name: "type", value: "text" },
      { name: "name", value: "task_name" },
      { name: "placeholder", value: "Name of task" },
      { name: "id", value: "taskname" },
  ]);

  const button = createMarkup(
      "button",
      "Add task",
      form,
      {name: "type", value: "button"}
  );

  const sectionNewTask = createMarkup(
      "section",
      "",
      main
  );

  const sectionValidateTask = createMarkup(
      "section",
      "",
      main,
      {name: "style", value: "margin-top: 2rem"}
  );

  button.onclick = function (event) {
    createTask(event.target.previousSibling.value)
  }
})();
