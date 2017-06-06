function Diplomatic() {
	var Vie_list = getElementsByClassName(document, 'ul', 'viewpoint_list')[0],
	    Rec_list = getElementsByClassName(document, 'ul', 'recommend_list')[0],
	    Vie_info = [
	    	{name: '王义桅', url: 'https://www.baidu.com', info: '“一带一路”中的传统中...'},
	    	{name: '刘江永', url: 'https://www.baidu.com', info: '以钓鱼岛为视角透视新中...'},
	    	{name: '李开盛', url: 'https://www.baidu.com', info: '特朗普的朝核政策与中国...'},
	    	{name: '张宇燕', url: 'https://www.baidu.com', info: '全球政治与安全报告...'},
	    	{name: '金灿荣', url: 'https://www.baidu.com', info: '2016世界乱象对未来的启示...'},
	    	{name: '刘宏', url: 'https://www.baidu.com', info: '跨界治理是“一带一路”...'},
	    	{name: '石源华', url: 'https://www.baidu.com', info: '从“韩国模式”到“菲律...'},
	    	{name: '韩晗', url: 'https://www.baidu.com', info: '卡斯特罗去世，特朗普即...'},
	    	{name: '阎学通', url: 'https://www.baidu.com', info: '中美之间在经济领域矛盾...'},
	    	{name: '梁亚滨', url: 'https://www.baidu.com', info: '朝核问题搅乱东北亚局势...'}
	    ],
	    Rec_info = [
	    	{url: 'https://www.baidu.com', src: 'images/tj1.jpg', info: '“一带一路”：沿着“五通”方向前进'},
	    	{url: 'https://www.baidu.com', src: 'images/tj2.jpg', info: '“一带一路”的“青蒿素”范本'},
	    	{url: 'https://www.baidu.com', src: 'images/tj3.jpg', info: '在华留学生眼中的“一带一路”：文化交流薪火相传'},
	    	{url: 'https://www.baidu.com', src: 'images/tj4.jpg', info: '“一带一路”上的中国制造：锻造硬实力 善用巧实力'},
	    	{url: 'https://www.baidu.com', src: 'images/tj5.jpg', info: '“一带一路”中国建设者走向世界'},
	    	{url: 'https://www.baidu.com', src: 'images/tj6.jpg', info: '中国已在7个东盟国家建立境外经贸合作区'}
	    ],
	    Vie_li = '',
	    Rec_li = '';

	for (var i=0; i<Vie_info.length; i++) {
		Vie_li += '<li><strong>'+ Vie_info[i].name +'：</strong><a href="'
		+ Vie_info[i].url +'" target="_blank">'+ Vie_info[i].info +'</a></li>';
	}

	for (var i=0; i<Rec_info.length; i++) {
		Rec_li += '<li><a href="'+ Rec_info[i].url +'" target="_blank"><img src="'
		+ Rec_info[i].src +'"><p>'+ Rec_info[i].info +'</p></a></li>';
	}

	Vie_list.innerHTML = Vie_li;
	Rec_list.innerHTML = Rec_li;

	function Nav_list() {
		Nav(3);
	}
	Nav_list();

    Infostring(70);
}

addLoadEvent(Diplomatic);