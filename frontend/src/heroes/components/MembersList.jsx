import { useFetch } from "../../hooks/useFetch";
import { MemberCard } from "./MemberCard";

export const MembersList = () => {
  const { data } = useFetch("http://localhost:8080/members");

  return (
    <>
      {data && data.map((member) => <MemberCard key={member.id} {...member} />)}
    </>
  );
};
