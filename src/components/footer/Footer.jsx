import ItemsContainer from "./itemsContainer";

const Footer = () => {
  return ( 
    <footer>
      <div className="container mx-auto pb-16 lg:pb-24 pl-6 xxl:pl-[6.375rem] ">
        <hr className="mt-5 pb-14 lg:pb-20 mr-6 md:mr-8 xxl:mr-[6.3125rem]" />
        <ItemsContainer />
      </div>
    </footer>
  );
}

export default Footer;