	if ( ! document.querySelectorAll)
	{
		// http://ajaxian.com/archives/creating-a-queryselector-for-ie-that-runs-at-native-speed
		document.querySelectorAll = function(selectors){
			var head = document.documentElement.firstChild;
			var styleTag = document.createElement("STYLE");
			head.appendChild(styleTag);
			document.__qsResult = [];

			styleTag.styleSheet.cssText = selectors + "{x:expression(document.__qsResult.push(this))}";
			window.scrollBy(0, 0);
			head.removeChild(styleTag);

			var result = [];
			for (var i in document.__qsResult)
				result.push(document.__qsResult[i]);
			return result;
		}

		document.querySelector = function(selectors){
			var result = document.querySelectorAll(selectors);
			return result ? result[0] : result;
		}
	}
