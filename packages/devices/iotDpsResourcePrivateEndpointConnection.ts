import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The private endpoint connection of a provisioning service
 *
 * Uses Azure REST API version 2022-12-12. In version 1.x of the Azure Native provider, it used API version 2020-03-01.
 *
 * Other available API versions: 2023-03-01-preview, 2025-02-01-preview.
 */
export class IotDpsResourcePrivateEndpointConnection extends pulumi.CustomResource {
    /**
     * Get an existing IotDpsResourcePrivateEndpointConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotDpsResourcePrivateEndpointConnection {
        return new IotDpsResourcePrivateEndpointConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devices:IotDpsResourcePrivateEndpointConnection';

    /**
     * Returns true if the given object is an instance of IotDpsResourcePrivateEndpointConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotDpsResourcePrivateEndpointConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotDpsResourcePrivateEndpointConnection.__pulumiType;
    }

    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The properties of a private endpoint connection
     */
    public readonly properties!: pulumi.Output<types.outputs.PrivateEndpointConnectionPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IotDpsResourcePrivateEndpointConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotDpsResourcePrivateEndpointConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["privateEndpointConnectionName"] = args ? args.privateEndpointConnectionName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devices/v20200301:IotDpsResourcePrivateEndpointConnection" }, { type: "azure-native:devices/v20200901preview:IotDpsResourcePrivateEndpointConnection" }, { type: "azure-native:devices/v20211015:IotDpsResourcePrivateEndpointConnection" }, { type: "azure-native:devices/v20220205:IotDpsResourcePrivateEndpointConnection" }, { type: "azure-native:devices/v20221212:IotDpsResourcePrivateEndpointConnection" }, { type: "azure-native:devices/v20230301preview:IotDpsResourcePrivateEndpointConnection" }, { type: "azure-native:devices/v20250201preview:IotDpsResourcePrivateEndpointConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IotDpsResourcePrivateEndpointConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IotDpsResourcePrivateEndpointConnection resource.
 */
export interface IotDpsResourcePrivateEndpointConnectionArgs {
    /**
     * The name of the private endpoint connection
     */
    privateEndpointConnectionName?: pulumi.Input<string>;
    /**
     * The properties of a private endpoint connection
     */
    properties: pulumi.Input<types.inputs.PrivateEndpointConnectionPropertiesArgs>;
    /**
     * The name of the resource group that contains the provisioning service.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the provisioning service.
     */
    resourceName: pulumi.Input<string>;
}