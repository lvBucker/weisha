 console.log(window.location.href);
 
 function getUrlParam(name)
{
var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
var r = window.location.search.substr(1).match(reg);  //匹配目标参数
if (r!=null) return unescape(r[2]); return null; //返回参数值
} 

(function($){
$.getUrlParam
 = function(name)
{
var reg
 = new RegExp("(^|&)"+
 name +"=([^&]*)(&|$)");
var r
 = window.location.search.substr(1).match(reg);
if (r!=null) return unescape(r[2]); return null;
}
});

var mtn = getUrlParam('mtn');
var loginId = getUrlParam('loginId');
var fromType = getUrlParam('fromType');
var mobile = getUrlParam('mobile');
var buildID = getUrlParam('buildID');
var loc = getUrlParam('loc');
var versionID = getUrlParam('versionID');
