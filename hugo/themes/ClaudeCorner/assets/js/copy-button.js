document.querySelectorAll('pre > code[data-lang]').forEach(function (code) {
    var button = document.createElement('button');
    button.className = 'copy-code';
    button.type = 'button';

    var pre = code.parentNode;
    pre.insertBefore(button, code);

    button.addEventListener('click', function () {
        navigator.clipboard.writeText(code.textContent);
        button.className = 'copy-code copied';
        setTimeout(() => {button.className = 'copy-code';}, 1000);
    });
});