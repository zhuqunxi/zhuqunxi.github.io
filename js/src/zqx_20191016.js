<script type="text/javascript">
    window.onload = function countTime() {
        //获取当前时间
        var date = new Date();
        var now = date.getTime();
        //设置截止时间
        var str = "2019/10/1 00:00:00";
        var endDate = new Date(str);
        var end = endDate.getTime();
        //时间差
        var leftTime = end - now;
        //定义变量 d,h,m,s保存倒计时的时间
        var d,h,m,s;
        d = Math.floor(leftTime/1000/60/60/24);
        h = Math.floor(leftTime/1000/60/60%24);
        m = Math.floor(leftTime/1000/60%60);
        s = Math.floor(leftTime/1000%60);
        if (leftTime>1) {
            //活动剩余时间
            document.getElementById("Mochu").innerHTML = "离活动结束还有：<span class='Mochu'> "+d+"</span> 天<span class='Mochu'> "+h+"</span> 时<span class='Mochu'> "+m+"</span> 分<span class='Mochu'> "+s+"</span> 秒";
        } else {
            //倒计时结束
            document.getElementById("Mochu").innerHTML = "<span class='Mochu'>活动已结束</span>";
        }
        setTimeout(countTime,1000);
    }
</script>