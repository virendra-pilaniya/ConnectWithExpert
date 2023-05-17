import Card from '../Card/Card' ;

const CompetitiveProgramming = (props) => {
  const {mentorList} = props ;
  return (
    <div className="mentorList">
    <h1>COMPETITIVE PROGRAMMING</h1>
    <div className="row justify-content-center
">
      {mentorList.map(
          (mentor) =>
            mentor.interest.cp && (
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
export default CompetitiveProgramming;
