const checkboxes = document.querySelectorAll("#introduction input"); // return the node list of all checkboxes
const checkboxes_length = checkboxes.length; // return number of checkboxes

const gif_change = document.querySelector("#images_gif");
const music_change = document.querySelector("#images_music");

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("click", function() {
        for (var i = 0, checkboxes_counter = 0; i < checkboxes_length; i++) {
            if (checkboxes[i].checked) {
                checkboxes_counter++;
            }
        }

        if (checkboxes_length == checkboxes_counter) {
            document.querySelector("#images_field").style.display = "block";
            music_change.play();

            const gif_list = ["../images/woo_yeah.gif", "../images/bunch_of_kangs.gif", "../images/babydonthurt.gif", "../images/sus_twerk.gif"];

            for (let i = 0; i < gif_list.length; i++) {
                setTimeout(function() {
                    gif_change.src = gif_list[i];
                }, 5000 + (i * 5000));
            }
        }
    });
});

