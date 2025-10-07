import { useQuery } from "@tanstack/react-query";
import a1Image from "@assets/a1c.png";
import a2Image from "@assets/a2c.png";
import a3Image from "@assets/a3c.png";
import a4Image from "@assets/a4c.png";
import a5Image from "@assets/a5c.png";
import a6Image from "@assets/a6c.png";
import a7Image from "@assets/a7c.png";
import a8Image from "@assets/a8c.png";
// Using png versions with transparent backgrounds

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
      mobileDescription:
        "Ground yourself in the present through mindful awareness and body-based practices. (Mindfulness-based)",
      image: a1Image,
      alt: "Peaceful meditation pose representing mindfulness and grounding",
    },
    {
      title: "Breathwork & Guided Imagery",
      description:
        "You can find calm through your breath. Gentle breathing and guided imagery help ease stress, relax the body, and create a safe inner space. (Mindfulness & CBT-based relaxation)",
      mobileDescription:
        "Find calm through gentle breathing and guided imagery to ease stress. (Mindfulness & CBT-based)",
      image: a2Image,
      alt: "Person practicing deep breathing in natural setting",
    },
    {
      title: "Positive Affirmations / Self-Talk (CBT)",
      description:
        "You can learn to be your own encourager. Gentle affirmations and positive self-talk help shift unhelpful thoughts and build confidence. (CBT-based practice)",
      mobileDescription:
        "Be your own encourager through affirmations that shift thoughts and build confidence. (CBT-based)",
      image: a3Image,
      alt: "Gentle hands in self-soothing butterfly hug position",
    },
    {
      title: "Butterfly Hug (EFT/EMDR-Style)",
      description:
        "You can soothe yourself in moments of stress. The Butterfly Hug is a gentle self-soothing practice for emotional regulation and trauma healing. (EFT/EMDR technique).",
      mobileDescription:
        "Soothe yourself with gentle self-calming for emotional regulation and healing. (EFT/EMDR technique)",
      image: a4Image,
      alt: "Child's perspective showing innocence and inner child healing",
    },
    {
      title: "Narrative Therapy Approach",
      description:
        "With your voice as a lantern, you can re-author your story. Narrative therapy helps you explore and reshape the meaning of your life experiences.",
      mobileDescription:
        "Re-author your story by exploring and reshaping your life experiences.",
      image: a5Image,
      alt: "Warm, empathetic therapist listening with person-centered focus",
    },
    {
      title: "Inner Child Healing Practice",
      description:
        "You can reconnect with your younger self. Inner Child Healing brings compassion to early wounds and nurtures emotional growth.",
      mobileDescription:
        "Reconnect with your younger self through compassion for early wounds.",
      image: a6Image,
      alt: "Strong tree roots representing inner strength and resilience",
    },
    {
      title: "Person-Centered Approach",
      description:
        "Your experience is the guide. A person-centered approach offers gentle, non-directive support with empathy and respect.",
      mobileDescription:
        "Your experience guides gentle, empathetic support with respect.",
      image: a7Image,
      alt: "Clear water reflection representing emotional clarity",
    },
    {
      title: "Strengths-Based Therapy",
      description:
        "You already carry strength within you. This approach helps build resilience by focusing on your inner resources and natural coping abilities.",
      mobileDescription:
        "Build resilience by focusing on your inner strength and resources.",
      image: a8Image,
      alt: "Comfortable therapy space with gentle conversation atmosphere",
    },
  ];

  return (
    <section
      id="approach"
      className="pt-24 pb-16 relative bg-gradient-to-br from-peach-blush/40 via-warm-misty-beige/60 to-peach-blush/30"
    >
      {/* Decorative section divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terracotta/20 to-transparent"></div>

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
              className="backdrop-blur-sm p-3 md:p-6 rounded-xl shadow-soft border border-sage/10 flex flex-col"
              style={{ backgroundColor: '#b79d98' }}
            >
              {/* Title on top */}
              <h3 className="approach-title font-kinfolk font-semibold text-dark-brown mb-3 md:mb-4">
                {approach.title}
              </h3>

              {/* Image in middle - with polaroid card effect */}
              <div className="mb-3 md:mb-4 bg-white p-2 rounded-xl flex-shrink-0">
                <img
                  src={`${approach.image}?v=2`}
                  alt={approach.alt}
                  className="w-full h-40 md:h-72 lg:h-80 object-cover filter saturate-90 rounded-lg"
                  loading="lazy"
                  key={approach.image}
                />
              </div>

              {/* Description at bottom - responsive text */}
              {/* Mobile: Shorter description */}
              <p className="approach-description text-dark-brown font-nunito leading-relaxed font-medium flex-grow md:hidden">
                {approach.mobileDescription}
              </p>
              {/* Desktop: Full description */}
              <p className="approach-description text-dark-brown font-nunito leading-relaxed font-medium flex-grow hidden md:block">
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