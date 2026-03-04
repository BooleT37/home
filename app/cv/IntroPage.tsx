import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaLink,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import PageWrapper from "./PageWrapper";

export default function IntroPage() {
  return (
    <PageWrapper>
      <div>
        <div className="inline-block mb-2">
          <h1 className="text-5xl font-bold mb-2">Alexey Levin</h1>
          <hr className="border-t-2 border-black" />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="rounded border-8 border-[#af664e] shadow-[0_4px_24px_rgba(107,58,42,0.3)] shrink-0">
          <Image
            src="/my-photo.jpeg"
            alt="My photo"
            width={300}
            height={400}
            className="block"
          />
        </div>
        <div className="text-right text-xl font-semibold leading-relaxed w-fit ml-auto">
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
          <div>Berlin</div>
          <hr className="border-t border-gray-200" />
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
      <hr className="mt-8 border-t border-gray-200" />
      <div className="mt-6 grid grid-cols-2 gap-1 text-sm text-gray-600 leading-relaxed">
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
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt />
            Berlin, Germany
          </span>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <a
            href="https://www.linkedin.com/in/alexey-levin-8766a9168/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-black"
          >
            <FaLinkedin />
            linkedin.com/in/alexey-levin-8766a9168/
          </a>
          <a
            href="https://github.com/boolet37"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-black"
          >
            <FaGithub />
            github.com/boolet37
          </a>
          <a
            href="https://boolet-home.vercel.app/cv"
            className="hidden print:flex items-center gap-2"
          >
            <FaLink />
            boolet-home.vercel.app/cv
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
