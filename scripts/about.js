function About() {
	var Alist = getElementsByClassName(document, 'ul', 'About_list')[0],
	    About_info = [
	    	{url: 'https://www.baidu.com', src: 'images/gy1.jpg', alt: '长江经济带'},
	    	{url: 'https://www.baidu.com', src: 'images/gy2.jpg', alt: '中巴经济走廊'},
	    	{url: 'https://www.baidu.com', src: 'images/gy3.jpg', alt: '泛亚铁路'},
	    	{url: 'https://www.baidu.com', src: 'images/gy4.jpg', alt: '自由贸易区'},
	    	{url: 'https://www.baidu.com', src: 'images/gy5.jpg', alt: '中原经济区'},
	    	{url: 'https://www.baidu.com', src: 'images/gy6.jpg', alt: '长吉图开发'},
	    	{url: 'https://www.baidu.com', src: 'images/gy7.jpg', alt: '京津冀一体化'},
	    	{url: 'https://www.baidu.com', src: 'images/gy8.jpg', alt: '珠江经济带'},
	    	{url: 'https://www.baidu.com', src: 'images/gy9.jpg', alt: '总规划'}
	    ],
	    strAboutli = '';

	for (var i=0; i<About_info.length; i++) {
		strAboutli += '<li><a href="'+ About_info[i].url +'" target="_blank"><img src="'+ About_info[i].src 
		+'"><p>'+ About_info[i].alt +'</p></a></li>';
	}
	Alist.innerHTML = strAboutli;
	function Nav_list() {
		Nav(7);
	}
	Nav_list();
}

addLoadEvent(About);