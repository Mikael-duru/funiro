import Contact from "./Contact";
import Menus from "./Menus";
import Account from "./Account";
import Socials from "./Socials";
import Form from "./Form";

const ItemsContainer = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-12 md:gap-16 pl-6 pr-6 md:pr-1">
      <Contact />
      <Menus />
      <Account />
      <Socials />
      <Form />
    </div>
  );
};

export default ItemsContainer;