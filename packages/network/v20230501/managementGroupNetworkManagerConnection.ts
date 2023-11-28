import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Network Manager Connection resource
 */
export class ManagementGroupNetworkManagerConnection extends pulumi.CustomResource {
    /**
     * Get an existing ManagementGroupNetworkManagerConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagementGroupNetworkManagerConnection {
        return new ManagementGroupNetworkManagerConnection(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20230501:ManagementGroupNetworkManagerConnection';

    /**
     * Returns true if the given object is an instance of ManagementGroupNetworkManagerConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementGroupNetworkManagerConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementGroupNetworkManagerConnection.__pulumiType;
    }

    /**
     * A description of the network manager connection.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Network Manager Id.
     */
    public readonly networkManagerId!: pulumi.Output<string | undefined>;
    /**
     * The system metadata related to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagementGroupNetworkManagerConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementGroupNetworkManagerConnectionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.managementGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'managementGroupId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["managementGroupId"] = args ? args.managementGroupId : undefined;
            resourceInputs["networkManagerConnectionName"] = args ? args.networkManagerConnectionName : undefined;
            resourceInputs["networkManagerId"] = args ? args.networkManagerId : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkManagerId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:ManagementGroupNetworkManagerConnection" }, { type: "azure-native:network/v20220101:ManagementGroupNetworkManagerConnection" }, { type: "azure-native:network/v20220201preview:ManagementGroupNetworkManagerConnection" }, { type: "azure-native:network/v20220401preview:ManagementGroupNetworkManagerConnection" }, { type: "azure-native:network/v20220501:ManagementGroupNetworkManagerConnection" }, { type: "azure-native:network/v20220701:ManagementGroupNetworkManagerConnection" }, { type: "azure-native:network/v20220901:ManagementGroupNetworkManagerConnection" }, { type: "azure-native:network/v20221101:ManagementGroupNetworkManagerConnection" }, { type: "azure-native:network/v20230201:ManagementGroupNetworkManagerConnection" }, { type: "azure-native:network/v20230401:ManagementGroupNetworkManagerConnection" }, { type: "azure-native:network/v20230601:ManagementGroupNetworkManagerConnection" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagementGroupNetworkManagerConnection.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagementGroupNetworkManagerConnection resource.
 */
export interface ManagementGroupNetworkManagerConnectionArgs {
    /**
     * A description of the network manager connection.
     */
    description?: pulumi.Input<string>;
    /**
     * The management group Id which uniquely identify the Microsoft Azure management group.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * Name for the network manager connection.
     */
    networkManagerConnectionName?: pulumi.Input<string>;
    /**
     * Network Manager Id.
     */
    networkManagerId?: pulumi.Input<string>;
}
