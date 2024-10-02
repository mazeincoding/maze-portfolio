import { useCallback } from "react";
import { useRouter } from "next/navigation";

const useScrollToSection = () => {
  const router = useRouter();

  const scrollToSection = useCallback(
    (section_id: string) => {
      const section = document.getElementById(section_id);
      if (section) {
        const y_offset = -80; // Adjust this value to fine-tune the scroll position
        const window_height = window.innerHeight;
        const section_height = section.offsetHeight;

        if (section_height < window_height * 0.7) {
          // If section is less than 70% of viewport height, scroll to center
          const y =
            section.getBoundingClientRect().top +
            window.pageYOffset +
            y_offset -
            (window_height - section_height) / 2;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else {
          // Otherwise, scroll to top of section
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + y_offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }

        // Update URL with section id
        router.push(`#${section_id}`, { scroll: false });
      }
    },
    [router]
  );

  return { scrollToSection };
};

export default useScrollToSection;
