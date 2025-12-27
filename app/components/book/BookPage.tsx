// src/components/book/BookPage.tsx
// rafce
import React from 'react'
import type { ReactNode } from 'react';

type BookPageProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

const BookPage: React.FC<BookPageProps> = ({ title, subtitle, children }) => {
  return (
    <>
      <div className="flex flex-col h-full">
        {(title || subtitle) && (
          <header className="mb-6 border-b border-neutral-200 pb-4">
            {subtitle && (
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                {subtitle}
              </p>
            )}
            {title && (
              <h1 className="mt-1 text-3xl font-semibold text-neutral-900">
                {title}
              </h1>
            )}
          </header>
        )}
        
        <main className="flex-1 text-neutral-700 leading-relaxed text-sm md:text-base">
          {children}
        </main>
      </div>
    </>
  );
};

export default BookPage
