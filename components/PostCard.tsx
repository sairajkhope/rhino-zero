interface PostCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function PostCard({ title, description, image, category = 'other', isActive, onClick }: PostCardProps) {
  const getCategoryStyle = (category: string) => {
    if (!category) return 'border-[var(--foreground)] text-[var(--foreground)]';
    const lowerCategory = category.toLowerCase();
    if (lowerCategory === 'robotics') return 'border-red-500 text-red-500';
    if (lowerCategory === 'hardware') return 'border-blue-600 text-blue-600';
    if (lowerCategory === 'software') return 'border-green-600 text-green-600';
    return 'border-[var(--foreground)] text-[var(--foreground)]';
  };

  return (
    <div 
      className={`group cursor-pointer pb-6 border-b border-[var(--border)] font-sans tracking-tight ${isActive ? 'bg-[var(--highlight)]' : ''}`}
      onClick={onClick}
    >
      <div className="px-6 pt-6 flex gap-4">
        <div className="w-[120px] h-[80px] flex-shrink-0 bg-[var(--highlight)] rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          />
        </div>
        <div>
          <h2 className="text-md mb-2 font-semibold text-[var(--foreground)]">{title}</h2>
          <p className="text-xs uppercase tracking-wider text-[var(--foreground)] opacity-60 mb-4">{description}</p>
          <span className={`inline-block px-2 py-1 text-xs font-mono tracking-wide border rounded-full ${getCategoryStyle(category)}`}>
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}