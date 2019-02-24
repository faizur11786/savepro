window.onload = function () {
    var x = document.querySelector(".min_card_content").children.length;
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
            // var cont = document.querySelector(".content_box");
            // var fieldset = document.createElement("FIELDSET");
            // var legend = document.createElement("LEGEND");
            // var all_det = document.createElement("I");
            // all_det.setAttribute("class", "fa fa-times");
            // all_det.setAttribute("title", "Delete");
            // var ol = document.createElement("OL");
            // var li_one = document.createElement("LI");
            // var li_two = document.createElement("LI");
            // cont.appendChild(fieldset);
            // fieldset.appendChild(legend);
            // fieldset.appendChild(all_det);
            // fieldset.appendChild(ol);
            // ol.appendChild(li_one);
            // ol.appendChild(li_two);
            // legend.appendChild(document.createTextNode(json_text.name));
            // // li_one.appendChild(document.createTextNode(json_text.num1));
            // // li_two.appendChild(document.createTextNode(json_text.num2));
            


            // v2

            var box = document.querySelector(".min_card_content");
            var cards = document.createElement("DIV");
            var name = document.createElement("H3");
            var delt_icon = document.createElement("I");
            var show_box = document.createElement("DIV");
            var ul = document.createElement("UL");
            var items_box1 = document.createElement("LI");
            // var items_box2 = document.createElement("LI");
            var icon_box1 = document.createElement("DIV");
            var mobi_icon = document.createElement("I");
            var text_box1 = document.createElement("DIV");
            var num1 = document.createElement("P");
            var num2 = document.createElement("P");
            // var icon_box2 = document.createElement("DIV");
            var mail_icon = document.createElement("I");
            // var text_box2 = document.createElement("DIV");
            var email = document.createElement("P");
            var edit_box = document.createElement("DIV");
            var notic_text = document.createElement("SPAN");
            var edit_icon = document.createElement("I");
            var save_icon = document.createElement("I");
            cards.setAttribute("class", "contact_cards");
            delt_icon.setAttribute("class", "fa fa-times");
            delt_icon.setAttribute("title", "Delete");
            show_box.setAttribute("class", "show_box");
            items_box1.setAttribute("class", "items_box");
            // items_box2.setAttribute("class", "items_box");
            icon_box1.setAttribute("class", "icon_box");
            mobi_icon.setAttribute("class", "fa fa-mobile");
            text_box1.setAttribute("class", "text_box");
            text_box1.setAttribute("id", "text_box");
            // icon_box2.setAttribute("class", "icon_box");
            mail_icon.setAttribute("class", "fa fa-envelope-o");
            // text_box2.setAttribute("class", "text_box");
            edit_box.setAttribute("class", "edit_box");
            save_icon.setAttribute("class", "fa fa-save");
            edit_icon.setAttribute("class", "fa fa-edit");
            

            box.appendChild(cards);
            cards.appendChild(name);
            cards.appendChild(delt_icon);
            cards.appendChild(show_box);
            show_box.appendChild(ul);
            ul.appendChild(items_box1);
            // ul.appendChild(items_box2);
            ul.appendChild(edit_box);


            items_box1.appendChild(icon_box1);
            items_box1.appendChild(text_box1);
            icon_box1.appendChild(mobi_icon);
            text_box1.appendChild(num1);
            text_box1.appendChild(num2);


            // items_box2.appendChild(icon_box2);
            // items_box2.appendChild(text_box2);
            // icon_box2.appendChild(mail_icon);
            // text_box2.appendChild(email);

            edit_box.appendChild(notic_text);
            edit_box.appendChild(save_icon);
            edit_box.appendChild(edit_icon);
            save_icon.style.display = "none";

            name.appendChild(document.createTextNode(json_text.name));
            num1.appendChild(document.createTextNode(json_text.num1));
            num2.appendChild(document.createTextNode(json_text.num2));
            notic_text.appendChild(document.createTextNode("Successfully Save"));
            notic_text.style.display = "none";
            all_cont_remove(keys, delt_icon);
            edit_contact(keys,edit_icon,save_icon,notic_text);
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
            document.cookie = contact+"="+localStorage.getItem(contact)+";max-age:2592000";
            localStorage.removeItem(contact);
            setTimeout(function () {
                var x = document.querySelector(".content_box").children.length;
                if (x == 0) {
                    document.querySelector(".title_text").innerHTML = "Contact Not Found";
                }
            }, 500);

        }
    }
}


function edit_contact(contant,edit_btn,save_btn,not_text){
    edit_btn.onclick = function(){
        save_btn.style.display = "block";
        var li = this.parentElement;
        var ul = li.parentElement;
        var box = ul.parentElement;
        var main_box = box.parentElement;
        var h = main_box.getElementsByTagName("H3");
        h[0].setAttribute("contenteditable","true");
        h[0].focus();
        var text_elm = ul.getElementsByTagName("P");
        var i;
        for(i=0; i<text_elm.length; i++){
            text_elm[i].setAttribute("contenteditable","true");
        }
        var old_name;
        var new_name;
        h[0].onclick = function () {
            old_name = this.innerHTML;
            // alert(old_name);
        }
        h[0].onblur = function () {
            new_name = this.innerHTML;
            // alert(new_name);
        }


        var old_number = [];
        var new_number = [];
        text_elm[0].onclick = function () {
            old_number[0] = this.innerHTML;
        }
        text_elm[1].onclick = function () {
            old_number[1] = this.innerHTML;
        }


        text_elm[0].onblur = function () {
            new_number[0] = this.innerHTML;
        }
        text_elm[1].onblur = function () {
            new_number[1] = this.innerHTML;
        }

        save_btn.onclick = function () {
            var edited_date = {name:new_name==undefined?h[0].innerHTML:new_name,num1:new_number[0]==undefined?text_elm[0].innerHTML:new_number[0],num2:new_number[0]==undefined?text_elm[1].innerHTML:new_number[0]};
            var edited_text = JSON.stringify(edited_date);
            var key_name = localStorage.getItem(contant);
            localStorage.setItem(contant,key_name.replace(key_name,edited_text));
            not_text.style.display = "block";
            setTimeout(function(){
                not_text.style.display = "none";
            },2000);
        }

        
    }

}

function search_contact(input) {
    var keyword = input.value.toUpperCase();
    var cont = document.getElementById("cont")
    var element = cont.getElementsByTagName("H3");
    var i;
    for (i = 0; i < element.length; i++) {
        if (element[i].innerHTML.toUpperCase().indexOf(keyword) != -1) {
            element[i].parentElement.style.display = "";
        } else {
            element[i].parentElement.style.display = "none";
        }
    }
}


function restore(){
    var page = document.querySelector(".restore_box");
    page.style.display = "block";
    page.style.width = "70%";
    var close_btn = document.querySelector("#close_btn");
    close_btn.onclick = function () { 
        page.style.display = "none";
        page.style.width = "0";
    }

    var del_notic = document.getElementById("del_notic");
    var table = document.getElementById("table_box");
    if(document.cookie.length != 0){
        del_notic.innerHTML = "Your Deleted Contacts";
        var cookie_sep = document.cookie.split(";");
        alert(cookie_sep[0]);
    }
    else{
        del_notic.innerHTML = "No Deleted Contacts";
    }

}






function log_out(){
    var conf = confirm("Are You Sure?");

    if(conf==true){
        sessionStorage.clear();
        setTimeout(function(){
            window.location = "../../../index.html";
        },2000)
    }
}