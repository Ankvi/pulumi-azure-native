export const ProbeProtocol = {
    Tcp: "tcp",
    Http: "http",
    Https: "https",
} as const;

/**
 * the reference to the load balancer probe used by the load balancing rule.
 */
export type ProbeProtocol = (typeof ProbeProtocol)[keyof typeof ProbeProtocol];

export const Protocol = {
    Tcp: "tcp",
    Udp: "udp",
} as const;

/**
 * The reference to the transport protocol used by the load balancing rule.
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];
