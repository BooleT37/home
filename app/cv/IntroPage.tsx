import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaLink,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaServer,
  FaBrain,
  FaDatabase,
  FaLayerGroup,
  FaGlobe,
  FaBug,
  FaCloud,
} from "react-icons/fa";
import PageWrapper from "./PageWrapper";

const skills = [
  {
    icon: <FaCode />,
    category: "Frontend",
    items:
      "React, TypeScript, Redux, MobX, Jotai, Vite, WebGL, Tailwind, CSS-in-JS, Next.js",
  },
  {
    icon: <FaServer />,
    category: "Backend",
    items:
      "Node.js: Express, tRPC, Nest, Hapi. Java: spring-boot, jte. Python: Django, Flask",
  },
  {
    icon: <FaBrain />,
    category: "AI / ML",
    items:
      "LangChain, Langfuse, NumPy, Pandas, Scikit-learn, Matplotlib, Claude Code, Copilot",
  },
  {
    icon: <FaBug />,
    category: "Testing",
    items:
      "Jest, Vitest, Playwright, React Testing Library, Mock Service Worker, Testcontainers",
  },
  {
    icon: <FaCloud />,
    category: "Infrastructure",
    items: "Docker, Vercel, AWS, Redis, Message Queues",
  },
  {
    icon: <FaDatabase />,
    category: "Databases",
    items: "PostgreSQL, Prisma, Drizzle, Hibernate",
  },
  {
    icon: <FaLayerGroup />,
    category: "Patterns",
    items: "SOLID, DRY, KISS (and when to apply them)",
  },
  {
    icon: <FaGlobe />,
    category: "Languages",
    items: "Russian (native), English (C1), German (B1)",
  },
];

export default function IntroPage() {
  return (
    <PageWrapper>
      <a
        href="https://boolet-home.vercel.app/cv"
        className="hidden print:flex absolute top-8 right-8 items-center gap-2 text-sm text-gray-400"
      >
        <FaLink />
        boolet-home.vercel.app/cv
      </a>
      <div>
        <div className="inline-block mb-2">
          <h1 className="text-5xl font-bold mb-2">Alexey Levin</h1>
          <hr className="border-t-2 border-black" />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[auto_1fr] sm:grid-rows-[auto_1fr] sm:gap-8">
        <div className="order-2 sm:order-0 sm:row-span-2 rounded border-8 border-[#af664e] shadow-[0_4px_24px_rgba(107,58,42,0.3)] shrink-0 self-start">
          <Image
            src="/my-photo.jpeg"
            alt="My photo"
            width={200}
            height={300}
            className="block"
          />
        </div>
        <div className="order-1 sm:order-0 text-left sm:text-right text-xl font-semibold leading-relaxed w-fit sm:ml-auto">
          <div>Front-end/Full-stack</div>
          <hr className="border-t border-gray-200" />
          <div>Lead developer</div>
          <hr className="border-t border-gray-200" />
          <div>
            <Image
              src="/compa-logo.svg"
              alt="Compa"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            Compa
          </div>
          <hr className="border-t border-gray-200" />
        </div>
        <div className="order-3 sm:order-0 sm:self-end grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-gray-600 leading-relaxed">
          <div className="flex flex-col gap-1">
            <a
              href="mailto:boolet37@gmail.com"
              className="flex items-center gap-2 hover:text-black"
            >
              <FaEnvelope />
              boolet37@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <FaPhone />
              +4915156183686
            </span>
          </div>
          <div className="flex flex-col gap-1 md:items-end">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt />
              Berlin, Germany
            </span>
            <a
              href="https://github.com/boolet37"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-black"
            >
              <FaGithub />
              github.com/boolet37
            </a>
          </div>
          <a
            href="https://www.linkedin.com/in/alexey-levin-8766a9168/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 flex items-center gap-2 hover:text-black"
          >
            <FaLinkedin />
            linkedin.com/in/alexey-levin-8766a9168/
          </a>
        </div>
      </div>
      <hr className="mt-8 border-t border-gray-200" />
      <div className="mt-8 text-lg leading-relaxed break-inside-avoid font-semibold">
        I am a Full-stack web developer with a lean on Frontend. I&apos;ve been
        in a field of web development since 2014, constantly learning, trying
        out and championing new things. I&apos;ve worked in huge corporations as
        well as startups, led frontend and backend projects, pitched and
        implemented new approaches and ways of working. Being in lead developer
        positions since 2019, I am looking to continue to expand my leadership
        skills, to enable more people and push through complicated projects.
      </div>
      <a
        href="https://iulff6ok4r.ufs.sh/f/PCpmIS4b2pFijx1g7AphlePgoE3s0kCnwSajpUzdJXAy8iTu"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center gap-2 text-sm text-gray-500 hover:text-black print:hidden"
      >
        <FaLink />
        Recommendation letter
      </a>
      <hr className="mt-8 border-t border-gray-200" />
      <div className="mt-8 flex flex-col gap-2 text-base text-gray-600">
        {skills.map(({ icon, category, items }) => (
          <div
            key={category}
            className="flex items-baseline gap-2 leading-loose"
          >
            <span className="shrink-0 translate-y-0.5">{icon}</span>
            <span>
              <span className="font-semibold text-black">{category}:</span>{" "}
              {items}
            </span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
