"use client";

import type { Artwork } from "../data/artworks";
import { useLocale } from "./LocaleProvider";

const translations: Record<string, { medium: string; description: string }> = {
  "work-ve-nha": {
    medium: "Sơn dầu",
    description: "Một lối đi hẹp dẫn ánh nhìn qua những ngôi nhà chồng lớp, cây cối và ánh sáng. Về Nhà lưu giữ sự thân thuộc của một nơi chốn bình thường — không hoàn toàn tĩnh lặng cũng không kịch tính, nhưng đủ gần để gợi lên ký ức dịu dàng của việc trở về.",
  },
  "work-ban": {
    medium: "Sơn dầu",
    description: "Những nhân vật quây quanh vải vóc, cơ thể và những cử chỉ còn dang dở, tạo nên một không gian được xác định bởi hoạt động hơn là tĩnh lặng. Bận quan sát những lớp chồng của sự chú ý và chuyển động khi nhiều việc dường như xảy ra cùng một lúc.",
  },
  "work-be": {
    medium: "Sơn dầu",
    description: "Một khoảnh khắc thoáng qua của tuổi thơ được giữ lại qua màu sắc, chuyển động và sự gần gũi của đời sống thường ngày. Khung cảnh vừa sống động vừa dịu dàng, như một mảnh vui chơi ngắn ngủi được níu lại trước khi tan vào phần còn lại của ngày.",
  },
  "work-xuong-tau": {
    medium: "Sơn dầu",
    description: "Giàn giáo, cấu trúc và những người lao động tạo thành nhịp điệu liên tục trong không gian công nghiệp. Xưởng Tàu nhìn vào mối quan hệ giữa con người và một môi trường đang được xây dựng, sửa chữa và chuyển đổi từng phần.",
  },
  "work-dau-nang": {
    medium: "Sơn dầu",
    description: "Ánh sáng đi qua mái nhà, cây cối và một con dốc, để lại dấu vết tạm thời trên một nơi chốn quen thuộc. Dấu Nắng không cố định một cảnh quan cụ thể, mà quan tâm đến cách ánh sáng có thể thoáng chốc biến một không gian bình thường thành ký ức thị giác.",
  },
  "work-tranh-dong-ho": {
    medium: "Sơn mài",
    description: "Ngôn ngữ hình ảnh dân gian quen thuộc được đưa vào chiều sâu và bề mặt phản chiếu của sơn mài. Tác phẩm giữ lại cảm giác trang trí của hình ảnh truyền thống, đồng thời để các lớp, chất liệu và ánh sáng thay đổi cách hình ảnh được cảm nhận.",
  },
};

export function ArtworkMedium({ artwork }: { artwork: Artwork }) {
  const { locale } = useLocale();
  return <>{locale === "vi" ? translations[artwork.id]?.medium ?? artwork.medium : artwork.medium}</>;
}

export function ArtworkTitle({ artwork }: { artwork: Artwork }) {
  const { locale } = useLocale();
  return <>{locale === "en" ? artwork.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : artwork.title}</>;
}

export function ArtworkDescription({ artwork }: { artwork: Artwork }) {
  const { locale } = useLocale();
  return <>{locale === "vi" ? translations[artwork.id]?.description ?? artwork.description : artwork.description}</>;
}
