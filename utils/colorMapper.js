export class colorMapper {
    static colorMap = {
        default: "bg-gray-400", // default colour
        gray: "bg-gray-500",
        light_gray: "bg-gray-200",
        brown: "bg-yellow-600",
        orange: "bg-orange-400",
        yellow: "bg-yellow-400",
        green: "bg-green-400",
        blue: "bg-blue-400",
        purple: "bg-purple-400",
        pink: "bg-pink-400",
        red: "bg-red-400",
    };

    static getTailwindColor(notionColor) {
        return this.colorMap[notionColor] || 'bg-gray-200';
    }
}
