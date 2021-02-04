/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});
})(jQuery);

var shoppingStatus;
document.getElementById("shopping").style.display= "none";

function login(){
    var newPage= window.open("login.html", "Let'sLogin", "");
    var execution= window.setInterval(function(){
        if(document.getElementById("activityId").value!=""){
            var profile= document.getElementById("activityId").value;
            window.clearTimeout(execution);
            newPage.close();
            afterLogin(profile);
        }
    },1000);
}

function afterLogin(profile){
    profile= profile.split(",");
    document.getElementById("title").textContent= profile[2];
    var str= profile[0][0] + " 年 " + profile[0][1] + profile[0][2] + " 班　" + profile[1] + " 號";
    document.getElementById("detail").textContent= str;
    document.getElementById("money").textContent= "餘額　" + profile[5] + "　元";
    document.getElementById("someBtn").style.display= "none";
    document.getElementById("shopping").style.display= "block";
    
    setTimeout(function (){
        shoppingStatus= confirm("已經點過餐了嗎???");
        if(shoppingStatus){
            //需先確定點餐至何時
            var addCommodity= confirm("想要加訂便當嗎???");
            if( !(addCommodity)){
                setTimeout(function (){
                    settleAccount();
                }, 100);
            }
        }
    },1000);
}

function settleAccount(){
    var payment= window.open("/settleAccount.html", "Let'sPay", "");
}