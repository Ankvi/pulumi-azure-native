import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Contains information about an Azure Batch account.
 * Azure REST API version: 2023-05-01. Prior API version in Azure Native 1.x: 2021-01-01.
 *
 * Other available API versions: 2017-01-01, 2022-01-01, 2023-11-01.
 */
export class BatchAccount extends pulumi.CustomResource {
    /**
     * Get an existing BatchAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BatchAccount {
        return new BatchAccount(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:batch:BatchAccount';

    /**
     * Returns true if the given object is an instance of BatchAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BatchAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BatchAccount.__pulumiType;
    }

    /**
     * The account endpoint used to interact with the Batch service.
     */
    public /*out*/ readonly accountEndpoint!: pulumi.Output<string>;
    public /*out*/ readonly activeJobAndJobScheduleQuota!: pulumi.Output<number>;
    /**
     * List of allowed authentication modes for the Batch account that can be used to authenticate with the data plane. This does not affect authentication with the control plane.
     */
    public readonly allowedAuthenticationModes!: pulumi.Output<string[]>;
    /**
     * Contains information about the auto-storage account associated with a Batch account.
     */
    public readonly autoStorage!: pulumi.Output<types.outputs.AutoStoragePropertiesResponse>;
    /**
     * For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
     */
    public /*out*/ readonly dedicatedCoreQuota!: pulumi.Output<number>;
    /**
     * A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
     */
    public /*out*/ readonly dedicatedCoreQuotaPerVMFamily!: pulumi.Output<types.outputs.VirtualMachineFamilyCoreQuotaResponse[]>;
    /**
     * If this flag is true, dedicated core quota is enforced via both the dedicatedCoreQuotaPerVMFamily and dedicatedCoreQuota properties on the account. If this flag is false, dedicated core quota is enforced only via the dedicatedCoreQuota property on the account and does not consider Virtual Machine family.
     */
    public /*out*/ readonly dedicatedCoreQuotaPerVMFamilyEnforced!: pulumi.Output<boolean>;
    /**
     * Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
     */
    public readonly encryption!: pulumi.Output<types.outputs.EncryptionPropertiesResponse>;
    /**
     * The identity of the Batch account.
     */
    public readonly identity!: pulumi.Output<types.outputs.BatchAccountIdentityResponse | undefined>;
    /**
     * Identifies the Azure key vault associated with a Batch account.
     */
    public readonly keyVaultReference!: pulumi.Output<types.outputs.KeyVaultReferenceResponse>;
    /**
     * The location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned.
     */
    public /*out*/ readonly lowPriorityCoreQuota!: pulumi.Output<number>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The network profile only takes effect when publicNetworkAccess is enabled.
     */
    public readonly networkProfile!: pulumi.Output<types.outputs.NetworkProfileResponse | undefined>;
    /**
     * The endpoint used by compute node to connect to the Batch node management service.
     */
    public /*out*/ readonly nodeManagementEndpoint!: pulumi.Output<string>;
    /**
     * The allocation mode for creating pools in the Batch account.
     */
    public readonly poolAllocationMode!: pulumi.Output<string>;
    public /*out*/ readonly poolQuota!: pulumi.Output<number>;
    /**
     * List of private endpoint connections associated with the Batch account
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * The provisioned state of the resource
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * If not specified, the default value is 'enabled'.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * The tags of the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BatchAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BatchAccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["allowedAuthenticationModes"] = args ? args.allowedAuthenticationModes : undefined;
            resourceInputs["autoStorage"] = args ? (args.autoStorage ? pulumi.output(args.autoStorage).apply(types.inputs.autoStorageBasePropertiesArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["encryption"] = args ? args.encryption : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["keyVaultReference"] = args ? args.keyVaultReference : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["poolAllocationMode"] = args ? args.poolAllocationMode : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["accountEndpoint"] = undefined /*out*/;
            resourceInputs["activeJobAndJobScheduleQuota"] = undefined /*out*/;
            resourceInputs["dedicatedCoreQuota"] = undefined /*out*/;
            resourceInputs["dedicatedCoreQuotaPerVMFamily"] = undefined /*out*/;
            resourceInputs["dedicatedCoreQuotaPerVMFamilyEnforced"] = undefined /*out*/;
            resourceInputs["lowPriorityCoreQuota"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["nodeManagementEndpoint"] = undefined /*out*/;
            resourceInputs["poolQuota"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountEndpoint"] = undefined /*out*/;
            resourceInputs["activeJobAndJobScheduleQuota"] = undefined /*out*/;
            resourceInputs["allowedAuthenticationModes"] = undefined /*out*/;
            resourceInputs["autoStorage"] = undefined /*out*/;
            resourceInputs["dedicatedCoreQuota"] = undefined /*out*/;
            resourceInputs["dedicatedCoreQuotaPerVMFamily"] = undefined /*out*/;
            resourceInputs["dedicatedCoreQuotaPerVMFamilyEnforced"] = undefined /*out*/;
            resourceInputs["encryption"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["keyVaultReference"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["lowPriorityCoreQuota"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkProfile"] = undefined /*out*/;
            resourceInputs["nodeManagementEndpoint"] = undefined /*out*/;
            resourceInputs["poolAllocationMode"] = undefined /*out*/;
            resourceInputs["poolQuota"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:batch/v20151201:BatchAccount" }, { type: "azure-native:batch/v20170101:BatchAccount" }, { type: "azure-native:batch/v20170501:BatchAccount" }, { type: "azure-native:batch/v20170901:BatchAccount" }, { type: "azure-native:batch/v20181201:BatchAccount" }, { type: "azure-native:batch/v20190401:BatchAccount" }, { type: "azure-native:batch/v20190801:BatchAccount" }, { type: "azure-native:batch/v20200301:BatchAccount" }, { type: "azure-native:batch/v20200501:BatchAccount" }, { type: "azure-native:batch/v20200901:BatchAccount" }, { type: "azure-native:batch/v20210101:BatchAccount" }, { type: "azure-native:batch/v20210601:BatchAccount" }, { type: "azure-native:batch/v20220101:BatchAccount" }, { type: "azure-native:batch/v20220601:BatchAccount" }, { type: "azure-native:batch/v20221001:BatchAccount" }, { type: "azure-native:batch/v20230501:BatchAccount" }, { type: "azure-native:batch/v20231101:BatchAccount" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BatchAccount.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BatchAccount resource.
 */
export interface BatchAccountArgs {
    /**
     * A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
     */
    accountName?: pulumi.Input<string>;
    /**
     * List of allowed authentication modes for the Batch account that can be used to authenticate with the data plane. This does not affect authentication with the control plane.
     */
    allowedAuthenticationModes?: pulumi.Input<pulumi.Input<types.enums.AuthenticationMode>[]>;
    /**
     * The properties related to the auto-storage account.
     */
    autoStorage?: pulumi.Input<types.inputs.AutoStorageBasePropertiesArgs>;
    /**
     * Configures how customer data is encrypted inside the Batch account. By default, accounts are encrypted using a Microsoft managed key. For additional control, a customer-managed key can be used instead.
     */
    encryption?: pulumi.Input<types.inputs.EncryptionPropertiesArgs>;
    /**
     * The identity of the Batch account.
     */
    identity?: pulumi.Input<types.inputs.BatchAccountIdentityArgs>;
    /**
     * A reference to the Azure key vault associated with the Batch account.
     */
    keyVaultReference?: pulumi.Input<types.inputs.KeyVaultReferenceArgs>;
    /**
     * The region in which to create the account.
     */
    location?: pulumi.Input<string>;
    /**
     * The network profile only takes effect when publicNetworkAccess is enabled.
     */
    networkProfile?: pulumi.Input<types.inputs.NetworkProfileArgs>;
    /**
     * The pool allocation mode also affects how clients may authenticate to the Batch Service API. If the mode is BatchService, clients may authenticate using access keys or Azure Active Directory. If the mode is UserSubscription, clients must use Azure Active Directory. The default is BatchService.
     */
    poolAllocationMode?: pulumi.Input<types.enums.PoolAllocationMode>;
    /**
     * If not specified, the default value is 'enabled'.
     */
    publicNetworkAccess?: pulumi.Input<types.enums.PublicNetworkAccessType>;
    /**
     * The name of the resource group that contains the Batch account.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The user-specified tags associated with the account.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}