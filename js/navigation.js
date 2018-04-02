var keys = {
    0: {0:'q', 1:'w', 2:'e', 3:'r', 4:'t', 5:'y', 6:'u', 7:'i', 8:'o', 9:'p',length:10},
    1: {0:'a', 1:'s', 2:'d', 3:'f', 4:'g', 5:'h', 6:'j', 7:'k', 8:'l',length:9},
    2: {0:'z', 1:'x', 2:'c', 3:'v', 4:'b', 5:'n', 6:'m',length:7},
    length:3
};

var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'}
var hashInLocalStorage = JSON.parse(localStorage.getItem('hash')) || null;

if(hashInLocalStorage){
    hash = hashInLocalStorage
}

index = 0;
while (index < keys['length']){
    divXXX = document.createElement('div');
    mainBox.appendChild(divXXX);
    row = keys[index];
    index2 = 0;
    while (index2<row.length){
        kbd = document.createElement('kbd');
        kbd.textContent = row[index2];
        buttonX = document.createElement('button');
        buttonX.textContent = '编辑';
        buttonX.id = row[index2];
        buttonX.onclick = function(e){
           thisKey = e.target.id;
            Link = prompt('给我一个网址');
            if(Link !== null ){
                hash[thisKey] = Link;
                localStorage.setItem('hash',JSON.stringify(hash));
            }
        };
        kbd.appendChild(buttonX);
        divXXX.appendChild(kbd);
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