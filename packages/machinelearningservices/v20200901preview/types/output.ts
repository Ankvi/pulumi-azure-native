import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Compute binding definition.
     */
    export interface ComputeBindingResponse {
        /**
         * ID of the compute resource.
         */
        computeId?: string;
        /**
         * Number of nodes.
         */
        nodeCount?: number;
    }

    export interface EncryptionPropertyResponse {
        /**
         * Customer Key vault properties.
         */
        keyVaultProperties: KeyVaultPropertiesResponse;
        /**
         * Indicates whether or not the encryption is enabled for the workspace.
         */
        status: string;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityResponse {
        /**
         * The principal ID of resource identity.
         */
        principalId: string;
        /**
         * The tenant ID of resource.
         */
        tenantId: string;
        /**
         * The identity type.
         */
        type?: string;
        /**
         * The user assigned identities associated with the resource.
         */
        userAssignedIdentities?: {[key: string]: UserAssignedIdentityResponse};
    }

    export interface KeyVaultPropertiesResponse {
        /**
         * For future use - The client id of the identity which will be used to access key vault.
         */
        identityClientId?: string;
        /**
         * Key vault uri to access the encryption key.
         */
        keyIdentifier: string;
        /**
         * The ArmId of the keyVault where the customer owned encryption key is present.
         */
        keyVaultArmId: string;
    }

    /**
     * Represents a category of labels in a labeling job.
     */
    export interface LabelCategoryResponse {
        /**
         * Indicates whether it is allowed to select multiple classes in this category.
         */
        allowMultiSelect?: boolean;
        /**
         * Dictionary of label classes in this category.
         */
        classes: {[key: string]: LabelClassResponse};
        /**
         * Display name of the label category.
         */
        displayName?: string;
    }

    /**
     * Represents a label or a category of labels in a labeling job.
     */
    export interface LabelClassResponse {
        /**
         * Display name of the label class.
         */
        displayName?: string;
        /**
         * Dictionary of subclasses of the label class.
         */
        subclasses?: {[key: string]: LabelClassResponse};
    }

    /**
     * Represents configuration of dataset used in a labeling job.
     */
    export interface LabelingDatasetConfigurationResponse {
        /**
         * Name of the data asset to perform labeling.
         */
        assetName: string;
        /**
         * AML dataset version.
         */
        datasetVersion: string;
        /**
         * Indicates whether to enable incremental dataset refresh.
         */
        enableIncrementalDatasetRefresh?: boolean;
    }

    export interface LabelingJobImagePropertiesResponse {
        /**
         * Annotation type of image labeling tasks.
         */
        annotationType?: string;
        /**
         * Media type of data asset.
         */
        mediaType: string;
    }

    /**
     * Instructions for a labeling job.
     */
    export interface LabelingJobInstructionsResponse {
        /**
         * The link to a page with detailed labeling instructions for labelers.
         */
        uri?: string;
    }

    /**
     * Definition of a labeling job.
     */
    export interface LabelingJobPropertiesResponse {
        /**
         * Created time of the job in UTC timezone.
         */
        createdTimeUtc: string;
        /**
         * Dataset configuration for the job.
         */
        datasetConfiguration: LabelingDatasetConfigurationResponse;
        /**
         * Instructions for the job.
         */
        jobInstructions: LabelingJobInstructionsResponse;
        /**
         * Label categories of the job.
         */
        labelCategories: {[key: string]: LabelCategoryResponse};
        /**
         * Media specific properties in a labeling job.
         */
        labelingJobMediaProperties: LabelingJobImagePropertiesResponse;
        /**
         * Machine learning assisted configuration for the job.
         */
        mlAssistConfiguration?: MLAssistConfigurationResponse;
        /**
         * Progress metrics of the job.
         */
        progressMetrics: ProgressMetricsResponse;
        /**
         * Internal id of the job(Previously called project).
         */
        projectId: string;
        /**
         * The job property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: {[key: string]: string};
        /**
         * Status of the job.
         */
        status: string;
        /**
         * Status messages of the job.
         */
        statusMessages: StatusMessageResponse[];
        /**
         * The job tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: {[key: string]: string};
    }

    /**
     * LinkedService specific properties.
     */
    export interface LinkedServicePropsResponse {
        /**
         * The creation time of the linked service.
         */
        createdTime?: string;
        /**
         * Type of the link target.
         */
        linkType?: string;
        /**
         * ResourceId of the link target of the linked service.
         */
        linkedServiceResourceId: string;
        /**
         * The last modified time of the linked service.
         */
        modifiedTime?: string;
    }

    /**
     * Represents configuration for machine learning assisted features in a labeling job.
     */
    export interface MLAssistConfigurationResponse {
        /**
         * The compute designated for inferencing.
         */
        inferencingComputeBinding: ComputeBindingResponse;
        /**
         * Indicates whether MLAssist feature is enabled.
         */
        mlAssistEnabled?: boolean;
        /**
         * Name prefix to use for machine learning model. For each iteration modelName will be appended with iteration e.g.{modelName}_{i}.
         */
        modelNamePrefix: string;
        /**
         * Prelabel accuracy threshold used in MLAssist feature.
         */
        prelabelAccuracyThreshold?: number;
        /**
         * The compute designated for training.
         */
        trainingComputeBinding: ComputeBindingResponse;
    }

    export interface PasswordResponse {
        name: string;
        value: string;
    }

    /**
     * The Private Endpoint Connection resource.
     */
    export interface PrivateEndpointConnectionResponse {
        /**
         * Specifies the resource ID.
         */
        id: string;
        /**
         * The identity of the resource.
         */
        identity?: IdentityResponse;
        /**
         * Specifies the location of the resource.
         */
        location?: string;
        /**
         * Specifies the name of the resource.
         */
        name: string;
        /**
         * The resource of private end point.
         */
        privateEndpoint?: PrivateEndpointResponse;
        /**
         * A collection of information about the state of the connection between service consumer and provider.
         */
        privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateResponse;
        /**
         * The provisioning state of the private endpoint connection resource.
         */
        provisioningState: string;
        /**
         * The sku of the workspace.
         */
        sku?: SkuResponse;
        /**
         * Contains resource tags defined as key/value pairs.
         */
        tags?: {[key: string]: string};
        /**
         * Specifies the type of the resource.
         */
        type: string;
    }

    /**
     * The Private Endpoint resource.
     */
    export interface PrivateEndpointResponse {
        /**
         * The ARM identifier for Private Endpoint
         */
        id: string;
    }

    /**
     * A collection of information about the state of the connection between service consumer and provider.
     */
    export interface PrivateLinkServiceConnectionStateResponse {
        /**
         * A message indicating if changes on the service provider require any updates on the consumer.
         */
        actionsRequired?: string;
        /**
         * The reason for approval/rejection of the connection.
         */
        description?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * Progress metrics for a labeling job.
     */
    export interface ProgressMetricsResponse {
        /**
         * The completed datapoint count.
         */
        completedDatapointCount: number;
        /**
         * The time of last successful incremental dataset refresh in UTC.
         */
        incrementalDatasetLastRefreshTime: string;
        /**
         * The skipped datapoint count.
         */
        skippedDatapointCount: number;
        /**
         * The total datapoint count.
         */
        totalDatapointCount: number;
    }

    export interface RegistryListCredentialsResultResponse {
        location: string;
        passwords?: PasswordResponse[];
        username: string;
    }

    export interface SharedPrivateLinkResourceResponse {
        /**
         * The private link resource group id.
         */
        groupId?: string;
        /**
         * Unique name of the private link.
         */
        name?: string;
        /**
         * The resource id that private link links to.
         */
        privateLinkResourceId?: string;
        /**
         * Request message.
         */
        requestMessage?: string;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: string;
    }

    /**
     * Sku of the resource
     */
    export interface SkuResponse {
        /**
         * Name of the sku
         */
        name?: string;
        /**
         * Tier of the sku like Basic or Enterprise
         */
        tier?: string;
    }

    /**
     * Active message associated with project.
     */
    export interface StatusMessageResponse {
        /**
         * Service-defined message code.
         */
        code: string;
        /**
         * Time in UTC at which the message was created.
         */
        createdTimeUtc: string;
        /**
         * Severity level of the status message.
         */
        level: string;
        /**
         * A human-readable representation of the message code.
         */
        message: string;
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
     * User Assigned Identity
     */
    export interface UserAssignedIdentityResponse {
        /**
         * The clientId(aka appId) of the user assigned identity.
         */
        clientId: string;
        /**
         * The principal ID of the user assigned identity.
         */
        principalId: string;
        /**
         * The tenant ID of the user assigned identity.
         */
        tenantId: string;
    }
