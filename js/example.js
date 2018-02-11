$(function(){

    var data = [
        {
            all:57,
            score:21,
            fontColor:"#222",
            hoverFontColor:"#222",
            hoverColor:"#aaa",
            color:"#d1dae4"
        },
        {
            all:57,
            score:22,
            hoverColor:"#aaa",
            color:"#d1dae4"
        },
        {
            all:57,
            score:23
            ,hoverColor:"#b38e5e",
            color:"#e1c199"
        },
        {
            all:57,
            score:24,
            hoverColor:"#b38e5e",
            color:"#e1c199"
        },
        {
            all:57,
            score:25,
            hoverColor:"#b38e5e",
            color:"#e1c199"
        },
        {
            all:57,
            score:26,
            hoverColor:"#b38e5e",
            color:"#e1c199"
        },
        {
            all:57,
            score:27,
            hoverColor:"#fcce51",
            color:"#fef78b"
        },
        {
            all:57,
            score:28,
            hoverColor:"#b38e5e",
            color:"#e1c199"
        },
        {
            all:509,
            score:296,
            hoverColor:"#b38e5e",
            color:"#e1c199"
        },
        {
            all:503,
            score:296,
            hoverColor:"red",
            color:"#ff7b6f"
        }
    ];

    // 0度的时候
    new Basketball({
        // canvas节点Dom容器
        node:"#canvas1",
        // 角度图片的相对根路径
        imgRootPath:"img/",
        // 角度，仅支持0、90、180、270
        angle:0,
        // 每块区域的文本内容、默认色、hover色
        data:data,
        // 当前角度图片被加载失败时回调
        fail:function(msg){
            console.log(msg)
        },
        // Basketball控件初始化完成时回调
        inited:function(){
            console.log("初始化完成");
        }
    });

    // 180的时候
    new Basketball({
        node:"#canvas2",
        imgRootPath:"img/",
        angle:180,
        data:data
    });

    // 90度的时候
    new Basketball({
        node:"#canvas3",
        imgRootPath:"img/",
        angle:90,
        data:data
    });

    // 270度的时候
    new Basketball({
        node:"#canvas4",
        imgRootPath:"img/",
        angle:270,
        data:data
    });
});