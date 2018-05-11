;(function () {

    //初始化数据
    var keys = init().keys;
    var hash = init().hash;

    //生成键盘
    generateKeyboard(keys,hash);

    //监听键盘
    addKeyEvent(hash);


    function addKeyEvent(hash){
        document.onkeypress = function (e) {
            var  key = e['key'];
            var webSiet = hash[key];
            // location.href = 'http://'+webSiet;
            window.open('http://'+webSiet , '_blank')
        }
    }
    function generateKeyboard(keys,hash) {
        for(var index =0 ; index<keys.length; index=index+1){
            var  div = tag('div',{className:'row'});
            document.getElementById('mainBox').appendChild(div);

            var row = keys[index];
            for(var index2= 0;index2<row.length;index2=index2+1){
                var span = tag('span',{className:'text',textContent:row[index2]});
                var button=buttonEvent(row[index2]);
                var imgX= createImage(hash[row[index2]]);
                var kbd = tag('kbd',{className:'key'});
                kbd.appendChild(span);
                kbd.appendChild(imgX);
                kbd.appendChild(button);

                div.appendChild(kbd);
            }
        }
    }
    function getFromLocalStorage(name) {
        //返回本地数据
        return JSON.parse(localStorage.getItem(name) || null);
    }
    function tag(tagName,attributes) {
        //创建 DOM
        var element = document.createElement(tagName);
        for (var k in attributes){
            element[k] = attributes[k]
        }
        return element;
    }
    function buttonEvent(id) {
        var  button = tag('button',{id:id,textContent:'编辑'});
        button.onclick = function(e){
            var thisButton = e.target;
            var thisButtonImg=thisButton.previousSibling;
            var thisButtonId = thisButton.id;
            var Link = prompt('给我一个网址');
            if(Link !== null ){
                hash[thisButtonId] = Link;
                thisButtonImg.src='http://'+ Link +'/favicon.ico';
                thisButtonImg.onerror = function(e2){
                    e2.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png';
                };
                localStorage.setItem('hash',JSON.stringify(hash));
            }
        };
        return button;
    }
    function createImage(domain) {
        var imgX = tag('img');
        if(domain){
            imgX.src = 'http://'+domain +'/favicon.ico';
        }else {
            imgX.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png';
        }
        imgX.onerror = function(e){
            e.target.src = 'https://i.loli.net/2017/11/10/5a05afbc5e183.png';
        };
        return imgX
    }
    function init() {

        var keys = {
            0: {0:'q', 1:'w', 2:'e', 3:'r', 4:'t', 5:'y', 6:'u', 7:'i', 8:'o', 9:'p',length:10},
            1: {0:'a', 1:'s', 2:'d', 3:'f', 4:'g', 5:'h', 6:'j', 7:'k', 8:'l',length:9},
            2: {0:'z', 1:'x', 2:'c', 3:'v', 4:'b', 5:'n', 6:'m',length:7},
            length:3
        };
        var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'y':'xxxx.com',  'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.cn',  'b': 'bilibili.com','z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'}
        var hashInLocalStorage = getFromLocalStorage('hash');

        if(hashInLocalStorage){
            hash = hashInLocalStorage
        }

        return{
            keys:keys,
            hash:hash
        }
    }
})();
