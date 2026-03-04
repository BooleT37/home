import PrintButton from "./PrintButton";
import IntroPage from "./IntroPage";
import EducationPage from "./EducationPage";
import WorkExperiencePage from "./WorkExperiencePage";
import StrengthsPage from "./StrengthsPage";

export default function CV() {
  return (
    <main className="min-h-screen bg-gray-200 py-10 print:bg-transparent print:p-0">
      <IntroPage />
      <WorkExperiencePage />
      <EducationPage />
      <StrengthsPage />
      <PrintButton />
    </main>
  );
}
