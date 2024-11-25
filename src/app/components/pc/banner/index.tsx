import { Carousel } from 'antd'
import React from 'react'
import Image from "next/image";

export default function JiaBanner() {

    const images = [
        "https://img0.baidu.com/it/u=411008016,3907851684&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
        "https://5b0988e595225.cdn.sohucs.com/images/20190428/78e024832a044f9c831115bf29499cd3.jpeg"
    ]


    const carouselAfterChange = (current: number) => {
        console.info("current", current)
    }

    return (
        <div className="w-[30rem] aspect-[4/3] bg-red-50">
            <Carousel arrows autoplay draggable afterChange={carouselAfterChange}>
                {
                    images.map((item, index) => {
                        return <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden" key={item}>
                            <Image key={index} src={item} layout="fill" objectFit="cover" alt="carousel image" />
                        </div>
                    })
                }
            </Carousel>
        </div>
    )
}
