// ==UserScript==
// @name          No more Jobs or Teams!
// @description   Remove all Jobs-related and Teams-related content from SO, making the main focus of the site Q/A
// @author        a stone arachnid
// @namespace     https://github.com/a-stone-arachnid/
// @version       1.3.1
// @match         https://*.stackoverflow.com/*
// @exclude       https://chat.*.com/*
// ==/UserScript==

StackExchange.ready(function(){
  $("<style/>").text(`
.nav-links .fs-fine, #nav-jobs, .nav-links .p6,
.unread-feature-notice,.story-tab, #profile-side a[href^='/users/storypreferences'],
#profile-side a[href^='/users/jobsearch'], #profile-side a[href*='job-alerts'],
.site-footer--nav li.-item a[href^='https://stackoverflow.com/jobs'], #hireme,
.site-footer--nav li.-item a[href^='https://stackoverflow.com/teams'],
.-marketing-link.js-gps-track
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
