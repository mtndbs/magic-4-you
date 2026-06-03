import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonBaseProps = {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
};

type ButtonAsButtonProps = ButtonBaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;
type ButtonAsAnchorProps = ButtonBaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export const Button = ({ variant = 'primary', children, icon, className = '', href, ...props }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300";
  const variants = {
    primary: "bg-gold text-dark hover:bg-yellow-600 shadow-[0_0_15px_rgba(234,194,130,0.5)]",
    outline: "border border-gold text-gold hover:bg-gold/10",
    ghost: "text-white hover:text-gold"
  };

  const combinedClassName = `${baseClasses} ${variants[variant]} ${className}`;
  
  const content = (
    <>
      {children}
      {icon && <span className="bg-dark text-gold rounded-full p-1 flex items-center justify-center ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...(props as any)}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...(props as any)}>
      {content}
    </button>
  );
};
