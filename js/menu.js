function setCookie(e,t,n){
    var r=new Date;
    r.setDate(r.getDate()+n);
    var i=escape(t)+(n==null?"":"; expires="+r.toUTCString());
    document.cookie=e+"="+i
}
function getCookie(e){
    var t,n,r,i=document.cookie.split(";");
    for(t=0;t<i.length;t++){
        n=i[t].substr(0,i[t].indexOf("="));
        r=i[t].substr(i[t].indexOf("=")+1);
        n=n.replace(/^\s+|\s+$/g,"");
        if(n==e){
            return unescape(r)}
    }
}
$(document).ready(function(){
    $("#open").click(function(){
        var e=$("div#panel").is(":hidden");
        if(e)
        {
            $("div#panel").show();
            $('.floatthead').floatThead('reflow')
        }
        else 
        {
            $("div#panel").hide();
            $('.floatthead').floatThead('reflow')
        }
        setCookie("open",e,365)
        });
        var e=getCookie("open");
        if(e=="true"){
            $("div#panel").show();
            $('.floatthead').floatThead('reflow');
        }
        else{
            $("div#panel").hide();
            $('.floatthead').floatThead('reflow');
        }
})
