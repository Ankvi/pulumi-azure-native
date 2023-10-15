import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Connectivity related configuration required by arc server.
     */
    export interface ArcConnectivityPropertiesArgs {
        /**
         * True indicates ARC connectivity is enabled
         */
        enabled?: pulumi.Input<boolean>;
        /**
         * Service configurations associated with the connectivity resource. They are only processed by the server if 'enabled' property is set to 'true'.
         */
        serviceConfigurations?: pulumi.Input<pulumi.Input<ServiceConfigurationArgs>[]>;
    }

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
     * Service configuration details
     */
    export interface ServiceConfigurationArgs {
        /**
         * The port on which service is enabled.
         */
        port: pulumi.Input<number>;
        /**
         * Name of the service.
         */
        serviceName: pulumi.Input<string | enums.ServiceName>;
    }

    /**
     * Software Assurance properties of the cluster.
     */
    export interface SoftwareAssurancePropertiesArgs {
        /**
         * Customer Intent for Software Assurance Benefit.
         */
        softwareAssuranceIntent?: pulumi.Input<string | enums.SoftwareAssuranceIntent>;
    }

    /**
     * Progress representation of the update run steps.
     */
    export interface StepArgs {
        /**
         * More detailed description of the step.
         */
        description?: pulumi.Input<string>;
        /**
         * When the step reached a terminal state.
         */
        endTimeUtc?: pulumi.Input<string>;
        /**
         * Error message, specified if the step is in a failed state.
         */
        errorMessage?: pulumi.Input<string>;
        /**
         * Completion time of this step or the last completed sub-step.
         */
        lastUpdatedTimeUtc?: pulumi.Input<string>;
        /**
         * Name of the step.
         */
        name?: pulumi.Input<string>;
        /**
         * When the step started, or empty if it has not started executing.
         */
        startTimeUtc?: pulumi.Input<string>;
        /**
         * Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'.
         */
        status?: pulumi.Input<string>;
        /**
         * Recursive model for child steps of this step.
         */
        steps?: pulumi.Input<pulumi.Input<StepArgs>[]>;
    }

    /**
     * If update State is HasPrerequisite, this property contains an array of objects describing prerequisite updates before installing this update. Otherwise, it is empty.
     */
    export interface UpdatePrerequisiteArgs {
        /**
         * Friendly name of the prerequisite.
         */
        packageName?: pulumi.Input<string>;
        /**
         * Updatable component type.
         */
        updateType?: pulumi.Input<string>;
        /**
         * Version of the prerequisite.
         */
        version?: pulumi.Input<string>;
    }
