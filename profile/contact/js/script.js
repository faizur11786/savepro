window.onload = function () {
    var x = document.querySelector(".content_box").children.length;
    if (x == 0) {
        document.querySelector(".title_text").innerHTML = "Contact Not Found";

    }
}

function add_con() {
    var name = document.querySelector(".name").value;
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;
    if (name != "" && num1 != "" && num2 != "") {
        if (isNaN(num1)) {
            alert("Please Enter Mobile Number not (" + num1 + ")");
        } else {
            if (isNaN(num2)) {
                alert("Please Enter Mobile Number not (" + num2 + ")");
            }
        }
        if (num1.length !== 10) {
            alert("Please Enter 10 Digit of Number !");
        } else {
            if (num2.length !== 10) {
                alert("Please Enter 10 Digit of Number !");
            } else {
                var cont_data = {
                    name: name,
                    num1: num1,
                    num2: num2
                };
                var data_text = JSON.stringify(cont_data);
                localStorage.setItem(name + "contact", data_text);
                var form = document.querySelector("#form");
                form.reset();
                var msg = document.querySelector(".msg_box");
                msg.style.display = "block";

                setTimeout(function () {
                    msg.style.display = "none";
                    window.location = location.href;
                }, 2000);
            }
        }
    } else {
        alert("Please Enter Name & Number");
    }

}

function show_contact() {
    var i;
    for (i = 1; i <= localStorage.length; i++) {
        var keys = localStorage.key(i);
        if (keys.match("contact")) {
            var data = localStorage.getItem(keys);
            var json_text = JSON.parse(data);
            var cont = document.querySelector(".content_box");
            var fieldset = document.createElement("FIELDSET");
            var legend = document.createElement("LEGEND");
            var all_det = document.createElement("I");
            all_det.setAttribute("class", "fa fa-times");
            all_det.setAttribute("title", "Delete");
            var ol = document.createElement("OL");
            var li_one = document.createElement("LI");
            var li_two = document.createElement("LI");
            cont.appendChild(fieldset);
            fieldset.appendChild(legend);
            fieldset.appendChild(all_det);
            fieldset.appendChild(ol);
            ol.appendChild(li_one);
            ol.appendChild(li_two);
            legend.appendChild(document.createTextNode(json_text.name));
            li_one.appendChild(document.createTextNode(json_text.num1));
            li_two.appendChild(document.createTextNode(json_text.num2));
            all_cont_remove(keys, all_det)
        }
    }
}
show_contact()


function all_cont_remove(contact, del) {
    del.onclick = function () {
        var confi = confirm("Are You Sure?");
        if (confi == true) {
            var fieldset = this.parentElement;
            fieldset.remove();
            localStorage.removeItem(contact);
            setTimeout(function(){
                var x = document.querySelector(".content_box").children.length;
                if (x == 0) {
                    document.querySelector(".title_text").innerHTML = "Contact Not Found";
                }
            },500);
            
        }
    }
}