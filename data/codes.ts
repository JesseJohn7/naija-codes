export const networks = [
  {
    name: "MTN",
    image: "/images/mtn.png",
    codes: [
      { title: "Check Balance", code: "*310#" },
      { title: "Buy Data", code: "*312#" },
      { title: "Borrow Airtime", code: "*303#" },
      { title: "Share Data", code: "*321#" },
      { title: "Recharge", code: "*311*PIN#" },
      { title: "Night Suscription", code: "*406*3*1#" },
      { title: "Customer Care", code: "300" }
    ]
  },
  {
    name: "Airtel",
    image: "/images/airtel.png",
    codes: [
      { title: "Check Balance", code: "*123#" },
      { title: "Buy Data", code: "*312#" },
      { title: "Borrow Airtime", code: "*303#" },
      { title: "Recharge", code: "*311*PIN#" },
       { title: "Night Suscription", code: "*412#" },
      { title: "Share Data", code: "*141*712*11#" },
      { title: "Customer Care", code: "111" }
    ]
  },
  {
    name: "Glo",
    image: "/images/glo.png",
    codes: [
      { title: "Check airtime Balance", code: "*310#" },
      { title: "Check data Balance", code: "*323#" },
      { title: "Buy Data", code: "*312#" },
      { title: "Borrow Airtime", code: "*321#" },
      { title: "Recharge", code: "*311*PIN#" },
      { title: "Customer Care", code: "121" }
    ]
  },
  {
    name: "9mobile",
    image: "/images/9mobile.png",
    codes: [
      { title: "Check airtime Balance", code: "*310#" },
      { title: "Check data Balance", code: "*310#" },
      { title: "Buy Data", code: "*312#" },
      { title: "Borrow Airtime/data", code: "*303#" },
      { title: "Recharge", code: "*311*PIN#" },
      { title: "Customer Care", code: "200" }
    ]
  },

] as const;

export const banks = [
  { name: "Access Bank", image: "/images/access.png", ussd: "*901#", notes: "Transfers & balance" },
  { name: "GTBank", image: "/images/gtbank.png", ussd: "*737#", notes: "Quick banking" },
  { name: "UBA", image: "/images/uba.png", ussd: "*919#", notes: "Easy transfers" },
  { name: "Zenith Bank", image: "/images/zenith.png", ussd: "*966#", notes: "Standard USSD" },
  { name: "First Bank", image: "/images/firstbank.png", ussd: "*894#", notes: "Transfers & airtime" },
  { name: "Fidelity Bank", image: "/images/fidelity.png", ussd: "*770#", notes: "Quick access" },
  { name: "Union Bank", image: "/images/union.png", ussd: "*826#", notes: "Instant banking" },
  { name: "FCMB", image: "/images/fcmb.png", ussd: "*329#", notes: "Balance & transfer" },
  { name: "Sterling Bank", image: "/images/sterling.png", ussd: "*822#", notes: "Money transfer" },
  { name: "Ecobank", image: "/images/ecobank.png", ussd: "*326#", notes: "Account services" },
  { name: "Polaris Bank", image: "/images/polaris.png", ussd: "*833#", notes: "Instant banking" },
  { name: "Wema Bank", image: "/images/wema.png", ussd: "*945#", notes: "Airtime, bills & transfers" },
  { name: "Keystone Bank", image: "/images/keystone.png", ussd: "*7111#", notes: "Balance & transfers" },
  { name: "Jaiz Bank", image: "/images/jaiz.png", ussd: "*773#", notes: "Account access" },

] as const;

export type Network = (typeof networks)[number];
export type Bank = (typeof banks)[number];
