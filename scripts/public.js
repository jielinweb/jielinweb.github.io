function addLoadEvent(func) {
	var oldonload = window.onload;
	return typeof window.onload != 'function' ? window.onload = func : window.onload = function() {
		oldonload();
		func();
	}
}

function $(id) {
	return typeof id === 'string' ? document.getElementById(id) : id;
}

function getElementsByClassName(oParent, tagName, className) {
	var aEls = oParent.getElementsByTagName(tagName),
		arr = [];
	for (var i=0; i<aEls.length; i++) {
		var arrClassName = aEls[i].className.split(' ');
		for (var j=0; j<arrClassName.length; j++) {
			if (arrClassName[j] == className) {
				arr.push(aEls[i]);
				break;
			}
		}
	}
	return arr;
}

// 禁止鼠标右键事件
function Doc() {
	document.oncontextmenu = function() {
		return false;
	}
}

//Doc();



function Nav(num) {
	var oNav = $('navs'),
	    oNav_content = [
	    	{ url: 'index-1.html', title: '首页' },
	    	{ url: 'news.html', title: '新闻动态' },
	    	{ url: 'sczl.html', title: '丝绸之路' },
	    	{ url: 'diplomatic.html', title: '外交' },
	    	{ url: 'culture.html', title: '经济' },
	    	{ url: 'Countries.html', title: '各国概况' },
	    	{ url: 'photos.html', title: '国别美图' },
	    	{ url: 'about.html', title: '关于' }
	    ],
	    oNavli = '';    

	for (var i=0; i<oNav_content.length; i++) {
		oNavli += '<li><a href="'+ oNav_content[i].url +'">'+ oNav_content[i].title +'</a></li>';
	}

	oNav.innerHTML = oNavli;

	for (var j=0; j<oNav_content.length; j++) {
		var oNav_btn = oNav.getElementsByTagName('a');
		oNav_btn[num].setAttribute('class', 'active');
		oNav_btn[j].onclick = function() {
			for (var i=0; i<oNav_content.length; i++) {
				oNav_btn[i].setAttribute('class', '');
			}
			this.setAttribute('class', 'active');
		}
	}

}


function Frient() {
	var Friend_link = $('friend_link'),
	    Frient_linklist = [
	        { url: '', alt: '国务院部门网站：' },
	    	{ url: 'https://www.baidu.com', alt: '外交部' },
	    	{ url: 'https://www.baidu.com', alt: '国防部' },
	    	{ url: 'https://www.baidu.com', alt: '发展改革委' },
	    	{ url: 'https://www.baidu.com', alt: '教育部' },
	    	{ url: 'https://www.baidu.com', alt: '科技部' },
	    	{ url: 'https://www.baidu.com', alt: '工业和信息化部' },
	    	{ url: 'https://www.baidu.com', alt: '国家民委' },
	    	{ url: 'https://www.baidu.com', alt: '公安部' },
	    	{ url: 'https://www.baidu.com', alt: '司法部' },
	    	{ url: 'https://www.baidu.com', alt: '水利部' },
	    	{ url: 'https://www.baidu.com', alt: '文化部' },
	    	{ url: 'https://www.baidu.com', alt: '商务部' },
	    	{ url: 'https://www.baidu.com', alt: '农业部' },
	    	{ url: 'https://www.baidu.com', alt: '统计局' },
	    	{ url: 'https://www.baidu.com', alt: '林业局' },
	    	{ url: 'https://www.baidu.com', alt: '旅游局' },
	    	{ url: 'https://www.baidu.com', alt: '版权局' },
	    	{ url: 'https://www.baidu.com', alt: '法制办' }
	    ],
	    Frient_A = '';
	for (var i=0; i<Frient_linklist.length; i++) {
		Frient_A += '<li><a href="'+ Frient_linklist[i].url +'" target="_blank">'+ Frient_linklist[i].alt +'</a></li>';
	}
	friend_link.innerHTML = Frient_A;
	var Friendalt = Friend_link.getElementsByTagName('a');
    Friendalt[0].className = 'active';
    Friendalt[0].setAttribute('href', 'javascript:void(0)');
}

function Icon() {
	var Icon_Img = document.getElementsByTagName('i');
	for (var i=0; i<Icon_Img.length; i++) {
		Icon_Img[i].className = 'iconfont';
	}
}

/*文章部分字符串超出截取*/
function Infostring(num) {
    var oInfo = getElementsByClassName(document, 'p', 'info');
    for (var i=0; i<oInfo.length; i++) {
        var oPinfo = oInfo[i].innerHTML;
        oInfo[i].innerHTML = oPinfo.substring(0, num) + '<span>...</span>';
    }
}

addLoadEvent(Frient);
addLoadEvent(Icon);
addLoadEvent(Infostring);