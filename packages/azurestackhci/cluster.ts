import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Cluster details.
 * Azure REST API version: 2023-03-01. Prior API version in Azure Native 1.x: 2020-10-01.
 *
 * Other available API versions: 2022-01-01, 2022-09-01, 2022-12-15-preview, 2023-06-01, 2023-08-01, 2023-08-01-preview, 2023-11-01-preview, 2024-01-01, 2024-02-15-preview, 2024-04-01.
 */
export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestackhci:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    /**
     * Object id of cluster AAD identity.
     */
    public readonly aadApplicationObjectId!: pulumi.Output<string | undefined>;
    /**
     * App id of cluster AAD identity.
     */
    public readonly aadClientId!: pulumi.Output<string | undefined>;
    /**
     * Id of cluster identity service principal.
     */
    public readonly aadServicePrincipalObjectId!: pulumi.Output<string | undefined>;
    /**
     * Tenant id of cluster AAD identity.
     */
    public readonly aadTenantId!: pulumi.Output<string | undefined>;
    /**
     * Type of billing applied to the resource.
     */
    public /*out*/ readonly billingModel!: pulumi.Output<string>;
    /**
     * Unique, immutable resource id.
     */
    public /*out*/ readonly cloudId!: pulumi.Output<string>;
    /**
     * Endpoint configured for management from the Azure portal.
     */
    public readonly cloudManagementEndpoint!: pulumi.Output<string | undefined>;
    /**
     * Desired properties of the cluster.
     */
    public readonly desiredProperties!: pulumi.Output<types.outputs.ClusterDesiredPropertiesResponse | undefined>;
    /**
     * Most recent billing meter timestamp.
     */
    public /*out*/ readonly lastBillingTimestamp!: pulumi.Output<string>;
    /**
     * Most recent cluster sync timestamp.
     */
    public /*out*/ readonly lastSyncTimestamp!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    public /*out*/ readonly principalId!: pulumi.Output<string>;
    /**
     * Provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * First cluster sync timestamp.
     */
    public /*out*/ readonly registrationTimestamp!: pulumi.Output<string>;
    /**
     * Properties reported by cluster agent.
     */
    public /*out*/ readonly reportedProperties!: pulumi.Output<types.outputs.ClusterReportedPropertiesResponse>;
    /**
     * Object id of RP Service Principal
     */
    public /*out*/ readonly resourceProviderObjectId!: pulumi.Output<string>;
    /**
     * Region specific DataPath Endpoint of the cluster.
     */
    public /*out*/ readonly serviceEndpoint!: pulumi.Output<string>;
    /**
     * Software Assurance properties of the cluster.
     */
    public readonly softwareAssuranceProperties!: pulumi.Output<types.outputs.SoftwareAssurancePropertiesResponse | undefined>;
    /**
     * Status of the cluster agent.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
     */
    public /*out*/ readonly tenantId!: pulumi.Output<string>;
    /**
     * Number of days remaining in the trial period.
     */
    public /*out*/ readonly trialDaysRemaining!: pulumi.Output<number>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    public readonly userAssignedIdentities!: pulumi.Output<{[key: string]: types.outputs.UserAssignedIdentityResponse} | undefined>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["aadApplicationObjectId"] = args ? args.aadApplicationObjectId : undefined;
            resourceInputs["aadClientId"] = args ? args.aadClientId : undefined;
            resourceInputs["aadServicePrincipalObjectId"] = args ? args.aadServicePrincipalObjectId : undefined;
            resourceInputs["aadTenantId"] = args ? args.aadTenantId : undefined;
            resourceInputs["cloudManagementEndpoint"] = args ? args.cloudManagementEndpoint : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["desiredProperties"] = args ? args.desiredProperties : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["softwareAssuranceProperties"] = args ? args.softwareAssuranceProperties : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["userAssignedIdentities"] = args ? args.userAssignedIdentities : undefined;
            resourceInputs["billingModel"] = undefined /*out*/;
            resourceInputs["cloudId"] = undefined /*out*/;
            resourceInputs["lastBillingTimestamp"] = undefined /*out*/;
            resourceInputs["lastSyncTimestamp"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["registrationTimestamp"] = undefined /*out*/;
            resourceInputs["reportedProperties"] = undefined /*out*/;
            resourceInputs["resourceProviderObjectId"] = undefined /*out*/;
            resourceInputs["serviceEndpoint"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["trialDaysRemaining"] = undefined /*out*/;
        } else {
            resourceInputs["aadApplicationObjectId"] = undefined /*out*/;
            resourceInputs["aadClientId"] = undefined /*out*/;
            resourceInputs["aadServicePrincipalObjectId"] = undefined /*out*/;
            resourceInputs["aadTenantId"] = undefined /*out*/;
            resourceInputs["billingModel"] = undefined /*out*/;
            resourceInputs["cloudId"] = undefined /*out*/;
            resourceInputs["cloudManagementEndpoint"] = undefined /*out*/;
            resourceInputs["desiredProperties"] = undefined /*out*/;
            resourceInputs["lastBillingTimestamp"] = undefined /*out*/;
            resourceInputs["lastSyncTimestamp"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["principalId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["registrationTimestamp"] = undefined /*out*/;
            resourceInputs["reportedProperties"] = undefined /*out*/;
            resourceInputs["resourceProviderObjectId"] = undefined /*out*/;
            resourceInputs["serviceEndpoint"] = undefined /*out*/;
            resourceInputs["softwareAssuranceProperties"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["tenantId"] = undefined /*out*/;
            resourceInputs["trialDaysRemaining"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userAssignedIdentities"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestackhci/v20200301preview:Cluster" }, { type: "azure-native:azurestackhci/v20201001:Cluster" }, { type: "azure-native:azurestackhci/v20210101preview:Cluster" }, { type: "azure-native:azurestackhci/v20210901:Cluster" }, { type: "azure-native:azurestackhci/v20210901preview:Cluster" }, { type: "azure-native:azurestackhci/v20220101:Cluster" }, { type: "azure-native:azurestackhci/v20220301:Cluster" }, { type: "azure-native:azurestackhci/v20220501:Cluster" }, { type: "azure-native:azurestackhci/v20220901:Cluster" }, { type: "azure-native:azurestackhci/v20221001:Cluster" }, { type: "azure-native:azurestackhci/v20221201:Cluster" }, { type: "azure-native:azurestackhci/v20221215preview:Cluster" }, { type: "azure-native:azurestackhci/v20230201:Cluster" }, { type: "azure-native:azurestackhci/v20230301:Cluster" }, { type: "azure-native:azurestackhci/v20230601:Cluster" }, { type: "azure-native:azurestackhci/v20230801:Cluster" }, { type: "azure-native:azurestackhci/v20230801preview:Cluster" }, { type: "azure-native:azurestackhci/v20231101preview:Cluster" }, { type: "azure-native:azurestackhci/v20240101:Cluster" }, { type: "azure-native:azurestackhci/v20240215preview:Cluster" }, { type: "azure-native:azurestackhci/v20240401:Cluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Cluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * Object id of cluster AAD identity.
     */
    aadApplicationObjectId?: pulumi.Input<string>;
    /**
     * App id of cluster AAD identity.
     */
    aadClientId?: pulumi.Input<string>;
    /**
     * Id of cluster identity service principal.
     */
    aadServicePrincipalObjectId?: pulumi.Input<string>;
    /**
     * Tenant id of cluster AAD identity.
     */
    aadTenantId?: pulumi.Input<string>;
    /**
     * Endpoint configured for management from the Azure portal.
     */
    cloudManagementEndpoint?: pulumi.Input<string>;
    /**
     * The name of the cluster.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Desired properties of the cluster.
     */
    desiredProperties?: pulumi.Input<types.inputs.ClusterDesiredPropertiesArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Software Assurance properties of the cluster.
     */
    softwareAssuranceProperties?: pulumi.Input<types.inputs.SoftwareAssurancePropertiesArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
     */
    type: pulumi.Input<string | types.enums.ManagedServiceIdentityType>;
    /**
     * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
     */
    userAssignedIdentities?: pulumi.Input<pulumi.Input<string>[]>;
}