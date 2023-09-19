import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The Data Lake data destination for Analytics Connector.
     */
    export interface AnalyticsConnectorDataLakeDataDestinationResponse {
        /**
         * The name for the Data Lake.
         */
        dataLakeName: string;
        /**
         * Name of data destination.
         */
        name?: string;
        /**
         * Type of data destination.
         * Expected value is 'datalake'.
         */
        type: "datalake";
    }

    /**
     * The FHIR service data source for Analytics Connector.
     */
    export interface AnalyticsConnectorFhirServiceDataSourceResponse {
        /**
         * The kind of FHIR Service.
         */
        kind: string;
        /**
         * Type of data source.
         * Expected value is 'fhirservice'.
         */
        type: "fhirservice";
        /**
         * The URL of FHIR service.
         */
        url: string;
    }

    /**
     * FHIR Service data mapping configuration for Analytics Connector.
     */
    export interface AnalyticsConnectorFhirToParquetMappingResponse {
        /**
         * Artifact reference for extension schema.
         */
        extensionSchemaReference?: string;
        /**
         * Artifact reference for filter configurations.
         */
        filterConfigurationReference?: string;
        /**
         * Type of data mapping.
         * Expected value is 'fhirToParquet'.
         */
        type: "fhirToParquet";
    }

    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    export interface ServiceManagedIdentityResponseIdentity {
        /**
         * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
         */
        tenantId: string;
        /**
         * Type of identity being specified, currently SystemAssigned and None are allowed.
         */
        type: string;
        /**
         * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
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

    /**
     * User assigned identity properties
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The client ID of the assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the assigned identity.
         */
        principalId: string;
    }
