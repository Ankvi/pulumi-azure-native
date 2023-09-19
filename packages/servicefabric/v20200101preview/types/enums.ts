export const ProbeProtocol = {
    Tcp: "tcp",
    Http: "http",
    Https: "https",
} as const;

export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const Protocol = {
    Tcp: "tcp",
    Udp: "udp",
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];
