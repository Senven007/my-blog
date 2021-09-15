import React,{ useState, useEffect} from "react";
import {Menu, Icon} from "antd";
import Style from "./HeadNav.less";

const HeadNav = () => {
    const [current, setCurrent] = useState("Home")
    return (
        <div className={Style.HeadNav}>
            <div className={Style["nav-wrap"]}>
                <div className={Style["nav-logo-wrap"]}>
                    <Icon type="global" className={Style["nav-logo"]} />
                </div>
                <div className={Style["nav-list-wrap"]}>
                    <Menu selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="home">
                            首页
                        </Menu.Item>
                        <Menu.Item key="aboutme">
                            关于我
                        </Menu.Item>
                        <Menu.Item key="article">
                            文章分享
                        </Menu.Item>
                        <Menu.Item key="resource">
                            资源共享
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        </div>
    )
};
export default HeadNav;
