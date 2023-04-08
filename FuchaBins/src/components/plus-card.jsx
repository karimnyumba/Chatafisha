import { PlusCircleIcon } from "@heroicons/react/24/solid";

const PlusCard = ({ color, children, className }) => {
  return (
    <div className={`w-full h-full rounded-2xl p-1 ${className}`}>
      <div className="flex items-center justify-end">
        <PlusCircleIcon className="w-4 h-4 text-white" />
      </div>

      <p className="px-2 pb-4 mt-10 text-sm text-white">{children}</p>
    </div>
  );
};

export default PlusCard;
