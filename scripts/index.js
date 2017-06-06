function Nav_list() {
	Nav(0);
}


/*幻灯片轮播*/
function Banner() {
	var oBanner = $('banner_img'),
	    obannerImg = [
	    	{url: 'http://www.baidu.com/', src: 'images/banner1.jpg', alt: '科技之光闪耀“一带一路”'},
	    	{url: 'http://www.baidu.com/', src: 'images/banner2.jpg', alt: '蒙内铁路——肯尼亚的铁路“中国造”'},
	    	{url: 'http://www.imooc.com/', src: 'images/banner3.jpg', alt: '中国企业承建特拉维夫轻轨项目'},
	    	{url: 'http://www.imooc.com/', src: 'images/banner4.jpg', alt: '阿拉山口：中欧班列出国门前最后一站'},
	    	{url: 'http://www.imooc.com/', src: 'images/banner5.jpg', alt: '江苏连云港：新亚欧大陆桥重要海陆转换枢纽'}
	    ],
	    oLen = obannerImg.length,
	    oUl = oBanner.getElementsByTagName('ul')[0],
	    iWidth = oBanner.offsetWidth,
	    oEm = document.createElement('em'),
	    oP = document.createElement('p'),
	    oPrev = document.createElement('a'),
	    oNext = document.createElement('a'),
	    strLi = '',
	    strSpan = '',
	    num = 0,
	    iTime = null;
	    for (var i=0; i<oLen; i++) {
	    	strLi += '<li><a href="'+ obannerImg[i].url +'" target="_blank"><img src="'
				+ obannerImg[i].src +'" alt="'+ obannerImg[i].alt +'"></a></li>';
	    	strSpan += '<span></span>';
	    }

	    oUl.innerHTML = strLi;
	    oUl.style['width'] = iWidth * oLen + 'px';
	    oBanner.appendChild(oEm);
	    oBanner.appendChild(oP);
	    oP.innerHTML = strSpan;
	    oBanner.appendChild(oPrev);
	    oBanner.appendChild(oNext);
	    oPrev.setAttribute('class', 'prev');
	    oNext.setAttribute('class', 'next');

	    for (var i=0; i<oLen; i++) {
	    	var oSpans = oP.getElementsByTagName('span');
	    	oEm.innerHTML = obannerImg[0].alt;
	    	oSpans[0].setAttribute('class', 'current');
		    oSpans[i].index = i;
		    oSpans[i].onclick = function() {
		    	num = this.index;
		    	BanMove();
		    }
	    }

	    oPrev.onclick = function() {
	    	num--;
	    	if (num == -1) {
	    		num = oLen-1;
	    	}
	    	BanMove();
	    }

	    oNext.onclick = function() { addBan(); }
	    function addBan() {
	    	num++;
	    	num%=oLen;    //等同于 if(num == oLen) num = 0;
			BanMove();
	    }

	    function BanMove() {           //运动BanMove
		    for (var i=0; i<oLen; i++) {
		    	oSpans[i].setAttribute('class', '');
		    }
		    oEm.innerHTML = obannerImg[num].alt;
		    oSpans[num].setAttribute('class', 'current');
		    startMove(oUl, {left : -num * iWidth});
	    }

	    function Autoplay() {
	    	iTime = setInterval(addBan, 3000);
	    }
	    Autoplay();

	    oBanner.onmouseover = function() {
	    	clearInterval(iTime);
	    	startMove(oPrev, {left: 15});
	    	startMove(oNext, {right: 15});
	    }
	    oBanner.onmouseout = function() {
	    	Autoplay();
	    	startMove(oPrev, {left: -45});
	    	startMove(oNext, {right: -45});
	    }
}

/*动态新闻*/

function Hotarticle() {
	var Hotlist = $('hotarticle_list'),
	    Hotarticle = [
        	{ url: 'http://www.miaov.com', title: '亚吉铁路：中国标准的“钢铁长龙”' },
        	{ url: 'http://www.miaov.com', title: '外交部回应“中方在中巴经济走廊赚取高额利润..' },
        	{ url: 'http://www.miaov.com', title: '大数据解读：“一带一路”助力各省区市对外贸...' },
        	{ url: 'http://www.miaov.com', title: '全国27座城市已开通中欧班列线路51条 累计开...' },
        	{ url: 'http://www.miaov.com', title: '中国—中南半岛经济走廊：贸易和投资加速推进' },
        	{ url: 'http://www.miaov.com', title: '中缅原油管道工程实践“一带一路”造福两国愿...' },
        	{ url: 'http://www.miaov.com', title: '教育部已与24个“一带一路”沿线国家签订学历...' },
        	{ url: 'http://www.miaov.com', title: '亚投行与世行签合作备忘录 已为5项目联合融资' },
        	{ url: 'http://www.miaov.com', title: '中老铁路加紧隧道施工' },
        	{ url: 'http://www.miaov.com', title: '数十工业园区将落户中巴经济走廊沿线 两国产...' }
	    ],
	    Hotarticle_li = '',
	    listnum = 0;

	for (var i=0; i<Hotarticle.length; i++) {
		listnum++;
		Hotarticle_li += '<li><span>'+ listnum +'</span><a href="'+ Hotarticle[i].url +'" target="_blank">'+ Hotarticle[i].title +'</a></li>';
	}
	Hotlist.innerHTML = Hotarticle_li;

	var oSpan = Hotlist.getElementsByTagName('span');
	for (var i=0; i<3; i++) {
		oSpan[i].setAttribute('class', 'active');
	}
}


/*动态生成标签*/

function Taginfo() {
	var oTag = $('taginfo_all'),
	    oTag_info = [
			{ url: 'http://www.google.com', title: '高层动态' },
			{ url: 'http://www.google.com', title: '国内新闻' },
			{ url: 'http://www.google.com', title: '海外新闻' },
			{ url: 'http://www.google.com', title: '部委动态' },
			{ url: 'http://www.google.com', title: '地方动态' },
			{ url: 'http://www.google.com', title: '热点专题' },
			{ url: 'http://www.google.com', title: '政策环境' },
			{ url: 'http://www.google.com', title: '计划规划' },
			{ url: 'http://www.google.com', title: '国际借鉴' },
			{ url: 'http://www.google.com', title: '图解政策' },
			{ url: 'http://www.google.com', title: '政策查询' },
			{ url: 'http://www.google.com', title: '地方政策' },
			{ url: 'http://www.google.com', title: '权威发布' },
			{ url: 'http://www.google.com', title: '双边文件' },
			{ url: 'http://www.google.com', title: '政策法规' },
			{ url: 'http://www.google.com', title: '五通发展' },
			{ url: 'http://www.google.com', title: '政策沟通' },
			{ url: 'http://www.google.com', title: '设施联通' },
			{ url: 'http://www.google.com', title: '贸易畅通' },
			{ url: 'http://www.google.com', title: '资金融通' },
			{ url: 'http://www.google.com', title: '民心相通' }
	    ],
		Tagcolor = ['#d9534f', '#777777', '#428bca', '#5cb85c', '#5bc0de', '#f0ad4e'],
	    oTag_a = '';
	for (var i=0; i<oTag_info.length; i++) {
		oTag_a += '<a href="'+ oTag_info[i].url +'" target="_blank">'+ oTag_info[i].title +'</a>';
	}
	oTag.innerHTML = oTag_a;
	var Taglist = oTag.getElementsByTagName('a');
	for (var i=0; i<Taglist.length; i++) {
		Taglist[i].style['background'] = Tagcolor[i%Tagcolor.length];
	}
    Infostring(80);
}

addLoadEvent(Nav_list);
addLoadEvent(Banner);
addLoadEvent(Hotarticle);
addLoadEvent(Taginfo);