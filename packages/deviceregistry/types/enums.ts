export const DataPointsObservabilityMode = {
    /**
     * No mapping to OpenTelemetry.
     */
    None: "none",
    /**
     * Map as counter to OpenTelemetry.
     */
    Counter: "counter",
    /**
     * Map as gauge to OpenTelemetry.
     */
    Gauge: "gauge",
    /**
     * Map as histogram to OpenTelemetry.
     */
    Histogram: "histogram",
    /**
     * Map as log to OpenTelemetry.
     */
    Log: "log",
} as const;

/**
 * An indication of how the data point should be mapped to OpenTelemetry.
 */
export type DataPointsObservabilityMode = (typeof DataPointsObservabilityMode)[keyof typeof DataPointsObservabilityMode];

export const EventsObservabilityMode = {
    /**
     * No mapping to OpenTelemetry.
     */
    None: "none",
    /**
     * Map as log to OpenTelemetry.
     */
    Log: "log",
} as const;

/**
 * An indication of how the event should be mapped to OpenTelemetry.
 */
export type EventsObservabilityMode = (typeof EventsObservabilityMode)[keyof typeof EventsObservabilityMode];

export const UserAuthenticationMode = {
    /**
     * The user authentication mode is anonymous.
     */
    Anonymous: "Anonymous",
    /**
     * The user authentication mode is an x509 certificate.
     */
    Certificate: "Certificate",
    /**
     * The user authentication mode is a username and password.
     */
    UsernamePassword: "UsernamePassword",
} as const;

/**
 * Defines the mode to authenticate the user of the client at the server.
 */
export type UserAuthenticationMode = (typeof UserAuthenticationMode)[keyof typeof UserAuthenticationMode];
