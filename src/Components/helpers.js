const getInitDate = () => {
  const date = new Date();

  const initDate =
    date.getFullYear() +
    (date.getMonth() + 1 < 10
      ? "-0" + (date.getMonth() + 1)
      : "-" + (date.getMonth() + 1)) +
    "-" +
    (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());

  return initDate;
};

const getInitTime = () => {
  const date = new Date();

  const initTime =
    (date.getHours() + 1 < 10
      ? "0" + (date.getHours() + 1)
      : date.getHours() + 1) +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
  return initTime;
};

const getReference = () => {
  //you can put any unique reference implementation code here
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

const calculateHours = items => {
  let hours;
  switch (items.service) {
    case "sanitation":
      hours = items.bedrooms * 1.5 + items.restrooms * 0.75;
      break;

    case "vehicle":
      hours = items.suvs * 1.5 + items.sedans * 1.25;
      break;

    case "dry_cleaning":
      hours = items.tops * 0.25 + items.bottoms * 0.25;
      break;

    default:
      break;
  }

  hours = hours < 2 ? 2 : hours;

  return hours;
};

const calculatePrice = hours => {
  const price = hours * 1500;
  return price;
};

const initializeApp = () => {
  const reference = getReference();

  const today = getInitDate();

  const now = getInitTime();

  const freshDetails = {
    service: "dry_cleaning",
    suvs: 0,
    sedans: 0,
    tops: 0,
    bottoms: 0,
    bedrooms: 0,
    restrooms: 0,
    date: today,
    time: now,
    name: "",
    phone: "",
    email: "",
    address: "",
    price: 3000,
    hours: 2,
    reference: reference,
    key: "pk_test_f68915f70c7a77b65f416080230a9a3822035979",
    paid: false,
    dispatched: false
  };

  return freshDetails;
};

export { calculatePrice, calculateHours, initializeApp };
