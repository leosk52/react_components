import Accordion from "../components/Accordion";

let items = [
  {
    id: 'skdaposkdoadsa',
    label: "SECTION ONE",
    content: `Here's some expanded section with additional info about some topic`,
  },
  {
    id:'32910754210fsa',
    label: "SECTION TWO",
    content: `O Avaí é o time da raça`,
  },
  {
    id:'12321kfcsaklfsa',
    label: "SECTION THREE",
    content: `Css its cool`,
  },
];

const AccordionPage = () => {
  return (
    <div>
      <Accordion items={items} />

    </div>
  );
};

export default AccordionPage;
