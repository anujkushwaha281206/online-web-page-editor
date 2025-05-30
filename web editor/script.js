function start(){
    let html = document.getElementById("html").value;
    let css = "<style>" + document.getElementById("css").value + "</style>";
    let js =document.getElementById("js");
    document.getElementById("output").contentDocument.body.innerHTML = html + css;
    document.getElementById("output").contentWindow.eval(js.value);
}