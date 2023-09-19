import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The API entity reference.
     */
    export interface ApiEntityReferenceArgs {
        /**
         * The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/...
         */
        id?: pulumi.Input<string>;
    }

    /**
     * Instance view status.
     */
    export interface InstanceViewStatusArgs {
        /**
         * The status code.
         */
        code?: pulumi.Input<string>;
        /**
         * The short localizable label for the status.
         */
        displayStatus?: pulumi.Input<string>;
        /**
         * The level code.
         */
        level?: pulumi.Input<enums.StatusLevelTypes>;
        /**
         * The detailed status message, including for alerts and error messages.
         */
        message?: pulumi.Input<string>;
        /**
         * The time of the status.
         */
        time?: pulumi.Input<string>;
    }

    /**
     * The instance view of a virtual machine extension.
     */
    export interface VirtualMachineExtensionInstanceViewArgs {
        /**
         * The virtual machine extension name.
         */
        name?: pulumi.Input<string>;
        /**
         * The resource status information.
         */
        statuses?: pulumi.Input<pulumi.Input<InstanceViewStatusArgs>[]>;
        /**
         * The resource status information.
         */
        substatuses?: pulumi.Input<pulumi.Input<InstanceViewStatusArgs>[]>;
        /**
         * Specifies the type of the extension; an example is "CustomScriptExtension".
         */
        type?: pulumi.Input<string>;
        /**
         * Specifies the version of the script handler.
         */
        typeHandlerVersion?: pulumi.Input<string>;
    }
