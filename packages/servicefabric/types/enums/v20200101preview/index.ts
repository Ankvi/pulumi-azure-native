// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


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
