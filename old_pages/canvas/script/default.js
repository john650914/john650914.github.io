$(function(){
	$('api script').each(function(){
		var lines = $(this).text().split('\n');
		var newParagraph = '';
		for(var i = 0; i < lines.length; i++){
			var line = lines[i];
			if(/^	{2}/.test(lines[i])){
				line = lines[i].substring(2)
			}else if(/^	/.test(lines[i])){
				line = lines[i].substring(1)
			}
			if(line.indexOf('//')){
				line = line.replace('//', '<span class="pre-note">//');
				line = line+'</span>';
			}
			if(i < lines.length-1){
				newParagraph += line+'\n';
			}
		}
		if(newParagraph.lastIndexOf('\n') > 0){
			newParagraph = newParagraph.substring(0, newParagraph.lastIndexOf('\n'));
		}

		$(this).closest('api').append('<pre>'+newParagraph+'</pre>');
	});
});