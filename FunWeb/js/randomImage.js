var bodyBgs = [];
bodyBgs[0] = "https://tva2.sinaimg.cn/large/9bd9b167gy1fwrduggftij21hc0u0qm1.jpg";
bodyBgs[1] = "https://tva2.sinaimg.cn/large/9bd9b167gy1fwrduggftij21hc0u0qm1.jpg";
bodyBgs[2] = "https://tva2.sinaimg.cn/large/9bd9b167gy1fwrduggftij21hc0u0qm1.jpg";
bodyBgs[3] = "https://tva2.sinaimg.cn/large/9bd9b167gy1fwrduggftij21hc0u0qm1.jpg";
bodyBgs[4] = "https://tva2.sinaimg.cn/large/9bd9b167gy1fwrduggftij21hc0u0qm1.jpg";
var randomBgIndex = Math.round(Math.random() * 4);
//输出随机的背景图
document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat fixed}</style>');
//]]>