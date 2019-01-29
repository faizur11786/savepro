function url_sq() {
    if (sessionStorage.getItem("user_mail") == null) {
        document.querySelector("#user_pic_box").style.display = "none";
        document.body.style.background = "red";
        document.body.innerHTML = "<center><h1 style='font-family: sans-serif; margin-top: 50px; color:#fff;'>Don't Copy Paste URL</h1></center>";
    }
}
url_sq()


function img_upload() {
    var pic_input = document.querySelector("#upl_btn");
    if (pic_input.files[0].size < 1000000) {
        var freader = new FileReader();
        freader.readAsDataURL(pic_input.files[0]);
        freader.onloadend = function (event) {
            var save_img = document.querySelector(".save_img");
            var img_url = event.target.result;
            var pic_out = document.querySelector(".user__pic");
            pic_out.style.background = "url(" + event.target.result + ")";
            pic_out.style.backgroundSize = "cover";
            pic_out.style.border = "none";
            save_img.onclick = function () {
                localStorage.setItem(sessionStorage.getItem("user_mail") + "img_url", img_url);
                document.querySelector("#user_pic_box").style.display = "none";
            }
        }
    } else {
        alert("Images Size 800kb only");
    }
}



function user_pro_name() {
    var user_name = document.querySelector(".user_name");
    var find_email = sessionStorage.getItem("user_mail");
    var user_det = localStorage.getItem(find_email);
    var user_data = JSON.parse(user_det);
    user_name.innerHTML = atob(user_data.name);
}
user_pro_name()





function remove_pic_upload() {
    if (localStorage.getItem(sessionStorage.getItem("user_mail") + "img_url") != null) {
        document.querySelector("#user_pic_box").style.display = "none";
    }
}
remove_pic_upload();