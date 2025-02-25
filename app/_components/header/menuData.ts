export const menuData: MenuItem[] = [
  {
    title: "Home",
    link: "/",
    // subMenu: [
    //   { title: "SEO 1", link: "/" },
    //   { title: "SEO 2", link: "/" },
    //   { title: "SEO 3", link: "/" },
    //   { title: "SEO 4", link: "/" },
    //   { title: "SEO 5", link: "/" },
    //   { title: "SEO 6", link: "/" },
    // ],
  },
  // {
  //   title: "Business Solutions",
  //   link: "/",
  //   megaMenuData: [
  //     {
  //       title: "Connect to Internet",
  //       link: "/about",
  //       icon: "fas fa-info-circle", // Font Awesome icon class
  //       description: "",
  //     },
  //     {
  //       title: "Connect to cloud",
  //       link: "/team",
  //       icon: "fas fa-users", // Font Awesome icon class
  //       description: "",
  //     },
  //     {
  //       title: "Connect your Business",
  //       link: "/pricing",
  //       icon: "fas fa-tags", // Font Awesome icon class
  //       description: "",
  //     },
  //     {
  //       title: "Protect your Network",
  //       link: "/partners",
  //       icon: "fas fa-handshake", // Font Awesome icon class
  //       description: "",
  //     },
  //     {
  //       title: "Build your Core Network",
  //       link: "/services",
  //       icon: "fas fa-cogs", // Font Awesome icon class
  //       description: "",
  //     },
  //     {
  //       title: "Industry Solutions",
  //       link: "/career",
  //       icon: "fas fa-briefcase", // Font Awesome icon class
  //       description: "",
  //     },
  //   ],
  // },
  {
    title: "Business Solutions",
    link: "/",
    megaMenuData: [
      {
        title: "Connect to Internet",
        link: "/about",
        icon: "fas fa-wifi", // Wi-Fi icon, more appropriate for internet connection
        description: "",
      },
      {
        title: "Connect to cloud",
        link: "/team",
        icon: "fas fa-cloud", // Cloud icon, directly represents cloud services
        description: "",
      },
      {
        title: "Connect your Business",
        link: "/pricing",
        icon: "fa-solid fa-building", // Branch icon, representing business growth and connection
        description: "",
      },
      {
        title: "Protect your Network",
        link: "/partners",
        icon: "fas fa-shield-alt", // Shield icon, directly symbolizing protection
        description: "",
      },
      {
        title: "Build your Core Network",
        link: "/services",
        icon: "fas fa-network-wired", // Network wired icon, perfect for core network building
        description: "",
      },
      {
        title: "Industry Solutions",
        link: "/career",
        icon: "fas fa-industry", // Industry icon, representing solutions for various industries
        description: "",
      },
    ],
  },
  // {
  //   title: "Products & Services",
  //   link: "/",
  //   megaMenuData: [
  //     {
  //       title: "Internet",
  //       link: "#",
  //       icon: "fas fa-cloud", // Font Awesome Cloud icon
  //       description: "Reliable high-speed internet solutions",
  //       subMenu: [
  //         {
  //           title: "IP Transit",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //         {
  //           title: "Internet Leased Line (ILL)",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //         {
  //           title: "Dedicated Internet Access (DIA) – IP Connect",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Security",
  //       link: "/",
  //       icon: "fas fa-shield-alt", // Font Awesome Shield icon
  //       description: "Advanced security to protect your network",
  //       subMenu: [
  //         {
  //           title: "Smart IP-VPN",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //         {
  //           title: "DDoS Mitigation",
  //           description:
  //             "Real-time threat detection and mitigation to protect from DDoS attacks and ensure uptime",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Interconnect",
  //       link: "/",
  //       icon: "fas fa-plug", // Font Awesome Plug icon
  //       description: "Seamless interconnections across cloud and data centers",
  //       subMenu: [
  //         {
  //           title: "Cloud Connect",
  //           description:
  //             "Private, direct connections to cloud providers for improved speed and security",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //         {
  //           title: "Data Center Connect",
  //           description:
  //             "Reliable interconnections between data centers for faster, more secure data transfer",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //         {
  //           title: "Internet Exchange (Apollo-IX) Connect",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Networking",
  //       link: "/",
  //       icon: "fas fa-network-wired", // Font Awesome Network Wired icon
  //       description: "Optimized networking solutions",
  //       subMenu: [
  //         {
  //           title: "SD-WAN",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //         {
  //           title: "Ethernet",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //         {
  //           title: "Optical Fiber",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //         {
  //           title: "Wavelengthst",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //         {
  //           title: "Data - Last Mile Acess (MNI)",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //         {
  //           title: "Managed Optical Fiber Network",
  //           description: "",
  //           icon: "fas fa-network-wired",
  //           link: "/",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Voice",
  //       link: "/",
  //       icon: "fas fa-phone", // Font Awesome Phone icon
  //       description: "Reliable voice services for business",
  //       subMenu: [
  //         {
  //           title: "SIP Trunk/PRI",
  //           icon: "fas fa-network-wired",
  //           description: "",
  //           link: "/",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Products & Services",
    link: "/",
    megaMenuData: [
      {
        title: "Internet",
        link: "#",
        icon: "fas fa-wifi", // Font Awesome Wi-Fi icon (more fitting for internet)
        description: "Reliable high-speed internet solutions",
        subMenu: [
          {
            title: "IP Transit",
            description: "",
            icon: "fas fa-cogs", // Gear icon, representing technical service
            link: "/",
          },
          {
            title: "Internet Leased Line (ILL)",
            description: "",
            icon: "fas fa-link", // Link icon, representing a dedicated line
            link: "/",
          },
          {
            title: "Dedicated Internet Access (DIA) – IP Connect",
            description: "",
            icon: "fas fa-plug", // Plug icon, showing connectivity
            link: "/",
          },
        ],
      },
      {
        title: "Security",
        link: "/",
        icon: "fas fa-shield-alt", // Font Awesome Shield icon (already perfect)
        description: "Advanced security to protect your network",
        subMenu: [
          {
            title: "Smart IP-VPN",
            description: "",
            icon: "fas fa-shield-virus", // Shield virus icon, indicating protection
            link: "/",
          },
          {
            title: "DDoS Mitigation",
            description:
              "Real-time threat detection and mitigation to protect from DDoS attacks and ensure uptime",
            icon: "fas fa-fingerprint", // Fingerprint icon, representing identity protection
            link: "/",
          },
        ],
      },
      {
        title: "Interconnect",
        link: "/",
        icon: "fas fa-plug", // Font Awesome Plug icon (already fitting)
        description: "Seamless interconnections across cloud and data centers",
        subMenu: [
          {
            title: "Cloud Connect",
            description:
              "Private, direct connections to cloud providers for improved speed and security",
            icon: "fas fa-cloud", // Cloud icon, directly linking to cloud services
            link: "/",
          },
          {
            title: "Data Center Connect",
            description:
              "Reliable interconnections between data centers for faster, more secure data transfer",
            icon: "fas fa-building", // Building icon, representing data centers
            link: "/",
          },
          {
            title: "Internet Exchange (Apollo-IX) Connect",
            description: "",
            icon: "fas fa-exchange-alt", // Exchange icon, representing interconnectivity
            link: "/",
          },
        ],
      },
      {
        title: "Networking",
        link: "/",
        icon: "fas fa-network-wired", // Font Awesome Network Wired icon (already fitting)
        description: "Optimized networking solutions",
        subMenu: [
          {
            title: "SD-WAN",
            description: "",
            icon: "fas fa-random", // Laptop network icon, representing SD-WAN
            link: "/",
          },
          {
            title: "Ethernet",
            description: "",
            icon: "fa-solid fa-ethernet", // Random icon, signifying network connections
            link: "/",
          },
          {
            title: "Optical Fiber",
            description: "",
            icon: "fas fa-sitemap", // Sitemap icon, indicating a fiber network structure
            link: "/",
          },
          {
            title: "Wavelengths",
            description: "",
            icon: "fas fa-wave-square", // Wave square icon, representing wavelengths
            link: "/",
          },
          {
            title: "Data - Last Mile Access (MNI)",
            description: "",
            icon: "fas fa-arrow-right", // Arrow icon, representing final connectivity step
            link: "/",
          },
          {
            title: "Managed Optical Fiber Network",
            description: "",
            icon: "fas fa-cogs", // Gear icon, representing network management
            link: "/",
          },
        ],
      },
      {
        title: "Voice",
        link: "/",
        icon: "fas fa-phone-alt", // Font Awesome Phone Alt icon (more modern)
        description: "Reliable voice services for business",
        subMenu: [
          {
            title: "SIP Trunk/PRI",
            icon: "fas fa-phone", // Classic Phone icon, representing voice service
            description: "",
            link: "/",
          },
        ],
      },
    ],
  },
  // {
  //   title: "Services",
  //   link: "/",
  //   megaMenuData: [
  //     {
  //       title: "Peering",
  //       link: "#",
  //       icon: icon2,
  //       description: "Learn more about Innomax",
  //       subMenu: [
  //         {
  //           title: "Public Peering",
  //           description:
  //             "Enable networks to connect with each other at a common exchange point for direct traffic exchange",
  //           link: "/",
  //         },
  //         {
  //           title: "Private Peering",
  //           description:
  //             "Facilitate one-to-one, private connections between networks",
  //           link: "/",
  //         },
  //         {
  //           title: "IP Peering",
  //           description:
  //             "Allow peers to exchange Internet traffic via IP addresses",
  //           link: "/",
  //         },
  //         {
  //           title: "Remote Peering",
  //           description:
  //             "Allow users to connect to the exchange remotely via internet services, bypassing the need for physical presence",
  //           link: "/",
  //         },
  //         {
  //           title: "Bilateral Peering",
  //           description: "",
  //           link: "/",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Bandwidth",
  //       link: "/international",
  //       icon: icon2,
  //       description: "Learn more about Innomax",
  //       subMenu: [
  //         {
  //           title: "Dedicated Internet Access",
  //           description:
  //             "Provide high-speed, dedicated internet access for businesses and network operators",
  //           link: "/",
  //         },
  //         {
  //           title: "Burstable Bandwidth",
  //           description:
  //             "Allow clients to scale bandwidth usage up or down based on demand",
  //           link: "/",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Security",
  //       link: "/",
  //       icon: icon2,
  //       description: "Learn more about Innomax",
  //       subMenu: [
  //         {
  //           title: "DDoS Mitigation",
  //           description:
  //             "Protection against distributed denial-of-service attacks",
  //           link: "/",
  //         },
  //         {
  //           title: "Security Audits",
  //           description:
  //             "Provide regular security assessments of the network and infrastructure",
  //           link: "/",
  //         },
  //         {
  //           title: "VPN Services",
  //           description:
  //             "Secure, encrypted connections for remote users or inter-office communications",
  //           link: "/",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Interconnection",
  //       link: "/",
  //       icon: icon2,
  //       description: "Learn more about Innomax",
  //       subMenu: [
  //         {
  //           title: "Cloud Connect",
  //           description:
  //             "Direct private connections to major cloud providers for optimized performance",
  //           link: "/",
  //         },
  //         {
  //           title: "Data Center Connect",
  //           description: "",
  //           link: "/",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Contact",
    link: "/about",
  },
];

export interface MenuItem {
  title: string;
  link: string;
  icon?: string;
  description?: string;
  subMenu?: MenuItem[];
  megaMenuData?: MenuItem[];
}
