// Central place for all site content & contact details.
// Edit values here to update them everywhere on the site.

export const site = {
  name: "TCP ENG",
  tagline: "Engineering Reliable Embedded Solutions",
  owner: "Travis Priest",
  role: "Embedded Systems Engineer",
  description:
    "Custom embedded systems, firmware development, and PCB design from concept to production.",
  email: "travis@tcp-eng.com",
  // Phone removed from the site. Restore by re-adding the contact <li> blocks
  // (home, about, contact, footer) that referenced site.phone / site.phoneHref.
  // phone: "239-443-0370",
  // phoneHref: "tel:+12394430370",
  linkedin: "https://www.linkedin.com/in/travis-priest-1725189",
  linkedinLabel: "linkedin.com/in/travis-priest-1725189",
  github: "https://github.com/tcp-eng",
  githubLabel: "github.com/tcp-eng",
  location: "Based in Florida, USA",
  resume: "/resume.pdf",
};

// TEMP: Projects section is disabled site-wide. Flip to `true` to re-enable the
// Projects nav link, home featured grid, and the "View Projects" buttons.
export const showProjects = false;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  ...(showProjects ? [{ label: "Projects", href: "/projects/" }] : []),
  { label: "Resume", href: "/resume/" },
  { label: "Contact", href: "/contact/" },
];

export const services = [
  {
    slug: "embedded-firmware",
    icon: "chip",
    title: "Embedded Firmware",
    summary: "STM32, ESP32, RP2350, FreeRTOS, Drivers, Bootloaders and more.",
    items: [
      "STM32",
      "ESP32",
      "RP2350 / RP2040",
      "FreeRTOS",
      "Drivers",
      "Bootloaders",
      "Hardware interfaces",
    ],
  },
  {
    slug: "pcb-design",
    icon: "pcb",
    title: "PCB Design",
    summary: "Schematic capture, PCB layout, DFM review, Gerbers, BOMs and assembly docs.",
    items: [
      "Schematic capture",
      "PCB layout",
      "DFM review",
      "Gerbers",
      "BOMs",
      "Assembly documentation",
    ],
  },
  {
    slug: "wireless-iot",
    icon: "wifi",
    title: "Wireless & IoT",
    summary: "LoRa, WiFi, BLE, MQTT, HTTP, RS485, CAN and remote monitoring.",
    items: ["LoRa", "WiFi", "BLE", "MQTT", "HTTP", "RS485", "CAN", "Remote monitoring"],
  },
  {
    slug: "hardware-bring-up",
    icon: "gear",
    title: "Hardware Bring-Up",
    summary: "Prototype validation, debugging, test fixture design and optimization.",
    items: [
      "Prototype validation",
      "Debugging",
      "Test fixture design",
      "Optimization",
    ],
  },
  {
    slug: "3d-printing",
    icon: "cube",
    title: "3D Printing",
    summary:
      "3D-printed enclosures, fixtures, and functional prototypes — from CAD to a part in hand.",
    items: [
      "FDM & resin printing",
      "Enclosure & housing design",
      "Mechanical CAD design",
      "Custom fixtures & mounts",
      "Functional prototypes",
      "Iterative design refinement",
    ],
  },
  {
    slug: "pcb-prototyping",
    icon: "solder",
    title: "PCB Prototyping",
    summary:
      "Quick-turn boards, hand and SMD assembly, and rework to get a working prototype fast.",
    items: [
      "Quick-turn fabrication",
      "Hand & SMD assembly",
      "Rework & repair",
      "Board bring-up",
      "Breakout & test boards",
      "Design iteration",
    ],
  },
  {
    slug: "development-tools",
    icon: "code",
    title: "Development Tools",
    summary: "KiCad, PlatformIO, VSCode, Git, JTAG/SWD, Logic Analyzers and more.",
    items: [
      "KiCad",
      "PlatformIO",
      "VSCode",
      "Git",
      "JTAG / SWD",
      "Logic analyzers",
      "Oscilloscopes",
    ],
  },
  {
    slug: "consulting",
    icon: "users",
    title: "Consulting",
    summary: "Design reviews, architecture guidance and mentoring junior engineers.",
    items: [
      "Design reviews",
      "Architecture guidance",
      "Mentoring junior engineers",
      "Product development planning",
    ],
  },
];

export const projects = [
  {
    slug: "usb-type-c-data-switch",
    title: "USB Type-C Data Switch",
    blurb:
      "A compact PCB tool that routes one USB Type-C device between two hosts with no cable swapping — a high-speed analog switch with ESD protection and signal-integrity-focused layout.",
    tags: ["USB Type-C", "KiCad", "Signal Integrity", "ESD"],
    highlights: [
      "Switches one USB-C device between two hosts",
      "High-speed USB 2.0 analog mux",
      "Length-matched differential pair routing",
      "ESD protection at every connector",
      "Jumper-selectable — no firmware needed",
      "Compact 2-layer board with mounting holes",
    ],
    featured: true, // shown in the large hero card on the projects landing page
    role: "PCB Design",
    client: "Development tool",
    status: "Completed prototype",
    overview:
      "The USB Type-C Data Switch routes a single USB Type-C device between two independent hosts without unplugging cables — built to speed up embedded development, firmware programming, and hardware testing while preserving USB 2.0 signal integrity.",
    challenge:
      "Three USB-C connectors, the switching IC, ESD protection, and configuration headers had to fit on a small two-layer board while keeping the high-speed differential pair clean — short, length-matched, and free of impedance discontinuities.",
    solution:
      "A high-speed USB analog multiplexer sits at the center of a carefully placed layout: short matched D+/D- traces, minimal stubs and vias, decoupling adjacent to the switch IC, and ESD diodes placed right at each connector. Jumper headers select the active host with no firmware or software required.",
    results: [
      "Clean, length-matched USB 2.0 differential routing",
      "Reliable host switching via jumpers",
      "ESD-protected USB-C ports for repeated connections",
      "Compact, low-cost board ready for test fixtures",
    ],
    technologies: [
      "USB Type-C",
      "USB 2.0",
      "KiCad",
      "Analog Switch",
      "ESD Protection",
      "High-Speed PCB",
    ],
    specs: [
      { label: "Interface", value: "USB Type-C" },
      { label: "Ports", value: "3 (2 hosts + 1 device)" },
      { label: "USB standard", value: "USB 2.0" },
      { label: "Switching", value: "High-speed analog switch" },
      { label: "PCB layers", value: "2" },
      { label: "Configuration", value: "Jumper selectable" },
      { label: "Protection", value: "USB ESD diodes" },
      { label: "Mounting", value: "4 mounting holes" },
    ],
    architecture:
      "USB-C Host A ─┐\n              ├─► High-speed analog switch ─► USB-C Device\nUSB-C Host B ─┘\n\nJumpers select active host · ESD diodes at each port · decoupling at switch IC",
    gallery: [
      {
        title: "3D PCB Render",
        caption:
          "Three USB-C connectors, central switch IC, and jumper-selectable controls",
        src: "/projects/usb-switch-render.jpg",
      },
    ],
    downloads: [{ name: "Schematic.pdf", href: "/projects/usb-switch-schematic.pdf" }],
  },
  {
    slug: "wireless-livestock-scale",
    title: "Wireless Livestock Scale System",
    blurb:
      "STM32 sensor nodes with load cells and LoRa communication. ESP32 gateway with MQTT cloud integration.",
    tags: ["STM32", "LoRa", "ESP32", "MQTT"],
    highlights: [
      "Load cell measurement",
      "Calibration routines",
      "LoRa communication",
      "ESP32 gateway",
      "MQTT integration",
      "Cloud dashboard concept",
    ],

    // --- OPTIONAL CASE-STUDY FIELDS (worked example) -----------------------
    // These power the individual project page at /projects/<slug>/.
    // Copy any of these into another project to flesh out its page.
    featured: false, // USB Type-C Data Switch is now the featured hero
    role: "Hardware + Firmware",
    client: "Agricultural / Industrial",
    duration: "6 months",
    status: "Prototype",
    overview:
      "A wireless weighing system for livestock that pairs precision load-cell sensor nodes with a LoRa network and an ESP32 gateway, streaming readings to a cloud dashboard for remote monitoring without per-pen wiring.",
    challenge:
      "The customer needed reliable, low-maintenance weight data from animal pens spread across a property, beyond the reach of WiFi and impractical to wire individually.",
    solution:
      "STM32-based nodes read load cells through a precision ADC with calibration routines, then transmit over LoRa to a central ESP32 gateway. The gateway aggregates readings and publishes them via MQTT to a cloud dashboard concept for trend tracking and alerts.",
    results: [
      "Reliable wireless readings across the property",
      "Repeatable calibration procedure for each node",
      "Single gateway aggregates many sensor nodes",
      "Cloud dashboard concept for remote monitoring",
    ],
    technologies: ["STM32", "LoRa", "ESP32", "MQTT", "Load Cell", "FreeRTOS", "C"],
    specs: [
      { label: "MCU (node)", value: "STM32" },
      { label: "Gateway", value: "ESP32" },
      { label: "Wireless", value: "LoRa (sub-GHz)" },
      { label: "Cloud", value: "MQTT" },
    ],
    // architecture: `Load Cell\n   |\nSTM32 Node\n   |\nLoRa\n   |\nESP32 Gateway\n   |\nMQTT Cloud\n   |\nDashboard`,
    // gallery: [{ title: "PCB", caption: "Sensor node board", src: "/projects/livestock-pcb.jpg" }],
    // downloads: [{ name: "Datasheet.pdf", href: "/projects/livestock-datasheet.pdf" }],
    links: { github: "https://github.com/tcp-eng" },
    // -----------------------------------------------------------------------
  },
  {
    slug: "rp2350-logic-analyzer",
    title: "RP2350 Logic Analyzer",
    blurb:
      "High-speed 16-channel logic analyzer with USB high-speed interface and Sigrok protocol decoding.",
    tags: ["RP2350", "USB HS", "Sigrok"],
    highlights: [
      "RP2350 firmware",
      "USB data streaming",
      "Protocol decoding",
      "Logic analyzer front-end",
      "Open-source GitHub repository",
    ],
  },
  {
    slug: "esp32-industrial-io",
    title: "ESP32 Industrial I/O Controller",
    blurb:
      "WiFi-enabled industrial controller with analog inputs, relay outputs, and web configuration.",
    tags: ["ESP32", "WiFi", "Web UI", "MQTT"],
    highlights: [
      "ESP32 firmware",
      "Web interface",
      "Relay control",
      "Analog input monitoring",
      "MQTT or HTTP connectivity",
    ],
  },
  {
    slug: "bluetooth-environmental-monitor",
    title: "Bluetooth Environmental Monitor",
    blurb:
      "Battery-powered environmental sensor node measuring temperature, humidity, and CO₂ with BLE mobile integration.",
    tags: ["BLE", "Low-power", "Sensors"],
    highlights: [
      "BLE communication",
      "Low-power firmware",
      "Environmental sensors",
      "Mobile app data view",
      "Battery optimization",
    ],
  },
  {
    slug: "smart-rv-resort-meter-reader",
    title: "Smart RV Resort Meter Reader",
    blurb:
      "LoRaWAN meter network with remote dashboard, usage analytics, and alerting system.",
    tags: ["LoRaWAN", "Dashboard", "Analytics"],
    highlights: [
      "Wireless electric meter monitoring",
      "LoRaWAN communication",
      "Dashboard reporting",
      "Usage alerts",
      "Hospitality / property management use case",
    ],
  },
];

// ---------------------------------------------------------------------------
// EXAMPLE / TEST projects — one per project type. NOT part of the live
// portfolio (they don't appear on the home grid or /projects). They exist only
// to exercise the project-page template across types, reachable from the test
// index at /projects/examples/ and at /projects/<slug>/. Safe to delete.
// ---------------------------------------------------------------------------
export const exampleProjects = [
  {
    slug: "stm32-modbus-sensor-node",
    example: true,
    type: "A · Embedded Firmware",
    title: "STM32 Modbus RTU Sensor Node",
    blurb:
      "Bare-metal-friendly STM32 firmware turning a multi-sensor board into a robust Modbus RTU slave over RS-485.",
    tags: ["STM32", "Modbus", "RS-485", "C"],
    highlights: [
      "Interrupt-driven RS-485 with automatic direction control",
      "CRC-checked Modbus RTU register map",
      "Watchdog + brown-out-safe restart",
      "Field-update bootloader with CRC firmware validation",
    ],
    role: "Firmware",
    client: "Industrial automation",
    duration: "6 weeks",
    status: "Shipped",
    overview:
      "Firmware for a sensor board that exposes temperature, humidity, and analog inputs as Modbus RTU registers for PLC/SCADA integration.",
    challenge:
      "The customer needed a drop-in RS-485 sensor that any Modbus master could poll reliably in a noisy plant environment.",
    solution:
      "An interrupt-driven UART/RS-485 layer feeds a CRC-validated Modbus RTU state machine on a low-power STM32G0, with a watchdog and a CRC-checked bootloader for safe field updates.",
    results: [
      "Reliable polling at 19200 baud on long RS-485 runs",
      "Zero bus lockups across a 2-week soak test",
      "Field firmware updates without opening the enclosure",
    ],
    technologies: ["STM32", "C", "Modbus RTU", "RS-485", "FreeRTOS", "SWD"],
    specs: [
      { label: "MCU", value: "STM32G0 (Cortex-M0+)" },
      { label: "Clock", value: "64 MHz" },
      { label: "RTOS", value: "FreeRTOS" },
      { label: "Flash / RAM", value: "64 KB / 8 KB" },
      { label: "Bus", value: "Modbus RTU over RS-485" },
      { label: "Toolchain", value: "PlatformIO + GCC" },
    ],
    architecture:
      "Sensors (I2C / ADC)\n  |\nSTM32G0 firmware\n  |\nModbus RTU\n  |\nRS-485 bus\n  |\nPLC / SCADA master",
    links: { github: "https://github.com/tcp-eng" },
  },
  {
    slug: "4layer-industrial-io-board",
    example: true,
    type: "B · PCB Design & Prototyping",
    title: "4-Layer Industrial I/O PCB",
    blurb:
      "Schematic-to-fab design of a rugged 4-layer industrial I/O board with isolated inputs and relay outputs.",
    tags: ["KiCad", "4-layer", "Isolation", "DFM"],
    highlights: [
      "Optically isolated 24 V digital inputs",
      "Relay + MOSFET output stages",
      "Controlled-impedance USB-C and CAN",
      "First-pass functional — no rework",
    ],
    role: "PCB Design",
    client: "OEM equipment",
    duration: "5 weeks",
    status: "Rev A",
    technologies: ["KiCad", "DFM", "CAN", "USB", "SMD Assembly"],
    specs: [
      { label: "Size", value: "100 × 80 mm" },
      { label: "Layers", value: "4 (sig / gnd / pwr / sig)" },
      { label: "Stack-up", value: "1.6 mm, controlled impedance" },
      { label: "Power in", value: "24 V industrial" },
      { label: "Connectors", value: "Pluggable terminal, USB-C, DB9 CAN" },
      { label: "Tool", value: "KiCad 8" },
    ],
    gallery: [
      { title: "Top render", caption: "3D render, top side", src: "/projects/io-board-top.jpg" },
      { title: "Assembled", caption: "Assembled Rev A board", src: "/projects/io-board-assembled.jpg" },
    ],
    downloads: [
      { name: "Schematic.pdf", href: "/projects/io-board-schematic.pdf" },
      { name: "Gerbers.zip", href: "/projects/io-board-gerbers.zip" },
    ],
  },
  {
    slug: "lora-soil-moisture-network",
    example: true,
    type: "C · Wireless & IoT System",
    title: "LoRa Soil Moisture Sensor Network",
    blurb:
      "Battery-powered LoRa soil-moisture nodes reporting to an ESP32 gateway and MQTT dashboard for irrigation control.",
    tags: ["LoRa", "ESP32", "MQTT", "Low-power"],
    highlights: [
      "Multi-year battery life on 2× AA",
      "Capacitive soil-moisture sensing",
      "Star network to an ESP32 gateway",
      "MQTT to a cloud dashboard with alerts",
    ],
    role: "Hardware + Firmware",
    client: "Agriculture",
    duration: "3 months",
    status: "Field trial",
    overview:
      "A network of low-power sensor nodes that measure soil moisture across a field and report wirelessly for data-driven irrigation.",
    challenge:
      "Readings were needed from many points spread far beyond WiFi range, with multi-season battery life and no per-node wiring.",
    solution:
      "STM32L0 nodes wake periodically, sample a capacitive probe, and transmit over LoRa to an ESP32 gateway that publishes to an MQTT dashboard with threshold alerts.",
    results: [
      "~2 km line-of-sight node-to-gateway range",
      "Projected 2-year battery life per node",
      "Single gateway aggregates the whole field",
    ],
    technologies: ["LoRa", "ESP32", "STM32L0", "MQTT", "C"],
    specs: [
      { label: "RF band", value: "915 MHz (sub-GHz)" },
      { label: "Range", value: "~2 km line-of-sight" },
      { label: "Topology", value: "Star → gateway" },
      { label: "Gateway", value: "ESP32 + SX1276" },
      { label: "Cloud", value: "MQTT broker + dashboard" },
      { label: "Battery", value: "2× AA, ~2 yr" },
    ],
    architecture:
      "Soil probe\n  |\nSTM32L0 node\n  |\nLoRa 915 MHz\n  |\nESP32 gateway\n  |\nMQTT\n  |\nDashboard",
    links: { github: "https://github.com/tcp-eng" },
  },
  {
    slug: "imx8-carrier-bringup",
    example: true,
    type: "D · Hardware Bring-Up & Validation",
    title: "i.MX8 SoM Carrier Board Bring-Up",
    blurb:
      "Bring-up and validation of a custom i.MX8 system-on-module carrier — from first power-on to a stable boot and validated interfaces.",
    tags: ["Bring-up", "i.MX8", "Validation", "JTAG"],
    highlights: [
      "Power sequencing verified against the datasheet",
      "Root-caused a DDR signal-integrity fault",
      "Validated USB, Ethernet, PCIe, and MIPI-CSI",
      "Delivered a repeatable bring-up checklist",
    ],
    role: "Hardware Bring-Up / Validation",
    client: "Product startup",
    duration: "4 weeks",
    status: "Completed",
    overview:
      "A new carrier board for an i.MX8M module would not boot reliably; the engagement took it from intermittent power-on to a validated, repeatable bring-up.",
    challenge:
      "First articles showed unstable boots and an intermittent memory fault with no clear root cause.",
    solution:
      "Systematic rail-by-rail power-sequence verification, scope/LA probing of DDR and clocks, and interface-by-interface validation isolated a layout-induced DDR SI issue and confirmed the fix.",
    results: [
      "Stable boot with all rails in spec",
      "DDR fault root-caused and corrected",
      "USB, GbE, PCIe, MIPI-CSI all validated",
    ],
    technologies: ["JTAG/SWD", "Oscilloscope", "Logic Analyzer", "Linux", "Python"],
    specs: [
      { label: "Target", value: "i.MX8M SoM carrier" },
      { label: "Interfaces", value: "USB, GbE, PCIe, MIPI-CSI" },
      { label: "Instruments", value: "MSO scope, logic analyzer, DMM" },
      { label: "Outcome", value: "Stable boot, rails in spec" },
    ],
    architecture:
      "Bench PSU\n  |\nCarrier + SoM\n  |\nJTAG / serial console\n  |\nScope + LA probes\n  |\nTest host (Python)",
  },
  {
    slug: "ip65-sensor-enclosure",
    example: true,
    type: "E · 3D Printing / Enclosure",
    title: "IP65 Weatherproof Sensor Enclosure",
    blurb:
      "Designed and 3D-printed a weatherproof, snap-fit enclosure for an outdoor LoRa sensor node, validated to IP65.",
    tags: ["Fusion 360", "FDM", "PETG", "Enclosure"],
    highlights: [
      "Gasketed snap-fit — no fasteners",
      "Integrated antenna pocket and cable gland",
      "UV-stable PETG, field-tested outdoors",
      "Three print iterations to final fit",
    ],
    role: "Mechanical / 3D Printing",
    client: "IoT product",
    duration: "2 weeks",
    status: "Production part",
    technologies: ["Fusion 360", "FDM", "PETG"],
    specs: [
      { label: "Process", value: "FDM" },
      { label: "Material", value: "PETG (UV-stable)" },
      { label: "Layer height", value: "0.2 mm" },
      { label: "Rating", value: "IP65 (gasketed)" },
      { label: "Tolerance", value: "±0.2 mm" },
      { label: "CAD", value: "Fusion 360" },
    ],
    gallery: [
      { title: "CAD model", caption: "Fusion 360 design", src: "/projects/enclosure-cad.jpg" },
      { title: "Printed part", caption: "Final print with PCB installed", src: "/projects/enclosure-printed.jpg" },
    ],
    downloads: [{ name: "Enclosure.step", href: "/projects/enclosure.step" }],
  },
  {
    slug: "rp2350-logic-analyzer-tool",
    example: true,
    type: "F · Instrumentation / Test Tool",
    title: "RP2350 16-Channel Logic Analyzer",
    blurb:
      "Open-source 16-channel logic analyzer on the RP2350 with USB high-speed streaming and Sigrok protocol decoding.",
    tags: ["RP2350", "USB HS", "Sigrok", "PIO"],
    highlights: [
      "PIO + DMA capture pipeline",
      "USB high-speed streaming to the host",
      "Works with Sigrok / PulseView",
      "Open-source hardware and firmware",
    ],
    role: "Firmware + Hardware",
    client: "Personal / Open-source",
    duration: "Ongoing",
    status: "Open-source",
    overview:
      "A low-cost logic analyzer that captures 16 channels at high speed and decodes common protocols in standard open-source tooling.",
    challenge:
      "Affordable analyzers are slow or shallow; the goal was sustained high-speed capture into PulseView without a custom client.",
    solution:
      "The RP2350's PIO blocks sample 16 channels into a DMA ring buffer that streams over USB high-speed, presented to the host as a Sigrok-compatible device.",
    results: [
      "Sustained multi-MS/s capture over USB HS",
      "Drop-in support in PulseView via Sigrok",
      "Published as open hardware + firmware",
    ],
    technologies: ["RP2350", "USB High-Speed", "Sigrok", "PIO", "C"],
    specs: [
      { label: "Channels", value: "16 digital" },
      { label: "Sample rate", value: "Up to 100 MS/s" },
      { label: "Host interface", value: "USB 2.0 High-Speed" },
      { label: "Capture", value: "PIO + DMA streaming" },
      { label: "Software", value: "Sigrok / PulseView" },
    ],
    architecture:
      "Probed signals\n  |\nRP2350 PIO\n  |\nDMA ring buffer\n  |\nUSB HS\n  |\nPulseView (Sigrok)",
    links: { github: "https://github.com/tcp-eng" },
  },
];
