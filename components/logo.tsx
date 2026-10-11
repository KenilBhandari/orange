export function OrangeMark({
  size = 120,
  label = "OrangeDev logo",
  fluid = false,
}: {
  size?: number;
  label?: string;
  fluid?: boolean;
}) {
  return (
    <svg
      width={fluid ? undefined : size}
      height={fluid ? undefined : size}
      viewBox="7 16 377 361.2"
      role="img"
      aria-label={label}
      style={
        fluid
          ? { display: "block", width: "100%", height: "auto", overflow: "visible", flexShrink: 0 }
          : { display: "block", overflow: "visible", flexShrink: 0 }
      }
    >
      <circle cx="195.8" cy="202.1" r="167.2" fill="#EA580C" />
      <path
        d="M42.8 84.8A368.2 368.2 0 0 1 349.2 84.8"
        fill="none"
        stroke="#00BE63"
        strokeWidth="55.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
