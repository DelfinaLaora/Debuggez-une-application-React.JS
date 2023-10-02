import { fireEvent, render, screen } from "@testing-library/react";
import { DataProvider } from "../../contexts/DataContext";
import PeopleCard from "../../components/PeopleCard";
import Home from "./index";
import ServiceCard from "../../components/ServiceCard";
import EventCard from "../../components/EventCard";

const data = {
  events: [
    {
      id: 1,
      type: "soirée entreprise",
      date: "2022-08-29T20:28:45.744Z",
      title: "Conférence #productCON",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },

    {
      id: 2,
      type: "forum",
      date: "2022-03-29T20:28:45.744Z",
      title: "Forum #productCON",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: ["1 espace d’exposition", "1 scéne principale"],
    },
  ],
};

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        }),
      );

      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    // to implement
    render(
      <DataProvider>
        <ServiceCard
          imageSrc="/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png"
          children="Soirée d’entreprise"
        />
      </DataProvider>,
    );
    const children = await screen.findByText("Soirée d’entreprise");
    const image = screen.getByTestId("card-image-testid");
    expect(children).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it("a list a people is displayed", async () => {
    // to implement
    render(
      <DataProvider>
        <PeopleCard
          imageSrc="/images/stephanie-liverani-Zz5LQe-VSMY-unsplash.png"
          name="Samira"
          position="CEO"
        />
      </DataProvider>,
    );

    const namePeople = await screen.findByText("Samira");
    const image = screen.getByTestId("card-image-testid");
    expect(namePeople).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it("a footer is displayed", () => {
    // to implement
    render(<Home />);
    screen.findByText("Notre dernière prestation");
    screen.findByText("Contactez-nous");
    screen.findByText("contact@77events.com");
  });

  it("an event card, with the last event, is displayed", () => {
    // to implement
  });
});
