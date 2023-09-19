import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Desired properties of the cluster.
     */
    export interface ClusterDesiredPropertiesArgs {
        /**
         * Desired level of diagnostic data emitted by the cluster.
         */
        diagnosticLevel?: pulumi.Input<string | enums.DiagnosticLevel>;
        /**
         * Desired state of Windows Server Subscription.
         */
        windowsServerSubscription?: pulumi.Input<string | enums.WindowsServerSubscription>;
    }
