<template>
    <div class="box">
        <div class="out-box"></div>
        <div class="inner-box"></div>
        <div class="text-box">loading</div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    width: 100%;
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 50px;
    background-color: #fdfaf5;
}

.out-box {
    width: 150px;
    height: 150px;
    border-top: 4px solid #e0787f;
    border-right: 4px solid #e0787f;
    border-bottom: 4px solid #f0f0f0;
    border-left: 4px solid #f0f0f0;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -75px;
    margin-top: -75px;
    animation: 2.5s ease-in-out 0s normal none infinite rotateTwo;
    -webkit-animation: 2.5s ease-in-out 0s normal none infinite rotateTwo;
}

.inner-box {
    width: 130px;
    height: 130px;
    border-bottom: 2px solid #99749d;
    border-top: 2px solid #f0f0f0;
    border-right: 2px solid #f0f0f0;
    border-left: 2px solid #99749d;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -65px;
    margin-top: -65px;
    animation: 2.5s linear 0s normal none infinite rotate;
    -webkit-animation: 2.5s linear 0s normal none infinite rotate;
}

.text-box {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -60px;
    margin-top: -60px;
    color: #cccccc;
    font-size: 24px;
    line-height: 120px;
    text-align: center;
    animation: 4s linear 0s normal none infinite flash;
    -webkit-animation: 4s linear 0s normal none infinite flash;
}

@-webkit-keyframes rotate {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes rotateTwo {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(-360deg);
    }
}

@keyframes rotateTwo {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-360deg);
    }
}

@-webkit-keyframes flash {
    from,
    50%,
    to {
        opacity: 1;
    }

    25%,
    75% {
        opacity: 0;
    }
}

@keyframes flash {
    from,
    50%,
    to {
        opacity: 1;
    }

    25%,
    75% {
        opacity: 0;
    }
}
</style>
