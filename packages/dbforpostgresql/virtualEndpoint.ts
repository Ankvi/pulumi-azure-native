import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Represents a virtual endpoint for a server.
 * Azure REST API version: 2023-06-01-preview.
 */
export class VirtualEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing VirtualEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualEndpoint {
        return new VirtualEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:dbforpostgresql:VirtualEndpoint';

    /**
     * Returns true if the given object is an instance of VirtualEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualEndpoint.__pulumiType;
    }

    /**
     * The endpoint type for the virtual endpoint.
     */
    public readonly endpointType!: pulumi.Output<string | undefined>;
    /**
     * List of members for a virtual endpoint
     */
    public readonly members!: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List of virtual endpoints for a server
     */
    public /*out*/ readonly virtualEndpoints!: pulumi.Output<string[]>;

    /**
     * Create a VirtualEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["endpointType"] = args ? args.endpointType : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["virtualEndpointName"] = args ? args.virtualEndpointName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualEndpoints"] = undefined /*out*/;
        } else {
            resourceInputs["endpointType"] = undefined /*out*/;
            resourceInputs["members"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["virtualEndpoints"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:dbforpostgresql/v20230601preview:VirtualEndpoint" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(VirtualEndpoint.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualEndpoint resource.
 */
export interface VirtualEndpointArgs {
    /**
     * The endpoint type for the virtual endpoint.
     */
    endpointType?: pulumi.Input<string | types.enums.VirtualEndpointType>;
    /**
     * List of members for a virtual endpoint
     */
    members?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The name of the virtual endpoint.
     */
    virtualEndpointName?: pulumi.Input<string>;
}