import { LandingTestimonialGrid } from "@/Components/landing/testimonial/LandingTestimonialGrid";
import { LandingTestimonialReadMoreWrapper } from "@/Components/landing/testimonial/LandingTestimonialReadMoreWrapper";

export default function Testimonials() {
    const testimonialItems = [
        {
            name: "Duder",
            text: "It was like unlocking a trove of wisdom, bringing to light both known and unknown aspects of myself through precise insights.",
            handle: "@duder_4",
            imageSrc: "https://picsum.photos/100/100.webp?random=7",
        },
        {
            name: "Golden Bull",
            text: "My session with Zolo on this special day was enlightening—his accuracy and clarity brought a deeper understanding and gratitude.",
            handle: "@TheGoldenBull13",
            imageSrc: "https://picsum.photos/100/100.webp?random=8",
            featured: true, // Feature this testimonial
        },
        {
            name: "Linus",
            text: "Astounded by the depth of knowledge shared by BlessedGemini24, helping me comprehend my path and decisions better through numerology.",
            handle: "@Linus374480",
            imageSrc: "https://picsum.photos/100/100.webp?random=9",
        },
        {
            name: "Ronald Steven",
            text: "Talking to Shawn from GG33 proved invaluable. His insights are a must-know before the prices go up next year!",
            handle: "@RonaldStevenNu1",
            imageSrc: "https://picsum.photos/100/100.webp?random=10",
        },
        {
            name: "Adam Farmelo",
            text: "My reading with Jaymes was eye-opening. Surprised by how much can be gleaned from just a birthdate, I’m now excited for what lies ahead.",
            handle: "@AdamFarmelo",
            imageSrc: "https://picsum.photos/100/100.webp?random=11",
        },
        {
            name: "Trader Nams",
            text: "Incredible detail from NumbersMechanic on aspects like energy, life paths, and potential futures. A highly recommended enlightening session!",
            handle: "@tradernams",
            imageSrc: "https://picsum.photos/100/100.webp?random=12",
        },
    ];

    return (
        <LandingTestimonialReadMoreWrapper size="md">
            <LandingTestimonialGrid
                title="Hear It from Our Clients"
                description="Dive into the experiences of those who've unlocked deeper insights with GG33."
                testimonialItems={testimonialItems}
                withBackgroundGlow
                withBackground
            />
        </LandingTestimonialReadMoreWrapper>
    );
}
