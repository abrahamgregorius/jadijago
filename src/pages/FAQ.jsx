import Main from "../components/Main";
import Section from "../components/Section";

export default function FAQ() {
  return (
    <Main>
      <Section className={"h-[80vh]"}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-bold mb-12">
            Frequently Asked Questions
          </h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">What is Jadijago?</h2>
              <p className="mt-2 w-[75%]">
                Jadijago is a skill development app designed to help users
                improve their abilities through structured learning modules,
                practice exercises, and interactive challenges. It’s ideal for
                students, professionals, or anyone who wants to keep learning
                and growing.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Who can use Jadijago?</h2>
              <p className="mt-2 w-[75%]">
                Anyone interested in personal or professional growth can use
                Jadijago. The app offers content for beginners up to advanced
                learners, depending on the skill being studied.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                What kinds of skills are available on Jadijago?
              </h2>
              <p className="mt-2 w-[75%]">
                Jadijago covers a wide range of skill categories, including
                communication, public speaking, leadership, programming, design,
                time management, and problem-solving. New skills are added
                regularly based on user feedback.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Do I get a certificate after completing a course?
              </h2>
              <p className="mt-2 w-[75%]">
                Yes, certificates of completion are available for certain
                modules—especially premium ones—which can serve as proof of
                skill development.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                What should I do if I encounter a problem with the app?
              </h2>
              <p className="mt-2 w-[75%]">
                You can contact our support team via the “Help” menu in the app
                or send an email to <span className="text-blue-500">support@jadijago.com</span>. We’re here to help!
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Main>
  );
}
