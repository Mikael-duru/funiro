import ItemsContainer from "./itemsContainer";

const Footer = () => {
  return ( 
    <footer>
      <div className="container mx-auto pb-16 lg:pb-24">
        <hr className="mt-5 mx-6 pb-14 lg:pb-20" />
        <ItemsContainer />
      </div>
    </footer>
  );
}

export default Footer;