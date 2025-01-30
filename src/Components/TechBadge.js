import '../Styles/tech-badge.scss';

export default function TechBadge({tech}) {

    const techColors = {
        JavaScript: {
            bg: "#ffcb0f",
            text: "white",
        },
        "C#": {
            bg: "#4d0dff",
            text: "white",
        },
        "Java": {
            bg: "red",
            text: "white",
        },
        TypeScript: {
            bg: "#2470ff",
            text: "white",
        },
        Unity: {
            bg: "#121212",
            text: "white",
        },
        React: {
            bg: "#263038",
            text: "#00bfff",
        },
        NodeJS: {
            bg: "#1f291c",
            text: "#44ad24",
        },
        Blender: {
            bg: "#f07b0e",
            text: "#1a41a3",
        },
        MongoDB: {
            bg: "#adadad",
            text: "yellow"
        },
        Express: {
            bg: "#383838",
            text: "white"
        }
    }

    const backgroundColor = techColors[tech]["bg"] || "gray";
    const color = techColors[tech]["text"] || "white";

    return (
        <div className="tech-badge" style={{backgroundColor, color}}>
            {tech}
        </div>
    )
};