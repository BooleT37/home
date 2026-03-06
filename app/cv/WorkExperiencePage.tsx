import PageWrapper from "./PageWrapper";

export default function WorkExperiencePage() {
  return (
    <PageWrapper className="mt-8 print:mt-0">
      <h2 className="text-3xl font-bold mb-6">My work experience</h2>
      <div className="divide-y divide-gray-200">
        <div className="flex flex-col sm:grid sm:grid-cols-[7rem_1fr] py-4">
          <div className="font-semibold text-gray-500 text-lg pb-2 sm:pb-0 sm:pr-6 sm:border-r sm:border-gray-200">
            <span className="whitespace-nowrap">2022-07</span>
            <br className="hidden sm:block" />{" "}
            <span className="whitespace-nowrap">to 2026-03</span>
          </div>
          <div className="sm:pl-6">
            <div className="font-bold text-xl">Compa</div>
            <div>Front-end lead engineer</div>
            <div className="text-gray-500 mt-1">
              React, Typescript, Mobx, React-query, tRPC, LangChain
            </div>
            <div className="mt-2">
              Compa is an app for German architects and small architecture
              firms. I led complex technical projects in a very fast paced
              environment, and worked on enabling the team by making sure we use
              the right tools and approaches in our ever more complex codebase.
              My last project was a WhatsApp- and AI-based Construction Diary
              product, which I built on node.js with my colleague from scratch
            </div>
            <div className="mt-8">
              <strong className="block">My key accomplishments:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  As a part of a two-engineer team, developed a new WhatsApp-
                  and AI-based Construction Diary product on a completely new
                  tech stack from scratch
                </li>
                <li>
                  Improved visibility of our project progress, e.g. by pivoting
                  to GH integration and setting up hill charts
                </li>
                <li>
                  Constantly oversaw our unit and integration tests, and removed
                  flakiness number of times
                </li>
                <li>
                  Implemented client-side buffering for Bills of Quantities
                </li>
                <li>
                  Revamped the internal state management of the whole app to
                  enable creating rich and highly interactive features
                </li>
                <li>Led UX/UI revamp of the budgeting module</li>
                <li>Led time tracking project implementation</li>
                <li>
                  Made a deep but scoped research and implementation of the rich
                  text editing in the app
                </li>
                <li>
                  Co-led several hackathon activities for knowledge sharing, to
                  enable the rest of the team to participate in AI features
                  development
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-[7rem_1fr] py-4">
          <div className="font-semibold text-gray-500 text-lg pb-2 sm:pb-0 sm:pr-6 sm:border-r sm:border-gray-200">
            <span className="whitespace-nowrap">2021-03</span>
            <br className="hidden sm:block" />{" "}
            <span className="whitespace-nowrap">to 2022-06</span>
          </div>
          <div className="sm:pl-6">
            <div className="font-bold text-xl">Klarna</div>
            <div>Desktop Extension</div>
            <div>Front-End engineer</div>
            <div className="text-gray-500 mt-1">
              React, Typescript, Redux, mParticle
            </div>
            <div className="mt-4">
              I was working as a <strong>Javascript engineer</strong> in the
              browser extension team in Klarna. I was one of the go-to persons
              for any architectural questions in the team. When Klarna acquired
              another company and integrated it to our domain, I led the process
              of merging several big features into our codebase with the help of
              ex-Piggy employees.
            </div>
            <div className="mt-8">
              <strong className="block">My key accomplishments:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  I set up a work process between several ex-Piggy employees so
                  we could deliver several big features on time.
                </li>
                <li>
                  I led the process of evaluating and promoting two junior
                  employees. I designed and fully led the learning course for
                  them, so they could catch up in terms of experience with other
                  members of our team.
                </li>
                <li>
                  I led the switch to the new mParticle workspace for our
                  project. The work involved configuring the mParticle and
                  coordinating the work with several other teams.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-[7rem_1fr] py-4">
          <div className="font-semibold text-gray-500 text-lg pb-2 sm:pb-0 sm:pr-6 sm:border-r sm:border-gray-200">
            <span className="whitespace-nowrap">2020-02</span>
            <br className="hidden sm:block" />{" "}
            <span className="whitespace-nowrap">to 2021-02</span>
          </div>
          <div className="sm:pl-6">
            <div className="font-bold text-xl">Alfa-Bank</div>
            <div>Mobile Delivery Application</div>
            <div>Front-End technical Lead</div>
            <div className="text-gray-500 mt-1">
              React, Typescript, Redux, Hapi
            </div>
            <div className="mt-2">
              I was working as a <strong>front end technical leader</strong> in
              a group of teams developing different modules of an internal
              delivery mobile application. I helped all JavaScript developers in
              the group to be in sync in terms of our infrastructure, standards
              and technical debt. I also contributed to the company subdivision
              infrastructure, processes and documentation.
            </div>
            <div className="mt-2">
              <strong className="block">My key accomplishments:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  I successfully led <strong>the revival</strong> of an old
                  bootstrap project in our subdivision.
                </li>
                <li>
                  I set up <strong>processes</strong>,{" "}
                  <strong>standards</strong> and <strong>code sharing</strong>{" "}
                  between different teams in our group. I&apos;m leading a
                  process of bringing all services together in terms of design
                  and infrastructure.
                </li>
                <li>
                  I&apos;ve written several <strong>developer guides</strong>{" "}
                  inside our subdivision.
                </li>
                <li>
                  I was a maintainer of our subdivision&apos;s{" "}
                  <strong>infrastructure</strong>. I plan its development and
                  write some libraries myself.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-[7rem_1fr] py-4">
          <div className="font-semibold text-gray-500 text-lg pb-2 sm:pb-0 sm:pr-6 sm:border-r sm:border-gray-200">
            <span className="whitespace-nowrap">2018-11</span>
            <br className="hidden sm:block" />{" "}
            <span className="whitespace-nowrap">to 2020-01</span>
          </div>
          <div className="sm:pl-6">
            <div className="font-bold text-xl">Alfa-Bank</div>
            <div>Credit Card Application Form</div>
            <div>Front-End developer</div>
            <div className="text-gray-500 mt-1">
              React, Typescript, Redux, Hapi
            </div>
            <div className="mt-2">
              I worked in a small scrum team on two projects:{" "}
              <strong>an application form</strong> for our call center and an
              internal credit cards delivery <strong>mobile application</strong>
              .
            </div>
            <div className="mt-2">
              <strong className="block">My key accomplishments:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  I&apos;ve <strong>redesigned</strong> our application form UI
                  when we had no dedicated visual designer.
                </li>
                <li>
                  I&apos;ve <strong>refactored</strong> the entire project
                  during my work in a team which made it much more scalable and
                  sped up new features delivery.
                </li>
                <li>
                  I&apos;ve acted as a <strong>technical leader</strong> for
                  half of a year.
                </li>
                <li>
                  I&apos;ve read two <strong>presentations</strong>: a
                  company-wide, and a city-wide one.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-[7rem_1fr] py-4">
          <div className="font-semibold text-gray-500 text-lg pb-2 sm:pb-0 sm:pr-6 sm:border-r sm:border-gray-200">
            <span className="whitespace-nowrap">2017-03</span>
            <br className="hidden sm:block" />{" "}
            <span className="whitespace-nowrap">to 2018-11</span>
          </div>
          <div className="sm:pl-6">
            <div className="font-bold text-xl">SKB Contour</div>
            <div>Certificate Authority</div>
            <div>Front-End developer</div>
            <div className="text-gray-500 mt-1">
              jQuery, TypeScript, React, ASP.net
            </div>
            <div className="mt-2">
              I played the lead role in a UI redesign of an internal{" "}
              <strong>accounting website</strong>. I also maintained the front
              page of a{" "}
              <strong>service for Certificate Authority operators</strong>.
              Besides that, I&apos;ve worked on two side projects:{" "}
              <strong>a book library</strong> website for SKB Contour employees
              and{" "}
              <strong>
                a Certificate Authority Demand Forecasting service
              </strong>{" "}
              which grew from my graduation work.
            </div>
            <div className="mt-2">
              <strong className="block">My key accomplishments:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  I&apos;ve led my team to not only do visual redesign of a
                  website, but to migrate it to a completely new{" "}
                  <strong>technical stack</strong>. I&apos;ve rewritten the
                  front-end layer of the site from conception.
                </li>
                <li>
                  I contributed to the company <strong>UI Kit</strong>,
                  developed a completely new component.
                </li>
                <li>
                  I&apos;ve written a few <strong>guides</strong> for my team
                  members, as well as for team newcomers.
                </li>
                <li>
                  I&apos;ve written a mercurial <strong>pre-commit hook</strong>{" "}
                  to help back end programmers in my team.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-[7rem_1fr] py-4">
          <div className="font-semibold text-gray-500 text-lg pb-2 sm:pb-0 sm:pr-6 sm:border-r sm:border-gray-200">
            <span className="whitespace-nowrap">2017-01</span>
            <br className="hidden sm:block" />{" "}
            <span className="whitespace-nowrap">to 2017-03</span>
          </div>
          <div className="sm:pl-6">
            <div className="font-bold text-xl">Freelance</div>
            <div>Full-Stack developer</div>
            <div className="text-gray-500 mt-1">
              Java, spring-boot, MySQL, webpack, React
            </div>
            <div className="mt-2">
              I&apos;ve developed a <strong>CMS website</strong> for a gymnasium
              from conception. Its features include rich UI SPA, a database and
              a REST API. It was my first experience with webpack+React together
              with REST API (Java, spring-boot).
            </div>
            <div className="mt-1 text-gray-500 text-sm">
              <a
                href="https://github.com/BooleT37/gymnasium"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black"
              >
                github.com/BooleT37/gymnasium
              </a>
            </div>
            <div className="mt-2">
              <strong className="block">My key accomplishments:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  A rich custom <strong>video player</strong> and a photo
                  gallery.
                </li>
                <li>
                  A fully-functional <strong>admin page</strong>.
                </li>
                <li>
                  A <strong>CI</strong> to quickly deliver the project to a test
                  environment.
                </li>
                <li>
                  Nice <strong>CSS animations</strong> (i.e. parallax).
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-[7rem_1fr] py-4">
          <div className="font-semibold text-gray-500 text-lg pb-2 sm:pb-0 sm:pr-6 sm:border-r sm:border-gray-200">
            <span className="whitespace-nowrap">2014-06</span>
            <br className="hidden sm:block" />{" "}
            <span className="whitespace-nowrap">to 2016-12</span>
          </div>
          <div className="sm:pl-6">
            <div className="font-bold text-xl">SKB Contour</div>
            <div>Contour-Extern</div>
            <div>Front-End developer</div>
            <div className="text-gray-500 mt-1">jQuery, ASP.net</div>
            <div className="mt-2">
              I worked as a junior front-end developer in a big team maintaining
              a accounting web service. I participated in several projects such
              as Personal Profile page and a large Requisites form for company
              clients.
            </div>
            <div className="mt-2">
              <strong className="block">My key accomplishments:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>
                  I was one of the first developers who applied a client
                  templating engine to a big project.
                </li>
                <li>
                  I made an awesome user avatar selector with CSS animations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
