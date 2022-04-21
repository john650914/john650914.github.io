$(function(){
	var headerAndSidemenu = `
	<div class="header">
		<div class="logo"><a href="/index.html"><span>&#128218;</span> Javascript字典</a></div>
	</div>
	<div class="all-menus">
		<div class="top-div">
			<nav class="top-menu">
				<ul>
					<li><a href="/syntax.html">語法及API總覽</a></li>
					<li><a href="/js-library.html">JS函式庫</a></li>
					<li><a href="/author.html">關於作者</a></li>
					<li><a href="/portfolio/">作品網站</a></li>
				</ul>
			</nav>
		</div>
		<div class="left-side">
			<nav class="side-menu">
				<dl>
					<dt>Basic Syntax</dt>
					<dd><a href="/documentation/Operators.html">Operators</a></dd>
					<dd><a href="/documentation/Statements.html">Statements</a></dd>
					<dd><a href="/documentation/Conditionals.html">Conditionals</a></dd>
					<dd><a href="/documentation/Looping.html">Looping</a></dd>
					<dd><a href="/documentation/Global-Functions.html">Global Functions</a></dd>
					<dd><a href="/documentation/Others.html">Others</a></dd>
					<dt>JS Objects</dt>
					<dd><a href="/documentation/Array.html">Array</a></dd>
					<dd><a href="/documentation/Boolean.html">Boolean</a></dd>
					<dd><a href="/documentation/Date.html">Date</a></dd>
					<dd><a href="/documentation/Error.html">Error</a></dd>
					<dd><a href="/documentation/Function.html">Function</a></dd>
					<dd><a href="/documentation/JSON.html">JSON</a></dd>
					<dd><a href="/documentation/Map.html">Map</a></dd>
					<dd><a href="/documentation/Math.html">Math</a></dd>
					<dd><a href="/documentation/Number.html">Number</a></dd>
					<dd><a href="/documentation/object-object.html">Object</a></dd>
					<dd><a href="/documentation/Set.html">Set</a></dd>
					<dd><a href="/documentation/String.html">String</a></dd>
					<dd><a href="/documentation/RegExp.html">RegExp</a></dd>
					<dt>BOM Objects</dt>
					<dd><a href="/documentation/window.html">window</a></dd>
					<dd><a href="/documentation/navigator.html">navigator</a></dd>
					<dd><a href="/documentation/screen.html">screen</a></dd>
					<dd><a href="/documentation/history.html">history</a></dd>
					<dd><a href="/documentation/location.html">location</a></dd>
					<dt>DOM Objects</dt>
					<dd><a href="/documentation/document.html">document</a></dd>
					<dd><a href="/documentation/Events.html">Events</a></dd>
					<dd><a href="/documentation/DOM-Elements.html">DOM Elements</a></dd>
					<dd><a href="/documentation/audio.html">Audio</a></dd>
					<dd><a href="/documentation/body.html">Body</a></dd>
					<dd><a href="/documentation/button.html">Button</a></dd>
					<dd><a href="/documentation/form.html">Form</a></dd>
					<dd><a href="/documentation/input-button.html">Input button</a></dd>
					<dd><a href="/documentation/input-checkbox.html">Input checkbox</a></dd>
					<dd><a href="/documentation/input-file.html">Input file</a></dd>
					<dd><a href="/documentation/input-hidden.html">Input hidden</a></dd>
					<dd><a href="/documentation/input-password.html">Input password</a></dd>
					<dd><a href="/documentation/input-radio.html">Input radio</a></dd>
					<dd><a href="/documentation/input-reset.html">Input reset</a></dd>
					<dd><a href="/documentation/select.html">Select</a></dd>
					<dd><a href="/documentation/option.html">Option</a></dd>
					<dd><a href="/documentation/input-submit.html">Input submit</a></dd>
					<dd><a href="/documentation/input-text.html">Input text</a></dd>
					<dd><a href="/documentation/textarea.html">Textarea</a></dd>
					<dd><a href="/documentation/table.html">Table</a></dd>
					<dd><a href="/documentation/td-th.html">td/th</a></dd>
					<dd><a href="/documentation/tr.html">tr</a></dd>
					<dd><a href="/documentation/anchor.html">Anchor</a></dd>
					<dd><a href="/documentation/area.html">Area</a></dd>
					<dd><a href="/documentation/base.html">Base</a></dd>
					<dd><a href="/documentation/frame-iFrame.html">Frame/iFrame</a></dd>
					<dd><a href="/documentation/frameset.html">Frameset</a></dd>
					<dd><a href="/documentation/image.html">Image</a></dd>
					<dd><a href="/documentation/link.html">Link</a></dd>
					<dd><a href="/documentation/meta.html">Meta</a></dd>
					<dd><a href="/documentation/object.html">Object</a></dd>
					<dd><a href="/documentation/style.html">Style</a></dd>
					<dd><a href="/documentation/styleSheets.html">styleSheets</a></dd>
					<dd><a href="/documentation/cssRules.html">cssRules</a></dd>
					<dd><a href="/documentation/video.html">Video</a></dd>
					<dd><a href="/documentation/ajax.html">Ajax</a></dd>
					<dt>其它</dt>
					<dd><a href="/Vue/index.html">Vue</a></dd>
				</dl>
			</nav>
		</div>
	</div>
	<div class="menu_toggler"></div>`;
	$('body').prepend(headerAndSidemenu);




	$('.menu_toggler').click(function(){
		$('.all-menus').toggle();
		$('main').toggle();
	});
	
	/*$('#data-loader').load('experiment/ajax01.php');
	
	$(window).scroll(function(){
		if($('#data-loader2').html() == '' && $('body').scrollTop() > 100){
			$('#data-loader2').load('experiment/ajax02.php');
		}
	});*/

	/*if(location.hash.match('!')){
		var excmtIndex = location.hash.indexOf('!')+1;
		var theHashName = location.hash.slice(excmtIndex);
		var xhr;

		$.getJSON('/json/document.json', function(d){
			xhr = d;
		});
		
		$('#main').load('documentation/ajax-test.php', function(){
			var title = xhr[theHashName].title;
			var description = xhr[theHashName].description;
			var keywords = xhr[theHashName].keywords;
			var url = xhr[theHashName].url;
			$('head title').html(title);
			$('meta[name="description"]').attr('content', description);
			$('meta[name="keywords"]').attr('content', keywords);
			$('meta[property="og:title"]').attr('content', title);
			$('meta[property="og:description"]').attr('content', description);
			$('meta[property="og:url"]').attr('content', url);
		});
	}*/
});