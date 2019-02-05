// ==UserScript==
// @name     Old Delete Button
// @version  1
// @grant    none
// @include	 https://*stackoverflow.com/*
// @include	 https://*superuser.com/*
// @include	 https://*serverfault.com/*
// @include	 https://*stackapps.com/*
// @include	 https://*askubuntu.com/*
// @include	 https://*stackexchange.com/*
// ==/UserScript==

function with_jquery(f) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = "(" + f.toString() + ")(jQuery)";
  document.body.appendChild(script);
}

with_jquery(function(){
  var styles = `
.comment-delete,.comment-delete:hover{
  margin:0;
	line-height:1;
  width:14px;
  height:14px;
  background:rgba(36,39,41,0.5);
  border-radius:7px;
  box-sizing:border-box;
  padding:2px;
  color:white!important;
	display:none;
}
.comment:hover .comment-delete{
  display:inline;
}
.comment-delete:hover{
  background:rgba(36,39,41,0.6);
}
.comment-delete:active{
  background:rgba(127,0,0,1)!important;
}
.comment-delete:focus{
  box-shadow:none;
}
`;
  StackExchange.ready(function(){
    $("<style></style>").text(styles).appendTo("head");
    $(".comment-delete").removeClass("fc-red-600").html('<svg class="svg-icon va-text-bottom iconClearSm" width="14" height="14" viewBox="0 0 20 20"><path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path></svg>');
  });
});
