import { cheap_ticket_prices, cities_ticket } from "../utils/API_urls";
import { getRequest } from "../utils/request";

class TicketService {
  static cheapTicket = (query: string) => {
    return getRequest(`${cheap_ticket_prices}?${query}`);
  };
  static citiesTicket = () => {
    return getRequest(cities_ticket);
  };
}
export default TicketService;
