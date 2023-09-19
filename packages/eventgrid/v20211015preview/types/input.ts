import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * BoolEquals Advanced Filter.
     */
    export interface BoolEqualsAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'BoolEquals'.
         */
        operatorType: pulumi.Input<"BoolEquals">;
        /**
         * The boolean filter value.
         */
        value?: pulumi.Input<boolean>;
    }

    /**
     * Properties of the destination of an event channel.
     */
    export interface EventChannelDestinationArgs {
        /**
         * Azure subscription ID of the customer creating the event channel. The partner topic
         * associated with the event channel will be created under this Azure subscription.
         */
        azureSubscriptionId?: pulumi.Input<string>;
        /**
         * Name of the partner topic associated with the event channel.
         */
        partnerTopicName?: pulumi.Input<string>;
        /**
         * Azure Resource Group of the customer creating the event channel. The partner topic
         * associated with the event channel will be created under this resource group.
         */
        resourceGroup?: pulumi.Input<string>;
    }

    /**
     * Filter for the Event Channel.
     */
    export interface EventChannelFilterArgs {
        /**
         * An array of advanced filters that are used for filtering event channels.
         */
        advancedFilters?: pulumi.Input<pulumi.Input<BoolEqualsAdvancedFilterArgs | IsNotNullAdvancedFilterArgs | IsNullOrUndefinedAdvancedFilterArgs | NumberGreaterThanAdvancedFilterArgs | NumberGreaterThanOrEqualsAdvancedFilterArgs | NumberInAdvancedFilterArgs | NumberInRangeAdvancedFilterArgs | NumberLessThanAdvancedFilterArgs | NumberLessThanOrEqualsAdvancedFilterArgs | NumberNotInAdvancedFilterArgs | NumberNotInRangeAdvancedFilterArgs | StringBeginsWithAdvancedFilterArgs | StringContainsAdvancedFilterArgs | StringEndsWithAdvancedFilterArgs | StringInAdvancedFilterArgs | StringNotBeginsWithAdvancedFilterArgs | StringNotContainsAdvancedFilterArgs | StringNotEndsWithAdvancedFilterArgs | StringNotInAdvancedFilterArgs>[]>;
        /**
         * Allows advanced filters to be evaluated against an array of values instead of expecting a singular value. The default value is either false or null.
         */
        enableAdvancedFilteringOnArrays?: pulumi.Input<boolean>;
    }
    /**
     * eventChannelFilterArgsProvideDefaults sets the appropriate defaults for EventChannelFilterArgs
     */
    export function eventChannelFilterArgsProvideDefaults(val: EventChannelFilterArgs): EventChannelFilterArgs {
        return {
            ...val,
            enableAdvancedFilteringOnArrays: (val.enableAdvancedFilteringOnArrays) ?? false,
        };
    }

    /**
     * Properties of the source of an event channel.
     */
    export interface EventChannelSourceArgs {
        /**
         * The identifier of the resource that's the source of the events.
         * This represents a unique resource in the partner's resource model.
         */
        source?: pulumi.Input<string>;
    }

    /**
     * IsNotNull Advanced Filter.
     */
    export interface IsNotNullAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'IsNotNull'.
         */
        operatorType: pulumi.Input<"IsNotNull">;
    }

    /**
     * IsNullOrUndefined Advanced Filter.
     */
    export interface IsNullOrUndefinedAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'IsNullOrUndefined'.
         */
        operatorType: pulumi.Input<"IsNullOrUndefined">;
    }

    /**
     * NumberGreaterThan Advanced Filter.
     */
    export interface NumberGreaterThanAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberGreaterThan'.
         */
        operatorType: pulumi.Input<"NumberGreaterThan">;
        /**
         * The filter value.
         */
        value?: pulumi.Input<number>;
    }

    /**
     * NumberGreaterThanOrEquals Advanced Filter.
     */
    export interface NumberGreaterThanOrEqualsAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberGreaterThanOrEquals'.
         */
        operatorType: pulumi.Input<"NumberGreaterThanOrEquals">;
        /**
         * The filter value.
         */
        value?: pulumi.Input<number>;
    }

    /**
     * NumberIn Advanced Filter.
     */
    export interface NumberInAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberIn'.
         */
        operatorType: pulumi.Input<"NumberIn">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<number>[]>;
    }

    /**
     * NumberInRange Advanced Filter.
     */
    export interface NumberInRangeAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberInRange'.
         */
        operatorType: pulumi.Input<"NumberInRange">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<pulumi.Input<number>[]>[]>;
    }

    /**
     * NumberLessThan Advanced Filter.
     */
    export interface NumberLessThanAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberLessThan'.
         */
        operatorType: pulumi.Input<"NumberLessThan">;
        /**
         * The filter value.
         */
        value?: pulumi.Input<number>;
    }

    /**
     * NumberLessThanOrEquals Advanced Filter.
     */
    export interface NumberLessThanOrEqualsAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberLessThanOrEquals'.
         */
        operatorType: pulumi.Input<"NumberLessThanOrEquals">;
        /**
         * The filter value.
         */
        value?: pulumi.Input<number>;
    }

    /**
     * NumberNotIn Advanced Filter.
     */
    export interface NumberNotInAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberNotIn'.
         */
        operatorType: pulumi.Input<"NumberNotIn">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<number>[]>;
    }

    /**
     * NumberNotInRange Advanced Filter.
     */
    export interface NumberNotInRangeAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'NumberNotInRange'.
         */
        operatorType: pulumi.Input<"NumberNotInRange">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<pulumi.Input<number>[]>[]>;
    }

    /**
     * StringBeginsWith Advanced Filter.
     */
    export interface StringBeginsWithAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringBeginsWith'.
         */
        operatorType: pulumi.Input<"StringBeginsWith">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringContains Advanced Filter.
     */
    export interface StringContainsAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringContains'.
         */
        operatorType: pulumi.Input<"StringContains">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringEndsWith Advanced Filter.
     */
    export interface StringEndsWithAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringEndsWith'.
         */
        operatorType: pulumi.Input<"StringEndsWith">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringIn Advanced Filter.
     */
    export interface StringInAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringIn'.
         */
        operatorType: pulumi.Input<"StringIn">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringNotBeginsWith Advanced Filter.
     */
    export interface StringNotBeginsWithAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotBeginsWith'.
         */
        operatorType: pulumi.Input<"StringNotBeginsWith">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringNotContains Advanced Filter.
     */
    export interface StringNotContainsAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotContains'.
         */
        operatorType: pulumi.Input<"StringNotContains">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringNotEndsWith Advanced Filter.
     */
    export interface StringNotEndsWithAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotEndsWith'.
         */
        operatorType: pulumi.Input<"StringNotEndsWith">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }

    /**
     * StringNotIn Advanced Filter.
     */
    export interface StringNotInAdvancedFilterArgs {
        /**
         * The field/property in the event based on which you want to filter.
         */
        key?: pulumi.Input<string>;
        /**
         * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
         * Expected value is 'StringNotIn'.
         */
        operatorType: pulumi.Input<"StringNotIn">;
        /**
         * The set of filter values.
         */
        values?: pulumi.Input<pulumi.Input<string>[]>;
    }
