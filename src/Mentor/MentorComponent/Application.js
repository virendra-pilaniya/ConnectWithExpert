import Card from '../Card/Card' ;

const ApplicationDevop = (props) => {
  const {mentorList} = props ;
  return (
    <div className="mentorList app">
      <h1>APP DEVELOPMENT</h1>
      <div className="row justify-content-center
">
        {mentorList.map(
          (mentor) =>
            mentor.interest.app && (
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
export default ApplicationDevop;
