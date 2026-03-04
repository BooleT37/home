import {
  FaGraduationCap,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaFire,
} from "react-icons/fa";
import PageWrapper from "./PageWrapper";

const strengths = [
  {
    icon: <FaGraduationCap />,
    title: "Educated.",
    text: "With a Computer Science degree, I know and use design patterns (i.e. SOLID or DRY) and architecture principles. Overall, university helped me structure my thoughts and my work: I know how to build projects to scale.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Responsible.",
    text: "I understand what it means to be responsible for results — both my own and other people's. I make sure all the essential questions are settled before the work is started, and the team is enabled as well as it could be to work on the task, and always has my back while delivering. Once unforeseen obstacles inevitably arise, I make sure to spot them ahead, remove them, and inform all the necessary parties. I understand when and where we can cut down on quality to keep the delivery going. I also understand when the problems in our system block us from enabling the team, and it's time to step up. I am proactive in setting up observability metrics to notice such problems ahead of time.",
  },
  {
    icon: <FaClock />,
    title: "Time-management.",
    text: "I understand the hurdles of managing time while being the lead developer: I can find a good balance between enabling the team and delivering features, even under pressure. I also stay focused on goals during meetings, to not allow them to go too deep into irrelevant details.",
  },
  {
    icon: <FaUsers />,
    title: "Team player.",
    text: "I understand that the team is as strong as its members, and try to forge a personalised approach to each team member. Everyone learns differently, different people like different things, and what's easy for one might be stressful for another. Understanding this is the key to make the team go. At the same time I understand that it's important to let people out of the comfort zone so they can grow. This applies not only while managing the team, but even simply when you're splitting the next big project. I also understand how important it is to share knowledge in the team. And when it comes to team-building activities — from hosting a retro to organising an offsite — I am often a go-to person too.",
  },
  {
    icon: <FaFire />,
    title: "Passionate.",
    text: (
      <>
        I always look for new knowledge: be it new trends, principles or
        patterns of modern development. I love learning new features and
        technologies and easily get involved in new side-projects if it lets me
        experiment with something new (example: my finances project -{" "}
        <a
          href="https://finances-planning-new.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://finances-planning-new.vercel.app/
        </a>
        ). My latest passion is AI-assisted development as well as AI in product
        features. I have accumulated a lot of knowledge around that and
        can&apos;t wait to share it.
      </>
    ),
  },
];

export default function StrengthsPage() {
  return (
    <PageWrapper className="mt-8 print:mt-0">
      <h2 className="text-3xl font-bold mb-6">My strengths</h2>
      <div className="flex flex-col gap-4">
        {strengths.map(({ icon, title, text }) => (
          <div key={title}>
            <div className="flex items-center gap-2 font-bold text-lg mb-1">
              {icon}
              <span>{title}</span>
            </div>
            <p className="leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 mb-2 text-xs text-gray-400 italic text-right">
        No LLMs were used to write the text of this CV
      </p>
    </PageWrapper>
  );
}
