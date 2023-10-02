/**
 *
 */
import { render, screen } from "@testing-library/react";
import EventCard from "../../components/EventCard/index";

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("the function return janvier for 2022-01-01 as date", () => {
      // to implement
      // const getMonth = jest.fn();
      // render(
      //   <EventCard
      //     getMonth={getMonth}
      //     date={new Date("2022-01-01T20:28:45.744Z")}
      //   />,
      // );
      // screen.findByText("janvier");
    });
    it("the function return juillet for 2022-07-08 as date", () => {
      // to implement
      // const getMonth = jest.fn();
      // render(
      //   <EventCard
      //     getMonth={getMonth}
      //     date={new Date("2022-07-01T20:28:45.744Z")}
      //   />,
      // );
      // screen.findByText("juillet");
    });
  });
});
