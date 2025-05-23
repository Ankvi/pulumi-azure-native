import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * An object that contains the details about an environment's state.
 */
export interface EnvironmentStateDetailsResponse {
    /**
     * Contains the code that represents the reason of an environment being in a particular state. Can be used to programmatically handle specific cases.
     */
    code?: string;
    /**
     * A message that describes the state in detail.
     */
    message?: string;
}

/**
 * An object that represents the status of the environment, and its internal state in the Time Series Insights service.
 */
export interface EnvironmentStatusResponse {
    /**
     * An object that represents the status of ingress on an environment.
     */
    ingress: IngressEnvironmentStatusResponse;
    /**
     * An object that represents the status of warm storage on an environment.
     */
    warmStorage: WarmStorageEnvironmentStatusResponse;
}

/**
 * The storage configuration provides the non-secret connection details about the customer storage account that is used to store the environment's data.
 */
export interface Gen2StorageConfigurationOutputResponse {
    /**
     * The name of the storage account that will hold the environment's Gen2 data.
     */
    accountName: string;
}

/**
 * An object that represents the status of ingress on an environment.
 */
export interface IngressEnvironmentStatusResponse {
    /**
     * This string represents the state of ingress operations on an environment. It can be "Disabled", "Ready", "Running", "Paused" or "Unknown"
     */
    state?: string;
    /**
     * An object that contains the details about an environment's state.
     */
    stateDetails: EnvironmentStateDetailsResponse;
}

/**
 * An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
 */
export interface LocalTimestampResponse {
    /**
     * An enum that represents the format of the local timestamp property that needs to be set.
     */
    format?: string;
    /**
     * An object that represents the offset information for the local timestamp format specified. Should not be specified for LocalTimestampFormat - Embedded.
     */
    timeZoneOffset?: LocalTimestampResponseTimeZoneOffset;
}

/**
 * An object that represents the offset information for the local timestamp format specified. Should not be specified for LocalTimestampFormat - Embedded.
 */
export interface LocalTimestampResponseTimeZoneOffset {
    /**
     * The event property that will be contain the offset information to calculate the local timestamp. When the LocalTimestampFormat is Iana, the property name will contain the name of the column which contains IANA Timezone Name (eg: Americas/Los Angeles). When LocalTimestampFormat is Timespan, it contains the name of property which contains values representing the offset (eg: P1D or 1.00:00:00)
     */
    propertyName?: string;
}

/**
 * A key property for the reference data set. A reference data set can have multiple key properties.
 */
export interface ReferenceDataSetKeyPropertyResponse {
    /**
     * The name of the key property.
     */
    name?: string;
    /**
     * The type of the key property.
     */
    type?: string;
}

/**
 * The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
 */
export interface SkuResponse {
    /**
     * The capacity of the sku. For Gen1 environments, this value can be changed to support scale out of environments after they have been created.
     */
    capacity: number;
    /**
     * The name of this SKU.
     */
    name: string;
}

/**
 * The structure of the property that a time series id can have. An environment can have multiple such properties.
 */
export interface TimeSeriesIdPropertyResponse {
    /**
     * The name of the property.
     */
    name?: string;
    /**
     * The type of the property.
     */
    type?: string;
}

/**
 * An object that represents the status of warm storage on an environment.
 */
export interface WarmStorageEnvironmentStatusResponse {
    /**
     * A value that represents the number of properties used by the environment for S1/S2 SKU and number of properties used by Warm Store for PAYG SKU
     */
    currentCount?: number;
    /**
     * A value that represents the maximum number of properties used allowed by the environment for S1/S2 SKU and maximum number of properties allowed by Warm Store for PAYG SKU.
     */
    maxCount?: number;
    /**
     * This string represents the state of warm storage properties usage. It can be "Ok", "Error", "Unknown".
     */
    state?: string;
}

/**
 * The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query.
 */
export interface WarmStoreConfigurationPropertiesResponse {
    /**
     * ISO8601 timespan specifying the number of days the environment's events will be available for query from the warm store.
     */
    dataRetention: string;
}
