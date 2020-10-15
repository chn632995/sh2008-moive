<template>
    <div>
        <div class="main">
            <div class="center-view">
                <div class="avatar">
                    <img v-if="!userInfo.userId"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAQlBMVEXt7e3v7+/r6+v7+/v9/f309PT8/Pzq6ur////+/v729vbu7u7x8fH5+fnz8/P6+vr4+Pjs7Ozy8vL19fXw8PD39/c1tMDaAAAD/0lEQVR42u2a6ZKkKhCFARFZFBf0/V91eubebhGxSjKTmIoJz88uw/4kMw9LwtijR48ePXr06NGjR48ePfpH5XrfBrttNrTLevnUGkZljBpaXgGht6PUscxoF5d5rtkfGVZaBj8YnZNRNvnk6fi7pWNYpzzD96As+6O8SX8eqIIx6neS39/M1flHEo71PcQfEH9FoTU+Lm4z+qaa9YJCG2yeLlLfl5nUxS/IsGyaSBj/OCc9WC0iNzMBUVvbOzaL+ctO203dxoBHpT9RDAvrjmLLcA9DgSmSCjHt3OU0t3dKyUAjcny58aK7kvCmFgY/RsTO3SvNtlJQDsknefdO/I2/jCCKwyTZsO692OviDhCKNn7DJLo7EtMrDIib8zjl2u6u2hfTDWQwRhDFK44ess6KI9KV6CouE2QwoqRvRBGGaOhCEqJKzdQI/1oXGyNHm6tilqtbxZGDwc+GGRmKytg7p6KI8sym/ySd7cxy4rA0FJF/mvm9M5xMZTYkFP3+Bp/8g+zqQqWB8RQUkY0bcacKTsUkDAEFM1fG9bO+GXonBOt/NnHjtYlJKMWyv+M42uFnqvwpziGfyTN2Xv3SnujD8eX/10jIfLfsLsYNvOaKpuslhxFy468SjAU3sf7eo+2pkRjon6BsWZdIZz+G3hfs5Zp+YhekDGf39k3jT39U2H3BnuVbB9cWTUrIzWKLwIhKFoaxJ3mPwOixOboXikNguB1jQc5rDIERlYpnuLWGQGAIbMWafwljxmLIz8iND6mU8TN8Y6B2UY5cAtLMKdqBMML1DFsghZ3aoqgyikKBHgCaq9VXgRbk6cqhYgcwxoA7UEhOp2e8hxoHxPAaXbIt8kQhWRMb2LQS79qgqXE4A/QgjGg8DbxvEKW5gWRHvKMHb9qOpywWgBGfb3gERvweXkzBCY7r0yTNnn29NlBJ1uizmuYkUDoUhpM056KB4RQ0xSmxYlgpTXBm7tEYx/4WrINA0RC3GttPQeZnpocA6S6ZnoIibbUV99qo7mwsafuzqPM4MiqdXl3Qh6WjyHDc7kpTUjCW7Tb/16MXQlz36BtGK3/7AslhLBwxRuaywHttjF5uLIQwnlWRLQqMWlklrfdvtJjAKsrfzJDJsbqa7lz76itDMH5rOEJtCvVXi+S7aO9eZzI1w+IKKmWth1FyA03yWhRlNtpUqtmhdF77CArghREC26o/w8JuaVLbmAVRUNtYgF4NJbWxFn5FVdLZGGwd+r36obKPBUNBtjhHUhDZWI+lILGxFU9BsJlepaZQi6PgNBTaLCgKpYmEsTFHRoFZBTm66/4YGyOlANvYqIkFsrFBk2v6CAqAjU26igptbKtDUWhjVtfS1WbuF/MY5z0qnakpAAAAAElFTkSuQmCC"
                        class="avator-icon"
                    />
                    <img v-if="userInfo.userId"
                        :src="userInfo.headIcon"
                        class="avator-icon"
                    />
                    <div v-if="userInfo.userId" class="nick-name" @click="login()">{{userInfo.mobile}}</div>
                    <div v-if="!userInfo.userId" class="nick-name" @click="login()">立即登录</div>
                </div>
                <ul class="my-order-tab">
                    <li>
                        <img
                            src="data:image/png;base64,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"
                            width="26px"
                            height="26px"
                            alt=""
                        />
                        <span
                            class="mint-badge is-primary is-size-small"
                            style="display: none;"
                            >99+</span
                        >
                        <div class="common-p">电影订单</div>
                    </li>
                    <li>
                        <img
                            src="data:image/png;base64,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"
                            width="26px"
                            height="26px"
                            alt=""
                        />
                        <div class="common-p">商品订单</div>
                    </li>
                </ul>
                <!---->
                <div class="margin-set my-card">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAIVBMVEVHcEz/iGT/hWL/hGL/hWL/hGL/hGL/hGP/hWP/jGn/hGISk7EWAAAACnRSTlMAHOamtu21p7QdUXNikQAAAFtJREFUKM9jYKAFENdahQIWGTIwMEatQgNLBRiYlwig6mT0MmBgWohu3iwFBq4F6IJAEZoIrsIAuATp5qTBI8i2atUybIIraGU7ZmKQUsCebLAmMMykWEiTFA8AIQBrdTyC6ekAAAAASUVORK5CYII="
                        width="20px"
                        height="20px"
                        alt=""
                    />
                    <span class="label">卖座券</span>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                        alt=""
                        class="arrow"
                    />
                </div>
                <div class="margin-set my-card">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEVHcEy6onu6onq7ony6onu6onq7o3q/o3+7onq6onu6onq6onq6onq6onq7o3q6o33////Bo3rUqn+6o3q6onq6onq6o3q6o3u/pHq9o3z/qqq7pX3Gqo27onq6o3q/p3+9pHu6o3q6onr49fHOvaH////RwCj0AAAAInRSTlMAttxxne1iHKbmksH443VDARkG6avv9J8wJwM5CdzvIB+3XPrbDQAAAMhJREFUOMvt1MkOgkAQBNAGZJV939UC/v8XRSEwA0Iw8WJCnZrMSwaKpIm+iqrp2IiuqYyTsRN5lhoEdfMyAdr0oEPdeS3o0wx429ADGCjet9xN5CCs7LPLLHDwiiCdq5orSYP+iIXlA1HBVDVWUkQQSg6SHyJ2hqrapmmHSpwYoU88pDyBaSuKUqPpugZ1P9omkpyWkFxj/BNvOMRwaQ2JpEufari6es0Se7oY+Y/Zg3w9e3CVE57w3+HhbXZ4Px7euId3+E/zBNmqKziBGBK3AAAAAElFTkSuQmCC"
                        width="20px"
                        height="20px"
                        alt=""
                    />
                    <span class="label">组合红包</span>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                        alt=""
                        class="arrow"
                    />
                </div>
                <div class="margin-set my-balance">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABmFBMVEVHcEz/sjL/sjL/sjL/tDT/tkj/sjL/sjL/sjL/sjL/tTX/szT/sjL/tDL/tDz/////sjL/sjL/tjz/uUX/xjj/tjP/szP/szL/uzP/sjL/sjL/szP/sjT/tjb/sjT/sjL/sjL/tDL/sjL/sjT/sjL/vz//sjL/szL/sjP/szL/tDX/sjP/vz//sjL/szP/tTL/sjP/sjP/vz//sjL/sjL/szP/szL/sjL/sjL/szP/szT/uTn/sjL/tDP/tjL/sjL/sjP/sjL/vDf/sjP/tTP/sjL/szL/uDT/sjT/tDf/uzX/sjL/szP/tzT/sjL/sjP/tDn/sjP/szP/szL/sjL/uTb/sjP/szP/sjP/tDL/sjL/szP/sjL/sjL/sjP/szP/sjL/szf/sjP/sjP/szL/sjL/szL/tjb/szP/sjP/sjL/zDP/sjL/szP/szb/sjL/sjP//1X/sjL/szL/sjL/sjP/sjL/szL/sjL/sjP/szL/szP/uDj/sjP/sjL/szL/tzP/sjL/ujr/szP/sjL/szP/sjP/sjKQA/lwAAAAh3RSTlMA7v6IUgfL+O2TJljzYBEB/PsVCwkjbMYP6fGvUyo/8tlW6k3iBOPK+qgwMgj0uUwouAzQ5Da8kvdeYhaJTzicluAXri3eeh1dKRPUwyfVCh8Upax+Icfhn2b9dqHa8H23JbRQnnTADtepugXYmy/PhgPWl+y99lvByHDrEubbbxn5GpXvX4UZrulbAAACJ0lEQVQYGXXBg2LrAAAF0Nt2SbPa1mxbb7Zt89k272+/pmu6JM3OQUH9Byt13r1tRZG5chp4E4Hee4Yj0Jn7yBnolVGsgk5VmDPQ+/KVW5vQ2NziZxeK1G8zZoeKPcbtBhhwrZM7fuS175DrLhjbIDMTyJnIkBu4x26MTVMB5ASmmhjbhRH/GhmfRsF0nFzzo8jKEh12aNgdXFqBjq2S84vQWZxnpQ0as1EuRFAkssDoLFR8k2xbhoHlNk76UCCEWROAoUANwwIUgxwdwz3GRjmIvC6P5wFyqp7XvUSO++kTP3IeeDxdyHF30IJb7lccQc4LVj7GLQs73JANsVNA3qnET8hy0vEMeUInhyATGUJB6udeBZCq3WtBQYg1yGqlJODOXzrqbRK/406jxFYAlzyA2j9Wf+NvqB3wEkAzE1DUSZJkYtYfSZLqoEiwDcANk1CcWWWkVXYGRZI3ANK8hpbJDK1rpgE42A4tkxla7XQAyPAUimCJrIklsiAUNmYAXDEFRTVVqqFI8QrABfehKCuVWVkqK4NinxcAzilCy2SGlshzAI1p2qBhMkPDxnQjsobZDA2TGRrNHIZsQGIf1ExmqPVRGkBOP3sroPLwEVQqetmPvB56nbiH08seFFjI7iQMJLtJC1Sc5fSOJwRoCIlxL8ud0HC9riWPTiz2hqBPEHzBBrvl5IisHXFBbzUkUkcMrcLQr5bjuHgYtVqjh2L8uOUHVP4D4AiVhBhUn0MAAAAASUVORK5CYII="
                        width="20px"
                        height="20px"
                        alt=""
                    />
                    <span class="label">余额</span>
                    <span class="value"
                        ><span class="price-decimal price-fmt"
                            ><i>￥</i>
                            <span class="interge" style="font-size: 15px;"
                                >0</span
                            >
                            <span style="display: none;">.</span>
                            <span
                                class="decimal"
                                style="font-size: 10px;"
                            ></span>
                            <span style="display: none;">.</span>
                            <span
                                class="decimal"
                                style="font-size: 10px; display: none;"
                                >00</span
                            >
                        </span></span
                    >
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                        alt=""
                        class="arrow"
                    />
                </div>
                <div class="margin-set system-set">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAB+FBMVEVHcEy5zVK5zFHBzFG4y1DE12K4y1D//3+5y1G4y1C4y1C4y1D//1W71lC4y1DMzGa4zFC4y1C4y1C7zFW8zFG4zFC4zVG4y1C5zVK4zlO5y1C5y1DMzGa5y1G5y1C4y1G5zFC7zlK4y1C4y1C4y1C5zFG4zFG5y1C4y1C4y1C4y1C4zFC4zFC7zVC7zFW4y1C5y1C7y1C4zFG4zFK4y1C5zFC5y1C4y1C4zFC4zVC5zFC4y1G/1FW4zFG80li50Fy5zVDD0lq4zFC5y1C/z1e5y1DI2lvG4lW4y1C4zFC50FG4zlHCzlX///+6zFG4zFG5zVC9zFC9zVK4zFG/1FW4zVK5y1C401e4zFC5zFC6zFK4y1G5zFC//3+4y1C4zFK4zVW4y1C4y1C4y1G6zVi5zFG5zFC4zFC4y1G4zFK5zFK4zFC4zFC7zlG4zFC4y1G9z1O4y1C4zFC4y1C4zVK5zFDa2m28zlW5y1C4zFC4y1C4zFC70lK70FC4y1C6y1C4y1C5y1C4zFC41FW4y1C4zFC4y1C4y1C4y1C4zFC/0VG5y1C5zFC4zFG4y1G4y1G4y1C6zFC6zVC4y1C4zFG4y1C50FW4y1G5y1G5zVG4y1G6y1K6zFG5zFG4zFC5y1G6zFC5y1G5y1C5y1K/31+5zFC4y1C4y1CSREpgAAAAp3RSTlMATUIZwg3zAoHg/s8DE4UF8O78HjL6Yd4+OuLQCoDFd4hE/fH4faae9+rBzfU5D/t8T3RB04yZx2lioakYqhcLXBF/7SCoDgny6ywvFQFV3GYjH3AMV7cdm3VH7F8EylAk45S2GoSSkaNzYJzINYmGK+TSe1PXByqLePS1Iia8WfmPvxK9xN+fsY4cpL6N2ZA2VimysK4hrVRYXko4h7Szb2fMdgily0s2q2oAAAJESURBVDjLnZVVd9tAEEbHMVMMsQMOMzNTk4aZqczMzMzMzHj/Zh8MklK5Pqd6mu/bu5rdmdGRyP88geY003BUXCy+FAdrvAlQOhlWa+wUdAd0sK5O8D6ZquJliohIvp3pMuisWc3l91N2YkgkaRT/9Za9pyDH3ZU3QtohLdfu5/hRERFJuVMEcCzXJSIDBwnu14CtdJyOxu78md5qVzj2HKBVA+4hV/+GuezW6Aby9ME8GjR6F9n6YB/JGp3DFn2wnhy1TMeXpQ9m+UhX1FyI4nhtrSM0Fwk9qeWYXNEFs81psTht5qh2VVCe6hER91IVfI75SXYAsCfFdn6BqiW3fMNRuWiNcQ5MBqPRYMIRI62LlQ5mZIWvyoHMdpKtIiLWZOxmxZ9nRb6ToRg2TJGXW03YFD+D3xJiWTEyMURDA07FXyYkFhYUw4IxGhqxKP4CFgniSQz+pEzKmUicepZpeczzxJdJp0Je8CxRecY/VfBL+mg6t1b+UfD7DwF+yNMgFKZK3BYG+hm9N/XRJeKu3wF1SnZbpnoobtzmrpJwY61jfZwpu8YtVflkHU363LCPMbXetE3dcVE3uVJrbGdeF3xHidbYx1ld8C1vtIZN3QfVM0bapMa4TLsu6Erjg8a4wPlI0Xdmb97gdTZvDav3I6u+z55SKFkjIm1F4c4UZFtFJgahZGhVkiuFXO0IHIHBRndNdYufB+OlRRT2/n2c2W4/EDwZGSwvUPDqte7JUw77aIsNbq330UDc30LWGdW2Hs3SH1zVp5KSEJ1eAAAAAElFTkSuQmCC"
                        width="20px"
                        height="20px"
                        alt=""
                    />
                    <span class="label">设置</span>
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                        alt=""
                        class="arrow"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { userInfo } from "@/api/api";
export default {
    data() {
        return {
            userInfo: {},
        };
    },
    async mounted() {
        let _token = this.$store.state._token;
        if (_token) {
            let ret = await userInfo(_token);
            this.userInfo = ret.data.user_info;
        }
    },
    methods: {
        login: function() {
            this.$router.push({ path: "/login" });
        },
    },
};
</script>

<style lang="css" scoped>
.center-view {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background: #f4f4f4;
    margin-bottom: 59px;
}

.center-view .avatar {
    text-align: center;
    margin-top: -44px;
    height: 140px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
}

.center-view .avatar .avator-icon {
    width: 63px;
    height: 63px;
    border-radius: 35px;
    margin-right: 20px;
    border: 2px solid #fff;
}

.center-view .avatar .nick-name {
    font-size: 16px;
}

.center-view .my-order-tab {
    width: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background: #fff;
    margin-bottom: 10px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.center-view .my-order-tab li {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    list-style: none;
}

.center-view .my-order-tab li i {
    font-size: 32px;
    font-weight: 100;
    color: #5e5f60;
}

.center-view .my-order-tab li .left-border {
    height: 49px;
    position: absolute;
    right: -5px;
    bottom: 15px;
}

.center-view .my-order-tab li .common-p {
    color: #797d82;
}

.center-view .my-order-tab li .icon-dingdan-daifahuo {
    font-size: 34px;
    position: relative;
    bottom: 2px;
}

.center-view .my-order-tab li .icon-icon_shouhoutuikuan {
    font-size: 30px;
    line-height: 48px;
}

.center-view .my-order-tab li .dai-fahuo {
    margin-top: -8px;
}

.center-view .my-order-tab .mint-badge {
    padding: 0;
    font-size: 10px;
    height: 16px;
    line-height: 18px;
    min-width: 16px;
    background: #ff5f16;
    position: absolute;
    left: 52%;
    text-align: center;
    top: 0;
}

.center-view .my-order-tab .badge-padding {
    padding: 0 6px;
}

.center-view .reset-tab-margin {
    margin-bottom: 0;
}

.center-view .margin-set {
    background: #fff;
    padding: 0 15px;
    height: 49px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.center-view .margin-set .label {
    margin-left: 15px;
    color: #191a1b;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.center-view .margin-set .arrow {
    text-align: right;
    width: 6px;
    height: 10px;
}

.center-view .margin-set .system-set {
    margin-bottom: 50px;
}

.center-view .my-balance,
.center-view .my-card {
    position: relative;
}

.center-view .my-balance .value,
.center-view .my-card .value {
    text-align: right;
    color: #797d82;
    padding-right: 14px;
}

.center-view .my-balance .value .price-decimal,
.center-view .my-card .value .price-decimal {
    color: #797d82;
}

.center-view .my-balance:after,
.center-view .my-card:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 13px;
}
.price-fmt {
    font-size: 15px;
    color: #ff5f16;
    height: 0 !important;
    display: inline-table !important;
}

.price-fmt,
.price-fmt span {
    float: none !important;
}

.price-fmt i {
    font-size: 11px;
    font-style: normal;
}
</style>
