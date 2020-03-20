import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import Explainer from "../components/Explainer";
import Cards from "../components/Cards";
import Content from "../components/Content";
import Footer from "../components/Footer";
import AddContent from "../components/AddContent";
import { GetStaticProps } from "next";
import getAllRecords from "../lib/getAllRecords";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";

interface IProps {
  records: Array<IRecord>;
}

const Index = (props: IProps) => {
  const [records, setRecords] = useState(props.records);
  const { data } = useSWR("/api/content", fetcher);

  useEffect(() => {
    if (data?.records) {
      setRecords(data.records);
    }
  }, [data]);
  return (
    <>
      <Meta />
      <Explainer />
      <Cards records={records} />
      <AddContent />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const records = await getAllRecords();
  return { props: { records } };
};

const fetcher = async url => {
  return fetch(url).then(res => res.json());
};

export default Index;
