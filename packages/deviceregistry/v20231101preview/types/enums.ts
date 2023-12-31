export const DataPointsObservabilityMode = {
    None: "none",
    Counter: "counter",
    Gauge: "gauge",
    Histogram: "histogram",
    Log: "log",
} as const;

/**
 * An indication of how the data point should be mapped to OpenTelemetry.
 */
export type DataPointsObservabilityMode = (typeof DataPointsObservabilityMode)[keyof typeof DataPointsObservabilityMode];

export const EventsObservabilityMode = {
    None: "none",
    Log: "log",
} as const;

/**
 * An indication of how the event should be mapped to OpenTelemetry.
 */
export type EventsObservabilityMode = (typeof EventsObservabilityMode)[keyof typeof EventsObservabilityMode];

export const Mode = {
    Anonymous: "Anonymous",
    Certificate: "Certificate",
    UsernamePassword: "UsernamePassword",
} as const;

/**
 * Defines the mode to authenticate the user of the client at the server.
 */
export type Mode = (typeof Mode)[keyof typeof Mode];
