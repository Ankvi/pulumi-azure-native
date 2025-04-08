import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Resource information with extended details.
 *
 * Uses Azure REST API version 2024-06-30-preview. In version 2.x of the Azure Native provider, it used API version 2022-08-31-preview.
 *
 * Other available API versions: 2022-08-31-preview, 2023-12-10-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native hardwaresecuritymodules [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
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
     * State of security domain activation
     */
    public /*out*/ readonly activationState!: pulumi.Output<string>;
    /**
     * The Cloud HSM Cluster's auto-generated Domain Name Label Scope
     */
    public readonly autoGeneratedDomainNameLabelScope!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * An array of Cloud HSM Cluster's HSMs
     */
    public /*out*/ readonly hsms!: pulumi.Output<types.outputs.CloudHsmPropertiesResponse[]>;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedServiceIdentityResponse | undefined>;
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
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * The Cloud HSM Cluster's provisioningState
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The Cloud HSM Cluster public network access
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * SKU details
     */
    public readonly sku!: pulumi.Output<types.outputs.CloudHsmClusterSkuResponse | undefined>;
    /**
     * Cloud HSM Cluster status message
     */
    public /*out*/ readonly statusMessage!: pulumi.Output<string>;
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
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["publicNetworkAccess"] = args ? args.publicNetworkAccess : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["activationState"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hsms"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["statusMessage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activationState"] = undefined /*out*/;
            resourceInputs["autoGeneratedDomainNameLabelScope"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["hsms"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["statusMessage"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hardwaresecuritymodules/v20220831preview:CloudHsmCluster" }, { type: "azure-native:hardwaresecuritymodules/v20231210preview:CloudHsmCluster" }, { type: "azure-native:hardwaresecuritymodules/v20240630preview:CloudHsmCluster" }] };
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
    autoGeneratedDomainNameLabelScope?: pulumi.Input<string | types.enums.AutoGeneratedDomainNameLabelScope>;
    /**
     * The name of the Cloud HSM Cluster within the specified resource group. Cloud HSM Cluster names must be between 3 and 23 characters in length.
     */
    cloudHsmClusterName?: pulumi.Input<string>;
    /**
     * Managed service identity (system assigned and/or user assigned identities)
     */
    identity?: pulumi.Input<types.inputs.ManagedServiceIdentityArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The Cloud HSM Cluster public network access
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU details
     */
    sku?: pulumi.Input<types.inputs.CloudHsmClusterSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}