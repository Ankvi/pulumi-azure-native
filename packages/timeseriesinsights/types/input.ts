import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
/**
 * The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data.
 */
export interface Gen2StorageConfigurationInputArgs {
    /**
     * The name of the storage account that will hold the environment's Gen2 data.
     */
    accountName: pulumi.Input<string>;
    /**
     * The value of the management key that grants the Time Series Insights service write access to the storage account. This property is not shown in environment responses.
     */
    managementKey: pulumi.Input<string>;
}

/**
 * An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
 */
export interface LocalTimestampArgs {
    /**
     * An enum that represents the format of the local timestamp property that needs to be set.
     */
    format?: pulumi.Input<string | enums.LocalTimestampFormat>;
    /**
     * An object that represents the offset information for the local timestamp format specified. Should not be specified for LocalTimestampFormat - Embedded.
     */
    timeZoneOffset?: pulumi.Input<LocalTimestampTimeZoneOffsetArgs>;
}

/**
 * An object that represents the offset information for the local timestamp format specified. Should not be specified for LocalTimestampFormat - Embedded.
 */
export interface LocalTimestampTimeZoneOffsetArgs {
    /**
     * The event property that will be contain the offset information to calculate the local timestamp. When the LocalTimestampFormat is Iana, the property name will contain the name of the column which contains IANA Timezone Name (eg: Americas/Los Angeles). When LocalTimestampFormat is Timespan, it contains the name of property which contains values representing the offset (eg: P1D or 1.00:00:00)
     */
    propertyName?: pulumi.Input<string>;
}

/**
 * A key property for the reference data set. A reference data set can have multiple key properties.
 */
export interface ReferenceDataSetKeyPropertyArgs {
    /**
     * The name of the key property.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of the key property.
     */
    type?: pulumi.Input<string | enums.ReferenceDataKeyPropertyType>;
}

/**
 * The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
 */
export interface SkuArgs {
    /**
     * The capacity of the sku. For Gen1 environments, this value can be changed to support scale out of environments after they have been created.
     */
    capacity: pulumi.Input<number>;
    /**
     * The name of this SKU.
     */
    name: pulumi.Input<string | enums.SkuName>;
}

/**
 * The structure of the property that a time series id can have. An environment can have multiple such properties.
 */
export interface TimeSeriesIdPropertyArgs {
    /**
     * The name of the property.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of the property.
     */
    type?: pulumi.Input<string | enums.PropertyType>;
}

/**
 * The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query.
 */
export interface WarmStoreConfigurationPropertiesArgs {
    /**
     * ISO8601 timespan specifying the number of days the environment's events will be available for query from the warm store.
     */
    dataRetention: pulumi.Input<string>;
}
