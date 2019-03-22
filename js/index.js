window.onload = function () {

    //下载app移入移出效果
    // let downapp=document.querySelector(".downapp");
    // let download=document.querySelector(".download");
    let download = document.getElementsByClassName("download")[0];
    let downapp = document.getElementsByClassName("downapp")[0];
    // console.log(downapp);
    // console.log(download);
    downapp.onmouseover = function () {
        download.style.display = "block";
    }
    downapp.onmouseout = function () {
        download.style.display = "none";
    }

    //购物车移入移出效果
    let shoppingcar = document.querySelector(".shopping-car");
    let shoppingslide = document.querySelector(".shopcarslide");
    // console.log(shoppingcar);
    // console.log(shoppingslide);
    shoppingcar.onmouseenter = function () {
        shoppingslide.style.display = "block";
    }
    shoppingcar.onmouseleave = function () {
        shoppingslide.style.display = "none";
    }


    // 搜索栏导航移入移出效果

    // let span = document.querySelectorAll(".search-list span")	
    // let listBox = document.querySelectorAll(".search-list-box")

    // span.forEach(function(item,i){
    // 	item.onmouseenter = function(){
    // 		listBox.forEach(function(item){
    // 			item.style.zIndex = 0
    // 		})
    // 		listBox[i].style.zIndex = 10
    // 	}
    // })


    //搜索栏移入移出效果
    let flag = true
    let search_input = document.querySelector(".search-input");
    let submit_button = document.querySelector(".submit-button");
    let searchInputSlide = document.querySelector(".searchInputSlide")
    search_input.onmouseenter = function () {
        if (!flag) {
            return
        }
        this.style.borderColor = "#333"
        submit_button.style.borderColor = "#333"
    }
    search_input.onmouseleave = function () {
        if (!flag) {
            return
        }
        this.style.borderColor = ""

        submit_button.style.borderColor = ""
    }

    submit_button.onmouseenter = function () {
        if (!flag) {
            // submit_button.style.borderColor = "#FF6700"
            // submit_button.style.backgroundColor = "#FF6700"
            // search_input.style.borderColor = "#333"
            // submit_button.style.color = "#fff"
            return
        }
        submit_button.style.borderColor = "#FF6700"
        submit_button.style.backgroundColor = "#FF6700"
        search_input.style.borderColor = "#333"
        submit_button.style.color = "#fff"
    }
    submit_button.onmouseleave = function () {
        if (!flag) {
            //     submit_button.style.borderColor = ""
            // submit_button.style.backgroundColor = ""
            // submit_button.style.color = ""
            // search_input.style.borderColor = ""
            return
        }
        submit_button.style.borderColor = ""
        submit_button.style.backgroundColor = ""
        submit_button.style.color = ""
        search_input.style.borderColor = ""
    }

    search_input.onfocus = function () {
        flag = false;
        searchInputSlide.style.display = "block"
        search_input.style.borderColor = "#FF6700"
        submit_button.style.borderColor = "#FF6700"
    }
    search_input.onblur = function () {
        flag = true;
        searchInputSlide.style.display = ""
        search_input.style.borderColor = ""
        submit_button.style.borderColor = ""
    }



    // 轮播图列表移入移出效果
    let bannerListItem = document.querySelectorAll(".bannerList-item")
    let bannerSlide = document.querySelectorAll(".bannerSlide")
    // console.dir(bannerListItem)
    // console.dir(bannerSlide)
    bannerListItem.forEach(function (v, i) {
        v.onmouseenter = function () {
            bannerSlide[i].style.display = "block"
        }
        v.onmouseleave = function () {
            bannerSlide[i].style.display = "none"
        }
    })

    // 轮播图轮播效果(透明轮播)
    // 先让图片自己可以轮播，然后写移入鼠标停止轮播

    // let index = 0;
    // let page = document.querySelectorAll(".banner .imgBox a")
    // let banner = document.querySelector(".banner")
    // let pre = document.querySelector(".banner .pre")
    // let next = document.querySelector(".banner .next")

    // banner.onmouseenter = function () {
    //     clearInterval(t)
    // }
    // banner.onmouseleave = function () {
    //     setInterval(t)
    // }
    // function run(status = "next") {
    //     // 轮播一次
    //     if (status == "next") {
    //         index += 1
    //     }
    //     else if (status = "pre") {
    //         index -= 1
    //     }
    //     if (index < 0) {
    //         index = 4
    //     }
    //     if (index > 4) {
    //         index = 0
    //     }
    //     pages.forEach(function (item, i) {
    //         item.classList.remove("active")
    //     })
    //     pages[index].classList.add("active")
    // }
    // let t = setInterval(run, 2000)
    // next.onclick = function () {
    //     run()
    // }
    // pre.onclick = function () {
    //     run("pre")
    // }

    // 无缝轮播开始
    // let box = document.querySelector(".box")
    // animate(box,{'width:300'})

    // let prev = 0
    // let now = 0
    // pages.forEach(function(item,i){
    //     if(i==0){
    //         return
    //     }
    //     item.style.left="1226px"
    // })
    // // 切换功能
    // function run(status = 'next'){
    //     if(status=='next'){
    //         now+=1
    //         if(now>4){
    //             now = 0
    //         }
    //         pages[now].style.left = "1226px"
    //         animate(pages[now],{'left':0})
    //         animate(pages[prev],{'left':-1226}) 
    //     }else if(status=='pre'){
    //         now-=1
    //         if(now<0){
    //             now = 4
    //         }
    //         pages[now].style.left = "-1226px"
    //         animate(pages[now],{'left':0})
    //         animate(pages[prev],{'left':1226}) 
    //     } 
    //     now+=1
    //     // 限制范围
    //     prev = now
    // }
    // let t = setInterval(run,2000)
    // // 移入
    // banner.onmouseenter = function(){
    //     clearInterval(t)
    // }
    // banner.onmouseleave = function(){
    //     t = setInterval(run,2000)
    // }
    // // 左右箭头
    // next.onclick = function(){
    //     run()
    // }
    // pre.onclick = function(){
    //     run('pre')
    // }
    // 无缝轮播结束

    let index = 0;
    let pages = document.querySelectorAll(".banner-imgs .imgBox a")
    let banner = document.querySelector(".banner-imgs")
    let pre = document.querySelector(".banner-move-btn1")
    let next = document.querySelector(".banner-move-btn2")
    let dots = document.querySelectorAll(".dot")

    banner.onmouseenter = function () {
        clearInterval(t)
    }
    banner.onmouseleave = function () {
        t = setInterval(run, 3000)
    }
    function run(status = "next") {
        if (status == "next") {
            index += 1
        } else if (status = "pre") {
            index -= 1
        }
        if (index > 4) {
            index = 0;
        }
        if (index < 0) {
            index = 4
        }
        pages.forEach(function (item, i) {
            item.classList.remove("active")
        })
        pages[index].classList.add("active")

        dots.forEach(function (item, i) {
            item.classList.remove("active")
        })
        dots[index].classList.add("active")
    }
    let t = setInterval(run, 3000)
    next.onclick = function () {
        run("next")
    }
    pre.onclick = function () {
        run("pre")
    }
    // 轮播点点击效果
    dots.forEach(function (item, i) {
        item.onclick = function () {                     //item就是获取到的div
            dots.forEach(function (item) {
                item.classList.remove("active")
            })
            item.classList.add("active")

            pages.forEach(function (item) {
                item.classList.remove("active")
            })
            pages[i].classList.add("active")
            index = i
        }

    })





    //主体部分选项卡移入移出效果
    // function select(n, b) {
    //     let navs = document.querySelectorAll(".nav1 span")
    //     //  alert(navs.length)
    //     let boxs = document.querySelectorAll(".rightCon1 .box")
    //     // alert(boxs.length)
    //   navs.forEach(function(item,i){
    //       item.onmouseenter=function(){
    //           navs.forEach(function(item2){
    //               item2.classList.remove("active")
    //           })
    //           this.classList.add("active")
    //           boxs.forEach(function(item){
    //               item.classList.remove("active")
    //           })
    //           boxs[i].classList.add("active")
    //       }
    //   })
    //     select(".nav1 span",'.rightCon1 .box')
    //     select(".nav2 span",'.rightCon2 .box')

    // }
    function select(n, b) {
        let navs = document.querySelectorAll(n)
        // alert(navs.length)
        // console.dir(navs)
        let boxs = document.querySelectorAll(b)
        // alert(boxs.length)
        navs.forEach(function (item, i) {
            item.onmouseenter = function () {
                navs.forEach(function (item2) {
                    item2.classList.remove("active")
                })
                this.classList.add("active")
                boxs.forEach(function (item) {
                    item.classList.remove("active")
                })
                boxs[i].classList.add("active")
            }
        })
    }
    select(".elec-title-right li", ".elect-lists .elect-list")
    select(".intell-title-right li", ".elect-lists2 .elect-list")
    select(".intell-title-right2 li", ".elect-lists3 .elect-list")
    select(".intell-title-right3 li", ".elect-lists4 .elect-list")
    select(".intell-title-right4 li", ".elect-lists5 .elect-list")


    // 闪购部分平移轮播
    let flashbtn_left = document.querySelector(".flash-more .more-pre")
    let flashbtn_right = document.querySelector(".flash-more .more-next")
    let flash_body  = document.querySelector(".goods")
    let num = 0

    flashbtn_right.onclick = function(){
        if(num>-992){
            num = num+(-992)
            flash_body.style.left = num+'px'
            flashbtn_left.style.color =" #b0b0b0";
        }else if(num>-1984){
            num = num+(-992)
            flash_body.style.left = num+'px'
            flashbtn_left.style.color =" #b0b0b0";
            flashbtn_right.style.color =" #e0e0e0";
        }
    }
    flashbtn_left.onclick = function(){
        if(num<-992){
            num = num-(-992)
            flash_body.style.left = num+'px'
            flashbtn_right.style.color =" #b0b0b0";
        }else if(num<0){
            num = num-(-992)
            flash_body.style.left = num+'px'
            flashbtn_right.style.color =" #b0b0b0";
            flashbtn_left.style.color =" #e0e0e0";
        }
    }

//    为你推荐平移轮播
let movebtn_left = document.querySelector(".recommend .flash-more .more-pre")
    let movebtn_right = document.querySelector(".recommend .flash-more .more-next")
    let recommend  = document.querySelector(".recommend-bottom")
    let long = 0

    movebtn_right.onclick = function(){
        if(long>-1226){
            long = long+(-1226)
            recommend.style.left = long+'px'
            movebtn_left.style.color =" #b0b0b0";
        }else if(long>-2452){
            long = long+(-1226)
            recommend.style.left = long+'px'
            movebtn_left.style.color =" #b0b0b0";
            movebtn_right.style.color =" #e0e0e0";
        }
    }
    movebtn_left.onclick = function(){
        if(long<-1226){
            long = long-(-1226)
            recommend.style.left = long+'px'
            movebtn_right.style.color =" #b0b0b0";
        }else if(long<0){
            long = long-(-1226)
            recommend.style.left = long+'px'
            movebtn_right.style.color =" #b0b0b0";
            movebtn_left.style.color =" #e0e0e0";
        }
    }



    //fixed-big,small响应式返回顶部
let main = document.querySelector("main");
let maxSize = main.offsetTop;
let bigGoTop = document.querySelector(".fanhui-top");
let smallGoTop = document.querySelector(".fanhui-top1");
if(document.documentElement.scrollTop > maxSize){
	bigGoTop.style.display = "block";
	smallGoTop.style.display = "block";
}
bigGoTop.onclick = function(){
	document.documentElement.scrollTop = 0;
}
smallGoTop.onclick = function(){
	document.documentElement.scrollTop = 0;
}
window.onscroll = function(){
	if(document.documentElement.scrollTop>=maxSize){
		setTimeout(function(){
			if(document.documentElement.scrollTop >= maxSize){
				bigGoTop.style.display = "block";
				smallGoTop.style.display = "block";
			}
		},1000)
		
	}else if(document.documentElement.scrollTop == 0){
		bigGoTop.style.display = "none";
		smallGoTop.style.display = "none";
	}
}




}

            


   


