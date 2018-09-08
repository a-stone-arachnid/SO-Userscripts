// ==UserScript==
// @name          No more Jobs
// @description   Remove all Jobs-related and Teams-related content from SO, making the main focus of the site Q/A
// @author        a stone arachnid
// @namespace     https://github.com/a-stone-arachnid/
// @version       1.0
// @include       http*://*stackoverflow.com/*
// @exclude       http*://chat.*.com/*
// ==/UserScript==

function with_jquery(f) 
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = "if (window.jQuery) (" + f.toString() + ")(window.jQuery)" + "\n\n//# sourceURL=" + encodeURI(GM_info.script.namespace.replace(/\/?$/, "/")) + encodeURIComponent(GM_info.script.name); // make this easier to debug
  document.body.appendChild(script);
};

with_jquery(function(){
  $(".nav-links .fs-fine").hide();
  $(".nav-links--link").css("padding-left","8px");
  $("#nav-jobs").hide();
  $("#nav-questions svg").hide();
  $("#nav-questions span").text("Questions");
  $(".nav-links .p6").hide();

  $(".unread-feature-notice").hide();
  $(".story-tab").hide();

  $("#profile-side a[href^='/users/storypreferences']").hide();
  $("#profile-side a[href^='/users/jobsearch']").hide();
  $("#profile-side a[href*='job-alerts']").hide();

  $(".site-footer--nav li.-item a[href^='https://stackoverflow.com/jobs']").hide();
  $(".site-footer--nav li.-item a[href^='https://stackoverflow.com/teams']").hide();

});
