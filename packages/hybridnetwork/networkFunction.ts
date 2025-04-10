import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Network function resource response.
 *
 * Uses Azure REST API version 2022-01-01-preview. In version 1.x of the Azure Native provider, it used API version 2020-01-01-preview.
 *
 * Other available API versions: 2023-09-01, 2024-04-15.
 */
export class NetworkFunction extends pulumi.CustomResource {
    /**
     * Get an existing NetworkFunction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkFunction {
        return new NetworkFunction(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:hybridnetwork:NetworkFunction';

    /**
     * Returns true if the given object is an instance of NetworkFunction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkFunction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkFunction.__pulumiType;
    }

    /**
     * The reference to the device resource. Once set, it cannot be updated.
     */
    public readonly device!: pulumi.Output<types.outputs.SubResourceResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource URI of the managed application.
     */
    public /*out*/ readonly managedApplication!: pulumi.Output<types.outputs.SubResourceResponse>;
    /**
     * The parameters for the managed application.
     */
    public readonly managedApplicationParameters!: pulumi.Output<any | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The network function container configurations from the user.
     */
    public readonly networkFunctionContainerConfigurations!: pulumi.Output<any | undefined>;
    /**
     * The network function configurations from the user.
     */
    public readonly networkFunctionUserConfigurations!: pulumi.Output<types.outputs.NetworkFunctionUserConfigurationResponse[] | undefined>;
    /**
     * The provisioning state of the network function resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The service key for the network function resource.
     */
    public /*out*/ readonly serviceKey!: pulumi.Output<string>;
    /**
     * The sku name for the network function. Once set, it cannot be updated.
     */
    public readonly skuName!: pulumi.Output<string | undefined>;
    /**
     * The sku type for the network function.
     */
    public /*out*/ readonly skuType!: pulumi.Output<string>;
    /**
     * The system meta data relating to this resource.
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
     * The vendor name for the network function. Once set, it cannot be updated.
     */
    public readonly vendorName!: pulumi.Output<string | undefined>;
    /**
     * The vendor provisioning state for the network function resource.
     */
    public /*out*/ readonly vendorProvisioningState!: pulumi.Output<string>;

    /**
     * Create a NetworkFunction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkFunctionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedApplicationParameters"] = args ? args.managedApplicationParameters : undefined;
            resourceInputs["networkFunctionContainerConfigurations"] = args ? args.networkFunctionContainerConfigurations : undefined;
            resourceInputs["networkFunctionName"] = args ? args.networkFunctionName : undefined;
            resourceInputs["networkFunctionUserConfigurations"] = args ? args.networkFunctionUserConfigurations : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["skuName"] = args ? args.skuName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vendorName"] = args ? args.vendorName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["managedApplication"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceKey"] = undefined /*out*/;
            resourceInputs["skuType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vendorProvisioningState"] = undefined /*out*/;
        } else {
            resourceInputs["device"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedApplication"] = undefined /*out*/;
            resourceInputs["managedApplicationParameters"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkFunctionContainerConfigurations"] = undefined /*out*/;
            resourceInputs["networkFunctionUserConfigurations"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serviceKey"] = undefined /*out*/;
            resourceInputs["skuName"] = undefined /*out*/;
            resourceInputs["skuType"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vendorName"] = undefined /*out*/;
            resourceInputs["vendorProvisioningState"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:hybridnetwork/v20200101preview:NetworkFunction" }, { type: "azure-native:hybridnetwork/v20210501:NetworkFunction" }, { type: "azure-native:hybridnetwork/v20220101preview:NetworkFunction" }, { type: "azure-native:hybridnetwork/v20230901:NetworkFunction" }, { type: "azure-native:hybridnetwork/v20240415:NetworkFunction" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkFunction.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkFunction resource.
 */
export interface NetworkFunctionArgs {
    /**
     * The reference to the device resource. Once set, it cannot be updated.
     */
    device?: pulumi.Input<types.inputs.SubResourceArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The parameters for the managed application.
     */
    managedApplicationParameters?: any;
    /**
     * The network function container configurations from the user.
     */
    networkFunctionContainerConfigurations?: any;
    /**
     * Resource name for the network function resource.
     */
    networkFunctionName?: pulumi.Input<string>;
    /**
     * The network function configurations from the user.
     */
    networkFunctionUserConfigurations?: pulumi.Input<pulumi.Input<types.inputs.NetworkFunctionUserConfigurationArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku name for the network function. Once set, it cannot be updated.
     */
    skuName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The vendor name for the network function. Once set, it cannot be updated.
     */
    vendorName?: pulumi.Input<string>;
}