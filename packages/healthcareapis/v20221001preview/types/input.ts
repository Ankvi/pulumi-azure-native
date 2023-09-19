import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The Data Lake data destination for Analytics Connector.
     */
    export interface AnalyticsConnectorDataLakeDataDestinationArgs {
        /**
         * The name for the Data Lake.
         */
        dataLakeName: pulumi.Input<string>;
        /**
         * Name of data destination.
         */
        name?: pulumi.Input<string>;
        /**
         * Type of data destination.
         * Expected value is 'datalake'.
         */
        type: pulumi.Input<"datalake">;
    }

    /**
     * The FHIR service data source for Analytics Connector.
     */
    export interface AnalyticsConnectorFhirServiceDataSourceArgs {
        /**
         * The kind of FHIR Service.
         */
        kind: pulumi.Input<string | enums.FhirServiceVersion>;
        /**
         * Type of data source.
         * Expected value is 'fhirservice'.
         */
        type: pulumi.Input<"fhirservice">;
        /**
         * The URL of FHIR service.
         */
        url: pulumi.Input<string>;
    }

    /**
     * FHIR Service data mapping configuration for Analytics Connector.
     */
    export interface AnalyticsConnectorFhirToParquetMappingArgs {
        /**
         * Artifact reference for extension schema.
         */
        extensionSchemaReference?: pulumi.Input<string>;
        /**
         * Artifact reference for filter configurations.
         */
        filterConfigurationReference?: pulumi.Input<string>;
        /**
         * Type of data mapping.
         * Expected value is 'fhirToParquet'.
         */
        type: pulumi.Input<"fhirToParquet">;
    }

    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    export interface ServiceManagedIdentityIdentityArgs {
        /**
         * Type of identity being specified, currently SystemAssigned and None are allowed.
         */
        type: pulumi.Input<string | enums.ServiceManagedIdentityType>;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }
