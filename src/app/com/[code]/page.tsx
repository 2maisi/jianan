import MainMobile from "@/components/mobile/main";
import MainPc from "@/components/pc/main";

export const dynamic = "force-dynamic"; // 每次请求强制重新生成内容

export default function CompanyPage() {
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
