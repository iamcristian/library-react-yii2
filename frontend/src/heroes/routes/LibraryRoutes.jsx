import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { BooksPage, BookPage, MembersPage, SearchPage, MemberPage } from "../pages";

export const LibraryRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="books" element={<BooksPage />} />
          <Route path="members" element={<MembersPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="book/:bookId" element={<BookPage />} />
          <Route path="member/:memberId" element={<MemberPage />} />

          <Route path="/" element={<Navigate to={"/books"} />} />
        </Routes>
      </div>
    </>
  );
};
