export interface ProductInfo {
  id: string;
  name: string;
  route: string;
  logo: string;
  primaryColor: string;
}

export const products: ProductInfo[] = [
  {
    id: "m-call",
    name: "M_Call",
    route: "/m-call",
    logo: "/logos/products/m-call.png",
    primaryColor: "#000000", // Placeholder
  },
  {
    id: "m-doc",
    name: "M_Doc",
    route: "/m-doc",
    logo: "/logos/products/m-doc.png",
    primaryColor: "#000000", // Placeholder
  },
  {
    id: "m-pay",
    name: "M_Pay",
    route: "/m-pay",
    logo: "/logos/products/m-pay.png",
    primaryColor: "#000000", // Placeholder
  },
  {
    id: "m-project",
    name: "M_Project",
    route: "/m-project",
    logo: "/logos/products/m-project.png",
    primaryColor: "#000000", // Placeholder
  },
  {
    id: "m-network",
    name: "M_Network",
    route: "https://mnetgo.com",
    logo: "/logos/products/m-network.png",
    primaryColor: "#000000", // Placeholder
  },
  {
    id: "m-butic",
    name: "M_Butic",
    route: "https://mbutic.com/",
    logo: "/logos/products/m-butic.png",
    primaryColor: "#000000", // Placeholder
  },
  {
    id: "m-event",
    name: "M_Event",
    route: "/m-event",
    logo: "/logos/products/m-event.png",
    primaryColor: "#000000", // Placeholder
  },
  {
    id: "m-media",
    name: "M_Media",
    route: "/m-media",
    logo: "/logos/products/m-media.png",
    primaryColor: "#000000", // Placeholder
  },
];
