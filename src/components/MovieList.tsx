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
      <div>
        <Header />
        <form className="bg-black pb-20" onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <input
              className="px-4 border border-grey-300 shadow-inner p-3 w-96 rounded-l-lg  "
              onChange={handleInputChange}
              value={userInput}
              type="text"
              placeholder="Search for movies"
            />
            <button
              className="w-40 h-15 ml-7 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
              // className="w-20 ml-3 bg-purple-300 hover:bg-purple-700 text-white-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
              type="submit"
            >
              search
            </button>
          </div>
        </form>
      </div>
      <section className="bg-slate-100 flex justify-center p-14">
        <ul className="grid grid-cols-4 gap-6">{listItems}</ul>
      </section>
      <div className="flex justify-center text-red-500 p-52">
        {notFound && <p className="">{notFound.message}</p>}
      </div>
    </>
  );
};
