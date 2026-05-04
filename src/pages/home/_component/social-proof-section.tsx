import { Star, Quote } from "lucide-react";

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Small Business Owner",
      image: "SC",
      quote:
        "Smart Tracker saved me 3 hours every week. The AI is incredibly accurate!",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      role: "Freelancer",
      image: "MR",
      quote:
        "Finally, a tool that actually understands my receipts. Game changer!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Marketing Manager",
      image: "ED",
      quote:
        "The analytics helped me save $500 last month by identifying spending patterns.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold text-foreground leading-tight">
            Loved by thousands
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed font-light">
            Don't just take our word for it. See what our users are saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/50 border rounded-3xl p-8 space-y-8 hover:border-gray-300/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-10 h-10 text-muted-foreground/30 absolute -top-3 -left-3" />
                <p className="text-xl text-foreground leading-relaxed pl-8 font-medium">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
