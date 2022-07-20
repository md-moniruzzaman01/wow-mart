

const product = ({data}) => {
    console.log(data);
    return (
        <div>
            
        </div>
    );
};


export async function getServerSideProps(context) {
    const { id } = await context.query;
   
    const res = await fetch(`http://localhost:3000/api/details/${id}`);
    const data = await res.json();
 
    return { props: { data } };
  }

export default product;