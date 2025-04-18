import { useEffect } from 'react';

export default function Pagination({ page, setPage }) {

    const previousHandler = () => {
        if (page <= 1) return;
        setPage((page) => page - 1)
    }

    const nextHandler = () => {
        if (page >= 10) return;
        setPage((page) => page + 1)
    }

    const pageClickHandler = (pageNumber) => {
        setPage(pageNumber);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <div className="flex justify-center my-20 items-center">
            <button className={`p-1 w-20 bg-cyan-800 font-bold text-[1rem] rounded-md cursor-pointer
    ${page === 1 ? "opacity-30 cursor-not-allowed" : null}`}
                onClick={previousHandler}>Previous</button>

            <p className={`border-2 border-cyan-700 mx-3 py-1 px-3 rounded-md cursor-pointer
                ${page === 1 ? "bg-cyan-800" : null}`}
                onClick={() => pageClickHandler(1)}>1</p>

            <p className={`border-2 border-cyan-700 mx-3 py-1 px-3 rounded-md cursor-pointer
                ${page === 2 ? "bg-cyan-800" : null}`}
                onClick={() => pageClickHandler(2)}>2</p>

            {
                page > 2 && page < 6 && (
                    <>
                        <span>...</span>
                        <p className="mx-3 py-1 px-3 rounded-md bg-cyan-800">{page}</p>
                    </>
                )
            }

            <span>...</span>

            <p className={`border-2 border-cyan-700 mx-3 py-1 px-3 rounded-md cursor-pointer
                ${page === 6 ? "bg-cyan-800" : null}`}
                onClick={() => pageClickHandler(6)}>6</p>

            <p className={`border-2 border-cyan-700 mx-3 py-1 px-3 rounded-md cursor-pointer
                ${page === 7 ? "bg-cyan-800" : null}`}
                onClick={() => pageClickHandler(7)}>7</p>

            <button className={`p-1 w-20 bg-cyan-800 font-bold text-[1rem] rounded-md cursor-pointer
    ${page === 7 ? "opacity-30 cursor-not-allowed" : null}`}
                onClick={nextHandler}>Next</button>
        </div>
    )
}
