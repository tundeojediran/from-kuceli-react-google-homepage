export default function LanguageLink(props) {
  return (
    <>
      <a
        href={props.link}
        style={{
          marginLeft: "7px",
          textDecoration: "none",
          color: "#1a0dab",
        }}
      >
        {props.title}
      </a>
    </>
  );
}
