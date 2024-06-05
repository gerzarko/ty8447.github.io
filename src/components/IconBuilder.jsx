export const IconBuilder = (props) => {
  return (
    <div className="icon" title={props.Icon}>
      <svg fill="#FFF" width="30px" height="30px" viewBox="0 0 32 32">
        <path d={props.path} />
      </svg>
    </div>
  );
};
