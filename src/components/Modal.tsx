import { ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  id?: string;
  variant?: 'default' | 'audit';
}

export const Modal = ({ isOpen, onClose, title, children, id, variant = 'default' }: ModalProps) => {
  const baseClasses = "fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-lg z-[9999] flex justify-center items-center transition-all duration-400";
  const activeClasses = isOpen ? 'opacity-100 visible' : 'opacity-0 invisible';

  const contentClasses = `bg-black/95 w-11/12 max-w-2xl border rounded-lg relative transform transition-all duration-400 max-h-[90vh] overflow-y-auto ${
    variant === 'audit' ? 'border-neon-green max-w-[500px]' : 'border-gold'
  } ${isOpen ? 'scale-100 translate-y-0' : 'scale-75 translate-y-12'}`;

  const titleClasses = variant === 'audit' ? 'text-neon-green shadow-neon-green-glow' : 'text-gold';

  return (
    <div id={id} className={`${baseClasses} ${activeClasses}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={contentClasses}>
        <div className={`bg-gradient-to-r from-black/90 to-gray-900/90 px-7 py-5 border-b ${variant === 'audit' ? 'border-neon-green/30' : 'border-gold/30'} flex justify-between items-center sticky top-0 z-10`}>
          <h3 className={`font-display text-2xl uppercase font-bold ${titleClasses}`}>{title}</h3>
          <button onClick={onClose} className="bg-none border-none text-white text-2xl cursor-pointer transition-colors hover:text-gold">
            <X size={24} />
          </button>
        </div>
        <div className="p-7">
          {children}
        </div>
      </div>
    </div>
  );
};
