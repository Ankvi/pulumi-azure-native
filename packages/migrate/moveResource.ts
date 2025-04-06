import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Defines the move resource.
 *
 * Uses Azure REST API version 2023-08-01. In version 2.x of the Azure Native provider, it used API version 2022-08-01.
 *
 * Other available API versions: 2019-10-01-preview, 2021-01-01, 2021-08-01, 2022-08-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native migrate [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class MoveResource extends pulumi.CustomResource {
    /**
     * Get an existing MoveResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MoveResource {
        return new MoveResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:migrate:MoveResource';

    /**
     * Returns true if the given object is an instance of MoveResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MoveResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MoveResource.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Defines the move resource properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.MoveResourcePropertiesResponse>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a MoveResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MoveResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.moveCollectionName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'moveCollectionName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["moveCollectionName"] = args ? args.moveCollectionName : undefined;
            resourceInputs["moveResourceName"] = args ? args.moveResourceName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:migrate/v20191001preview:MoveResource" }, { type: "azure-native:migrate/v20210101:MoveResource" }, { type: "azure-native:migrate/v20210801:MoveResource" }, { type: "azure-native:migrate/v20220801:MoveResource" }, { type: "azure-native:migrate/v20230801:MoveResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(MoveResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a MoveResource resource.
 */
export interface MoveResourceArgs {
    /**
     * The Move Collection Name.
     */
    moveCollectionName: pulumi.Input<string>;
    /**
     * The Move Resource Name.
     */
    moveResourceName?: pulumi.Input<string>;
    /**
     * Defines the move resource properties.
     */
    properties?: pulumi.Input<types.inputs.MoveResourcePropertiesArgs>;
    /**
     * The Resource Group Name.
     */
    resourceGroupName: pulumi.Input<string>;
}