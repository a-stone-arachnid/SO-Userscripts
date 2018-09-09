// ==UserScript==
// @name          No more Jobs
// @description   Remove all Jobs-related and Teams-related content from SO, making the main focus of the site Q/A
// @author        a stone arachnid
// @namespace     https://github.com/a-stone-arachnid/
// @version       1.2.0
// @include       http*://*stackoverflow.com/*
// @exclude       http*://chat.*.com/*
// ==/UserScript==

function with_jquery(f) 
{
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.textContent = "if (window.jQuery) (" + f.toString() + ")(window.jQuery)" + "\n\n//# sourceURL=" + encodeURI(GM_info.script.namespace.replace(/\/?$/, "/")) + encodeURIComponent(GM_info.script.name); // make this easier to debug
  document.body.appendChild(s);
};

with_jquery(function(){
  $("<style/>").text(`
.nav-links .fs-fine, #nav-jobs, .nav-links .p6,
.unread-feature-notice,.story-tab, #profile-side a[href^='/users/storypreferences'],
#profile-side a[href^='/users/jobsearch'], #profile-side a[href*='job-alerts'],
.site-footer--nav li.-item a[href^='https://stackoverflow.com/jobs'], #hireme,
.site-footer--nav li.-item a[href^='https://stackoverflow.com/teams']
{
	display:none!important
}
.nav-links .nav-links--link{
	padding-left:8px;
}
`).appendTo("head");
  $("#nav-questions svg").hide();
  $("#nav-questions span").text("Questions");

});
