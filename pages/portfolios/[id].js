import { useRouter } from "next/router";

const PortfolioDetail = () => {
  const router = useRouter();
  const id = router.query.id;
  return <h1>Detail portfolio page of id: {id}</h1>;
};

// for initial props if not using router
// PortfolioDetail.getInitialProps = ({query}) => {
//   return {query}
// }

export default PortfolioDetail;
