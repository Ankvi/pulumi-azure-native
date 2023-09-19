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

    /**
     * Software Assurance properties of the cluster.
     */
    export interface SoftwareAssurancePropertiesArgs {
        /**
         * Customer Intent for Software Assurance Benefit.
         */
        softwareAssuranceIntent?: pulumi.Input<string | enums.SoftwareAssuranceIntent>;
        /**
         * Status of the Software Assurance for the cluster.
         */
        softwareAssuranceStatus?: pulumi.Input<string | enums.SoftwareAssuranceStatus>;
    }
