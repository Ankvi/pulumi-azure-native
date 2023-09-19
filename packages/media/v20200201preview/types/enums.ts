export const MediaGraphRtspTransport = {
    /**
     * HTTP/HTTPS transport. This should be used when HTTP tunneling is desired.
     */
    Http: "Http",
    /**
     * TCP transport. This should be used when HTTP tunneling is not desired.
     */
    Tcp: "Tcp",
} as const;

export type MediaGraphRtspTransport = (typeof MediaGraphRtspTransport)[keyof typeof MediaGraphRtspTransport];
