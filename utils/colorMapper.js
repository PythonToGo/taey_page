// utils/colorMapper.js
export class colorMapper {
    static colorMap = {
        default: "bg-gray-400", // 노션에서 제공하지 않는 기본 색상
        gray: "bg-gray-500",
        light_gray: "bg-gray-200",
        brown: "bg-yellow-600", // Tailwind CSS에는 brown 색상이 없으므로 유사한 색상을 사용
        orange: "bg-orange-400",
        yellow: "bg-yellow-400",
        green: "bg-green-400",
        blue: "bg-blue-400",
        purple: "bg-purple-400",
        pink: "bg-pink-400",
        red: "bg-red-400",
        // 추가 색상 매핑이 필요한 경우 여기에 추가
    };

    static getTailwindColor(notionColor) {
        return this.colorMap[notionColor] || 'bg-gray-200';
    }
}
