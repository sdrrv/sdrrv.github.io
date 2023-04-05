type TecnicoSVGProps = {
  className?: string;
  size?: string;
  color?: string;
};

function TecnicoSVG({ className, size, color }: TecnicoSVGProps) {
  return (
    <svg width={size} height={size} className={className}>
      <path
        d="M17.328 7.582h-.833v6.206H14.69V7.582h-.832V6.337h3.469v1.245zM12.886 4.36v11.407c0 1.48-1.21 2.245-2.702 2.245-1.49 0-2.71-.647-2.71-1.902 0-.493.404-.892.902-.892a.896.896 0 0 1 .9.892c0 .912.074 1.53.908 1.53.897 0 .897-.62.897-1.873l.001-11.407c0-1.477 1.21-2.243 2.7-2.243 1.491 0 2.711.644 2.711 1.9a.897.897 0 0 1-.902.893.896.896 0 0 1-.9-.892c0-.912-.074-1.53-.908-1.53-.898 0-.898.62-.898 1.872zm-5.41 1.977h1.798l.003 7.447H7.474zM1.993.008v10.067c0 9.062 9.989 13.917 9.989 13.917s10.026-4.855 10.026-13.917V.009z"
        fill={color}
      />
    </svg>
  );
}

TecnicoSVG.defaultProps = {
  size: "24px",
  color: "#fff",
};
export default TecnicoSVG;
