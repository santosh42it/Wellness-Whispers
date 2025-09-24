import { useQuery } from "@tanstack/react-query";
import a1Image from "@assets/a1.jpg";
import a2Image from "@assets/a2.jpg";
import a3Image from "@assets/a3.jpg";
import a4Image from "@assets/a4.jpg";
import a5Image from "@assets/a5.jpg";
import a6Image from "@assets/a6.jpg";
import a7Image from "@assets/a7.jpg";
import a8Image from "@assets/a8.jpg";
// Note: a9.jpg not available, will use a8 as fallback

// Helper function to get content from content blocks
function getContentValue(
  contentBlocks: any[],
  key: string,
  defaultValue: string,
): string {
  if (!Array.isArray(contentBlocks)) return defaultValue;
  const block = contentBlocks.find((block) => block.blockKey === key);
  return block?.content || defaultValue;
}

export default function Approach() {
  // Fetch content blocks for dynamic text
  const { data: contentBlocks } = useQuery({
    queryKey: ["/api/content"],
    retry: false,
    refetchOnWindowFocus: true,
    staleTime: 0,
    gcTime: 0,
  });

  const safeContentBlocks = Array.isArray(contentBlocks) ? contentBlocks : [];

  // Get dynamic content values
  const approachTitle = getContentValue(
    safeContentBlocks,
    "approach_title",
    "Gentle Tools for Healing",
  );
  const approachSubtitle = getContentValue(
    safeContentBlocks,
    "approach_subtitle",
    "Simple, compassionate methods to help you find balance again.",
  );
  const approaches = [
    {
      title: "Mindfulness & Somatic Grounding",
      description:
        "You can gently ground yourself in the present. Mindful awareness and body-based grounding reconnect you with calm and inner balance. (Mindfulness-based practice)",
      image: a1Image,
      alt: "Peaceful meditation pose representing mindfulness and grounding",
    },
    {
      title: "Breathwork & Guided Imagery",
      description:
        "You can find calm through your breath. Gentle breathing and guided imagery help ease stress, relax the body, and create a safe inner space. (Mindfulness & CBT-based relaxation)",
      image: a2Image,
      alt: "Person practicing deep breathing in natural setting",
    },
    {
      title: "Positive Affirmations / Self-Talk (CBT)",
      description:
        "You can learn to be your own encourager. Gentle affirmations and positive self-talk help shift unhelpful thoughts and build confidence. (CBT-based practice)",
      image: a3Image,
      alt: "Gentle hands in self-soothing butterfly hug position",
    },
    {
      title: "Butterfly Hug (EFT/EMDR-style)",
      description:
        "You can soothe yourself in moments of stress. The Butterfly Hug is a gentle self-soothing practice for emotional regulation and trauma healing. (EFT/EMDR technique).",
      image: a4Image,
      alt: "Child's perspective showing innocence and inner child healing",
    },
    {
      title: "Narrative Therapy",
      description:
        "With your voice as a lantern, you can re-author your story. Narrative therapy helps you explore and reshape the meaning of your life experiences.",
      image: a5Image,
      alt: "Warm, empathetic therapist listening with person-centered focus",
    },
    {
      title: "Inner Child Healing",
      description:
        "You can reconnect with your younger self. Inner Child Healing brings compassion to early wounds and nurtures emotional growth.",
      image: a6Image,
      alt: "Strong tree roots representing inner strength and resilience",
    },
    {
      title: "Person-Centered Approach",
      description:
        "Your experience is the guide. A person-centered approach offers gentle, non-directive support with empathy and respect.",
      image: a7Image,
      alt: "Clear water reflection representing emotional clarity",
    },
    {
      title: "Strengths-Based Therapy",
      description:
        "You already carry strength within you. This approach helps build resilience by focusing on your inner resources and natural coping abilities.",
      image: a6Image,
      alt: "Strong tree roots representing inner strength and resilience",
    },
  ];

  return (
    <section
      id="approach"
      className="pt-24 pb-16 relative bg-gradient-to-br from-sage/5 via-soft-beige/30 to-peach/10"
    >
      {/* Decorative section divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sage/30 to-transparent"></div>

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-kinfolk font-light text-dark-brown mb-4">
            {approachTitle}
          </h2>
          <p className="text-xl text-dark-brown font-medium max-w-4xl mx-auto leading-relaxed">
            {approachSubtitle}
          </p>
        </div>

        {/* Approaches Grid - Enhanced with Images */}
        <div className="approaches-grid max-w-7xl mx-auto">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-soft border border-sage/10"
            >
              {/* Title on top */}
              <h3 className="text-xl font-kinfolk font-semibold text-dark-brown mb-4 text-center">
                {approach.title}
              </h3>

              {/* Image in middle */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={approach.image}
                  alt={approach.alt}
                  className="w-full h-72 md:h-80 object-cover filter saturate-90"
                  loading="lazy"
                />
              </div>

              {/* Description at bottom - centered and full text */}
              <p className="text-dark-brown font-nunito text-base leading-relaxed text-center font-medium">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle nature texture overlay */}
      <div className="nature-texture absolute inset-0 pointer-events-none opacity-20"></div>
    </section>
  );
}