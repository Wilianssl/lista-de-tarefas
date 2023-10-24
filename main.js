$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        const taskText = $('#task-input').val().trim();
        
        if (taskText === '') {
            alert('Por favor, insira uma tarefa!');
            return;
        }
        
        const $taskList = $('#task-list');
        const $newTask = $('<li>').text(taskText);

        $newTask.click(function() {
            $(this).css('text-decoration', 'line-through');
        });

        $taskList.append($newTask);
        $('#task-input').val('');
    });
});