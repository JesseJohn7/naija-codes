export const fintechs = [
  {
    name: "Opay",
    image: "/images/opay.png",
    codes: [
      { title: "Check Balance", code: "*955*0#" },
      { title: "Transfer Money", code: "*955*1*AccountNumber*Amount#" },
      { title: "Buy Airtime", code: "*955*3*Amount#" },
      { title: "Buy Data", code: "*955*4*PhoneNumber*Amount#" },
      { title: "Check BVN", code: "*565*0#" },
    ],
  },
  {
    name: "PalmPay",
    image: "/images/palmpay.png",
    codes: [
      { title: "Check Balance", code: "*652#" },
      { title: "Buy Airtime", code: "*652*Amount#" },
      { title: "Check BVN", code: "*565*0#" },
    ],
  },
  {
    name: "Moniepoint",
    image: "/images/moniepoint.png",
    codes: [
      { title: "Check Balance", code: "*888#" },
      { title: "Transfer Money", code: "*888*1*AccountNumber*Amount#" },
      { title: "Check BVN", code: "*565*0#" },
    ],
  },
] as const;

export const bvnLinks = [
  {
    title: "BVN Lookup Portal (NIBSS)",
    url: "https://nibss-plc.com.ng/bvn/",
  },
  {
    title: "CBN BVN Information",
    url: "https://www.cbn.gov.ng/bvn/",
  },
];
