import React from 'react';

import { Link } from 'react-router-dom';
import './card.css';

import { GoArrowUp, GoArrowDown } from "react-icons/go";
import { MdComment, MdShare, MdBookmark, MdHighlightOff, MdFlag } from "react-icons/md";


class Card extends React.Component {
    render() {
        return (
            <div className='card-wrapper'>
                <div className='card-sidebar'>
                    <div className='card-sidebar-voteup'>
                        <GoArrowUp size='25px'/>
                    </div>
                    <div className='card-sidebar-count'>
                        6
                    </div>
                    <div className='card-sidebar-votedown'>
                        <GoArrowDown size='25px'/>
                    </div>

                </div>
                <div className='card-body'>
                    <div className='card-body-info'>
                        <span>Posted byu/vvvaduki 4 hours ago</span>
                    </div>
                    <div className='card-body-title'>
                        <h3>来了又来了看来猪瘟闹的还不够大 俄动植物卫生监督局：中方允许进口俄冻禽肉</h3>
                    </div>
                    <div className='card-body-content'>
                        <p>俄罗斯卫星通讯社莫斯科12月17日电 俄罗斯联邦动植物卫生监督局发布消息，中国检验检疫部门放行俄罗斯冻禽肉的进口。



                            消息中说，中国检验检疫主管部门允许进口俄罗斯冻禽肉，被俄方列入审查合格名单之列的俄禽肉生产企业可以向中国出口冻禽肉。

                            俄方在中国检验检疫部门在其官方网站正式公布这一名单后将启动对华出口冻禽肉。
                            俄罗斯卫星通讯社莫斯科12月17日电 俄罗斯联邦动植物卫生监督局发布消息，中国检验检疫部门放行俄罗斯冻禽肉的进口。



                            消息中说，中国检验检疫主管部门允许进口俄罗斯冻禽肉，被俄方列入审查合格名单之列的俄禽肉生产企业可以向中国出口冻禽肉。

                            俄方在中国检验检疫部门在其官方网站正式公布这一名单后将启动对华出口冻禽肉。</p>
                    </div>
                    <div className='card-body-bottombar'>
                        <div className='card-body-bottombar-item'>
                            <MdComment size='20px'/>
                            <span>comments</span>
                        </div>
                        <div className='card-body-bottombar-item'>
                            <MdShare size='20px'/>
                            <span>share</span>
                        </div>
                        <div className='card-body-bottombar-item'>
                            <MdBookmark size='20px'/>
                            <span>save</span>
                        </div>
                        <div className='card-body-bottombar-item'>
                            <MdHighlightOff size='20px'/>
                            <span>hide</span>
                        </div>
                        <div className='card-body-bottombar-item'>
                            <MdFlag size='20px'/>
                            <span>report</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Card };