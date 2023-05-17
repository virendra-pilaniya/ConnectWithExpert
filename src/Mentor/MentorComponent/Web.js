import Card from "../Card/Card";

const WebDev = (props) => {
  const { mentorList } = props;
  return (
    <div className="mentorList">
      <h1>WEB DEVELOPMENT</h1>
      <div className="row justify-content-center">
        {mentorList.map(
          (mentor) =>
            mentor.interest.web && (
              <Card
                key={mentor._id}
                id={mentor._id}
                imgSrc={mentor.imgSrc}
                name={mentor.name}
                description={mentor.description}
              />
            )
        )}
      </div>
    </div>
  );
};
export default WebDev;
