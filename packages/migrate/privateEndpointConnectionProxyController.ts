import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines Private endpoint proxy resource.
 *
 * Uses Azure REST API version 2023-01-01.
 */
export class PrivateEndpointConnectionProxyController extends pulumi.CustomResource {
    /**
     * Get an existing PrivateEndpointConnectionProxyController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateEndpointConnectionProxyController {
        return new PrivateEndpointConnectionProxyController(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:PrivateEndpointConnectionProxyController';

    /**
     * Returns true if the given object is an instance of PrivateEndpointConnectionProxyController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateEndpointConnectionProxyController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateEndpointConnectionProxyController.__pulumiType;
    }

    public readonly eTag!: pulumi.Output<string | undefined>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Properties of a private endpoint connection proxy.
     */
    public /*out*/ readonly properties!: pulumi.Output<types.outputs.PrivateEndpointConnectionProxyPropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateEndpointConnectionProxyController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateEndpointConnectionProxyControllerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.migrateProjectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'migrateProjectName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["eTag"] = args ? args.eTag : undefined;
            resourceInputs["migrateProjectName"] = args ? args.migrateProjectName : undefined;
            resourceInputs["pecProxyName"] = args ? args.pecProxyName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eTag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20230101:PrivateEndpointConnectionProxyController" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateEndpointConnectionProxyController.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateEndpointConnectionProxyController resource.
 */
export interface PrivateEndpointConnectionProxyControllerArgs {
    eTag?: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    migrateProjectName: pulumi.Input<string>;
    /**
     * Private endpoint proxy name.
     */
    pecProxyName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}