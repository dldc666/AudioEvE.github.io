// script.js
const videos = [
{"title": "0基础入门的两周作业！听听看", "url": "https://www.bilibili.com/video/BV1sQSaYwE3x/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "AE圆点粒子特效插件，轻松制作3D视觉效果-FanDev BikiniDots，Win汉化版", "url": "https://www.bilibili.com/video/BV15TShYVEep/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "Blender插件-三维点线连接粒子动画 Particles Link", "url": "https://www.bilibili.com/video/BV1NrStYHEZw/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "everything 硬盘添加移出,隐藏指定目录", "url": "https://www.bilibili.com/video/BV1YtStYwEd4/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "「星穹铁道」三月七练剑 银狼线4 “我要打十个” 破解版AI注入公司机甲", "url": "https://www.bilibili.com/video/BV1fzShYnEyA/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "【新闻速报】iZotope发布 Neutron 5 全新三模块抢先看！", "url": "https://www.bilibili.com/video/BV1JKSvY8EN5/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "【附作弊器】骗子酒吧！一键汉化，可联机，懒人一键直装可玩，附使用教程", "url": "https://www.bilibili.com/video/BV1AbSbYnEKJ/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "【面对面】专访冯骥：重走西游", "url": "https://www.bilibili.com/video/BV1ex2rYFETb", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "【音频后期】战争和恐怖片段声音设计优秀工程-Reaper", "url": "https://www.bilibili.com/video/BV1XDSbYNEis/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "传奇的牛头沙威玛，烤一整个牛头就为了卷张饼", "url": "https://www.bilibili.com/video/BV15W1xYpEZe", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "全网首发！小米15Pro徕卡相机包提取，无需root优化红米拍照，澎湃OS和MIUI机型都可安装！", "url": "https://www.bilibili.com/video/BV1asSxYxEMr/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "冬天到底有没有必要热车？修理工教你一招，热车省油又养车！", "url": "https://www.bilibili.com/video/BV1MbSvYyE9z/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "大庆赶海，退潮后发现正在往外吐水的毛蛤蜊，好像拳头一样大", "url": "https://www.bilibili.com/video/BV1oo2tYhEwn", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "女生诵读《滕王阁序》", "url": "https://www.bilibili.com/video/BV19hSaY1EWk/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "我们采访了高通CEO安蒙！他如何看待自研CPU？", "url": "https://www.bilibili.com/video/BV1ihSeYWEAJ/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "汽车保养时容易遇到的5个坑，许多司机因为不懂，花了冤枉钱！", "url": "https://www.bilibili.com/video/BV1LwS4YcEMz/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "深蓝S05上手体验：大灯能投影的紧凑级SUV", "url": "https://www.bilibili.com/video/BV1N2S8YZEsS/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "白象方便面能让非洲员工多兴奋？一袋的价格在非洲相当于一斤牛肉", "url": "https://www.bilibili.com/video/BV1ga2EYoEpF", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "评论666➕关注。会自动发送到你的私信里。飞卢，起点，刺猬猫小说", "url": "https://www.bilibili.com/video/BV1JH1EY6E3R/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "诺贝尔文学奖得主韩江《素食者》解读", "url": "https://www.bilibili.com/video/BV1L31MYqESz/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "贪婪洞窟 最新无限资源版", "url": "https://www.bilibili.com/video/BV1utSvYLE6U/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "迷雾大陆 科技加持变爽游", "url": "https://www.bilibili.com/video/BV1MbSvYyEXq/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "造梦无双 平民玩家再也不怕卡关了", "url": "https://www.bilibili.com/video/BV1ubSvYyEWh/", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."},
{"title": "高清《黑神话悟空》电影版，3小时精剪版", "url": "https://www.bilibili.com/video/BV1MrHCenECA", "thumbnail": "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2F78310a55b319ebc4918d219b1b0e14f21f1716f5.jpeg%40f_auto%3Ftoken%3D1385946acf3f5df81fb9df62435b88cb&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1730394000&t=77d78bc99005647e5791090b9f9dbbb3", "description": "This is the first video."}
];

window.onload = function() {
    displayVideos(videos);
};

// script.js
function displayVideos(videoData) {
    const videoList = document.querySelector('.video-list');
    videoList.innerHTML = '';
    videoData.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-item');
        
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('video-thumbnail');
        thumbnail.style.backgroundImage = `url(${video.thumbnail})`;
        
        const info = document.createElement('div');
        info.classList.add('video-info');
        
        const title = document.createElement('div');
        title.classList.add('video-title');
        title.textContent = video.title;
        
        const description = document.createElement('div');
        description.classList.add('video-description');
        description.textContent = video.description;
        
        info.appendChild(title);
        info.appendChild(description);
        videoElement.appendChild(thumbnail);
        videoElement.appendChild(info);
        
        // 设置点击事件，打开新窗口
        videoElement.onclick = function() {
            window.open(video.url, '_blank');
        };
        
        videoList.appendChild(videoElement);
    });
}


function searchVideo() {
    const searchText = document.getElementById('search-box').value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchText));
    displayVideos(filteredVideos);
}

// script.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();  // 阻止表单的默认提交行为，因为我们想用JavaScript来处理
    searchVideo();
});

