import Card from '../Card/Card' ;

const DeepLearning = (props) => {
  const {mentorList} = props ;
  return (
    <div className="mentorList">
      <h1>DEEP LEARNING</h1>
      <div className="row justify-content-center
">
        {mentorList.map(
          (mentor) =>
            mentor.interest.dl && (
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
export default DeepLearning;
