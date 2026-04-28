const services = [
  {
    name: "Full-Service Interior Design",
    description:
      "End-to-end design from concept to final installation, covering every element of the space.",
  },
  {
    name: "Space Planning & Furniture Layout",
    description:
      "Optimizing flow, proportion, and function before a single piece is selected or moved.",
  },
  {
    name: "Material & Finish Specification",
    description:
      "Rigorous selection of flooring, wall treatments, stone, tile, and hardware.",
  },
  {
    name: "Furniture Procurement",
    description:
      "Sourcing and purchasing furniture, lighting, and objects from trade and independent makers.",
  },
  {
    name: "Lighting Design",
    description:
      "Layered lighting strategies — ambient, task, and accent — with fixture specification and control systems.",
  },
  {
    name: "Kitchen & Bath Design",
    description:
      "Detailed design and specification of kitchens and bathrooms, including cabinetry and plumbing fixtures.",
  },
  {
    name: "Renovation Coordination",
    description:
      "Oversight of contractors and tradespeople throughout construction, acting as client advocate on site.",
  },
  {
    name: "Virtual Design Consultation",
    description:
      "Structured design guidance delivered remotely, for clients who want expert direction without full-service scope.",
  },
];

export function ServicesSection() {
  return (
    <section className="pb-section">
      <p className="text-xs tracking-[0.25em] uppercase text-muted font-sans mb-4">
        Services
      </p>
      <h2 className="font-serif text-headline text-heading leading-tight mb-12">
        What I Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {services.map((service) => (
          <div
            key={service.name}
            className="border-t border-border py-7 pr-8"
          >
            <h3 className="font-serif text-title text-heading mb-2">
              {service.name}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
