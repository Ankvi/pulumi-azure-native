import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource information with extended details.
 * Azure REST API version: 2022-08-31-preview.
 *
 * Other available API versions: 2023-12-10-preview.
 */
export class CloudHsmCluster extends pulumi.CustomResource {
    /**
     * Get an existing CloudHsmCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CloudHsmCluster {
        return new CloudHsmCluster(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hardwaresecuritymodules:CloudHsmCluster';

    /**
     * Returns true if the given object is an instance of CloudHsmCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudHsmCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudHsmCluster.__pulumiType;
    }

    /**
     * The Cloud HSM Cluster's auto-generated Domain Name Label Scope
     */
    public readonly autoGeneratedDomainNameLabelScope!: pulumi.Output<string | undefined>;
    /**
     * An array of Cloud HSM Cluster's HSMs
     */
    public readonly hsms!: pulumi.Output<types.outputs.CloudHsmPropertiesResponse[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of private endpoint connection resources
     */
    public readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[] | undefined>;
    /**
     * The Cloud HSM Cluster's provisioningState
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * The Cloud HSM Cluster public network access
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Security domain properties information for Cloud HSM cluster
     */
    public readonly securityDomain!: pulumi.Output<types.outputs.CloudHsmClusterSecurityDomainPropertiesResponse | undefined>;
    /**
     * SKU details
     */
    public readonly sku!: pulumi.Output<types.outputs.CloudHsmClusterSkuResponse | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CloudHsmCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudHsmClusterArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoGeneratedDomainNameLabelScope"] = args ? args.autoGeneratedDomainNameLabelScope : undefined;
            resourceInputs["cloudHsmClusterName"] = args ? args.cloudHsmClusterName : undefined;
            resourceInputs["hsms"] = args ? args.hsms : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["privateEndpointConnections"] = args ? args.privateEndpointConnections : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["securityDomain"] = args ? args.securityDomain : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["autoGeneratedDomainNameLabelScope"] = undefined /*out*/;
            resourceInputs["hsms"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["securityDomain"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hardwaresecuritymodules/v20220831preview:CloudHsmCluster" }, { type: "azure-native:hardwaresecuritymodules/v20231210preview:CloudHsmCluster" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CloudHsmCluster.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CloudHsmCluster resource.
 */
export interface CloudHsmClusterArgs {
    /**
     * The Cloud HSM Cluster's auto-generated Domain Name Label Scope
     */
    autoGeneratedDomainNameLabelScope?: pulumi.Input<string>;
    /**
     * The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 24 characters in length.
     */
    cloudHsmClusterName?: pulumi.Input<string>;
    /**
     * An array of Cloud HSM Cluster's HSMs
     */
    hsms?: pulumi.Input<pulumi.Input<types.inputs.CloudHsmPropertiesArgs>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * List of private endpoint connection resources
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<types.inputs.PrivateEndpointConnectionArgs>[]>;
    /**
     * The Cloud HSM Cluster's provisioningState
     */
    provisioningState?: pulumi.Input<string | types.enums.ProvisioningState>;
    /**
     * The Cloud HSM Cluster public network access
     */
    publicNetworkAccess?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Security domain properties information for Cloud HSM cluster
     */
    securityDomain?: pulumi.Input<types.inputs.CloudHsmClusterSecurityDomainPropertiesArgs>;
    /**
     * SKU details
     */
    sku?: pulumi.Input<types.inputs.CloudHsmClusterSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
