function Tag_list() {
	var oTagList = getElementsByClassName(document, 'ul', 'Tag_li')[0],
	    oTag_content = [
	    	{ src: 'images/gq1.jpg', title: '印度', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/11111.htm' },
	    	{ src: 'images/gq2.jpg', title: '埃塞俄比亚', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10220.htm' },
	    	{ src: 'images/gq3.jpg', title: '新西兰', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10074.htm' },
	    	{ src: 'images/gq4.jpg', title: '波黑', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10062.htm' },
	    	{ src: 'images/gq5.jpg', title: '菲律宾', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10008.htm' },
	    	{ src: 'images/gq6.jpg', title: '土库曼斯坦', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10064.htm' },
	    	{ src: 'images/gq7.jpg', title: '立陶宛', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10058.htm' },
	    	{ src: 'images/gq8.jpg', title: '拉脱维亚', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10059.htm' },
	    	{ src: 'images/gq9.jpg', title: '巴勒斯坦', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10045.htm' },
	    	{ src: 'images/gq10.jpg', title: '阿尔巴尼亚', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10047.htm' },
	    	{ src: 'images/gq11.jpg', title: '阿富汗', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10048.htm' },
	    	{ src: 'images/gq12.jpg', title: '泰国', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10006.htm' },
	    	{ src: 'images/gq13.jpg', title: '巴基斯坦', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/11084.htm' },
	    	{ src: 'images/gq14.jpg', title: '缅甸', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10010.htm' },
	    	{ src: 'images/gq15.jpg', title: '克罗地亚', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10051.htm' },
	    	{ src: 'images/gq16.jpg', title: '黎巴嫩', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10025.htm' },
	    	{ src: 'images/gq17.jpg', title: '阿曼', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10027.htm' },
	    	{ src: 'images/gq18.jpg', title: '巴林', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10036.htm' },
	    	{ src: 'images/gq19.jpg', title: '也门', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10037.htm' },
	    	{ src: 'images/gq20.jpg', title: '埃及', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10038.htm' },
	    	{ src: 'images/gq21.jpg', title: '阿联酋', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10020.htm' },
	    	{ src: 'images/gq22.jpg', title: '叙利亚', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10044.htm' },
	    	{ src: 'images/gq23.jpg', title: '文莱', url: 'https://www.yidaiyilu.gov.cn/gbjg/gbgk/10011.htm' }
	    ],
	    oTag_into = '';
	for (var i=0; i<oTag_content.length; i++) {
		oTag_into += '<li><img src="'+ oTag_content[i].src +'"><h3>'+ oTag_content[i].title 
		+'</h3><a href="'+ oTag_content[i].url +'" target="_blank">前往</a></li>';
	}
	oTagList.innerHTML = oTag_into;

	function Nav_list() {
		Nav(5);
	}
	Nav_list();
}

function Return_T() {
	window.onscroll = function() {
		var oReT = getElementsByClassName(document, 'div', 'return_Top')[0],
		    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop >= 800) {
			oReT.style.display = 'block';
		} else {
			oReT.style.display = 'none';
		}
	}
}

addLoadEvent(Tag_list);
addLoadEvent(Return_T);