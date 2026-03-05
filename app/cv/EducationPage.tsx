import PageWrapper from "./PageWrapper";

export default function EducationPage() {
  return (
    <PageWrapper className="mt-8 print:mt-0">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="divide-y divide-gray-200">
        <div className="flex flex-col sm:grid sm:grid-cols-[7rem_1fr] py-4">
          <div className="whitespace-nowrap font-semibold text-gray-500 text-lg pb-2 sm:pb-0 sm:pr-6 sm:border-r sm:border-gray-200">
            2016 – 2018
          </div>
          <div className="sm:pl-6">
            <div className="font-bold">Ural State University</div>
            <div>Computer Science (Master Degree)</div>
            <div className="mt-2">
              <strong className="block">I&apos;ve studied:</strong>
              Industrial Java Development, Machine Learning, GPU Programming,
              Algorithms Design and other subjects
            </div>
            <div className="mt-1">
              <strong className="block">
                I&apos;ve passed general examinations in:
              </strong>
              Algorithms Design, Algebra &amp; Geometry, Computer Networks
            </div>
            <div className="mt-1">
              <strong className="block">My graduation project:</strong>
              Certificate Authority Demand Forecasting with Machine Learning
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-[7rem_1fr] py-4">
          <div className="whitespace-nowrap font-semibold text-gray-500 text-lg pb-2 sm:pb-0 sm:pr-6 sm:border-r sm:border-gray-200">
            2010 – 2016
          </div>
          <div className="sm:pl-6">
            <div className="font-bold">Ural State University</div>
            <div>Computer Science (Bachelor Degree)</div>
            <div className="mt-2">
              <strong className="block">I&apos;ve studied:</strong>
              JavaScript, Combinatorial Algorithms, Object-Oriented
              Programming (Java), Web &amp; HTML, Computational Methods,
              Databases (MS SQL), C++, Perl, Python and other subjects
            </div>
            <div className="mt-1">
              <strong className="block">
                I&apos;ve passed general examinations in:
              </strong>
              Algorithms Design, Algebra &amp; Geometry, Computer Networks
            </div>
            <div className="mt-1">
              <strong className="block">My graduation project:</strong>
              Certificate Authority Demand Forecasting with Machine Learning
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
