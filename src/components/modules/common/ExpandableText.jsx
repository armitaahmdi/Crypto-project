import React, { useState } from 'react';

export default function ExpandableText({ text, maxChars = 500 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const toggleExpand = () => setIsExpanded((prev) => !prev);
  const shouldTruncate = text.length > maxChars;
  const displayedText = isExpanded || !shouldTruncate ? text : text.slice(0, maxChars) + '...';

  return (
    <div className="text-sm leading-7 text-gray-200">
      <p>{displayedText}</p>
      {shouldTruncate && (
        <button
          onClick={toggleExpand}
          className="mt-2 text-lime-400 hover:underline text-sm font-medium"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
}
