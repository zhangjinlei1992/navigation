var keys = {
    0: {0:'q', 1:'w', 2:'e', 3:'r', 4:'t', 5:'y', 6:'u', 7:'i', 8:'o', 9:'p',length:10},
    1: {0:'a', 1:'s', 2:'d', 3:'f', 4:'g', 5:'h', 6:'j', 7:'k', 8:'l',length:9},
    2: {0:'z', 1:'x', 2:'c', 3:'v', 4:'b', 5:'n', 6:'m',length:7},
    length:3
};

var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'y':'xxxx.com',  'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.cn',  'b': 'bilibili.com','z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'}
var hashInLocalStorage = JSON.parse(localStorage.getItem('hash')) || null;

if(hashInLocalStorage){
    hash = hashInLocalStorage
}

index = 0;
while (index < keys['length']){
    div = document.createElement('div');
    div.className = 'row';
    mainBox.appendChild(div);
    row = keys[index];
    index2 = 0;
    while (index2<row.length){
        kbd = document.createElement('kbd');
        kbd.className = 'key';

        span = document.createElement('span');
        span.textContent = row[index2];
        span.className = 'text';
        kbd.appendChild(span);
        button = document.createElement('button');
        button.textContent = '编辑';
        button.id = row[index2];
        imgX = document.createElement('img');
        if(hash[row[index2]]){
            imgX.src = 'http://'+hash[row[index2]] +'/favicon.ico';
        }else {
            imgX.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png';
        }
        imgX.onerror = function(e){
            e.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png';
        };

        button.onclick = function(e){
            thisButton = e.target;
            thisButtonImg=thisButton.previousSibling;
            thisButtonId = thisButton.id;
            Link = prompt('给我一个网址');
            if(Link !== null ){
                hash[thisButtonId] = Link;
                thisButtonImg.src='http://'+ Link +'/favicon.ico';
                thisButtonImg.onerror = function(e2){
                    e2.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png';
                };
                localStorage.setItem('hash',JSON.stringify(hash));
            }
        };

        kbd.appendChild(imgX);
        kbd.appendChild(button);
        div.appendChild(kbd);
        index2=index2+1;
    }
    index = index+1;
}

document.onkeypress = function (e) {
    key = e['key'];
    webSiet = hash[key];
    // location.href = 'http://'+webSiet;
    window.open('http://'+webSiet , '_blank')
}