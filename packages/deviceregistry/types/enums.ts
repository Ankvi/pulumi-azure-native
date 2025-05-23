export const AuthenticationMethod = {
    /**
     * The user authentication method is anonymous.
     */
    Anonymous: "Anonymous",
    /**
     * The user authentication method is an x509 certificate.
     */
    Certificate: "Certificate",
    /**
     * The user authentication method is a username and password.
     */
    UsernamePassword: "UsernamePassword",
} as const;

/**
 * The method to authenticate the user of the client at the server.
 */
export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];

export const DataPointObservabilityMode = {
    /**
     * No mapping to OpenTelemetry.
     */
    None: "None",
    /**
     * Map as counter to OpenTelemetry.
     */
    Counter: "Counter",
    /**
     * Map as gauge to OpenTelemetry.
     */
    Gauge: "Gauge",
    /**
     * Map as histogram to OpenTelemetry.
     */
    Histogram: "Histogram",
    /**
     * Map as log to OpenTelemetry.
     */
    Log: "Log",
} as const;

/**
 * An indication of how the data point should be mapped to OpenTelemetry.
 */
export type DataPointObservabilityMode = (typeof DataPointObservabilityMode)[keyof typeof DataPointObservabilityMode];

export const EventObservabilityMode = {
    /**
     * No mapping to OpenTelemetry.
     */
    None: "None",
    /**
     * Map as log to OpenTelemetry.
     */
    Log: "Log",
} as const;

/**
 * An indication of how the event should be mapped to OpenTelemetry.
 */
export type EventObservabilityMode = (typeof EventObservabilityMode)[keyof typeof EventObservabilityMode];

export const Format = {
    /**
     * JSON Schema version draft 7 format
     */
    JsonSchema_draft7: "JsonSchema/draft-07",
    /**
     * Delta format
     */
    Delta_1_0: "Delta/1.0",
} as const;

/**
 * Format of the schema.
 */
export type Format = (typeof Format)[keyof typeof Format];

export const SchemaType = {
    /**
     * Message Schema schema type
     */
    MessageSchema: "MessageSchema",
} as const;

/**
 * Type of the schema.
 */
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];

export const SystemAssignedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * Type of managed service identity (either system assigned, or none).
 */
export type SystemAssignedServiceIdentityType = (typeof SystemAssignedServiceIdentityType)[keyof typeof SystemAssignedServiceIdentityType];

export const TopicRetainType = {
    /**
     * Retain the messages.
     */
    Keep: "Keep",
    /**
     * Never retain messages.
     */
    Never: "Never",
} as const;

/**
 * When set to 'Keep', messages published to an MQTT broker will have the retain flag set. Default: 'Never'.
 */
export type TopicRetainType = (typeof TopicRetainType)[keyof typeof TopicRetainType];
