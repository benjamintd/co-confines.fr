export default () => (
  <div className="text-center">
    <h1 className="text-accent-500 font-title lg:text-4xl md:text-3xl text-xl font-bold p-3">
      CoConfinés.
    </h1>
    <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
    <iframe
      className="airtable-embed airtable-dynamic-height"
      src="https://airtable.com/embed/shrOG41Mtw7J3W6Tt?backgroundColor=blue"
      width="100%"
      height="1470"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    ></iframe>{" "}
  </div>
);
