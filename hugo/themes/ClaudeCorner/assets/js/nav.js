document.addEventListener("keydown", (e) => {
    switch (e.which) {
      case 37: // left
        var a = document.querySelector("a.prev");
        if (a)
            window.location.href = a.href;
        break;

      case 39: // right
        var a = document.querySelector("a.next");
        if (a)
            window.location.href = a.href;
        break;
    }
    e.preventDefault();
  });
