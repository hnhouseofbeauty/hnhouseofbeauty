
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string | React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center animate-on-scroll border border-gold/10">
      <div className="flex justify-center mb-4">
        {typeof icon === 'string' ? (
          <span className="text-4xl">{icon}</span>
        ) : (
          icon
        )}
      </div>
      <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">
        {title}
      </h3>
      <div className="w-12 h-[1px] bg-gold mx-auto mb-4"></div>
      <p className="text-charcoal/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
