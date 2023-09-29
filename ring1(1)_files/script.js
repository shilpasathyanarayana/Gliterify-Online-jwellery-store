let tablinks =documents.getElementsByClassName("tab-links");
let tabcontents =documents.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classLists.remove("active-link")
    }

    for(tabcontent of tabcontents){
        tabcontent.classLists.remove("active-tab")
    }
}