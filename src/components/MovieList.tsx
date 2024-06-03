import { ChangeEvent, FormEvent, ReactElement } from "react";
import { emptySearchState } from "./MovieSearchManager";
import Header from "./Header";

type ListProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  userInput: string;
  listItems: ReactElement[];
  notFound: emptySearchState;
};

export const MovieList = ({
  handleSubmit,
  handleInputChange,
  userInput,
  listItems,
  notFound,
}: ListProps) => {
  return (
    <>
      <div className="">
        <Header />
        <form className="bg-black p-6 md:pb-20" onSubmit={handleSubmit}>
          <div className="flex justify-center pb-4">
            <input
              className="px-2 border border-grey-300 shadow-inner md:p-3 md:w-96 rounded-l-lg  "
              onChange={handleInputChange}
              value={userInput}
              type="text"
              placeholder="Search for movies"
            />
            <button
              className="w-20 p-2 md:w-40 h-15 ml-7 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
              type="submit"
            >
              search
            </button>
          </div>
        </form>
      </div>
      <section className=" md:bg-slate-100 flex justify-center p-2 md:p-14">
        <ul className="sm:grid sm:grid-cols-3 gap-6">{listItems}</ul>
      </section>
      <div className="flex justify-center text-red-500 p-52">
        {notFound && <p className="">{notFound.message}</p>}
      </div>
    </>
  );
};
