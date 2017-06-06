function Culture() {
	var Count_list = getElementsByClassName(document, 'ul', 'Countries_list')[0],
	    Sl_intlist = getElementsByClassName(document, 'ul', 'sl_int')[0],
	    Countries = ['新加坡', '马来西亚', '印度尼西亚', '缅甸', '泰国', '老挝', '柬埔寨', '越南', '文莱'
	    ,'菲律宾', '伊朗', '伊拉克', '伊拉克', '叙利亚', '约旦', '黎巴嫩', '以色列', '巴勒斯坦', '沙特阿拉伯', '也门'
	    ,'阿曼', '阿联酋', '卡塔尔', '卡塔尔', '巴林', '希腊', '塞浦路斯', '埃及', '印度', '巴基斯坦', '孟加拉'
	    ,'阿富汗', '斯里兰卡', '马尔代夫', '尼泊尔', '不丹', '哈萨克斯坦', '乌兹别克斯坦', '土库曼斯坦', '俄罗斯'],
	    Sl_lists = [
	    	{url: 'https://www.baidu.com', info: '中国与中亚国家合作的历史基础'},
	    	{url: 'https://www.baidu.com', info: '匈牙利国家贸易效率评价与分析'},
	    	{url: 'https://www.baidu.com', info: '塞尔维亚国家贸易效率评价与分析'},
	    	{url: 'https://www.baidu.com', info: '哈萨克斯坦国家贸易效率评价与分析'},
	    	{url: 'https://www.baidu.com', info: '俄罗斯联邦国家贸易效率评价与分析'},
	    	{url: 'https://www.baidu.com', info: '德国国家贸易效率评价与分析'},
	    	{url: 'https://www.baidu.com', info: '荷兰国家贸易效率评价与分析'},
	    	{url: 'https://www.baidu.com', info: '菲律宾与中国的产业互补性'},
	    	{url: 'https://www.baidu.com', info: '韩国与中国的产业互补性'},
	    	{url: 'https://www.baidu.com', info: '俄罗斯与中国的产业互补性'}
	    ],
	    Cou_li = '',
	    Slint_li = '';

	for (var i=0; i<Countries.length; i++) {
		Cou_li += '<li>'+ Countries[i] +'</li>';
	}
	Count_list.innerHTML = Cou_li;

	for (var i=0; i<Sl_lists.length; i++) {
		Slint_li += '<li><a href="'+ Sl_lists[i].url +'" target="_blank">'+ Sl_lists[i].info +'</a></li>';
	}
	Sl_intlist.innerHTML = Slint_li;

	function Nav_list() {
		Nav(4);
	}
	Nav_list();

	Infostring(90); //字符串截取
}

addLoadEvent(Culture);