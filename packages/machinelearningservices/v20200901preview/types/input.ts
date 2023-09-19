import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Compute binding definition.
     */
    export interface ComputeBindingArgs {
        /**
         * ID of the compute resource.
         */
        computeId?: pulumi.Input<string>;
        /**
         * Number of nodes.
         */
        nodeCount?: pulumi.Input<number>;
    }

    export interface EncryptionPropertyArgs {
        /**
         * Customer Key vault properties.
         */
        keyVaultProperties: pulumi.Input<KeyVaultPropertiesArgs>;
        /**
         * Indicates whether or not the encryption is enabled for the workspace.
         */
        status: pulumi.Input<string | enums.EncryptionStatus>;
    }

    /**
     * Identity for the resource.
     */
    export interface IdentityArgs {
        /**
         * The identity type.
         */
        type?: pulumi.Input<enums.ResourceIdentityType>;
        /**
         * The user assigned identities associated with the resource.
         */
        userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface KeyVaultPropertiesArgs {
        /**
         * For future use - The client id of the identity which will be used to access key vault.
         */
        identityClientId?: pulumi.Input<string>;
        /**
         * Key vault uri to access the encryption key.
         */
        keyIdentifier: pulumi.Input<string>;
        /**
         * The ArmId of the keyVault where the customer owned encryption key is present.
         */
        keyVaultArmId: pulumi.Input<string>;
    }

    /**
     * Represents a category of labels in a labeling job.
     */
    export interface LabelCategoryArgs {
        /**
         * Indicates whether it is allowed to select multiple classes in this category.
         */
        allowMultiSelect?: pulumi.Input<boolean>;
        /**
         * Dictionary of label classes in this category.
         */
        classes: pulumi.Input<{[key: string]: pulumi.Input<LabelClassArgs>}>;
        /**
         * Display name of the label category.
         */
        displayName?: pulumi.Input<string>;
    }

    /**
     * Represents a label or a category of labels in a labeling job.
     */
    export interface LabelClassArgs {
        /**
         * Display name of the label class.
         */
        displayName?: pulumi.Input<string>;
        /**
         * Dictionary of subclasses of the label class.
         */
        subclasses?: pulumi.Input<{[key: string]: pulumi.Input<LabelClassArgs>}>;
    }

    /**
     * Represents configuration of dataset used in a labeling job.
     */
    export interface LabelingDatasetConfigurationArgs {
        /**
         * Name of the data asset to perform labeling.
         */
        assetName: pulumi.Input<string>;
        /**
         * AML dataset version.
         */
        datasetVersion: pulumi.Input<string>;
        /**
         * Indicates whether to enable incremental dataset refresh.
         */
        enableIncrementalDatasetRefresh?: pulumi.Input<boolean>;
    }

    export interface LabelingJobImagePropertiesArgs {
        /**
         * Annotation type of image labeling tasks.
         */
        annotationType?: pulumi.Input<string | enums.ImageAnnotationType>;
        /**
         * Media type of data asset.
         */
        mediaType: pulumi.Input<string | enums.MediaType>;
    }

    /**
     * Instructions for a labeling job.
     */
    export interface LabelingJobInstructionsArgs {
        /**
         * The link to a page with detailed labeling instructions for labelers.
         */
        uri?: pulumi.Input<string>;
    }

    /**
     * Definition of a labeling job.
     */
    export interface LabelingJobPropertiesArgs {
        /**
         * Dataset configuration for the job.
         */
        datasetConfiguration: pulumi.Input<LabelingDatasetConfigurationArgs>;
        /**
         * Instructions for the job.
         */
        jobInstructions: pulumi.Input<LabelingJobInstructionsArgs>;
        /**
         * Label categories of the job.
         */
        labelCategories: pulumi.Input<{[key: string]: pulumi.Input<LabelCategoryArgs>}>;
        /**
         * Media specific properties in a labeling job.
         */
        labelingJobMediaProperties: pulumi.Input<LabelingJobImagePropertiesArgs>;
        /**
         * Machine learning assisted configuration for the job.
         */
        mlAssistConfiguration?: pulumi.Input<MLAssistConfigurationArgs>;
        /**
         * The job property dictionary. Properties can be added, but not removed or altered.
         */
        properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * The job tag dictionary. Tags can be added, removed, and updated.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }

    /**
     * LinkedService specific properties.
     */
    export interface LinkedServicePropsArgs {
        /**
         * The creation time of the linked service.
         */
        createdTime?: pulumi.Input<string>;
        /**
         * Type of the link target.
         */
        linkType?: pulumi.Input<enums.LinkedServiceLinkType>;
        /**
         * ResourceId of the link target of the linked service.
         */
        linkedServiceResourceId: pulumi.Input<string>;
        /**
         * The last modified time of the linked service.
         */
        modifiedTime?: pulumi.Input<string>;
    }

    /**
     * Represents configuration for machine learning assisted features in a labeling job.
     */
    export interface MLAssistConfigurationArgs {
        /**
         * The compute designated for inferencing.
         */
        inferencingComputeBinding: pulumi.Input<ComputeBindingArgs>;
        /**
         * Indicates whether MLAssist feature is enabled.
         */
        mlAssistEnabled?: pulumi.Input<boolean>;
        /**
         * Name prefix to use for machine learning model. For each iteration modelName will be appended with iteration e.g.{modelName}_{i}.
         */
        modelNamePrefix: pulumi.Input<string>;
        /**
         * Prelabel accuracy threshold used in MLAssist feature.
         */
        prelabelAccuracyThreshold?: pulumi.Input<number>;
        /**
         * The compute designated for training.
         */
        trainingComputeBinding: pulumi.Input<ComputeBindingArgs>;
    }

    export interface SharedPrivateLinkResourceArgs {
        /**
         * The private link resource group id.
         */
        groupId?: pulumi.Input<string>;
        /**
         * Unique name of the private link.
         */
        name?: pulumi.Input<string>;
        /**
         * The resource id that private link links to.
         */
        privateLinkResourceId?: pulumi.Input<string>;
        /**
         * Request message.
         */
        requestMessage?: pulumi.Input<string>;
        /**
         * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
         */
        status?: pulumi.Input<string | enums.PrivateEndpointServiceConnectionStatus>;
    }

    /**
     * Sku of the resource
     */
    export interface SkuArgs {
        /**
         * Name of the sku
         */
        name?: pulumi.Input<string>;
        /**
         * Tier of the sku like Basic or Enterprise
         */
        tier?: pulumi.Input<string>;
    }
