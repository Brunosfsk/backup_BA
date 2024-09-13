const Card = ({ className, title, description, children, number }) => {
    return (
        <div className={`card bg-base-100 w-96 shadow-xl h-40 ${className}`}>
            <div className="card-body flex flex-row items-center">
                {children && (
                    <div className="flex-shrink-0">
                        {children}
                    </div>
                )}
                <div className="ml-4">
                    <h2 className="card-title text-[#eeeeee]">{title}</h2>
                    <p className="text-[#eeeeee]">{description}</p>
                    <div className="stat-value text-white">{number}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;


