import useCategory from "../../hooks/useCategory";
import IconCard from "./IconCard";


const Icon = (props) => {
    const [trending , settreinding] = useCategory()
    return (
        <div className="min-h-[40vh] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {
                trending.map(td=> <IconCard key={td._id} cardData={td}></IconCard>)
            }
        </div>
    );
};

export default Icon;