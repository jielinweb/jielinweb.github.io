/*新闻列表生成*/
function News_list() {
	oVideo_Li = getElementsByClassName(document, 'div', 'video_list');
	oUls = oVideo_Li[0].getElementsByTagName('ul');
	var oVideo = getElementsByClassName(document, 'ul', 'video_title'),
	    Video_t = ['要闻', '国内', '海外', '滚动'],
	    video_li = '',
	    video_ul = '';
	for (var i=0; i<Video_t.length; i++) {              //创建导航
		video_li += '<li><a href="javascript:void(0)">'+ Video_t[i] +'</a></li>';
		video_ul += '<ul></ul>';
	}
	oVideo[0].innerHTML = video_li;    //将导航添加到video_title
	oVideo_Li[0].innerHTML = video_ul;

	var aLi = oVideo[0].getElementsByTagName('a');
	
	if (aLi.length != oUls.length) { return false; }

	for (var i=0; i<aLi.length; i++) {
		aLi[i].index = i;
		aLi[0].setAttribute('class', 'active');
		oUls[0].style['display'] = 'block';
		aLi[i].onclick = function() {
			for (var j=0; j<aLi.length; j++) {
				aLi[j].setAttribute('class', '');
				oUls[j].style['display'] = 'none';
			}
			aLi[this.index].setAttribute('class', 'active');
			oUls[this.index].style['display'] = 'block';
		}
	}


	function Nav_list() {
		Nav(1);
	}

	function Yw() {    /*要闻*/
		var Web_B = [
			{url: 'https://www.yidaiyilu.gov.cn/xwzx/xgcdt/12279.htm'
			, src: 'images/gn1.jpg', title: '习近平同杜特尔特通电话'
		    , info: '菲律宾是中国友好近邻，也是“一带一路”建设的重要伙伴。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/bwdt/12325.htm'
		    , src: 'images/gn2.jpg', title: '安全合作对话在北京举行'
		    , info: '安全部与20多个国家安全部门“一带一路”安全合作对话会4日在北京举行。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12387.htm'
		    , src: 'images/gn3.jpg', title: '中欧班列从月均1列到日均5列'
		    , info: '“驼铃古道丝绸路，胡马犹闻唐汉风。”'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12114.htm'
		    , src: 'images/gn4.jpg', title: '中、美、埃油气合作打造三方共赢'
		    , info: '中国石化国际石油勘探开发有限公司与美国阿帕奇公司在埃及开展良好合作'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/hwxw/12080.htm'
		    , src: 'images/gn5.jpg', title: '中英共建“一带一路”'
		    , info: '英国是“一带一路”倡议的积极响应者和参与者。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12284.htm'
		    , src: 'images/gn6.jpg', title: '打造“一带一路”物流品牌'
		    , info: '中欧班列已成为公司服务“ 一带一路 ”建设的重要品牌之一。'},
		    {url: 'https://www.yidaiyilu.gov.cn/ghsl/gnzjgd/12339.htm'
		    , src: 'images/gn7.jpg', title: '发挥本币在“一带一路”中的作用'
		    , info: '在“一带一路”建设中，使用本币开展投融资具有许多优势。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12041.htm'
		    , src: 'images/gn8.jpg', title: '抓住“一带一路”机遇'
		    , info: '抓住国家推进“一带一路”建设、“中国制造2025”的机遇'}
		],
		    Webli = '';
		for (var i=0; i<Web_B.length; i++) {
			Webli += '<li><div class="ImgBox"><a href="'+ Web_B[i].url +'" target="_blank"><img src="'+ Web_B[i].src 
			+'"></a></div><h4>'+ Web_B[i].title +'</h4><p>'+ Web_B[i].info +'</p></li>';
		}
		oUls[0].innerHTML = Webli;
	}

	function Gn() {    /*国内*/
		var Web_A = [
			{url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12392.htm'
			, src: 'images/gn9.jpg', title: '中乌产能合作潜力大'
		    , info: '乌克兰是中企进入欧洲市场的重要门户。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12393.htm'
		    , src: 'images/gn10.jpg', title: '义新欧助力中西贸易'
		    , info: '西班牙食品在中国销量大幅增长员'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12398.htm'
		    , src: 'images/gn11.jpg', title: '《“一带一路”100个全球故事》'
		    , info: '《“一带一路”100个全球故事》多语种丛书近日在北京出版发行。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12389.htm'
		    , src: 'images/gn12.jpg', title: '遨游丝路“蓝海”'
		    , info: '“一带一路”建设目前已进入全面推进务实合作的新阶段。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12321.htm'
		    , src: 'images/gn13.jpg', title: '中办印发作协深化改革方案'
		    , info: '加强与“一带一路”沿线国家地区的文学交流'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12276.htm'
		    , src: 'images/gn14.jpg', title: '打造跨时空的发展之路'
		    , info: '在新世纪奏响“一带一路”交响曲，融入经济全球化的时代潮流中。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12282.htm'
		    , src: 'images/gn15.jpg', title: '连云港串连“一带一路”'
		    , info: '连云港连接南北，沟通中西，是中亚国家向东最便捷的出海口'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/gnxw/12206.htm'
		    , src: 'images/gn16.jpg', title: '政治互信、经济融合'
		    , info: '承载世界期盼，5月相约北京。'}
		],
		    WebAli = '';
		for (var i=0; i<Web_A.length; i++) {
			WebAli += '<li><div class="ImgBox"><a href="'+ Web_A[i].url +'" target="_blank"><img src="'+ Web_A[i].src 
			+'"></a></div><h4>'+ Web_A[i].title +'</h4><p>'+ Web_A[i].info +'</p></li>';
		}
		oUls[1].innerHTML = WebAli;
	}

    function Hw() {    /*海外*/
		var Moblie_E = [
			{url: 'https://www.yidaiyilu.gov.cn/xwzx/hwxw/12337.htm'
			, src: 'images/hw1.jpg', title: '中柬人文交流根深叶茂'
		    , info: '中国人带来的是丝绸、瓷器和先进的技术，给柬埔寨和东南亚国家带来发展。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/hwxw/12275.htm'
		    , src: 'images/hw2.jpg', title: '蒙内铁路累计提供工作岗位'
		    , info: '被肯尼亚人亲切地称为“世纪铁路”的蒙内铁路，缩短两城间距离的梦想。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/hwxw/12278.htm'
		    , src: 'images/hw3.jpg', title: '中缅原油管道工程促进当地发展'
		    , info: '中缅油气管道项目在建设过程中，已经对推动两国相关地区经济发展'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/hwxw/12081.htm'
		    , src: 'images/hw4.jpg', title: '中马友谊大桥打开发展大门'
		    , info: '从飞机上俯瞰，一座座小岛就像一颗颗珍珠镶嵌在碧蓝的海面上。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/hwxw/12042.htm'
		    , src: 'images/hw5.jpg', title: '菲律宾总统称赞中国'
		    , info: '菲律宾总统杜特尔特29日称赞中国提出的“一带一路”倡议正在助力邻国发展'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/hwxw/11860.htm'
		    , src: 'images/hw6.jpg', title: '“一带一路”开放共赢'
		    , info: '在广袤的欧亚大陆续写新时代中西方友好交流、互联互通的精彩新篇。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/hwxw/11854.htm'
		    , src: 'images/hw7.jpg', title: '海外华文媒体聚焦“一带一路”'
		    , info: '“一带一路”将成为接下来一段时间的“热词”'}
		],
		    Moblie_li = '';
		for (var i=0; i<Moblie_E.length; i++) {
			Moblie_li += '<li><div class="ImgBox"><a href="'+ Moblie_E[i].url +'" target="_blank"><img src="'+ Moblie_E[i].src 
			+'"></a></div><h4>'+ Moblie_E[i].title +'</h4><p>'+ Moblie_E[i].info +'</p></li>';
		}
		oUls[2].innerHTML = Moblie_li;
	}

	function Gd() {    /*滚动*/
		var UI_Pro = [
			{url: 'https://www.yidaiyilu.gov.cn/xwzx/roll/12293.htm'
			, src: 'images/gd1.jpg', title: '湖北融入“一带一路”建设'
		    , info: '帕德玛大桥主桥隔震支座首制件在武汉通过国际专家组验收。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/roll/12296.htm'
		    , src: 'images/gd2.jpg', title: '“一带一路”蕴含博大中国智慧'
		    , info: '中国“兼世以达、独善则穷”的天下情怀,让全球化更加有序地重新启航'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/roll/12216.htm'
		    , src: 'images/gd3.jpg', title: '44项目入围“一带一路”'
		    , info: '国家发展改革委印发了《关于请报送“一带一路”PPP项目典型案例的通知》'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/roll/12121.htm'
		    , src: 'images/gd4.jpg', title: '“一带一路”沿着五通方向前进'
		    , info: '“一带一路”推进3年多，很多新场景随之出现'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/roll/11678.htm'
		    , src: 'images/gd5.jpg', title: '中巴经济走廊示范作用凸显'
		    , info: '记者采访了巴战略研究所中国研究中心主任艾赫迈德•拉希德•马利克。'},
		    {url: 'https://www.yidaiyilu.gov.cn/xwzx/dfdt/11929.htm'
		    , src: 'images/gd6.jpg', title: '青海借助“一带一路”构建新经济'
		    , info: '青海坚持开放发展理念，实施以“一带一路”建设为总抓手的开放带动战略'}
		],
		    UI_li = '';
		for (var i=0; i<UI_Pro.length; i++) {
			UI_li += '<li><div class="ImgBox"><a href="'+ UI_Pro[i].url +'" target="_blank"><img src="'+ UI_Pro[i].src 
			+'"></a></div><h4>'+ UI_Pro[i].title +'</h4><p>'+ UI_Pro[i].info +'</p></li>';
		}
		oUls[3].innerHTML = UI_li;
	}
    
    Nav_list();
	Yw();
	Gn();
	Hw();
	Gd();

}

addLoadEvent(News_list);