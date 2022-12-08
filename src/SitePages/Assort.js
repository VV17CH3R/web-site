import AssortItem from "../Components/AssortItem";

const Assort = () => {
    return ( 
        <>
            <div className="home__container">
                Асортимент
            </div>
            <div className="categ_main"> 
                <div className="categ">
                    <div className="categ__item"></div><div className="categ__item"></div>
                    <div className="categ__item"></div><div className="categ__item"></div>
                    <div className="categ__item"></div><div className="categ__item"></div>
                    <div className="categ__item"></div><div className="categ__item"></div>
                    <div className="categ__item"></div>
                </div>
            </div>
            <AssortItem/>
        </>
     );
}
 
export default Assort;