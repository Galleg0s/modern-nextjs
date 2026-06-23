import Link from "next/link";

import { auth, signOut } from "@/auth";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to learn React",
    description: "I want to learn",
    tags: [
      {
        _id: "1",
        name: "React",
      },
      {
        _id: "1",
        name: "Javascript",
      },
    ],

    author: { _id: "1", name: "John Doe" },
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const session = await auth();
  // console.log(session);

  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    return question.title.toLowerCase().includes(query?.toLowerCase());
  });

  return (
    <div>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:flex-row sm:items-center">
        <h1>All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 text-light-900!"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
          route="/"
        />
      </section>
      <section className="mt-11">LocalSearch</section>
      HomeFilter
      <div className="mt-10 flex flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Home;
