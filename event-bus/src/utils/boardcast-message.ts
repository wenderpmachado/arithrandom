import axios from "axios";
import logger from "./logger";

function broadcastMessage(event: any) {
  const serverUrls = process.env.SERVER_URLS?.split(',');

  serverUrls?.forEach(serverUrl => {
    logger.info(`Sending to ${serverUrl}`);

    axios.post(`http://${serverUrl}/events`, event).catch(e => logger.error(e.message));
  });
}

export default broadcastMessage;
