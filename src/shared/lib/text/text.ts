export const includesText = (texts: string[], query: string) => {
  if (!query.trim()) {
    return true;
  }

  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((term) => term.length > 1);

  return texts.filter((text) => {
    const searchableText = text.toLowerCase();

    return terms.every((term) => searchableText.includes(term));
  }).length;
};
