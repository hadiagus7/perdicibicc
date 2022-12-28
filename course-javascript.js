$(document).ready(function(){
$(".sidebar").height($(".mainbar").height()).css
$(".logout").width($(".sidebar").width()).css		  
//fungsi responsive
if ($(window).width() <= 751) { 
responsiveView();
}
});
$( window ).resize(function() {
if ($(".btn-menu-toggle").hasClass("bi-list-ul")) {
if ($(window).width() >= 751) { 
$(".sidebar-toggle-md").click();
}
}	
if (($(".btn-toggle").hasClass("bi-chevron-right"))&& ($(window).width() <= 751)) {
$(".sidebar-toggle").click();
}	
$(".sidebar").height($(".mainbar").height()).css
var divHeight = $('.header').height();
$(".sidebar").height($('.parentrow').height() - divHeight -42).css
if ($(window).width() <= 751) { 
responsiveView();
}
if ($(window).width() > 751) { 
desktopView();
}
$(".logout").width($(".sidebar").width()).css
});
function responsiveView(){
$(".leftpanel").removeClass("vh-100"); 
if ($(".btn-menu-toggle").hasClass("bi-list")) {
$(".sidebar").addClass("d-none");
}	
$(".sidebar-toggle").addClass("d-none");
$(".sidebar-toggle-md").removeClass("d-none");
$(".status-toggle-md").removeClass("d-none");
if ($(".btn-status-toggle").hasClass("bi-person-fill")) {
$(".header").addClass("d-none");
}	
$(".sidebar").css("height", "auto");
$(".logout").removeClass("position-fixed");
$(".logout").removeClass("start-0");
$(".logout").removeClass("bottom-0");
$(".photo-profile").removeClass("ps-4");
}
function desktopView(){
$(".leftpanel").addClass("vh-100");
$(".sidebar").removeClass("d-none");
$(".sidebar-toggle").removeClass("d-none");
$(".sidebar-toggle-md").addClass("d-none");
$(".status-toggle-md").addClass("d-none");
$(".header").removeClass("d-none");
$(".sidebar").height($(".mainbar").height()).css
$(".logout").addClass("position-fixed");
$(".logout").addClass("start-0");
$(".logout").addClass("bottom-0");
$(".photo-profile").addClass("ps-4");
}
// tombol tonggle minimize large
$(".sidebar-toggle").click(function(){
var columns_container = $(".dynamic-columns");
if (!columns_container.hasClass("expanded")) {
$(".dynamic-columns .col:first").removeClass("col-md-3");
$(".dynamic-columns .col:first").addClass("col-md-1");		
$(".dynamic-columns .col:last-child").addClass("col-md-11");		
$(".logo2").removeClass("d-block");
$(".logo2").addClass("d-none");
$(".logo1").removeClass("d-none");
$(".logo1").addClass("d-block");
$(".logo1").addClass("m-auto");
$(".btn-toggle").removeClass("bi-chevron-left");
$(".btn-toggle").addClass("bi-chevron-right");
columns_container.toggleClass("expanded");
$(".nav-text").removeClass("d-inline-flex");
$(".nav-text").addClass("d-none");
$(".sidebar-icon").addClass("justify-content-center");
var divHeight = $('.header').height();
$(".sidebar").height($('.parentrow').height() - divHeight -42).css
$(".logout").width($(".sidebar").width()).css
}
else {
$(".dynamic-columns .col:first").removeClass("col-md-1");
$(".dynamic-columns .col:first").addClass("col-md-3");		
$(".dynamic-columns .col:last-child").removeClass("col-md-11");		
$(".logo2").addClass("d-block");
$(".logo2").removeClass("d-none");
$(".logo1").removeClass("d-block");
$(".logo1").addClass("d-none");
$(".logo1").removeClass("m-auto");
$(".btn-toggle").removeClass("bi-chevron-right");
$(".btn-toggle").addClass("bi-chevron-left");
columns_container.toggleClass("expanded");
$(".nav-text").removeClass("d-none");
$(".nav-text").addClass("d-inline-flex");
$(".sidebar-icon").removeClass("justify-content-center");
$(".sidebar").height($(".mainbar").height()).css
$(".logout").width($(".sidebar").width()).css
}
});  
// tombol menu kiri mobile
$(".sidebar-toggle-md").click(function(){
var columns_container = $(".dynamic-columns");
var header = $(".header");
if (!columns_container.hasClass("expanded")) {
if (header.hasClass("d-block")) {
columns_container.toggleClass("expanded2");
$(".btn-status-toggle").removeClass("bi-person");
$(".btn-status-toggle").addClass("bi-person-fill");
}	
$(".sidebar").removeClass("d-none");
$(".sidebar").addClass("d-block");
$(".header").removeClass("d-block");
$(".header").addClass("d-none");
columns_container.toggleClass("expanded");
$(".main-menu").addClass("d-none");
$(".btn-menu-toggle").removeClass("bi-list");
$(".btn-menu-toggle").addClass("bi-list-ul");
document.getElementById('top').scrollIntoView();
}
else {
$(".sidebar").removeClass("d-block");
$(".sidebar").addClass("d-none");
columns_container.toggleClass("expanded");	
$(".main-menu").removeClass("d-none");
$(".btn-menu-toggle").removeClass("bi-list-ul");
$(".btn-menu-toggle").addClass("bi-list");
}
});
// tombol status kanan mobile
$(".status-toggle-md").click(function(){
var columns_container = $(".dynamic-columns");
var sidebar = $(".sidebar");
if (!columns_container.hasClass("expanded2")) {	  
if (sidebar.hasClass("d-block")) {
columns_container.toggleClass("expanded");
$(".main-menu").removeClass("d-none");
$(".btn-menu-toggle").removeClass("bi-list-ul");
$(".btn-menu-toggle").addClass("bi-list");
}	
$(".header").removeClass("d-none");
$(".header").addClass("d-block");
$(".sidebar").removeClass("d-block");
$(".sidebar").addClass("d-none");
columns_container.toggleClass("expanded2");
$(".btn-status-toggle").removeClass("bi-person-fill");
$(".btn-status-toggle").addClass("bi-person");
document.getElementById('top').scrollIntoView();
}
else {
$(".header").removeClass("d-block");
$(".header").addClass("d-none");
columns_container.toggleClass("expanded2");	
$(".btn-status-toggle").removeClass("bi-person");
$(".btn-status-toggle").addClass("bi-person-fill");
}
});
