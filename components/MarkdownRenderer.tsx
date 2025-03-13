import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ImagePreview from './ImagePreview';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-[600px] mx-auto font-mono tracking-tight text-sm text-[var(--foreground)] prose-a:text-yellow-500 hover:prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:underline">
      {content ? (
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: (props) => (
              <ImagePreview {...props} />
            ),
            h1: (props) => (
              <h1 className="mt-12 text-4xl font-sans font-bold tracking-tight text-[var(--foreground)]" {...props} />
            ),
            h2: (props) => (
              <h2 className="mt-8 text-xl font-normal tracking-tight text-[var(--foreground)]" {...props} />
            ),
            h3: (props) => (
              <h3 className="mt-4 text-lg tracking-tight text-[var(--foreground)]" {...props} />
            ),
            p: (props) => (
              <span className="block mb-4 text-[var(--foreground)]" {...props} />
            ),
            iframe: (props) => (
              <div className="aspect-video w-full mb-8">
                <iframe className="w-full h-full" {...props} />
              </div>
            )
          }}
        >
          {content}
        </ReactMarkdown>
      ) : (
        <div className="text-[var(--foreground)] opacity-60 tracking-[-0.01em]">Select a post to view its content</div>
      )}
    </div>
  );
}