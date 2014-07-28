function getTransitionsStyle(type){
	var pageTransitionStyle;	
	switch(type){
		case 'curlup':
			pageTransitionStyle= Ti.UI.iPhone.AnimationStyle.CURL_UP;
        	break;
		case 'curldown':
			pageTransitionStyle= Ti.UI.iPhone.AnimationStyle.CURL_DOWN;
			break;
		case 'flipfromleft':
			pageTransitionStyle= Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT;
			break;
		case 'flipfromright':
			pageTransitionStyle= Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT;
			break;
		case 'none':
			pageTransitionStyle= Ti.UI.iPhone.AnimationStyle.NONE;			
			break;
	}	
	return pageTransitionStyle;
}