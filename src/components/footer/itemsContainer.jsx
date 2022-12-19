import Contact from "./Contact";
import Menus from "./Menus";
import Account from "./Account";
import Socials from "./Socials";
import Form from "./Form";

const ItemsContainer = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap space-y-10 > * lg:space-y-0 pr-6 xxl:pr-[5.25rem]">
      <Contact />
      <Menus />
      <Account />
      <Socials />
      <Form />
    </div>
  );
};

export default ItemsContainer;