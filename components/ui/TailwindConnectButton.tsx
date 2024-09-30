const TailwindConnectButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void; // En typescript, al tipar las variables, el '?' significa que es opcional
  otherClasses?: string; // Esta variable también es opcional
}) => {
  return (
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6  text-white inline-block w-full md:w-60 md:mt-10">
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div
        className={`relative flex space-x-2 items-center justify-center z-10 rounded-lg bg-zinc-950 px-7 py-2 ring-1 ring-white/10 ${otherClasses} gap-2`}
      >
        {/* depende la posición que pase es donde renderizará el icono */}
        {position === "left" && icon}
        <span>{title}</span>
        {position === "right" && icon}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default TailwindConnectButton;
