import { ReactNode } from 'react';

interface ProductCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
  onViewDetails: () => void;
}

export const ProductCard = ({ icon, title, description, image, onViewDetails }: ProductCardProps) => {
  return (
    <article className="card bg-white/5 backdrop-blur-lg border border-white/15 rounded-lg overflow-hidden transition-all hover:border-neon-green/30 hover:shadow-lg hover:shadow-neon-green/15 hover:bg-white/10 relative flex flex-col h-full group">
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon-green opacity-0 group-hover:shadow-lg group-hover:shadow-neon-green transition-all" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon-green opacity-0 group-hover:shadow-lg group-hover:shadow-neon-green transition-all" />

      <div className="h-48 overflow-hidden border-b border-white/10">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-600 grayscale-40 contrast-110 group-hover:scale-110 group-hover:grayscale-0 group-hover:contrast-100" />
      </div>

      <div className="p-7 flex-grow flex flex-col relative">
        <div className="text-3xl text-gold mb-4 transition-colors group-hover:text-neon-green group-hover:shadow-lg group-hover:shadow-neon-green">
          {icon}
        </div>

        <h3 className="font-display text-xl text-gold uppercase tracking-widest mb-4 line-clamp-2 transition-colors group-hover:text-white group-hover:shadow-lg group-hover:shadow-neon-green/50">
          {title}
        </h3>

        <p className="font-body text-sm text-white leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <button
          onClick={onViewDetails}
          className="bg-black/50 border border-neon-green text-neon-green px-5 py-2.5 font-tech font-bold text-xs uppercase cursor-pointer transition-all tracking-widest self-start rounded hover:bg-neon-green hover:text-black hover:shadow-lg hover:shadow-neon-green"
        >
          Ver Detalles
        </button>
      </div>
    </article>
  );
};
