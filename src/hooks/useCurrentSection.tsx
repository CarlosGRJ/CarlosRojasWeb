import { useEffect, useState } from 'react';

export const useCurrentSection = (sectionIds: string[]) => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setCurrentSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '0px 0px -40% 0px',
        threshold: 0.2,
      },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  return currentSection;
};
