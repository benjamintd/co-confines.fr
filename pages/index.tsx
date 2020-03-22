import React, { useEffect, useState } from "react";
import getAllRecords from "../lib/getAllRecords";
import { GetStaticProps } from "next";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";

import Meta from "../components/Meta";
import Explainer from "../components/Explainer";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import AddContent from "../components/AddContent";
import Filters from "../components/Filters";

interface IProps {
  records: Array<IRecord>;
}

const Index = (props: IProps) => {
  const [records, setRecords] = useState(props.records);
  const [filteredRecords, setFilteredRecords] = useState(props.records);
  const [filters, setFilters] = useState({} as IFilters);
  const { data } = useSWR("/api/content", fetcher);

  // set the records using the SWR data
  useEffect(() => {
    if (data?.records) {
      setRecords(data.records);
    }
  }, [data]);

  // set the filters depending on the records
  useEffect(() => {
    // collect all the themes and set them as unselected
    const themes = records.reduce((acc, rec) => {
      try {
        rec.Thèmes.forEach(theme => {
          acc[theme] = false;
        });
        return acc;
      } catch (error) {
        return acc;
      }
    }, {});

    setFilters({
      ...filters,
      ...themes
    });
  }, [records]);

  // get all the filtered records depending on the filters
  useEffect(() => {
    const areAllFiltersOff =
      Object.values(filters).filter(e => !!e).length === 0;
    console.log(filters, areAllFiltersOff);

    if (areAllFiltersOff) {
      setFilteredRecords(records);
    } else {
      const filtered = records.filter(r => {
        const t = r.Thèmes.filter(t => filters[t]).length;
        return t > 0;
      });
      setFilteredRecords(filtered);
    }
  }, [filters, records]);

  return (
    <>
      <Meta />
      <Explainer />
      <Filters filters={filters} setFilters={setFilters} />
      <Cards records={filteredRecords} />
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
