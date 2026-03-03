import PageWrapper from "./PageWrapper";

export default function EducationPage() {
  return (
    <PageWrapper className="mt-8 print:mt-0">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <table className="w-full border-collapse">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-4 pr-6 border-r border-gray-200 align-top whitespace-nowrap font-semibold text-gray-500 w-28 text-lg">
              2016 – 2018
            </td>
            <td className="py-4 pl-6 align-top">
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
            </td>
          </tr>
          <tr>
            <td className="py-4 pr-6 border-r border-gray-200 align-top whitespace-nowrap font-semibold text-gray-500 w-28 text-lg">
              2010 – 2016
            </td>
            <td className="py-4 pl-6 align-top">
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
            </td>
          </tr>
        </tbody>
      </table>
    </PageWrapper>
  );
}
