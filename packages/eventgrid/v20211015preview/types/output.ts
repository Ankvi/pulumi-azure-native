import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * BoolEquals Advanced Filter.
     */
    export interface BoolEqualsAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'BoolEquals'.
         */
        operatorType: "BoolEquals";
        /**
         * The boolean filter value.
         */
        value?: boolean;
    }

    /**
     * Properties of the destination of an event channel.
     */
    export interface EventChannelDestinationResponse {
        /**
         * Azure subscription ID of the customer creating the event channel. The partner topic
         * associated with the event channel will be created under this Azure subscription.
         */
        azureSubscriptionId?: string;
        /**
         * Name of the partner topic associated with the event channel.
         */
        partnerTopicName?: string;
        /**
         * Azure Resource Group of the customer creating the event channel. The partner topic
         * associated with the event channel will be created under this resource group.
         */
        resourceGroup?: string;
    }

    /**
     * Filter for the Event Channel.
     */
    export interface EventChannelFilterResponse {
        /**
         * An array of advanced filters that are used for filtering event channels.
         */
        advancedFilters?: (BoolEqualsAdvancedFilterResponse | IsNotNullAdvancedFilterResponse | IsNullOrUndefinedAdvancedFilterResponse | NumberGreaterThanAdvancedFilterResponse | NumberGreaterThanOrEqualsAdvancedFilterResponse | NumberInAdvancedFilterResponse | NumberInRangeAdvancedFilterResponse | NumberLessThanAdvancedFilterResponse | NumberLessThanOrEqualsAdvancedFilterResponse | NumberNotInAdvancedFilterResponse | NumberNotInRangeAdvancedFilterResponse | StringBeginsWithAdvancedFilterResponse | StringContainsAdvancedFilterResponse | StringEndsWithAdvancedFilterResponse | StringInAdvancedFilterResponse | StringNotBeginsWithAdvancedFilterResponse | StringNotContainsAdvancedFilterResponse | StringNotEndsWithAdvancedFilterResponse | StringNotInAdvancedFilterResponse)[];
        /**
         * Allows advanced filters to be evaluated against an array of values instead of expecting a singular value. The default value is either false or null.
         */
        enableAdvancedFilteringOnArrays?: boolean;
    }
    /**
     * eventChannelFilterResponseProvideDefaults sets the appropriate defaults for EventChannelFilterResponse
     */
    export function eventChannelFilterResponseProvideDefaults(val: EventChannelFilterResponse): EventChannelFilterResponse {
        return {
            ...val,
            enableAdvancedFilteringOnArrays: (val.enableAdvancedFilteringOnArrays) ?? false,
        };
    }

    /**
     * Properties of the source of an event channel.
     */
    export interface EventChannelSourceResponse {
        /**
         * The identifier of the resource that's the source of the events.
         * This represents a unique resource in the partner's resource model.
         */
        source?: string;
    }

    /**
     * IsNotNull Advanced Filter.
     */
    export interface IsNotNullAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'IsNotNull'.
         */
        operatorType: "IsNotNull";
    }

    /**
     * IsNullOrUndefined Advanced Filter.
     */
    export interface IsNullOrUndefinedAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'IsNullOrUndefined'.
         */
        operatorType: "IsNullOrUndefined";
    }

    /**
     * NumberGreaterThan Advanced Filter.
     */
    export interface NumberGreaterThanAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberGreaterThan'.
         */
        operatorType: "NumberGreaterThan";
        /**
         * The filter value.
         */
        value?: number;
    }

    /**
     * NumberGreaterThanOrEquals Advanced Filter.
     */
    export interface NumberGreaterThanOrEqualsAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberGreaterThanOrEquals'.
         */
        operatorType: "NumberGreaterThanOrEquals";
        /**
         * The filter value.
         */
        value?: number;
    }

    /**
     * NumberIn Advanced Filter.
     */
    export interface NumberInAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberIn'.
         */
        operatorType: "NumberIn";
        /**
         * The set of filter values.
         */
        values?: number[];
    }

    /**
     * NumberInRange Advanced Filter.
     */
    export interface NumberInRangeAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberInRange'.
         */
        operatorType: "NumberInRange";
        /**
         * The set of filter values.
         */
        values?: number[][];
    }

    /**
     * NumberLessThan Advanced Filter.
     */
    export interface NumberLessThanAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberLessThan'.
         */
        operatorType: "NumberLessThan";
        /**
         * The filter value.
         */
        value?: number;
    }

    /**
     * NumberLessThanOrEquals Advanced Filter.
     */
    export interface NumberLessThanOrEqualsAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberLessThanOrEquals'.
         */
        operatorType: "NumberLessThanOrEquals";
        /**
         * The filter value.
         */
        value?: number;
    }

    /**
     * NumberNotIn Advanced Filter.
     */
    export interface NumberNotInAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberNotIn'.
         */
        operatorType: "NumberNotIn";
        /**
         * The set of filter values.
         */
        values?: number[];
    }

    /**
     * NumberNotInRange Advanced Filter.
     */
    export interface NumberNotInRangeAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberNotInRange'.
         */
        operatorType: "NumberNotInRange";
        /**
         * The set of filter values.
         */
        values?: number[][];
    }

    /**
     * StringBeginsWith Advanced Filter.
     */
    export interface StringBeginsWithAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringBeginsWith'.
         */
        operatorType: "StringBeginsWith";
        /**
         * The set of filter values.
         */
        values?: string[];
    }

    /**
     * StringContains Advanced Filter.
     */
    export interface StringContainsAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringContains'.
         */
        operatorType: "StringContains";
        /**
         * The set of filter values.
         */
        values?: string[];
    }

    /**
     * StringEndsWith Advanced Filter.
     */
    export interface StringEndsWithAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringEndsWith'.
         */
        operatorType: "StringEndsWith";
        /**
         * The set of filter values.
         */
        values?: string[];
    }

    /**
     * StringIn Advanced Filter.
     */
    export interface StringInAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringIn'.
         */
        operatorType: "StringIn";
        /**
         * The set of filter values.
         */
        values?: string[];
    }

    /**
     * StringNotBeginsWith Advanced Filter.
     */
    export interface StringNotBeginsWithAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotBeginsWith'.
         */
        operatorType: "StringNotBeginsWith";
        /**
         * The set of filter values.
         */
        values?: string[];
    }

    /**
     * StringNotContains Advanced Filter.
     */
    export interface StringNotContainsAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotContains'.
         */
        operatorType: "StringNotContains";
        /**
         * The set of filter values.
         */
        values?: string[];
    }

    /**
     * StringNotEndsWith Advanced Filter.
     */
    export interface StringNotEndsWithAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotEndsWith'.
         */
        operatorType: "StringNotEndsWith";
        /**
         * The set of filter values.
         */
        values?: string[];
    }

    /**
     * StringNotIn Advanced Filter.
     */
    export interface StringNotInAdvancedFilterResponse {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: string;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotIn'.
         */
        operatorType: "StringNotIn";
        /**
         * The set of filter values.
         */
        values?: string[];
    }

    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    export interface SystemDataResponse {
        /**
         * The timestamp of resource creation (UTC).
         */
        createdAt?: string;
        /**
         * The identity that created the resource.
         */
        createdBy?: string;
        /**
         * The type of identity that created the resource.
         */
        createdByType?: string;
        /**
         * The timestamp of resource last modification (UTC)
         */
        lastModifiedAt?: string;
        /**
         * The identity that last modified the resource.
         */
        lastModifiedBy?: string;
        /**
         * The type of identity that last modified the resource.
         */
        lastModifiedByType?: string;
    }
