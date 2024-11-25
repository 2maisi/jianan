"use client";

import MainPc from "./components/pc/main";
import MainMobile from "./components/mobile/main";

export default function Home() {
  const desc =
    "上海云安建筑装潢设计有限公司成立于2013年。 主要承接室内装饰工程设计与施工、市政工程、景观绿化工程设计与施工。设计施工三级资质单位，上海市装饰装修行业协会会员单位， 设计施工规范达标单位。 公司拥有十几支江、浙、皖强劲的施工团队。技术力量雄厚，师资齐全，不断完善内部人才培训机机制，隐蔽工程均持证上岗，并配有***工程监理及安全员对工程全程跟踪，打造装饰行业专业化，施工队伍正规化，为企业打下夯实基础。 通过多年不懈的努力，秉承“口碑相传，永续经营”的经营理念，办求达到“设计零缺憾，施工零缺憾”的全方位服务，我们建立了一支同济大学设计团队，全天候、全方位、全身心以***设计，严格的管理服务好每一位业主，在不盲目求大而专注做精品的思想指导下，做公司成长成实力派装修企业的坚强后盾。";
  const mobile = "400-660-7700";

  return (
    <div>
      <div className="hidden md:block">
        <MainPc></MainPc>
      </div>
      <div className="block md:hidden">
        <MainMobile></MainMobile>
      </div>
    </div>
  );
}
