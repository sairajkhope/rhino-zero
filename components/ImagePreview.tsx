import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ImagePreviewProps {
  src?: string;
  alt?: string;
}

export default function ImagePreview({ src, alt }: ImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!src) return null;

  /**
   * Normalizes a given image path.
   * If the path starts with "./", it will be removed.
   * Ensures that the path starts with a slash so that Next.js will load it
   * from the public folder.
   */
  const formatSrc = (src: string): string => {
    // Remove leading "./" if present
    if (src.startsWith('./')) {
      src = src.substring(2);
    }
    // Prepend "/" if not already present
    return src.startsWith('/') ? src : '/' + src;
  };

  const imageSrc = formatSrc(src);

  return (
    <div className="block mb-8">
      <div className="relative w-full">
        <Image
          src={imageSrc}
          alt={alt || 'Image preview'}
          width={1200}
          height={800}
          className="w-full rounded-lg cursor-zoom-in"
          onClick={() => setIsOpen(true)}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={imageSrc}
              alt={alt || 'Image preview'}
              width={1920}
              height={1080}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
