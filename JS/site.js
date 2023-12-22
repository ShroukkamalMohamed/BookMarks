// ^====================>>>>>Elements<<<<<<<<<=======================
var bookMarkName = document.getElementById("bookmarkname");
var bookMarkUrl = document.getElementById("bookmarkurl");
var bookmarkTableBody = document.getElementById("bookmarkTableBody");
var deletebtn = document.getElementById("deletebtn");
var visitbtn = document.getElementById("visitbtn");
var btnsubmit = document.getElementById("btnsubmit");
var bookmarkname = document.getElementById("bookmarkname"); 
var deletemodal = document.getElementById('deletemodal');
var btnclosedeleteMassege = document.getElementById('btnclosedeleteMassege');
var Addmodal = document.getElementById('Addmodal');
var btncloseAddMassege = document.getElementById('btncloseAddMassege');
var bookmarkurl = document.getElementById("bookmarkurl");
var modal = document.getElementById('modal');
// *====================>>>>>Variables<<<<<<<<<======================
var bookMarkList = [{ bookMarkName: `Youtube`, bookMarkUrl: `https://www.youtube.com/` }];
DisplayBookMarks(bookMarkList);
var vaildSiteName = false;
var vaildUrl = false;
// ~====================>>>>>Function<<<<<<<<<=======================
function DisplayBookMarks(bookMarklst) {

    var tbldata = "";
    for (var i = 0; i < bookMarklst.length; i++) {
        tbldata += `<tr>
       <td>${i + 1}</td>
       <td>${bookMarklst[i].bookMarkName}</td>
       <td>${bookMarklst[i].bookMarkUrl}</td> 
       <td> <button class="btn" id="visitbtn" onclick="visitSiteClick(${i})" ><i class="fa-solid fa-eye"></i></button></td>
       <td> <button class="btn" id="deletebtn" onclick="deleteClick(${i})"  ><i class="fa-regular fa-trash-can"></i></button></td>
       </tr>
       `;
    }
    bookmarkTableBody.innerHTML = tbldata;

};
bookmarkname.addEventListener("input", function formValidation() {

    var siteNameValidation = /^([a-z]|[A-Z]){3,}$/;
    var valid = siteNameValidation.test(bookmarkname.value);
    if (valid) {
        bookmarkname.classList.remove("is-invalid");
        bookmarkname.classList.add("is-valid");
        vaildSiteName = true;
    } else {
        bookmarkname.classList.remove("is-valid");
        bookmarkname.classList.add("is-invalid");
        vaildSiteName = false;
    }
})
bookmarkurl.addEventListener("input", function formValidation() {

    var urlValidation = /^(https?:\/\/)?(w{3}\.)?\w+\.com*$/;
    var valid = urlValidation.test(bookmarkurl.value);
    if (valid) {
        bookmarkurl.classList.remove("is-invalid");
        bookmarkurl.classList.add("is-valid");
        vaildUrl = true;
    } else {
        bookmarkurl.classList.remove("is-valid");
        bookmarkurl.classList.add("is-invalid");
        vaildUrl = false;
    }
})
function clear() {
    bookmarkurl.value = "";
    bookmarkname.value = "";
}
//? ==================>>>>>Events<<<<<<<<<<=========================
btnsubmit.addEventListener("click", function insertNewSite() {
    if (vaildSiteName && bookMarkUrl.value && bookMarkName.value && vaildUrl) {
        var bookmark = {
            bookMarkName: bookMarkName.value,
            bookMarkUrl: bookMarkUrl.value,
        };
        bookMarkList.push(bookmark);
        DisplayBookMarks(bookMarkList);
        clear();
        Addmodal.classList.remove("d-none");
        Addmodal.classList.add("d-flex");
    }
    else {
        modal.classList.remove("d-none");
        modal.classList.add("d-flex");
    }
})
btnclose.addEventListener("click", function () {
    modal.classList.remove("d-flex");
    modal.classList.add("d-none");

})
btnclosedeleteMassege.addEventListener("click", function () {
    deletemodal.classList.remove("d-flex");
    deletemodal.classList.add("d-none");

})
btncloseAddMassege.addEventListener("click", function () {
    Addmodal.classList.remove("d-flex");
    Addmodal.classList.add("d-none");

})
function visitSiteClick(index) {
    var url = (bookMarkList[index].bookMarkUrl);
    window.open(url, '_blank').focus();
};
function deleteClick(index) {
    console.log(bookMarkList[index]);
    bookMarkList.splice(index, 1);
    DisplayBookMarks(bookMarkList);
    deletemodal.classList.remove("d-none");
    deletemodal.classList.add("d-flex");
}


