export default function Button({
  children,
  id,
  disabled = false,
  onClick,
}: Button) {
  return (
    <button id={id} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
