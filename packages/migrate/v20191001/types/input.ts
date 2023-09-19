import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Properties of an assessment.
     */
    export interface AssessmentPropertiesArgs {
        /**
         * Storage type selected for this disk.
         */
        azureDiskType: pulumi.Input<string | enums.AzureDiskType>;
        /**
         * AHUB discount on windows virtual machines.
         */
        azureHybridUseBenefit: pulumi.Input<string | enums.AzureHybridUseBenefit>;
        /**
         * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
         */
        azureLocation: pulumi.Input<string | enums.AzureLocation>;
        /**
         * Offer code according to which cost estimation is done.
         */
        azureOfferCode: pulumi.Input<string | enums.AzureOfferCode>;
        /**
         * Pricing tier for Size evaluation.
         */
        azurePricingTier: pulumi.Input<string | enums.AzurePricingTier>;
        /**
         * Storage Redundancy type offered by Azure.
         */
        azureStorageRedundancy: pulumi.Input<string | enums.AzureStorageRedundancy>;
        /**
         * List of azure VM families.
         */
        azureVmFamilies: pulumi.Input<pulumi.Input<string | enums.AzureVmFamily>[]>;
        /**
         * Currency to report prices in.
         */
        currency: pulumi.Input<string | enums.Currency>;
        /**
         * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
         */
        discountPercentage: pulumi.Input<number>;
        /**
         * Percentile of performance data used to recommend Azure size.
         */
        percentile: pulumi.Input<string | enums.Percentile>;
        /**
         * Azure reserved instance.
         */
        reservedInstance: pulumi.Input<string | enums.ReservedInstance>;
        /**
         * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
         */
        scalingFactor: pulumi.Input<number>;
        /**
         * Assessment sizing criterion.
         */
        sizingCriterion: pulumi.Input<string | enums.AssessmentSizingCriterion>;
        /**
         * User configurable setting that describes the status of the assessment.
         */
        stage: pulumi.Input<string | enums.AssessmentStage>;
        /**
         * Time range of performance data used to recommend a size.
         */
        timeRange: pulumi.Input<string | enums.TimeRange>;
        /**
         * Specify the duration for which the VMs are up in the on-premises environment.
         */
        vmUptime: pulumi.Input<VmUptimeArgs>;
    }

    export interface CollectorAgentPropertiesArgs {
        spnDetails?: pulumi.Input<CollectorBodyAgentSpnPropertiesArgs>;
    }

    export interface CollectorBodyAgentSpnPropertiesArgs {
        /**
         * Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        applicationId?: pulumi.Input<string>;
        /**
         * Intended audience for the service principal.
         */
        audience?: pulumi.Input<string>;
        /**
         * AAD Authority URL which was used to request the token for the service principal.
         */
        authority?: pulumi.Input<string>;
        /**
         * Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        objectId?: pulumi.Input<string>;
        /**
         * Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
         */
        tenantId?: pulumi.Input<string>;
    }

    export interface CollectorPropertiesArgs {
        agentProperties?: pulumi.Input<CollectorAgentPropertiesArgs>;
        /**
         * The ARM id of the discovery service site.
         */
        discoverySiteId?: pulumi.Input<string>;
    }

    /**
     * Properties of group resource.
     */
    export interface GroupPropertiesArgs {
        /**
         * The type of group.
         */
        groupType?: pulumi.Input<string>;
    }

    export interface ImportCollectorPropertiesArgs {
        discoverySiteId?: pulumi.Input<string>;
    }

    /**
     * Private endpoint connection properties.
     */
    export interface PrivateEndpointConnectionPropertiesArgs {
        /**
         * State of the private endpoint connection.
         */
        privateLinkServiceConnectionState?: pulumi.Input<PrivateLinkServiceConnectionStateArgs>;
    }

    /**
     * State of a private endpoint connection.
     */
    export interface PrivateLinkServiceConnectionStateArgs {
        /**
         * Actions required on the private endpoint connection.
         */
        actionsRequired?: pulumi.Input<string>;
        /**
         * Description of the private endpoint connection.
         */
        description?: pulumi.Input<string>;
        /**
         * Connection status of the private endpoint connection.
         */
        status?: pulumi.Input<string>;
    }

    /**
     * Properties of a project.
     */
    export interface ProjectPropertiesArgs {
        /**
         * Assessment solution ARM id tracked by Microsoft.Migrate/migrateProjects.
         */
        assessmentSolutionId?: pulumi.Input<string>;
        /**
         * The ARM id of the storage account used for interactions when public access is disabled.
         */
        customerStorageAccountArmId?: pulumi.Input<string>;
        /**
         * The ARM id of service map workspace created by customer.
         */
        customerWorkspaceId?: pulumi.Input<string>;
        /**
         * Location of service map workspace created by customer.
         */
        customerWorkspaceLocation?: pulumi.Input<string>;
        /**
         * Assessment project status.
         */
        projectStatus?: pulumi.Input<string | enums.ProjectStatus>;
        /**
         * This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
         */
        publicNetworkAccess?: pulumi.Input<string>;
    }

    export interface VmUptimeArgs {
        /**
         * Number of days in a month for VM uptime.
         */
        daysPerMonth?: pulumi.Input<number>;
        /**
         * Number of hours per day for VM uptime.
         */
        hoursPerDay?: pulumi.Input<number>;
    }
