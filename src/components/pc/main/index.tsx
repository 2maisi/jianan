"use client";

import { useEffect, useState } from "react";
import { Button } from "antd";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import JaHeader from "../header/header";
import JiaBanner from "../banner";

export default function MainPc() {
  const desc =
    "上海云安建筑装潢设计有限公司成立于2013年。 主要承接室内装饰工程设计与施工、市政工程、景观绿化工程设计与施工。设计施工三级资质单位，上海市装饰装修行业协会会员单位， 设计施工规范达标单位。 公司拥有十几支江、浙、皖强劲的施工团队。技术力量雄厚，师资齐全，不断完善内部人才培训机机制，隐蔽工程均持证上岗，并配有***工程监理及安全员对工程全程跟踪，打造装饰行业专业化，施工队伍正规化，为企业打下夯实基础。 通过多年不懈的努力，秉承“口碑相传，永续经营”的经营理念，办求达到“设计零缺憾，施工零缺憾”的全方位服务，我们建立了一支同济大学设计团队，全天候、全方位、全身心以***设计，严格的管理服务好每一位业主，在不盲目求大而专注做精品的思想指导下，做公司成长成实力派装修企业的坚强后盾。";
  const mobile = "400-660-7700";

  const [initialSize, setInitialSize] = useState({
    width: window ? window.innerWidth : 0,
    height: window ? window.innerHeight : 0,
  });

  useEffect(() => {
    // 设置初始宽高
    setInitialSize({
      width: window ? window.innerWidth : 0,
      height: window ? window.innerHeight : 0,
    });

    // 阻止页面在 resize 时调整内容宽高
    const handleResize = () => {
      setInitialSize((prev) => prev); // 保持不变
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-screen h-screen flex flex-col"
      style={{
        width: `${initialSize.width}px`,
        height: `${initialSize.height}px`,
      }}
    >
      <div>
        <JaHeader />
      </div>

      <div className="box-border w-full pl-72 pr-72">
        <div className="flex flex-row w-full">
          <JiaBanner></JiaBanner>

          <div className="ml-5 w-full flex flex-col">
            <div className="flex flex-row items-center">
              <div className="w-6 h-6 font-bold text-xs flex items-center p-2 border justify-center text-red-600 border-red-600 rounded-md mr-2">
                营
              </div>
              <div className="font-bold text-black text-xl">诚信门窗</div>
            </div>

            <div className="flex-1">
              <div className="text-sm mt-2 mb-2 text-gray-600">公司简介</div>
              <div className="text-black text-sm line-clamp-6">
                <p>{desc}</p>
              </div>

              <div className="text-sm mt-2 mb-2 text-gray-600">公司规模</div>
              <div className="text-black text-sm">
                门店1家 | 设计团队9人 | 施工队5支 | 经营面积300平米
              </div>

              <div className="text-sm mt-2 mb-2 text-gray-600">公司地址</div>
              <div className="text-black text-sm">东方路1381号22楼AB座</div>
            </div>
            <div className="flex flex-row items-center">
              <Button
                className="flex-1"
                color="default"
                style={{ color: "black", borderColor: "black", height: "50px" }}
                icon={
                  <div>
                    <LocalPhoneIcon style={{ width: "19px" }} />
                  </div>
                }
              >
                {mobile}
              </Button>
              <div className="w-4"></div>
              <Button
                className="flex-1"
                variant="solid"
                color="primary"
                style={{ height: "50px" }}
              >
                立即预约
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
