import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Network related settings
 * Azure REST API version: 2023-04-01. Prior API version in Azure Native 1.x: 2022-09-01-preview
 */
export class NetworkConnection extends pulumi.CustomResource {
    /**
     * Get an existing NetworkConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkConnection {
        return new NetworkConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devcenter:NetworkConnection';

    /**
     * Returns true if the given object is an instance of NetworkConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkConnection.__pulumiType;
    }

    /**
     * AAD Join type.
     */
    public readonly domainJoinType!: pulumi.Output<string>;
    /**
     * Active Directory domain name
     */
    public readonly domainName!: pulumi.Output<string | undefined>;
    /**
     * The password for the account used to join domain
     */
    public readonly domainPassword!: pulumi.Output<string | undefined>;
    /**
     * The username of an Active Directory account (user or service account) that has permissions to create computer objects in Active Directory. Required format: admin@contoso.com.
     */
    public readonly domainUsername!: pulumi.Output<string | undefined>;
    /**
     * Overall health status of the network connection. Health checks are run on creation, update, and periodically to validate the network connection.
     */
    public /*out*/ readonly healthCheckStatus!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The name for resource group where NICs will be placed.
     */
    public readonly networkingResourceGroupName!: pulumi.Output<string | undefined>;
    /**
     * Active Directory domain Organization Unit (OU)
     */
    public readonly organizationUnit!: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The subnet to attach Virtual Machines to
     */
    public readonly subnetId!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.devcenter.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.domainJoinType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainJoinType'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            resourceInputs["domainJoinType"] = args ? args.domainJoinType : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["domainPassword"] = args ? args.domainPassword : undefined;
            resourceInputs["domainUsername"] = args ? args.domainUsername : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkConnectionName"] = args ? args.networkConnectionName : undefined;
            resourceInputs["networkingResourceGroupName"] = args ? args.networkingResourceGroupName : undefined;
            resourceInputs["organizationUnit"] = args ? args.organizationUnit : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["healthCheckStatus"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["domainJoinType"] = undefined /*out*/;
            resourceInputs["domainName"] = undefined /*out*/;
            resourceInputs["domainPassword"] = undefined /*out*/;
            resourceInputs["domainUsername"] = undefined /*out*/;
            resourceInputs["healthCheckStatus"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkingResourceGroupName"] = undefined /*out*/;
            resourceInputs["organizationUnit"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["subnetId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devcenter/v20220801preview:NetworkConnection" }, { type: "azure-native:devcenter/v20220901preview:NetworkConnection" }, { type: "azure-native:devcenter/v20221012preview:NetworkConnection" }, { type: "azure-native:devcenter/v20221111preview:NetworkConnection" }, { type: "azure-native:devcenter/v20230101preview:NetworkConnection" }, { type: "azure-native:devcenter/v20230401:NetworkConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkConnection resource.
 */
export interface NetworkConnectionArgs {
    /**
     * AAD Join type.
     */
    domainJoinType: pulumi.Input<string | types.enums.DomainJoinType>;
    /**
     * Active Directory domain name
     */
    domainName?: pulumi.Input<string>;
    /**
     * The password for the account used to join domain
     */
    domainPassword?: pulumi.Input<string>;
    /**
     * The username of an Active Directory account (user or service account) that has permissions to create computer objects in Active Directory. Required format: admin@contoso.com.
     */
    domainUsername?: pulumi.Input<string>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Name of the Network Connection that can be applied to a Pool.
     */
    networkConnectionName?: pulumi.Input<string>;
    /**
     * The name for resource group where NICs will be placed.
     */
    networkingResourceGroupName?: pulumi.Input<string>;
    /**
     * Active Directory domain Organization Unit (OU)
     */
    organizationUnit?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The subnet to attach Virtual Machines to
     */
    subnetId: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
