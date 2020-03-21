var docUrl = document.URL;

if(docUrl.indexOf("w=1")==-1){
    var redir="";
    if(docUrl.indexOf("?")==-1){
        redir = docUrl + "?w=1"
    }
    else{
        redir = docUrl + "&w=1"
    }
    window.location = redir;
}
