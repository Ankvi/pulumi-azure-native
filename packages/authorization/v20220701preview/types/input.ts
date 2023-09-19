import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The resource selector to filter policies by resource properties.
     */
    export interface ResourceSelectorArgs {
        /**
         * The name of the resource selector.
         */
        name?: pulumi.Input<string>;
        /**
         * The list of the selector expressions.
         */
        selectors?: pulumi.Input<pulumi.Input<SelectorArgs>[]>;
    }

    /**
     * The selector expression.
     */
    export interface SelectorArgs {
        /**
         * The list of values to filter in.
         */
        in?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The selector kind.
         */
        kind?: pulumi.Input<string | enums.SelectorKind>;
        /**
         * The list of values to filter out.
         */
        notIn?: pulumi.Input<pulumi.Input<string>[]>;
    }
