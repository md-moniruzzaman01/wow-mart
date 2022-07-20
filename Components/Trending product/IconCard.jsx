
const IconCard = ({cardData}) => {

 const {cetagory,picture,title}=cardData
    return (
        <div className=" p-2 rounded">
          <div className="flex justify-center items-center"><img src={picture} alt="category icon" /></div>
          <div className="flex justify-center items-center"><p className="font-semibold">{title}</p></div>
        </div>
    );
};

export default IconCard;