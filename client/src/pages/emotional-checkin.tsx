import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import dreamyNatureImg from "@assets/nature-landscape-with-dreamy.jpg";
import h4BgImg from "@assets/h4-bg.jpg";
import emotionalCheckInImg from "@assets/emotional-check-in.png";

export default function EmotionalCheckInPage() {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const questions = [
    {
      id: 1,
      text: "How is your mood today?",
      options: [
        { text: "😊 Good / calm", value: 3 },
        { text: "😐 Up and down", value: 2 },
        { text: "😞 Low / irritable", value: 1 }
      ]
    },
    {
      id: 2,
      text: "Do you feel more energized or tired lately?",
      options: [
        { text: "Energized", value: 3 },
        { text: "In-between", value: 2 },
        { text: "Mostly tired", value: 1 }
      ]
    },
    {
      id: 3,
      text: "Have you been able to focus on daily tasks?",
      options: [
        { text: "Yes, easily", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Hard to focus", value: 1 }
      ]
    },
    {
      id: 4,
      text: "Are you feeling connected to others or more withdrawn?",
      options: [
        { text: "Connected", value: 3 },
        { text: "Sometimes connected", value: 2 },
        { text: "Withdrawn", value: 1 }
      ]
    },
    {
      id: 5,
      text: "What is one emotion that shows up most often for you?",
      options: [
        { text: "Mostly calm/Hopeful/positive", value: 3 },
        { text: "Mixed", value: 2 },
        { text: "Mostly heavy/stress/Anger/Sadness", value: 1 }
      ]
    },
    {
      id: 6,
      text: "Do you feel hopeful about the future?",
      options: [
        { text: "Mostly hopeful", value: 3 },
        { text: "Unsure", value: 2 },
        { text: "Hopeless", value: 1 }
      ]
    },
    {
      id: 7,
      text: "How well are you sleeping these days?",
      options: [
        { text: "Restful", value: 3 },
        { text: "Disturbed sometimes", value: 2 },
        { text: "Poor", value: 1 }
      ]
    },
    {
      id: 8,
      text: "Are you able to show kindness to yourself when things go wrong?",
      options: [
        { text: "Yes, often", value: 3 },
        { text: "Sometimes", value: 2 },
        { text: "Rarely", value: 1 }
      ]
    }
  ];

  const handleAnswerChange = (questionId: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    const score = Object.values(answers).reduce((sum, value) => sum + value, 0);
    setTotalScore(score);
    setShowResults(true);
    // Scroll to results section
    setTimeout(() => {
      const resultsSection = document.getElementById('quiz-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const getResultMessage = (score: number) => {
    if (score >= 20 && score <= 24) {
      return {
        emoji: "🟢",
        title: "You seem balanced overall.",
        message: "Keep nurturing yourself.",
        color: "text-green-600"
      };
    } else if (score >= 14 && score <= 19) {
      return {
        emoji: "🟡",
        title: "A mix of ups & downs.",
        message: "Some gentle support could help.",
        color: "text-yellow-600"
      };
    } else {
      return {
        emoji: "🔴",
        title: "You may be carrying heavy stress.",
        message: "Therapy could be a safe space for relief.",
        color: "text-red-600"
      };
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setTotalScore(0);
  };

  const isQuizComplete = Object.keys(answers).length === 8;

  return (
    <div className="min-h-screen relative">
      <SEOHead 
        title="Emotional Check-In - Wellness Whispers"
        description="Take a moment to pause and reflect on how you're really feeling today. A gentle self-reflection tool for emotional awareness."
        keywords="emotional check-in, self-reflection, mental health, emotional awareness, wellness"
      />
      <Header />
      <main className="relative z-10 pt-20">
        
        {/* Hero Section with Background Image */}
        <div className="min-h-screen relative flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={dreamyNatureImg}
              alt="Dreamy nature landscape for emotional reflection"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-kinfolk font-extralight text-white leading-tight uppercase drop-shadow-lg">
                EMOTIONAL CHECK-IN
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-nunito text-white/95 leading-relaxed drop-shadow-md font-light max-w-3xl mx-auto">
                Take a moment to pause and reflect on how you're really feeling today. There are no right or wrong answers — this is only for you.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Quiz Section */}
        <section className="pt-24 pb-16 relative bg-gradient-to-br from-white/95 via-soft-beige/90 to-peach/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-kinfolk font-light text-earthy-brown mb-6">
                  🌿 Emotional Check-In 🌿
                </h2>
                <p className="text-lg font-nunito text-dark-brown leading-relaxed mb-4">
                  Take a deep breath — this is your safe space to notice how you truly feel today.
                </p>
                <p className="text-base font-nunito text-dark-brown/80 leading-relaxed">
                  There are no right or wrong answers, only honesty for your own reflection and well-being.
                </p>
              </div>

              {!showResults ? (
                <>
                  {/* Instructions */}
                  <div className="bg-sage/10 backdrop-blur-sm p-6 rounded-xl border border-sage/20 mb-8">
                    <p className="text-lg font-nunito text-dark-brown leading-relaxed text-center">
                      ✔️ <span className="font-semibold">Tick the option that feels closest to you.</span><br />
                      ➕ <span className="font-semibold">At the end, add up your numbers to see your score.</span>
                    </p>
                  </div>

                  {/* Quiz Questions */}
                  <div className="space-y-8 mb-8">
                    {questions.map((question) => (
                      <div key={question.id} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-soft border border-sage/10">
                        <h3 className="text-lg font-nunito font-semibold text-earthy-brown mb-4">
                          {question.id}. {question.text}
                        </h3>
                        <div className="space-y-3">
                          {question.options.map((option) => (
                            <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
                              <input
                                type="radio"
                                name={`question-${question.id}`}
                                value={option.value}
                                checked={answers[question.id] === option.value}
                                onChange={() => handleAnswerChange(question.id, option.value)}
                                className="w-4 h-4 text-sage-green focus:ring-sage-green"
                                data-testid={`radio-question-${question.id}-${option.value}`}
                              />
                              <span className="text-base font-nunito text-dark-brown group-hover:text-sage-green transition-colors">
                                {option.text}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      onClick={handleSubmit}
                      disabled={!isQuizComplete}
                      className={`relative px-12 py-5 rounded-2xl font-nunito font-bold text-xl transition-all duration-300 transform ${
                        isQuizComplete
                          ? "bg-gradient-to-r from-sage-green to-sage-green/80 text-white hover:from-sage-green/90 hover:to-sage-green/70 shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-1"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      data-testid="button-submit-quiz"
                    >
                      {isQuizComplete && (
                        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></span>
                      )}
                      <span className="relative flex items-center justify-center space-x-2">
                        <span>✨</span>
                        <span>Calculate My Score</span>
                        <span>✨</span>
                      </span>
                    </button>
                    {!isQuizComplete && (
                      <p className="text-sm font-nunito text-dark-brown/70 mt-3">
                        Please answer all questions to see your results
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Results Section */}
                  <div id="quiz-results" className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-sage/20 mb-8">
                    <h3 className="text-2xl font-kinfolk font-semibold text-earthy-brown mb-6 text-center">
                      ✅ Your Score
                    </h3>
                    <div className="text-center mb-6">
                      <div className="text-5xl font-nunito font-bold text-sage-green mb-4">
                        {totalScore}/24
                      </div>
                    </div>
                    
                    {(() => {
                      const result = getResultMessage(totalScore);
                      return (
                        <div className={`text-center p-6 rounded-xl bg-gradient-to-r from-white/80 to-soft-beige/60 ${result.color}`}>
                          <div className="text-3xl mb-3">{result.emoji}</div>
                          <h4 className="text-xl font-nunito font-semibold mb-2">{result.title}</h4>
                          <p className="text-lg font-nunito">{result.message}</p>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button
                      onClick={resetQuiz}
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-peach to-peach/80 text-white font-nunito font-semibold hover:from-peach/90 hover:to-peach/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                      data-testid="button-reset-quiz"
                    >
                      🔄 Take Quiz Again
                    </button>
                    <a
                      href="/contact"
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-sage-green to-sage-green/80 text-white font-nunito font-semibold hover:from-sage-green/90 hover:to-sage-green/70 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 no-underline"
                      data-testid="button-contact-me"
                    >
                      💬 Contact Me
                    </a>
                  </div>
                </>
              )}

              {/* Reflection Section - Always Visible */}
              <div className="mt-12 bg-peach-blush/30 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-kinfolk font-light text-earthy-brown mb-6">
                  🌿 Reflection
                </h3>
                <p className="text-lg text-dark-brown font-nunito leading-relaxed mb-6">
                  Notice your answers — do they show balance, stress, or a mix of both? You might even want to jot them down or doodle them.
                </p>
                <p className="text-lg text-dark-brown font-nunito leading-relaxed">
                  ✨ If your responses feel heavy, uncertain, or confusing, it may be a gentle sign that extra support could help.
                </p>
              </div>

              {/* Important Note */}
              <div className="mt-12 bg-amber-50/80 backdrop-blur-sm p-6 rounded-xl border border-amber-200">
                <h4 className="text-lg font-kinfolk font-semibold text-amber-800 mb-4">
                  ⚠️ Important Note
                </h4>
                <div className="space-y-3 text-sm font-nunito text-amber-700 leading-relaxed">
                  <p>This check-in is for self-reflection only.</p>
                  <p>It is not a diagnosis or a substitute for therapy.</p>
                  <p className="font-semibold">
                    If you are in crisis or experiencing overwhelming distress, please contact a mental health professional or emergency service immediately.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <p className="text-lg font-nunito text-dark-brown leading-relaxed">
                  👉 If you'd like to explore your score gently, therapy can be a safe place to begin.
                </p>
              </div>

            </div>
          </div>

          {/* Subtle nature texture overlay */}
          <div className="nature-texture absolute inset-0 pointer-events-none opacity-15"></div>
        </section>

      </main>
      <Footer />
    </div>
  );
}