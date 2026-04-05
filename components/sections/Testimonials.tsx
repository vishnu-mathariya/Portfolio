// "use client";

// import { useState } from "react";
// import { testimonialsData } from "@/lib/constants";
// import ScrollReveal from "@/components/animations/ScrollReveal";

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? testimonialsData.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section className="relative py-16 md:py-24 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10 gradient-mesh-vibrant opacity-10" />

//       <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
//         {/* Section Header */}
//         <ScrollReveal className="mb-12 md:mb-16">
//           <div className="inline-block">
//             <span className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest">Testimonials</span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 md:mt-3">What People Say</h2>
//             <div className="h-1 w-16 md:w-20 gradient-primary mt-3 md:mt-4" />
//           </div>
//         </ScrollReveal>

//         {/* Testimonials Carousel */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
//           {/* Main Testimonial */}
//           <ScrollReveal animation="scaleIn" className="lg:col-span-2">
//             <div className="relative rounded-2xl sm:rounded-3xl glass-glow p-4 sm:p-6 md:p-8 lg:p-12 border border-blue-500/10 min-h-64 sm:min-h-72 flex flex-col justify-between">
//               {/* Quote Mark */}
//               <div className="absolute top-2 sm:top-4 left-4 sm:left-6 text-4xl sm:text-6xl opacity-10">
//                 "
//               </div>

//               {/* Content */}
//               <div>
//                 <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6 md:mb-8">
//                   {testimonialsData[currentIndex].content}
//                 </p>

//                 {/* Author */}
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-3 md:gap-4">
//                     <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full gradient-primary flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
//                       {testimonialsData[currentIndex].image}
//                     </div>
//                     <div className="min-w-0">
//                       <h4 className="font-bold text-white text-sm sm:text-base line-clamp-1">
//                         {testimonialsData[currentIndex].name}
//                       </h4>
//                       <p className="text-sm text-gray-400">
//                         {testimonialsData[currentIndex].role}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Rating */}
//                   <div className="flex gap-1 pt-2">
//                     {Array.from({ length: testimonialsData[currentIndex].rating }).map(
//                       (_, i) => (
//                         <span key={i} className="text-xl">
//                           ⭐
//                         </span>
//                       )
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </ScrollReveal>

//           {/* Navigation & Stats */}
//           <div className="space-y-8">
//             {/* Stats */}
//             <ScrollReveal animation="fadeInRight" className="rounded-2xl glass p-6 space-y-6 border border-blue-500/10">
//               <div>
//                 <div className="text-3xl font-bold gradient-text">
//                   {testimonialsData.length}+
//                 </div>
//                 <p className="text-gray-400 text-sm">Happy Clients</p>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold gradient-text">
//                   5.0
//                 </div>
//                 <p className="text-gray-400 text-sm">Average Rating</p>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold gradient-text">
//                   100%
//                 </div>
//                 <p className="text-gray-400 text-sm">Satisfied</p>
//               </div>
//             </ScrollReveal>

//             {/* Navigation Buttons */}
//             <div className="flex gap-3">
//               <button
//                 onClick={prevTestimonial}
//                 className="flex-1 p-4 rounded-lg gradient-primary text-white font-bold hover:shadow-gradient transition-all duration-300 transform hover:scale-105"
//                 aria-label="Previous testimonial"
//               >
//                 ← Prev
//               </button>
//               <button
//                 onClick={nextTestimonial}
//                 className="flex-1 p-4 rounded-lg gradient-primary text-white font-bold hover:shadow-gradient transition-all duration-300 transform hover:scale-105"
//                 aria-label="Next testimonial"
//               >
//                 Next →
//               </button>
//             </div>

//             {/* Dots */}
//             <div className="flex justify-center gap-2">
//               {testimonialsData.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentIndex
//                       ? "gradient-primary w-8"
//                       : "bg-gray-600 hover:bg-gray-500"
//                   }`}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* All Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
//           {testimonialsData.map((testimonial, index) => (
//             <ScrollReveal
//               key={testimonial.id}
//               animation="fadeInUp"
//               delay={index * 0.1}
//               className="rounded-xl glass p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer hover:shadow-gradient-hover"
//               onClick={() => setCurrentIndex(index)}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="text-3xl">
//                   {testimonial.image}
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-white text-sm">
//                     {testimonial.name}
//                   </h4>
//                   <div className="flex gap-0.5">
//                     {Array.from({ length: testimonial.rating }).map((_, i) => (
//                       <span key={i} className="text-xs">
//                         ⭐
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-400 text-xs line-clamp-2">
//                 {testimonial.content}
//               </p>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
