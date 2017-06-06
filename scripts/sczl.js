function Sczl() {
	var oSl_list = getElementsByClassName(document, 'ul', 'sl_list')[0],
	    oSl_news = getElementsByClassName(document, 'div', 'sl_news')[0],
	    oSl_lititle = ['丝路视觉', '丝路咨询', '海外丝路'],
	    strLi = '',
	    strUl = '';

	for (var i=0; i<oSl_lititle.length; i++) {
		strLi += '<li>'+ oSl_lititle[i] +'</li>';
		strUl += '<ul></ul>';
	}
	oSl_list.innerHTML = strLi;
	oSl_news.innerHTML = strUl;

	var oSl_li = oSl_list.getElementsByTagName('li'),
	    oSl_ul = oSl_news.getElementsByTagName('ul'),
	    oSl_slsj = [
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/gnzjgd/12491.htm'
	    	, title: '欧晓理：“一带一路”蓝图已绘就 不存在“2.0版本”'
	    	, info: '“一带一路”就这一个蓝图，蓝图已经绘就，我们是一张蓝图干到底，撸起袖子干，以钉钉子的精神把这个事情做好。'
	    	, time: '2017-05-08'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/gnzjgd/12480.htm'
	    	, title: '刘卫东：“一带一路”有力推进经济全球化变革'
	    	, info: '“‘一带一路’是一个‘道’（即新的合作理念和思维），这个道的关键词就是包容性全球化。”刘卫东在过去两年里一直在讲包容性全球化这个话题。'
	    	, time: '2017-05-08'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/gnzjgd/12447.htm'
	    	, title: '阮宗泽：通向“命运共同体”的必由之路'
	    	, info: '尽管有人会以有色眼镜来看待中国倡议，但“一带一路”与“人类命运共同体”思想已经写入联合国的决议，得到国际社会的点赞与支持。'
	    	, time: '2017-05-08'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/gnzjgd/12339.htm'
	    	, title: '周小川：积极发挥本币在“一带一路”建设中的作用'
	    	, info: '央行行长周小川近日在《中国金融》上撰文表示，在“一带一路”建设中，使用本币开展投融资具有许多优势。'
	    	, time: '2017-05-08'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/gnzjgd/12301.htm'
	    	, title: '柯闻：“一带一路”开放包容 “民相亲”要从青年做起'
	    	, info: '“一带一路”倡议提出3年多来，成效斐然。和“青年”一样，这个倡议充满生机和活力。当“一带一路”遇上“青年”，遇上世界各国“青年”，会碰撞出什么样的火花？'
	    	, time: '2017-05-07'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/gnzjgd/12283.htm'
	    	, title: '冯维江：“一带一路”蕴含博大中国智慧'
	    	, info: '习近平主席关于“世界的命运必须由各国人民共同掌握，世界上的事情只能由各国政府和人民共同商量来办”“作为大国，意味着对地区和世界和平与发展的更大责任。'
	    	, time: '2017-05-05'}
	    ],
	    oSl_slzx = [
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/slsg/12438.htm'
	    	, title: '《复兴丝路》第一集 “一带一路”：中国与世界共赢'
	    	, info: '“一带一路”把44亿人编织成互联互通、合作共赢的人类命运共同体。'
	    	, time: '2017-05-07'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/slsg/11042.htm'
	    	, title: 'CCTV纪录片：《数说命运共同体》'
	    	, info: '2015年10月，央视推出一档全新大型数据新闻节目——《数说命运共同体》，节目挖掘超过1亿GB的数据，分析发现“一带一路”沿线国家40多亿百姓休戚相关的密切联系。'
	    	, time: '2017-05-07'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/slsg/10965.htm'
	    	, title: '《数说命运共同体》第一集：远方的包裹'
	    	, info: '2013年10月3日，习近平总书记在印度尼西亚提出了共建“21世纪海上丝绸之路”构想，与之前9月在哈萨克斯坦提出的共建“丝绸之路经济带”构想，一并称为“一带一路”倡议。'
	    	, time: '2017-05-06'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/slsg/10980.htm'
	    	, title: '《数说命运共同体》第二集：通向世界的路'
	    	, info: '基础设施互联互通是“一带一路”建设的优先领域。可是在“一带一路”沿线，这种互联互通的程度却比较低。在“一带一路”沿线。'
	    	, time: '2017-05-05'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/slsg/10966.htm'
	    	, title: '《数说命运共同体》第三集：文化的旅行'
	    	, info: '在2013年9月之前，伴随着丝绸之路最多的是美食，旅行、路线、历史、纪录片，文化元素占据了关键词墙上最显著的位置'
	    	, time: '2017-05-03'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/slsg/10968.htm'
	    	, title: '《数说命运共同体》第四集：奔跑吧！能量'
	    	, info: '在“一带一路”沿线上，石油储量的82%在中东九国，煤炭的60%在中俄两国，中亚、中东再加俄罗斯储藏了91%的天然气。'
	    	, time: '2017-04-28'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/slsg/11044.htm'
	    	, title: '《数说命运共同体》第五集：食物背后的故事'
	    	, info: '当我们从星空回望地球，黑暗中的光点，汇聚出“一带一路”沿线的人口分布。不同的颜色，正闪耀着人们的口味偏好。'
	    	, time: '2017-04-13'}
	    ],
	    oSl_hwsl = [
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/hwksl/12459.htm'
	    	, title: '国际舆论热议“一带一路”：这是一条共商共建共享之路'
	    	, info: '一个个“一带一路”项目的实施让外媒睁大了眼睛时刻关注着。越来越多国家和国际组织开始跃跃欲试加入这条共商共建共享的阳光大道。'
	    	, time: '2017-05-08'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/hwksl/12434.htm'
	    	, title: '巴西—中国议员阵线主席皮纳托：借鉴中国经验 实现更快发展'
	    	, info: '皮纳托表示，中国是巴西第一大贸易伙伴，也是巴西主要的外资来源国。巴中关系的重要性不仅体现在经济领域，也体现在政治、科技、文化等多个方面。'
	    	, time: '2017-05-08'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/hwksl/12430.htm'
	    	, title: '白俄罗斯副总理谢马什科：中白合作互利共赢'
	    	, info: '尽管面积不大、人口不多，但白俄罗斯是欧亚经济联盟成员国，入驻中白工业园企业的产品可以免关税销往俄罗斯、哈萨克斯坦、亚美尼亚、吉尔吉斯斯坦等市场，还可以进入欧盟，市场拓展潜力巨大。'
	    	, time: '2017-05-08'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/hwksl/12396.htm'
	    	, title: '联合国副秘书长吴红波：一带一路”倡议是中国为国际社会提供的重要公共产品'
	    	, info: '联合国负责经济与社会事务的副秘书长吴红波表示，“一带一路”倡议是中国为国际社会提供的重要公共产品。“一带一路”倡议和构建人类命运共同体理念被写入相关联合国决议是中国参与全球治理的重要里程碑。'
	    	, time: '2017-05-08'},
	    	{url: 'https://www.yidaiyilu.gov.cn/ghsl/hwksl/12397.htm'
	    	, title: '吉尔吉斯议会议员：将全力以赴，为共建“一带一路”注入新活力'
	    	, info: '近年来，中吉两国之间签署了200多份双边文件，这些文件是两国开展互利合作的重要法律基础，同时也充分说明双方对持续深化多领域互利合作的渴望。'
	    	, time: '2017-05-07'}
	    ],
	    str_ul1 = '',
	    str_ul2 = '',
	    str_ul3 = '';

    for (var i=0; i<oSl_slsj.length; i++) {
    	str_ul1 += '<li><h4><a href="'+ oSl_slsj[i].url +'" target="_blank">'+ oSl_slsj[i].title 
    	+'</a></h4><p>'+ oSl_slsj[i].info +'</p><span>'+ oSl_slsj[i].time +'</span></li>';
    }

    for (var i=0; i<oSl_slzx.length; i++) {
    	str_ul2 += '<li><h4><a href="'+ oSl_slzx[i].url +'" target="_blank">'+ oSl_slzx[i].title 
    	+'</a></h4><p>'+ oSl_slzx[i].info +'</p><span>'+ oSl_slzx[i].time +'</span></li>';
    }

    for (var i=0; i<oSl_hwsl.length; i++) {
    	str_ul3 += '<li><h4><a href="'+ oSl_hwsl[i].url +'" target="_blank">'+ oSl_hwsl[i].title 
    	+'</a></h4><p>'+ oSl_hwsl[i].info +'</p><span>'+ oSl_hwsl[i].time +'</span></li>';
    }

    oSl_ul[0].innerHTML = str_ul1;
    oSl_ul[1].innerHTML = str_ul2;
    oSl_ul[2].innerHTML = str_ul3;


    for (var i=0; i<oSl_li.length; i++) {
    	oSl_li[i].index = i;
    	oSl_li[0].setAttribute('class', 'active');
    	oSl_ul[0].style['display'] = 'block';
    	oSl_li[i].onclick = function() {
    		for (var j=0; j<oSl_li.length; j++) {
    			oSl_li[j].setAttribute('class', '');
    			oSl_ul[j].style['display'] = 'none';
    		}
    		oSl_li[this.index].setAttribute('class', 'active');
    		oSl_ul[this.index].style['display'] = 'block';
    	}
    }
	function Nav_list() {
		Nav(2);
	}
	Nav_list();
}

addLoadEvent(Sczl);