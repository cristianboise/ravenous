import Business from "./Business";

function BusinessList({ businesses }) {
    return (
    <div className="business-list">
      {businesses.map((business) => {
        return <Business business={business} />;
      })}
    </div>
  );
}

export default BusinessList;