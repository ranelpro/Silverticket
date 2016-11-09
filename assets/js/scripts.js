
(function($){
	"use strict";

	$(document).ready(function(){

		// Toggle

		$(function() {
			$('.switch').change(function() {
				$('.toggle-content').toggleClass("off")
			})
		});

	});

})(this.jQuery);
