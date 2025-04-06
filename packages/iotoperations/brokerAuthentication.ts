import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Instance broker authentication resource
 *
 * Uses Azure REST API version 2024-11-01. In version 2.x of the Azure Native provider, it used API version 2024-07-01-preview.
 *
 * Other available API versions: 2024-07-01-preview, 2024-08-15-preview, 2024-09-15-preview, 2025-04-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native iotoperations [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class BrokerAuthentication extends pulumi.CustomResource {
    /**
     * Get an existing BrokerAuthentication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): BrokerAuthentication {
        return new BrokerAuthentication(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotoperations:BrokerAuthentication';

    /**
     * Returns true if the given object is an instance of BrokerAuthentication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BrokerAuthentication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BrokerAuthentication.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Edge location of the resource.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource-specific properties for this resource.
     */
    public readonly properties!: pulumi.Output<types.outputs.BrokerAuthenticationPropertiesResponse>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a BrokerAuthentication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BrokerAuthenticationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.brokerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'brokerName'");
            }
            if ((!args || args.extendedLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extendedLocation'");
            }
            if ((!args || args.instanceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["authenticationName"] = args ? args.authenticationName : undefined;
            resourceInputs["brokerName"] = args ? args.brokerName : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["instanceName"] = args ? args.instanceName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotoperations/v20240701preview:BrokerAuthentication" }, { type: "azure-native:iotoperations/v20240815preview:BrokerAuthentication" }, { type: "azure-native:iotoperations/v20240915preview:BrokerAuthentication" }, { type: "azure-native:iotoperations/v20241101:BrokerAuthentication" }, { type: "azure-native:iotoperations/v20250401:BrokerAuthentication" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(BrokerAuthentication.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a BrokerAuthentication resource.
 */
export interface BrokerAuthenticationArgs {
    /**
     * Name of Instance broker authentication resource
     */
    authenticationName?: pulumi.Input<string>;
    /**
     * Name of broker.
     */
    brokerName: pulumi.Input<string>;
    /**
     * Edge location of the resource.
     */
    extendedLocation: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * The resource-specific properties for this resource.
     */
    properties?: pulumi.Input<types.inputs.BrokerAuthenticationPropertiesArgs>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}