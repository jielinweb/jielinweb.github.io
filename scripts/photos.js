function Photos() {
	var Photos_list = getElementsByClassName(document, 'ul', 'Info_list')[0],
	    Photos_info = [
	    	{url: 'https://www.yidaiyilu.gov.cn/gbjg/gbmt/10149.htm', _src: 'images/ps1.jpg', src: 'images/white.jpg', title: '阿联酋'
	    	, info: '阿拉伯联合酋长国，一般简称阿联酋，俗称沙漠中的花朵，是一个以产油著称的中东沙漠国家，位于阿拉伯半岛东部，北濒波斯湾。西北与卡塔尔为邻，西和南与沙特阿拉伯交界，东和东北与阿曼毗连。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps2.jpg', src: 'images/white.jpg', title: '不丹'
	    	, info: '不丹王国简称不丹，是位于中国和印度之间喜马拉雅山脉东段南坡的内陆国，该国的国名当地语言叫“竺域” （或作“朱玉”Druk Yul，藏文：vBrug-yul），意为雷、龙之地。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps3.jpg', src: 'images/white.jpg', title: '土库曼斯坦'
	    	, info: '土库曼斯坦是一个中亚国家，前苏联加盟共和国之一，苏联时期的名称为土库曼苏维埃社会主义共和国，1991年从苏联独立。石油天然气工业为该国的支柱产业。农业方面则以种植棉花和小麦为主。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps4.jpg', src: 'images/white.jpg', title: '巴基斯坦'
	    	, info: '巴基斯坦伊斯兰共和国位于南亚，东与印度比邻，南面是印度洋，西与伊朗接壤，西北和阿富汗相连，东北面可通 往中国的新疆。在乌尔都语中，“巴基斯坦”这个源自波斯语的字的意思为“圣洁的土地”。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps5.jpg', src: 'images/white.jpg', title: '印度'
	    	, info: '印度共和国的简称，位于亚洲南部，是南亚次大陆最大的国家，与孟加拉国、缅甸、中华人民共和国、不丹、尼泊尔和巴基斯坦等国家接壤。印度也是世界三大宗教之一佛教的发源地。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps6.jpg', src: 'images/white.jpg', title: '新加坡'
	    	, info: '新加坡是东南亚的一个岛国。该国位于马来半岛南端，其南面有新加坡海峡与印尼相望，北面紧邻柔佛海峡与马来西亚。新加坡在城市保洁方面成绩斐然，故有“花园城市”之美称。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps7.jpg', src: 'images/white.jpg', title: '黑山'
	    	, info: '黑山位于欧洲巴尔干半岛中西部，东南与阿尔巴尼亚、东北部与塞尔维亚相连，西北与波黑和克罗地亚接壤。西南部地区濒临亚得里亚海东岸。气候依地形自南向北分为地中海式气候、温带大陆性气候。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps8.jpg', src: 'images/white.jpg', title: '东帝汶'
	    	, info: '东帝汶位于东南亚努沙登加拉群岛最东端的岛国，包括帝汶岛东部和西部北海岸的欧库西地区以及附近的阿陶罗岛和东端的雅库岛。西部与印尼西帝汶相接，南隔帝汶海与澳大利亚相望。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps9.jpg', src: 'images/white.jpg', title: '波黑'
	    	, info: '波黑位于巴尔干半岛中西部，其南、西、北三面与克罗地亚毗连，东与塞尔维亚、黑山为邻。波黑大部分地区位于迪纳拉高原和萨瓦河流域，南部极少部分濒临亚得里亚海。波黑南部属地中海式气候。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps10.jpg', src: 'images/white.jpg', title: '文莱'
	    	, info: '文莱，全名文莱达鲁萨兰国，又称文莱伊斯兰教君主国，位于婆罗洲北岸，南中国海南岸，亚洲东南部。整个国土被马来西亚所分割、环绕，文莱国教为伊斯兰教。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps11.jpg', src: 'images/white.jpg', title: '拉脱维亚'
	    	, info: '拉脱维亚位于波罗的海东岸，北与爱沙尼亚，南与立陶宛，东与俄罗斯，东南与白俄罗斯接壤。国界线总长1862公里。平均海拔87米，地貌为丘陵和平原。气候属海洋性气候向大陆性气候过渡的中间类型。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps12.jpg', src: 'images/white.jpg', title: '克罗地亚'
	    	, info: '克罗地亚位于欧洲中南部，巴尔干半岛的西北部。西北和北部分别与斯洛文尼亚和匈牙利接壤，东部和东南部与塞尔维亚、波斯尼亚和黑塞哥维那、黑山为邻，南濒亚得里亚海，岛屿众多，海岸线曲折。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps13.jpg', src: 'images/white.jpg', title: '斯洛文尼亚'
	    	, info: '斯洛文尼亚位于欧洲中南部，巴尔干半岛西北端。西接意大利，北邻奥地利和匈牙利，东部和南部与克罗地亚接壤，西南濒亚得里亚海。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps14.jpg', src: 'images/white.jpg', title: '立陶宛'
	    	, info: '立陶宛位于波罗的海东岸，北接拉脱维亚，东连白俄罗斯，南邻波兰，西濒波罗的海和俄罗斯加里宁格勒州。国境线总长1644公里。属海洋性向大陆性过渡气候。最高点海拔293.6米。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps15.jpg', src: 'images/white.jpg', title: '爱沙尼亚'
	    	, info: '爱沙尼亚位于波罗的海东岸，东与俄罗斯接壤，南与拉脱维亚相邻，北邻芬兰湾，与芬兰隔海相望，西南濒里加湾。属海洋性气候，冬季平均气温-5℃，夏季平均气温16℃，年平均降水量500-700毫米。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps16.jpg', src: 'images/white.jpg', title: '阿尔巴尼亚'
	    	, info: '阿尔巴尼亚位于东南欧巴尔干半岛西部，北部和东北部分别与塞尔维亚和黑山及马其顿接壤，南部与希腊为邻，西临亚得里亚海，隔奥特朗托海峡与意大利相望。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps17.jpg', src: 'images/white.jpg', title: '叙利亚'
	    	, info: '叙利亚位于亚洲西部，地中海东岸，北与土耳其接壤，东同伊拉克交界，南与约旦毗连，西南与黎巴嫩和巴勒斯坦为邻，西与塞浦路斯隔地中海相望。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps18.jpg', src: 'images/white.jpg', title: '印度尼西亚'
	    	, info: '印度尼西亚共和国，简称印度尼西亚或印尼，为东南亚国家之一；由上万个岛屿组成，是全世界最大的群岛国家，疆域横跨亚洲及大洋洲，别称“千岛之国”。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps19.jpg', src: 'images/white.jpg', title: '约旦'
	    	, info: '约旦哈希姆王国位于亚洲西部，阿拉伯半岛的西北，西与巴勒斯坦、以色列为邻，北与叙利亚接壤，东北与伊拉克交界，东南和南部与沙特阿拉伯相连。约旦基本上是个内陆国家。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps20.jpg', src: 'images/white.jpg', title: '也门'
	    	, info: '也门位于阿拉伯半岛西南端，与沙特、阿曼相邻，濒红海、亚丁湾和阿拉伯海。1990年5月由阿拉伯也门共和国（北也门）和也门民主人民共和国（南也门）合并组成。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps21.jpg', src: 'images/white.jpg', title: '巴林'
	    	, info: '巴林，中东国家，位于亚洲西南部，为波斯湾西南部的岛国，邻近卡塔尔和沙特阿拉伯之间，属热带沙漠气候，石油为国家经济的支柱。'},
	    	{url: 'https://www.baidu.com', _src: 'images/ps22.jpg', src: 'images/white.jpg', title: '以色列'
	    	, info: '以色列是一个位于西亚黎凡特地区的国家，位于地中海的东南方向，北靠黎巴嫩、东濒叙利亚和约旦、西南边则是埃及。以色列是中东地区最为强大、现代化、经济发展最高的国家，属于发达国家。'}
	    ],
	    strbox = '',
	    num = 0;
	for (var i=0; i<Photos_info.length; i++) {
		strbox += '<li><a href="'+ Photos_info[i].url +'" target="_blank"><img src="'
		+ Photos_info[i].src +'"><div class="photos_info"><h4>'
		+ Photos_info[i].title +'</h4><p>'+ Photos_info[i].info +'</p></div></a></li>';
	}
	Photos_list.innerHTML = strbox;

	var Photos_li = Photos_list.getElementsByTagName('li'),
	    oImgs = Photos_list.getElementsByTagName('img'),
	    Photos_box = Photos_list.getElementsByTagName('div');
	
	for (var i=0; i<Photos_li.length; i++) {
		Photos_li[i].index = i;               //索引值
		Photos_li[i].onmouseover = function() {
			num = this.index;
			startMove(Photos_box[num], {top: 0});
		}
		Photos_li[i].onmouseout = function() {
			num = this.index;
			startMove(Photos_box[num], {top: -209});
		}
	}

	showImages();
	window.onscroll = showImages;

	function showImages() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
			oReT = getElementsByClassName(document, 'div', 'return_Top')[0];
		for (var i=0; i<oImgs.length; i++) {
			if (!oImgs[i].isLoad && getTop(oImgs[i]) < scrollTop + document.documentElement.clientHeight) {
				//oImgs[i].src = oImgs[i].getAttribute( Photos_info[i]._src);
				oImgs[i].src = Photos_info[i]._src;
				oImgs[i].isLoad = true;
			}
		}

		scrollTop >= 800 ? oReT.style.display = 'block' : oReT.style.display = 'none';
	}

	function getTop(obj) {
		var iTop = 0;
		while(obj) {
			iTop += obj.offsetTop;
			obj = obj.offsetParent;
		}
		return iTop;
	}


	function Nav_list() {
		Nav(6);
	}
	Nav_list();
}

addLoadEvent(Photos);
