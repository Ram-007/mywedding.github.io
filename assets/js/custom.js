var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,d){a instanceof String&&(a=String(a));for(var c=a.length,e=0;e<c;e++){var f=a[e];if(b.call(d,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,b,d,c){if(b){d=$jscomp.global;a=a.split(".");for(c=0;c<a.length-1;c++){var e=a[c];e in d||(d[e]={});d=d[e]}a=a[a.length-1];c=d[a];b=b(c);b!=c&&null!=b&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6","es3");$("#contactform").validator().on("submit",function(a){a.isDefaultPrevented()?(formError(),submitMSG(!1,"Please fill all the required fields.")):(a.preventDefault(),submitForm())});
function submitForm(){var a=$("#name").val(),b=$("#email").val(),d=$("#mobile").val(),c=$("#guest").val(),e=$("#selectedEvent").val(),f=$("#arrDate").val()||"None",k=$("#arrTime").val()||"None",m=$("#arrPlace").val()||"None",n=$("#deptDate").val()||"None",l=$("#deptTime").val()||"None",g=$("#deptPlace").val()||"None",h=$("#message").val()||"None";$("#form-submit").attr("disabled","true");$.ajax({type:"POST",url:"https://docs.google.com/forms/d/e/1FAIpQLSfaxqadrLaSpyl-9ihkf63czhZFnvuvX4zTRabZPuaj9R-bQg/formResponse",
data:"entry.1543178026="+a+"&entry.1498135098="+b+"&entry.861461453="+d+"&entry.1747065281="+c+"&entry.127251560="+e+"&entry.16455174="+f+"&entry.1700151242="+k+"&entry.1013720258="+m+"&entry.1478991623="+n+"&entry.47343885="+l+"&entry.1673880064="+g+"&entry.1050971326="+h,dataType:"xml",statusCode:{0:function(){formSuccess()},200:function(){formSuccess()}},success:function(a,d,b){formSuccess()},error:function(a,d,b){0!==a.status&&(formError(),submitMSG(!1,b))}})}
function formSuccess(){$("#form-submit").removeAttr("disabled");$("#contactform")[0].reset();submitMSG(!0,"Message Submitted!")}function formError(){$("#form-submit").removeAttr("disabled");$("#contactform").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass()})}
function submitMSG(a,b){var d=a?"h5 animated alert alert-success":"h5 alert alert-danger";b=(a?"<strong>Success: </strong>":"<strong>Error: </strong>")+b;$("#msgSubmit").removeClass().addClass(d).html(b)}
(function(a){function b(){var b=a(window).scrollTop();d.each(function(){var d=a(this).offset().top-e-20,q=d+a(this).outerHeight();b>=d&&b<=q?(c.find("ul > li > a").parent().removeClass("active"),c.find("a[href='#"+a(this).attr("id")+"']").parent().addClass("active")):2===b&&c.find("ul > li > a").parent().removeClass("active")})}a(document).ready(function(){a("body").on("contextmenu",function(a){a.preventDefault();a.stopPropagation()});var b=function(){if(0<window.navigator.userAgent.indexOf("MSIE 9.0"))return 1};
a("#preloader").delay(850).fadeOut("slow");a("body").delay(850).css({overflow:"visible"});var d=a(".animation");device.tablet()||device.mobile()||b()||d.css({visibility:"hidden"});Pace.on("hide",function(){device.tablet()||device.mobile()||b()||d.each(function(){new Waypoint({element:this,handler:function(b){a(this.element).css({visibility:"visible"});a(this.element).addClass("animated")},offset:"90%"})});var c;if(c=!device.tablet()&&!device.mobile()&&!b())c=0<window.navigator.userAgent.indexOf("MSIE 10.0")?
1:void 0,c=!c;c&&(c=-1!=navigator.userAgent.indexOf("Safari")&&-1!=navigator.userAgent.indexOf("Mac")?1:void 0,c=!c);c&&(a(".parallax").css("background-attachment","fixed"),a(window).stellar({horizontalScrolling:!1,responsive:!0}))});a("#hero-slide").owlCarousel({loop:!0,nav:!1,pagination:!1,items:1,navigation:!0,autoplay:!0,autoplayTimeout:1E4,animateOut:"fadeOut"});a(".pepoles-row").owlCarousel({loop:!0,nav:!1,pagination:!0,navigation:!0,autoplay:!0,autoplayTimeout:5E3,autoplayHoverPause:!0,margin:20,
responsiveClass:!0,responsive:{0:{items:2,slideBy:2,margin:10},640:{items:2,slideBy:2},991:{items:3,slideBy:3},1100:{items:4,slideBy:4}}});(function(){a(".owl-full-width .slide").length&&a(".owl-full-width .slide").each(function(){var b=a(this),c=b.children(c);c=c.attr("src");b.css({backgroundImage:"url("+c+")",backgroundSize:"cover",backgroundPosition:"center center"})})})();a(".zoom-gallery").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",
image:{verticalFit:!0,titleSrc:function(a){return a.el.attr("title")}},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}}});a("#simple_timer").syotimer({year:2018,month:2,day:21,hour:10,minute:30});var c=a(".gallery-masonry").imagesLoaded(function(){c.masonry({itemSelector:".item"})})});a(function(){a(".onepagenav > ul > li > a:not(.dropdown-toggle)").on("click",function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===
this.hostname){var b=a(this.hash);b=b.length?b:a("[name="+this.hash.slice(1)+"]");b.length&&a("html, body").animate({scrollTop:b.offset().top-60},1E3,"easeInOutExpo")}return!1})});var d=a("section"),c=a(".navBare"),e=c.outerHeight(),f=a(".navicon"),k=a(".sidenav,section,.mask"),m=a(".sidenav ul li a");f.on("click",function(){k.addClass("is-active")});a(".mask").on("click",function(){a(this).removeClass("is-active");a(".sidenav,section").removeClass("is-active")});m.on("click",function(){k.removeClass("is-active")});
a(window).on("scroll",function(){b()});var n=a("body").offset().top+150,l=function(){a(window).scrollTop()>n?a(".nav-weds").addClass("is-active"):a(".nav-weds").removeClass("is-active")};l();a(window).scroll(function(){l()});var g=a("#stop-audio"),h=a("#play"),p=a("#my_audio");g.on("click",function(){p.get(0).pause();h.show();g.hide()});h.on("click",function(){p.get(0).play();h.hide();g.show()});h.hide();(device.tablet()||device.mobile())&&g.trigger("click")})(jQuery);
