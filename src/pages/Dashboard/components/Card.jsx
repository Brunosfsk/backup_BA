import { cn } from '@/lib/utils';

const Card = ({ className, title, description, children, number }) => {
  return (
    <div
      className={cn('rounded-lg bg-[#1f1f1f] shadow-lg w-96 h-40', className)}
    >
      <div className="p-4 flex items-center">
        {children && <div className="flex-shrink-0">{children}</div>}
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-[#eeeeee]">{title}</h2>
          <p className="text-sm text-[#eeeeee]">{description}</p>
          <div className="text-2xl font-bold text-white">{number}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
