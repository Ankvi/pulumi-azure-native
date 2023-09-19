import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties of an Operation.
     */
    export interface OperationsDefinitionArgs {
        actionType?: pulumi.Input<string>;
        /**
         * Display information of the operation.
         */
        display: pulumi.Input<OperationsDefinitionDisplayArgs>;
        /**
         * Indicates whether the operation applies to data-plane.
         */
        isDataAction?: pulumi.Input<boolean>;
        /**
         * Name of the operation.
         */
        name: pulumi.Input<string>;
        origin?: pulumi.Input<string>;
        properties?: any;
    }

    /**
     * Display information of the operation.
     */
    export interface OperationsDefinitionDisplayArgs {
        description: pulumi.Input<string>;
        operation: pulumi.Input<string>;
        provider: pulumi.Input<string>;
        resource: pulumi.Input<string>;
    }
