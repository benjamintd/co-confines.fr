import React from "react";

interface IProps {
  records: IRecord[];
}

export default (props: IProps) => {
  return (
    <div className="flex flex-wrap max-w-screen-xl mx-auto justify-center">
      {props.records.map(r => (
        <Card key={r.id} record={r} />
      ))}
    </div>
  );
};

const Card = ({ record }: { record: IRecord }) => (
  <div className="shadow-md lg:w-5/12 md:w-1/2 w-10/12 m-3 bg-white rounded">
    <a href={record.Lien}>
      <div
        className="w-full h-64 border-b border-gray-300 rounded-t"
        style={{
          backgroundImage: `url("${record["Image de couverture"][0].thumbnails.large.url}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
    </a>
    <div className="p-6">
      <a href={record.Lien}>
        <h1 className="text-center font-bold text-xl pb-3 text-gray-800">
          {record.Titre}
        </h1>
      </a>
      {record.Thèmes.map((theme: string) => (
        <span
          key={theme}
          className="bg-accent-400 text-white rounded-full px-3 py-1 text-xs mr-2"
        >
          {theme}
        </span>
      ))}

      <p className="leading-normal py-4">{record.Description}</p>
      <a
        href={record.Lien}
        rel="noopener norefferer"
        target="_blank"
        className="self-end text-accent-500 hover:text-accent-400 bottom-0"
      >
        <Link />
      </a>
    </div>
  </div>
);

const Link = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 6.41L8.7 16.71C8.6096 16.814 8.49868 16.8982 8.3742 16.9573C8.24972 17.0164 8.11438 17.0491 7.97665 17.0534C7.83892 17.0578 7.70179 17.0336 7.57385 16.9824C7.44592 16.9312 7.32994 16.8541 7.2332 16.756C7.13646 16.6579 7.06104 16.5408 7.01167 16.4122C6.96231 16.2835 6.94007 16.1461 6.94634 16.0084C6.95261 15.8708 6.98726 15.7359 7.04812 15.6123C7.10898 15.4886 7.19474 15.3789 7.3 15.29L17.58 5H14C13.7348 5 13.4804 4.89464 13.2929 4.70711C13.1054 4.51957 13 4.26522 13 4C13 3.73478 13.1054 3.48043 13.2929 3.29289C13.4804 3.10536 13.7348 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V10C21 10.2652 20.8946 10.5196 20.7071 10.7071C20.5196 10.8946 20.2652 11 20 11C19.7348 11 19.4804 10.8946 19.2929 10.7071C19.1054 10.5196 19 10.2652 19 10V6.41ZM17 14C17 13.7348 17.1054 13.4804 17.2929 13.2929C17.4804 13.1054 17.7348 13 18 13C18.2652 13 18.5196 13.1054 18.7071 13.2929C18.8946 13.4804 19 13.7348 19 14V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V7C3 5.9 3.9 5 5 5H10C10.2652 5 10.5196 5.10536 10.7071 5.29289C10.8946 5.48043 11 5.73478 11 6C11 6.26522 10.8946 6.51957 10.7071 6.70711C10.5196 6.89464 10.2652 7 10 7H5V19H17V14Z"
      fill="currentColor"
    />
  </svg>
);
